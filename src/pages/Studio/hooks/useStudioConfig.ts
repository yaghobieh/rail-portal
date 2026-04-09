import { useState, useCallback, useMemo } from 'react';
import type { StudioConfig } from '../Studio.types';
import { DEFAULT_CONFIG } from '../Studio.const';

/**
 * Manages the studio carousel configuration state,
 * including individual field updates, preset application,
 * reset, and generated code output.
 */
export function useStudioConfig() {
  const [config, setConfig] = useState<StudioConfig>({ ...DEFAULT_CONFIG });

  const set = useCallback(<K extends keyof StudioConfig>(key: K, value: StudioConfig[K]) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }, []);

  const applyPreset = useCallback((partial: Partial<StudioConfig>) => {
    setConfig({ ...DEFAULT_CONFIG, ...partial });
  }, []);

  const reset = useCallback(() => {
    setConfig({ ...DEFAULT_CONFIG });
  }, []);

  const generatedCode = useMemo(() => {
    const lines: string[] = [];
    const modules: string[] = [];
    const props: string[] = [];

    if (config.navigation) modules.push('Navigation');
    if (config.pagination !== 'none') modules.push('Pagination');
    if (config.scrollbar) modules.push('Scrollbar');
    if (config.autoplay) modules.push('Autoplay');
    if (config.keyboard) modules.push('Keyboard');
    if (config.mousewheel) modules.push('Mousewheel');
    if (config.freeMode) modules.push('FreeMode');
    if (config.storyMode) modules.push('StoryMode');
    if (config.effect !== 'slide') {
      const effectModule = `Effect${config.effect.charAt(0).toUpperCase()}${config.effect.slice(1)}`;
      modules.push(effectModule);
    }

    lines.push(`import { Rail, RailSlide } from '@forgedevstack/rail';`);
    if (modules.length > 0) {
      lines.push(`import { ${modules.join(', ')} } from '@forgedevstack/rail/modules';`);
    }
    lines.push(`import '@forgedevstack/rail/styles.css';`);
    lines.push('');

    if (modules.length > 0) props.push(`  modules={[${modules.join(', ')}]}`);
    if (config.slidesPerView !== 1) props.push(`  slidesPerView={${config.slidesPerView}}`);
    if (config.spaceBetween !== 0) props.push(`  spaceBetween={${config.spaceBetween}}`);
    if (config.speed !== 300) props.push(`  speed={${config.speed}}`);
    if (config.initialSlide !== 0) props.push(`  initialSlide={${config.initialSlide}}`);
    if (config.slidesPerGroup !== 1) props.push(`  slidesPerGroup={${config.slidesPerGroup}}`);
    if (config.loop) props.push(`  loop`);
    if (config.centeredSlides) props.push(`  centeredSlides`);
    if (config.grabCursor) props.push(`  grabCursor`);
    if (config.autoHeight) props.push(`  autoHeight`);
    if (config.direction !== 'horizontal') props.push(`  direction="${config.direction}"`);
    if (config.effect !== 'slide') props.push(`  effect="${config.effect}"`);
    if (config.navigation) props.push(`  navigation`);
    if (config.pagination !== 'none') {
      if (config.pagination === 'bullets') {
        props.push(`  pagination={{ clickable: true }}`);
      } else {
        props.push(`  pagination={{ type: '${config.pagination}' }}`);
      }
    }
    if (config.scrollbar) props.push(`  scrollbar={{ draggable: true }}`);
    if (config.autoplay) {
      props.push(`  autoplay={{ delay: ${config.autoplayDelay}, pauseOnMouseEnter: ${config.autoplayPauseOnHover} }}`);
    }
    if (config.keyboard) props.push(`  keyboard`);
    if (config.mousewheel) props.push(`  mousewheel`);
    if (config.freeMode) props.push(`  freeMode`);
    if (!config.allowTouchMove) props.push(`  allowTouchMove={false}`);
    if (config.rtl) props.push(`  dir="rtl"`);
    if (!config.watchOverflow) props.push(`  watchOverflow={false}`);
    if (config.resistance && config.resistanceRatio !== 0.85) {
      props.push(`  resistanceRatio={${config.resistanceRatio}}`);
    }
    if (!config.resistance) props.push(`  resistance={false}`);
    if (config.storyMode) {
      const storyParts: string[] = [`enabled: true`, `duration: ${config.storyDuration}`];
      if (config.storyShowProgress) storyParts.push(`showProgress: true`);
      storyParts.push(`tapToNavigate: true`, `pauseOnHold: true`, `disableSwipe: true`);
      props.push(`  storyMode={{ ${storyParts.join(', ')} }}`);
      props.push(`  allowTouchMove={false}`);
    }

    lines.push(`<Rail`);
    lines.push(...props);
    lines.push(`>`);
    for (let i = 1; i <= config.slideCount; i++) {
      lines.push(`  <RailSlide>Slide ${i}</RailSlide>`);
    }
    lines.push(`</Rail>`);

    return lines.join('\n');
  }, [config]);

  return {
    config,
    set,
    applyPreset,
    reset,
    generatedCode,
  };
}
