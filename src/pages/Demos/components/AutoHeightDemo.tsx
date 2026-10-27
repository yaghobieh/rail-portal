import { FC } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import { AutoHeight, Counter, Navigation } from '@forgedevstack/rail/modules';
import { SLIDE_COLORS } from '../Demos.const';

const SLIDES = [
  { title: 'Short', lines: ['One line.'] },
  { title: 'Medium', lines: ['Two lines.', 'The track grows with this slide.'] },
  { title: 'Tall', lines: ['Three lines.', 'Counter shows 3 / 3.', 'AutoHeight reads the active slide.'] },
];

export const AutoHeightDemo: FC = () => (
  <Rail
    modules={[AutoHeight, Counter, Navigation]}
    navigation
    className="rounded-xl"
  >
    {SLIDES.map((slide, i) => (
      <RailSlide key={slide.title}>
        <div
          className="w-full text-white rounded-xl p-8"
          style={{ background: SLIDE_COLORS[i % SLIDE_COLORS.length] }}
        >
          <p className="text-2xl font-bold mb-2">{slide.title}</p>
          {slide.lines.map((line) => (
            <p key={line} className="text-base">{line}</p>
          ))}
        </div>
      </RailSlide>
    ))}
  </Rail>
);
