export const SLIDE_COLORS = [
  'linear-gradient(135deg, #0891b2, #06b6d4)',
  'linear-gradient(135deg, #7c3aed, #8b5cf6)',
  'linear-gradient(135deg, #db2777, #ec4899)',
  'linear-gradient(135deg, #ea580c, #f97316)',
  'linear-gradient(135deg, #059669, #10b981)',
  'linear-gradient(135deg, #2563eb, #3b82f6)',
];

export type DemoKey = 'basic' | 'effects' | 'story' | 'gallery' | 'grid' | 'video';

export const DEMO_KEYS: DemoKey[] = ['basic', 'effects', 'story', 'gallery', 'grid', 'video'];

export const DEMO_CODES: Record<string, string> = {
  basic: `<Rail
  modules={[Navigation, Pagination]}
  spaceBetween={24}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
>
  <RailSlide>Slide 1</RailSlide>
  <RailSlide>Slide 2</RailSlide>
  <RailSlide>Slide 3</RailSlide>
</Rail>`,

  effects: `<Rail
  modules={[EffectCube]}
  effect="cube"
  cubeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
>
  <RailSlide>Slide 1</RailSlide>
  <RailSlide>Slide 2</RailSlide>
</Rail>`,

  story: `<Rail
  modules={[StoryMode]}
  storyMode={{
    enabled: true,
    duration: 3000,
    showProgress: true,
    tapToNavigate: true,
    pauseOnHold: true,
    disableSwipe: true,
  }}
  allowTouchMove={false}
>
  <RailSlide>Story 1</RailSlide>
  <RailSlide>Story 2</RailSlide>
</Rail>`,

  gallery: `const [thumbsRail, setThumbsRail] = useState(null);

<Rail modules={[Thumbs]} thumbs={{ rail: thumbsRail }}>
  <RailSlide>Full Image 1</RailSlide>
  <RailSlide>Full Image 2</RailSlide>
</Rail>

<Rail
  modules={[Thumbs]}
  onRail={setThumbsRail}
  slidesPerView={4}
  spaceBetween={8}
  watchSlidesProgress
>
  <RailSlide>Thumb 1</RailSlide>
  <RailSlide>Thumb 2</RailSlide>
</Rail>`,

  grid: `<Rail
  modules={[Grid]}
  grid={{ rows: 3, fill: 'row' }}
  slidesPerView={3}
  spaceBetween={12}
>
  {Array.from({ length: 9 }).map((_, i) => (
    <RailSlide key={i}>Cell {i + 1}</RailSlide>
  ))}
</Rail>`,

  video: `import { Rail, RailSlide, RailVideo } from '@forgedevstack/rail';
import { Navigation, Pagination } from '@forgedevstack/rail/modules';

<Rail modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
  <RailSlide>
    <RailVideo slideIndex={0} src="/video.mp4" muted loop />
  </RailSlide>
  <RailSlide>Slide 2</RailSlide>
  <RailSlide>
    <RailVideo slideIndex={2} src="/another.mp4" muted />
  </RailSlide>
</Rail>`,
};

export const STORIES = [
  { gradient: 'linear-gradient(135deg, #0891b2, #22d3ee)', title: 'Welcome', subtitle: 'Touch-ready carousel' },
  { gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)', title: 'Modules', subtitle: '25+ tree-shakeable modules' },
  { gradient: 'linear-gradient(135deg, #db2777, #f472b6)', title: 'Effects', subtitle: '7 built-in transitions' },
  { gradient: 'linear-gradient(135deg, #ea580c, #fb923c)', title: 'Stories', subtitle: 'Instagram-style stories' },
];

export const DEMO_SLIDE_COUNT = 5;
export const EFFECTS_SLIDE_COUNT = 4;
export const DEMO_SLIDE_HEIGHT_PX = 280;
export const GALLERY_MAIN_HEIGHT_PX = 220;
export const STORY_COMPACT_WIDTH_PX = 240;
export const STORY_COMPACT_HEIGHT_PX = 420;
export const GRID_CELL_COUNT = 9;
export const GRID_COLUMNS = 3;

export type EffectType = 'slide' | 'fade' | 'cube' | 'flip';
export const EFFECT_TYPES: EffectType[] = ['slide', 'fade', 'cube', 'flip'];

export interface VideoSlide {
  type: 'video' | 'static';
  src: string;
  poster?: string;
  label?: string;
}

export const VIDEO_SLIDES: VideoSlide[] = [
  {
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
  },
  { type: 'static', src: '', label: 'Static Slide 1' },
  {
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
  },
  { type: 'static', src: '', label: 'Static Slide 2' },
  {
    type: 'video',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    poster: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
  },
];

export const ACTIVE_BULLET_COLOR = '#06b6d4';
export const INACTIVE_BULLET_COLOR = 'rgba(255,255,255,0.2)';
export const ACTIVE_THUMB_BORDER = '2px solid #06b6d4';
export const INACTIVE_THUMB_BORDER = '2px solid transparent';
