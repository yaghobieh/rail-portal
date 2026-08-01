import { FC } from 'react';
import { Rail, RailSlide } from '@forgedevstack/rail';
import { Lazy, Navigation, Pagination } from '@forgedevstack/rail/modules';
import { DEMO_SLIDE_HEIGHT_PX } from '../Demos.const';

const LAZY_IMAGES = [
  'https://picsum.photos/seed/rail-lazy-1/800/480',
  'https://picsum.photos/seed/rail-lazy-2/800/480',
  'https://picsum.photos/seed/rail-lazy-3/800/480',
  'https://picsum.photos/seed/rail-lazy-4/800/480',
  'https://picsum.photos/seed/rail-lazy-5/800/480',
];

export const LazyDemo: FC = () => (
  <Rail
    modules={[Lazy, Navigation, Pagination]}
    lazy
    navigation
    pagination={{ clickable: true }}
    spaceBetween={16}
    grabCursor
    style={{ height: DEMO_SLIDE_HEIGHT_PX }}
    className="rounded-xl"
  >
    {LAZY_IMAGES.map((src, i) => (
      <RailSlide key={src} lazy>
        <img
          data-src={src}
          alt={`Lazy slide ${i + 1}`}
          className="rail-lazy w-full h-full object-cover rounded-xl"
        />
      </RailSlide>
    ))}
  </Rail>
);
