import { FC } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import { Marquee } from '@forgedevstack/rail/modules';
import { SLIDE_COLORS } from '../Demos.const';

const LABELS = ['AeroCraft', 'Rail', 'Bear', 'Ink', 'Harbor', 'Anvil'];
const SLIDE_WIDTH_PX = 220;

export const MarqueeDemo: FC = () => (
  <Rail
    modules={[Marquee]}
    marquee={{ duration: 18000, fade: true }}
    allowTouchMove={false}
    className="rounded-xl"
    style={{ height: 96 }}
  >
    {LABELS.map((label, i) => (
      <RailSlide key={label} style={{ width: SLIDE_WIDTH_PX }}>
        <div
          className="h-full mx-2 flex items-center justify-center text-white font-semibold rounded-xl select-none"
          style={{ background: SLIDE_COLORS[i % SLIDE_COLORS.length] }}
        >
          {label}
        </div>
      </RailSlide>
    ))}
  </Rail>
);
