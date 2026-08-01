import { FC } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import { Navigation, Pagination } from '@forgedevstack/rail/modules';
import { DEMO_SLIDE_COUNT, DEMO_SLIDE_HEIGHT_PX } from '../Demos.const';
import { slideContent } from './slideContent';

export const ProgressDemo: FC = () => (
  <div className="space-y-6">
    <Rail
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ type: 'progressbar' }}
      spaceBetween={16}
      grabCursor
      style={{ height: DEMO_SLIDE_HEIGHT_PX }}
      className="rounded-xl"
    >
      {Array.from({ length: DEMO_SLIDE_COUNT }).map((_, i) => (
        <RailSlide key={i}>{slideContent('Progress', i)}</RailSlide>
      ))}
    </Rail>
    <Rail
      modules={[Pagination]}
      pagination={{ type: 'fraction' }}
      spaceBetween={16}
      grabCursor
      style={{ height: DEMO_SLIDE_HEIGHT_PX * 0.7 }}
      className="rounded-xl"
    >
      {Array.from({ length: DEMO_SLIDE_COUNT }).map((_, i) => (
        <RailSlide key={i}>{slideContent('Fraction', i)}</RailSlide>
      ))}
    </Rail>
  </div>
);
