import { FC, useCallback } from 'react';
import { BearIcons, Button, Flex } from '@forgedevstack/bear';
import type { StudioConfig, EffectType, PaginationType, DirectionType, StudioPreset, StudioControlsProps, NavArrowIconType } from '../Studio.types';
import {
  EFFECT_OPTIONS,
  PAGINATION_OPTIONS,
  PRESETS,
  PRESET_ICON_MAP,
  MIN_SLIDES,
  MAX_SLIDES,
  MIN_SLIDES_PER_VIEW,
  MAX_SLIDES_PER_VIEW,
  MIN_SPACE_BETWEEN,
  MAX_SPACE_BETWEEN,
  MIN_SPEED,
  MAX_SPEED,
  SPEED_STEP,
  MIN_AUTOPLAY_DELAY,
  MAX_AUTOPLAY_DELAY,
  AUTOPLAY_DELAY_STEP,
  MIN_SLIDES_PER_GROUP,
  MAX_SLIDES_PER_GROUP,
  MIN_RESISTANCE_RATIO,
  MAX_RESISTANCE_RATIO,
  RESISTANCE_RATIO_STEP,
  MIN_STORY_DURATION,
  MAX_STORY_DURATION,
  STORY_DURATION_STEP,
  NAV_ARROW_STYLE_OPTIONS,
  NAV_ARROW_ICON_OPTIONS,
  MIN_ARROW_SIZE,
  MAX_ARROW_SIZE,
  ARROW_COLOR_OPTIONS,
  DIRECTION_OPTIONS,
} from '../Studio.const';
import { ToggleRow } from './ToggleRow';
import { RangeRow } from './RangeRow';
import { SelectRow } from './SelectRow';
import { SectionTitle } from './SectionTitle';

/**
 * Configuration panel for the Studio. Contains presets, layout sliders,
 * effect/pagination selects, module toggles, and autoplay controls.
 */
