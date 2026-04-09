import { FC, useState } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import type { RailInstance } from '@forgedevstack/rail';
import { Navigation, Thumbs } from '@forgedevstack/rail/modules';
import { DEMO_SLIDE_COUNT, GALLERY_MAIN_HEIGHT_PX, SLIDE_COLORS } from '../Demos.const';
import { slideContent } from './slideContent';

export const GalleryDemo: FC = () => {
  const [thumbsInstance, setThumbsInstance] = useState<RailInstance | null>(null);

  return (
    <div className="space-y-3">
      <Rail
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ rail: thumbsInstance as unknown as RailInstance }}
        style={{ height: GALLERY_MAIN_HEIGHT_PX }}
        className="rounded-xl"
      >
        {Array.from({ length: DEMO_SLIDE_COUNT }).map((_, i) => (
          <RailSlide key={i}>{slideContent('Image', i)}</RailSlide>
        ))}
      </Rail>

      <Rail
        modules={[Thumbs]}
        onRail={setThumbsInstance}
        slidesPerView={5}
        spaceBetween={8}
        watchSlidesProgress
        className="rounded-lg"
        style={{ height: 60 }}
      >
        {Array.from({ length: DEMO_SLIDE_COUNT }).map((_, i) => (
          <RailSlide key={i}>
            <div
              className="w-full h-full rounded-md flex items-center justify-center text-white text-xs font-bold cursor-pointer"
              style={{ background: SLIDE_COLORS[i % SLIDE_COLORS.length] }}
            >
              {i + 1}
            </div>
          </RailSlide>
        ))}
      </Rail>
    </div>
  );
};
