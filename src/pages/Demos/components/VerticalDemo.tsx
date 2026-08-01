import { FC } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import { Keyboard, Navigation, Pagination } from '@forgedevstack/rail/modules';
import { DEMO_SLIDE_COUNT, DEMO_SLIDE_HEIGHT_PX } from '../Demos.const';
import { slideContent } from './slideContent';

export const VerticalDemo: FC = () => (
  <Rail
    modules={[Navigation, Pagination, Keyboard]}
    direction="vertical"
    keyboard
    navigation
    pagination={{ type: 'progressbar' }}
    spaceBetween={12}
    grabCursor
    style={{ height: DEMO_SLIDE_HEIGHT_PX + 80 }}
    className="rounded-xl"
  >
    {Array.from({ length: DEMO_SLIDE_COUNT }).map((_, i) => (
      <RailSlide key={i}>{slideContent('Vertical', i)}</RailSlide>
    ))}
  </Rail>
);
