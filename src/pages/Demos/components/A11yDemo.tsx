import { FC } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import { A11y, Keyboard, Navigation, Pagination } from '@forgedevstack/rail/modules';
import { DEMO_SLIDE_COUNT, DEMO_SLIDE_HEIGHT_PX } from '../Demos.const';
import { slideContent } from './slideContent';

export const A11yDemo: FC = () => (
  <Rail
    modules={[A11y, Keyboard, Navigation, Pagination]}
    a11y={{
      enabled: true,
      focusOnChange: true,
      rovingTabindex: true,
      containerMessage: 'Accessible demo carousel',
    }}
    keyboard
    navigation
    pagination={{ clickable: true }}
    spaceBetween={16}
    grabCursor
    style={{ height: DEMO_SLIDE_HEIGHT_PX }}
    className="rounded-xl"
  >
    {Array.from({ length: DEMO_SLIDE_COUNT }).map((_, i) => (
      <RailSlide key={i}>{slideContent('A11y', i)}</RailSlide>
    ))}
  </Rail>
);
