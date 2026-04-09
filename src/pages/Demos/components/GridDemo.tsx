import { FC } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import { Grid } from '@forgedevstack/rail/modules';
import { SLIDE_COLORS, GRID_CELL_COUNT, DEMO_SLIDE_HEIGHT_PX } from '../Demos.const';

export const GridDemo: FC = () => (
  <Rail
    modules={[Grid]}
    grid={{ rows: 3, fill: 'row' }}
    slidesPerView={3}
    spaceBetween={12}
    style={{ height: DEMO_SLIDE_HEIGHT_PX }}
    className="rounded-xl"
  >
    {Array.from({ length: GRID_CELL_COUNT }).map((_, i) => (
      <RailSlide key={i}>
        <div
          className="w-full h-full rounded-lg flex items-center justify-center text-white text-sm font-bold"
          style={{ background: SLIDE_COLORS[i % SLIDE_COLORS.length] }}
        >
          {i + 1}
        </div>
      </RailSlide>
    ))}
  </Rail>
);
