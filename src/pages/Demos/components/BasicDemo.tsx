import { FC } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import { Navigation, Pagination } from '@forgedevstack/rail/modules';
import { DEMO_SLIDE_COUNT, DEMO_SLIDE_HEIGHT_PX } from '../Demos.const';
import { slideContent } from './slideContent';

export const BasicDemo: FC = () => (
  <Rail
    modules={[Navigation, Pagination]}
    spaceBetween={24}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    grabCursor
    style={{ height: DEMO_SLIDE_HEIGHT_PX }}
    className="rounded-xl"
  >
    {Array.from({ length: DEMO_SLIDE_COUNT }).map((_, i) => (
      <RailSlide key={i}>{slideContent('Slide', i)}</RailSlide>
    ))}
  </Rail>
);
