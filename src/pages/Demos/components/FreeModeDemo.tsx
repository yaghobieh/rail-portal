import { FC } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import { FreeMode } from '@forgedevstack/rail/modules';
import { DEMO_SLIDE_HEIGHT_PX } from '../Demos.const';
import { slideContent } from './slideContent';

const FREE_SLIDE_COUNT = 8;

export const FreeModeDemo: FC = () => (
  <Rail
    modules={[FreeMode]}
    freeMode={{
      enabled: true,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      sticky: false,
    }}
    slidesPerView={2.2}
    spaceBetween={16}
    grabCursor
    style={{ height: DEMO_SLIDE_HEIGHT_PX }}
    className="rounded-xl"
  >
    {Array.from({ length: FREE_SLIDE_COUNT }).map((_, i) => (
      <RailSlide key={i}>{slideContent('Free', i)}</RailSlide>
    ))}
  </Rail>
);
