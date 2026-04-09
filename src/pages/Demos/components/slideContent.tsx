import { SLIDE_COLORS } from '../Demos.const';

export const slideContent = (label: string, i: number) => (
  <div
    className="w-full h-full flex items-center justify-center text-white text-2xl font-bold rounded-xl select-none"
    style={{ background: SLIDE_COLORS[i % SLIDE_COLORS.length] }}
  >
    {label} {i + 1}
  </div>
);
