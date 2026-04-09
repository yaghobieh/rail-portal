import { FC, useMemo, useRef, useCallback } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import type { RailRef, RailModuleFactory } from '@forgedevstack/rail';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Keyboard,
  Mousewheel,
  FreeMode,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
  EffectCards,
  EffectCreative,
  EffectTinder,
  EffectStack,
  EffectSlicer,
  EffectGL,
  StoryMode,
} from '@forgedevstack/rail/modules';
import type { StudioConfig } from '../Studio.types';
import {
  SLIDE_GRADIENTS,
  PREVIEW_SLIDE_HEIGHT,
  STORY_PREVIEW_HEIGHT,
  STORY_PREVIEW_WIDTH,
  STORY_SLIDE_TITLES,
  STORY_SLIDE_SUBTITLES,
} from '../Studio.const';

interface StudioPreviewProps {
  config: StudioConfig;
}

const EFFECT_MODULE_MAP: Record<string, RailModuleFactory> = {
  fade: EffectFade,
  cube: EffectCube,
  flip: EffectFlip,
  coverflow: EffectCoverflow,
  cards: EffectCards,
  creative: EffectCreative,
  tinder: EffectTinder,
  stack: EffectStack,
  slicer: EffectSlicer,
  gl: EffectGL,
};

const CUSTOM_EFFECT_NAMES = ['tinder', 'stack', 'slicer', 'gl'];

/**
 * Live carousel preview using the real Rail component and modules.
 * Remounts when the config shape changes to apply new options.
 */
export const StudioPreview: FC<StudioPreviewProps> = ({ config }) => {
  const railRef = useRef<RailRef>(null);

  const modules = useMemo(() => {
    const mods: RailModuleFactory[] = [];
    if (config.navigation) mods.push(Navigation);
    if (config.pagination !== 'none') mods.push(Pagination);
    if (config.scrollbar) mods.push(Scrollbar);
    if (config.autoplay) mods.push(Autoplay);
    if (config.keyboard) mods.push(Keyboard);
    if (config.mousewheel) mods.push(Mousewheel);
    if (config.freeMode) mods.push(FreeMode);
    if (config.storyMode) mods.push(StoryMode);
    const effectMod = EFFECT_MODULE_MAP[config.effect];
    if (effectMod) mods.push(effectMod);
    return mods;
  }, [config.navigation, config.pagination, config.scrollbar, config.autoplay, config.keyboard, config.mousewheel, config.freeMode, config.storyMode, config.effect]);

  const configKey = useMemo(() => JSON.stringify(config), [config]);

  const handleRail = useCallback(() => {}, []);

  const paginationConfig = config.pagination !== 'none'
    ? config.pagination === 'bullets'
      ? { clickable: true }
      : { type: config.pagination as 'fraction' | 'progressbar' }
    : false;

  const autoplayConfig = config.autoplay
    ? { delay: config.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: config.autoplayPauseOnHover }
    : false;

  const resolvedEffect = (CUSTOM_EFFECT_NAMES.includes(config.effect) ? 'creative' : config.effect) as import('@forgedevstack/rail').RailEffect;

  const navigationConfig = config.navigation
    ? {
        arrowStyle: config.navArrowStyle,
        arrowIcon: config.navArrowIcon,
        arrowColor: config.navArrowColor,
        arrowSize: config.navArrowSize,
        hideOnClick: config.hideArrowOnClick,
      }
    : false;

  const railProps = {
    key: configKey,
    ref: railRef,
    modules,
    slidesPerView: config.slidesPerView,
    spaceBetween: config.spaceBetween,
    speed: config.speed,
    loop: config.loop,
    centeredSlides: config.centeredSlides,
    grabCursor: config.grabCursor,
    autoHeight: config.autoHeight,
    direction: config.direction,
    effect: resolvedEffect,
    initialSlide: config.initialSlide,
    slidesPerGroup: config.slidesPerGroup,
    allowTouchMove: config.storyMode ? false : config.allowTouchMove,
    watchOverflow: config.watchOverflow,
    resistance: config.resistance,
    resistanceRatio: config.resistanceRatio,
    navigation: navigationConfig,
    pagination: paginationConfig,
    scrollbar: config.scrollbar ? { draggable: true } : false,
    autoplay: autoplayConfig,
    keyboard: config.keyboard,
    mousewheel: config.mousewheel,
    freeMode: config.freeMode,
    storyMode: config.storyMode ? {
      enabled: true,
      duration: config.storyDuration,
      showProgress: config.storyShowProgress,
      tapToNavigate: true,
      pauseOnHold: true,
      pauseOnTap: false,
      disableSwipe: true,
      controlVisibility: 'hover' as const,
    } : undefined,
    onRail: handleRail,
  };

  const renderSlideContent = (i: number, isStory: boolean) => (
    <div
      className="w-full h-full flex flex-col items-center justify-center text-white text-center px-6 select-none gap-3"
      style={{ background: SLIDE_GRADIENTS[i % SLIDE_GRADIENTS.length] }}
    >
      {isStory ? (
        <>
          <h4 className="text-lg font-bold mb-1">
            {STORY_SLIDE_TITLES[i % STORY_SLIDE_TITLES.length]}
          </h4>
          <p className="text-xs text-white/70">
            {STORY_SLIDE_SUBTITLES[i % STORY_SLIDE_SUBTITLES.length]}
          </p>
        </>
      ) : (
        <span className="text-xl font-bold">Slide {i + 1}</span>
      )}
    </div>
  );

  if (config.storyMode) {
    return (
      <div className="flex justify-center py-4">
        <div
          className="relative rounded-[2rem] overflow-hidden shadow-2xl"
          style={{
            width: STORY_PREVIEW_WIDTH,
            height: STORY_PREVIEW_HEIGHT,
            border: '3px solid rgba(255,255,255,0.1)',
            boxShadow: '0 0 60px rgba(6,182,212,0.15), 0 25px 50px rgba(0,0,0,0.5)',
          }}
        >
          <Rail {...railProps} direction="horizontal" style={{ height: '100%' }} className="h-full">
            {Array.from({ length: config.slideCount }).map((_, i) => (
              <RailSlide key={i}>{renderSlideContent(i, true)}</RailSlide>
            ))}
          </Rail>
        </div>
      </div>
    );
  }

  const heightStyle = config.direction === 'vertical' ? PREVIEW_SLIDE_HEIGHT * 1.5 : PREVIEW_SLIDE_HEIGHT;

  return (
    <div style={{ direction: config.rtl ? 'rtl' : 'ltr' }}>
      <Rail {...railProps} style={{ height: heightStyle }} className="rounded-xl">
        {Array.from({ length: config.slideCount }).map((_, i) => (
          <RailSlide key={i}>
            <div className="rounded-xl overflow-hidden h-full">
              {renderSlideContent(i, false)}
            </div>
          </RailSlide>
        ))}
      </Rail>
    </div>
  );
};
