import { FC, useState } from 'react';
import { Button, Flex } from '@forgedevstack/bear';
import { Rail, RailSlide } from '@forgedevstack/rail';
import type { RailModuleFactory } from '@forgedevstack/rail';
import {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
  EffectCards,
} from '@forgedevstack/rail/modules';
import { EFFECTS_SLIDE_COUNT, DEMO_SLIDE_HEIGHT_PX } from '../Demos.const';
import { slideContent } from './slideContent';

type EffectKey = 'slide' | 'fade' | 'cube' | 'flip' | 'coverflow' | 'cards';

const EFFECT_CONFIGS: Record<EffectKey, { modules: RailModuleFactory[]; props: Record<string, unknown> }> = {
  slide: { modules: [Navigation, Pagination], props: { navigation: true, pagination: { clickable: true } } },
  fade: { modules: [EffectFade, Navigation, Pagination], props: { effect: 'fade', navigation: true, pagination: { clickable: true } } },
  cube: { modules: [EffectCube, Pagination], props: { effect: 'cube', pagination: { clickable: true } } },
  flip: { modules: [EffectFlip, Pagination], props: { effect: 'flip', pagination: { clickable: true } } },
  coverflow: { modules: [EffectCoverflow, Pagination], props: { effect: 'coverflow', slidesPerView: 3, centeredSlides: true, pagination: { clickable: true } } },
  cards: { modules: [EffectCards], props: { effect: 'cards', grabCursor: true } },
};

const EFFECT_KEYS: EffectKey[] = ['slide', 'fade', 'cube', 'flip', 'coverflow', 'cards'];

export const EffectsDemo: FC = () => {
  const [effect, setEffect] = useState<EffectKey>('slide');
  const cfg = EFFECT_CONFIGS[effect];

  return (
    <div className="space-y-4">
      <Flex gap={2} wrap="wrap" className="mb-2">
        {EFFECT_KEYS.map((e) => (
          <Button
            key={e}
            variant={effect === e ? 'primary' : 'outlined'}
            size="sm"
            onClick={() => setEffect(e)}
          >
            {e.charAt(0).toUpperCase() + e.slice(1)}
          </Button>
        ))}
      </Flex>

      <Rail
        key={effect}
        modules={cfg.modules}
        grabCursor
        style={{ height: DEMO_SLIDE_HEIGHT_PX }}
        className="rounded-xl"
        {...cfg.props}
      >
        {Array.from({ length: EFFECTS_SLIDE_COUNT }).map((_, i) => (
          <RailSlide key={i}>
            {slideContent(`${effect.charAt(0).toUpperCase() + effect.slice(1)} · Slide`, i)}
          </RailSlide>
        ))}
      </Rail>
    </div>
  );
};