export const StudioControls: FC<StudioControlsProps> = ({
  config,
  set,
  applyPreset,
  reset,
  isDark,
  cardBg,
  cardBorder,
  mutedText,
}) => {
  const handlePreset = useCallback((preset: StudioPreset) => {
    applyPreset(preset.config);
  }, [applyPreset]);

  const sectionClass = 'py-4 border-b';
  const sectionBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  return (
    <div className="space-y-0">
      <div className={sectionClass} style={{ borderColor: sectionBorder }}>
        <SectionTitle color={mutedText}>Presets</SectionTitle>
        <div className="grid grid-cols-2 gap-2">
          {PRESETS.map((preset) => {
            const Icon = PRESET_ICON_MAP[preset.icon];
            return (
              <Button
                key={preset.name}
                variant="outlined"
                size="sm"
                onClick={() => handlePreset(preset)}
                leftIcon={Icon ? <Icon size="xs" /> : undefined}
              >
                {preset.name}
              </Button>
            );
          })}
        </div>
      </div>

      <div className={sectionClass} style={{ borderColor: sectionBorder }}>
        <SectionTitle color={mutedText}>Layout</SectionTitle>
        <RangeRow label="Slides" value={config.slideCount} min={MIN_SLIDES} max={MAX_SLIDES} onChange={(v) => set('slideCount', v)} />
        <RangeRow label="Per View" value={config.slidesPerView} min={MIN_SLIDES_PER_VIEW} max={MAX_SLIDES_PER_VIEW} onChange={(v) => set('slidesPerView', v)} />
        <RangeRow label="Per Group" value={config.slidesPerGroup} min={MIN_SLIDES_PER_GROUP} max={MAX_SLIDES_PER_GROUP} onChange={(v) => set('slidesPerGroup', v)} />
        <RangeRow label="Gap" value={config.spaceBetween} min={MIN_SPACE_BETWEEN} max={MAX_SPACE_BETWEEN} unit="px" onChange={(v) => set('spaceBetween', v)} />
        <RangeRow label="Speed" value={config.speed} min={MIN_SPEED} max={MAX_SPEED} step={SPEED_STEP} unit="ms" onChange={(v) => set('speed', v)} />
        <RangeRow label="Initial Slide" value={config.initialSlide} min={0} max={Math.max(0, config.slideCount - 1)} onChange={(v) => set('initialSlide', v)} />
        <SelectRow label="Direction" value={config.direction} options={DIRECTION_OPTIONS} onChange={(v) => set('direction', v as DirectionType)} />
      </div>

      <div className={sectionClass} style={{ borderColor: sectionBorder }}>
        <SectionTitle color={mutedText}>Effect & UI</SectionTitle>
        <SelectRow label="Effect" value={config.effect} options={EFFECT_OPTIONS} onChange={(v) => set('effect', v as EffectType)} />
        <SelectRow label="Pagination" value={config.pagination} options={PAGINATION_OPTIONS} onChange={(v) => set('pagination', v as PaginationType)} />
        <ToggleRow label="Navigation" checked={config.navigation} onChange={(v) => set('navigation', v)} />
        <ToggleRow label="Scrollbar" checked={config.scrollbar} onChange={(v) => set('scrollbar', v)} />
      </div>

      <div className={sectionClass} style={{ borderColor: sectionBorder }}>
        <SectionTitle color={mutedText}>Behavior</SectionTitle>
        <ToggleRow label="Loop" checked={config.loop} onChange={(v) => set('loop', v)} />
        <ToggleRow label="Centered Slides" checked={config.centeredSlides} onChange={(v) => set('centeredSlides', v)} />
        <ToggleRow label="Grab Cursor" checked={config.grabCursor} onChange={(v) => set('grabCursor', v)} />
        <ToggleRow label="Auto Height" checked={config.autoHeight} onChange={(v) => set('autoHeight', v)} />
        <ToggleRow label="Free Mode" checked={config.freeMode} onChange={(v) => set('freeMode', v)} />
        <ToggleRow label="Keyboard" checked={config.keyboard} onChange={(v) => set('keyboard', v)} />
        <ToggleRow label="Mousewheel" checked={config.mousewheel} onChange={(v) => set('mousewheel', v)} />
        <ToggleRow label="Allow Touch Move" checked={config.allowTouchMove} onChange={(v) => set('allowTouchMove', v)} />
        <ToggleRow label="RTL" checked={config.rtl} onChange={(v) => set('rtl', v)} />
        <ToggleRow label="Watch Overflow" checked={config.watchOverflow} onChange={(v) => set('watchOverflow', v)} />
      </div>

      <div className={sectionClass} style={{ borderColor: sectionBorder }}>
        <SectionTitle color={mutedText}>Resistance</SectionTitle>
        <ToggleRow label="Enabled" checked={config.resistance} onChange={(v) => set('resistance', v)} />
        {config.resistance && (
          <RangeRow label="Ratio" value={config.resistanceRatio} min={MIN_RESISTANCE_RATIO} max={MAX_RESISTANCE_RATIO} step={RESISTANCE_RATIO_STEP} onChange={(v) => set('resistanceRatio', v)} />
        )}
      </div>

      <div className={sectionClass} style={{ borderColor: sectionBorder }}>
        <SectionTitle color={mutedText}>Autoplay</SectionTitle>
        <ToggleRow label="Enabled" checked={config.autoplay} onChange={(v) => set('autoplay', v)} />
        {config.autoplay && (
          <>
            <RangeRow label="Delay" value={config.autoplayDelay} min={MIN_AUTOPLAY_DELAY} max={MAX_AUTOPLAY_DELAY} step={AUTOPLAY_DELAY_STEP} unit="ms" onChange={(v) => set('autoplayDelay', v)} />
            <ToggleRow label="Pause on Hover" checked={config.autoplayPauseOnHover} onChange={(v) => set('autoplayPauseOnHover', v)} />
          </>
        )}
      </div>

      <div className={sectionClass} style={{ borderColor: sectionBorder }}>
        <SectionTitle color={mutedText}>Navigation Arrows</SectionTitle>
        <SelectRow
          label="Arrow Style"
          value={config.navArrowStyle}
          options={NAV_ARROW_STYLE_OPTIONS}
          onChange={(v) => set('navArrowStyle', v as StudioConfig['navArrowStyle'])}
        />
        <SelectRow
          label="Arrow Icon"
          value={config.navArrowIcon}
          options={NAV_ARROW_ICON_OPTIONS}
          onChange={(v) => set('navArrowIcon', v as NavArrowIconType)}
        />
        <RangeRow label="Arrow Size" value={config.navArrowSize} min={MIN_ARROW_SIZE} max={MAX_ARROW_SIZE} unit="px" onChange={(v) => set('navArrowSize', v)} />
        <div className="py-1.5">
          <span className="text-sm block mb-1.5">Arrow Color</span>
          <Flex gap={1} wrap="wrap">
            {ARROW_COLOR_OPTIONS.map((c) => (
              <button
                key={c}
                onClick={() => set('navArrowColor', c)}
                className="w-6 h-6 rounded-full border-2 transition-transform hover:scale-110"
                style={{
                  backgroundColor: c,
                  borderColor: config.navArrowColor === c ? '#06b6d4' : 'transparent',
                  boxShadow: config.navArrowColor === c ? '0 0 0 2px rgba(6,182,212,0.3)' : 'none',
                }}
              />
            ))}
          </Flex>
        </div>
        <ToggleRow label="Hide on Click" checked={config.hideArrowOnClick} onChange={(v) => set('hideArrowOnClick', v)} />
      </div>

      <div className={sectionClass} style={{ borderColor: sectionBorder }}>
        <SectionTitle color={mutedText}>Story Mode</SectionTitle>
        <ToggleRow label="Enabled" checked={config.storyMode} onChange={(v) => set('storyMode', v)} />
        {config.storyMode && (
          <>
            <RangeRow label="Duration" value={config.storyDuration} min={MIN_STORY_DURATION} max={MAX_STORY_DURATION} step={STORY_DURATION_STEP} unit="ms" onChange={(v) => set('storyDuration', v)} />
            <ToggleRow label="Progress Bar" checked={config.storyShowProgress} onChange={(v) => set('storyShowProgress', v)} />
          </>
        )}
      </div>

      <div className="pt-4">
        <Button
          variant="outlined"
          size="sm"
          onClick={reset}
          leftIcon={<BearIcons.RefreshIcon size="xs" />}
          fullWidth
        >
          Reset to Default
        </Button>
      </div>
    </div>
  );
};
