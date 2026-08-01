import { FC } from 'react';
import { Rail, RailSlide, createBreakpoints } from '@forgedevstack/rail';
import { Navigation, Pagination } from '@forgedevstack/rail/modules';
import { DEMO_SLIDE_HEIGHT_PX } from '../Demos.const';
import { slideContent } from './slideContent';

const breakpoints = createBreakpoints(
  { 0: 1, 640: 2, 1024: 3 },
  { spaceBetween: { 0: 8, 640: 16, 1024: 24 } },
);

export const BreakpointsDemo: FC = () => (
  <Rail
    modules={[Navigation, Pagination]}
    slidesPerView={1}
    breakpoints={breakpoints}
    navigation
    pagination={{ clickable: true }}
    grabCursor
    style={{ height: DEMO_SLIDE_HEIGHT_PX }}
    className="rounded-xl"
  >
    {Array.from({ length: 6 }).map((_, i) => (
      <RailSlide key={i}>{slideContent('BP', i)}</RailSlide>
    ))}
  </Rail>
);
