import { FORGESTACK_URL, BEAR_URL, GRID_TABLE_URL, ANVIL_URL, RAIL_URL } from '@/constants';

export const MODULE_KEYS = [
  'navigation', 'pagination', 'scrollbar', 'autoplay', 'keyboard', 'mousewheel',
  'virtual', 'parallax', 'freeMode', 'grid', 'manipulation', 'zoom',
  'controller', 'a11y', 'history', 'hashNavigation', 'thumbs', 'storyMode',
];

export const EFFECT_KEYS = ['fade', 'cube', 'flip', 'coverflow', 'cards', 'creative'];

export const EFFECT_GRADIENTS = [
  'from-cyan-500/20 to-blue-500/20',
  'from-violet-500/20 to-purple-500/20',
  'from-amber-500/20 to-orange-500/20',
  'from-emerald-500/20 to-teal-500/20',
  'from-rose-500/20 to-pink-500/20',
  'from-indigo-500/20 to-blue-500/20',
];

export const ECOSYSTEM_LIBS = [
  { name: 'Bear UI', desc: 'Component library', color: '#f59e0b', href: BEAR_URL, usage: '100%' },
  { name: 'Grid Table', desc: 'Data table engine', color: '#22c55e', href: GRID_TABLE_URL, usage: '85%' },
  { name: 'Anvil', desc: 'Utility toolkit', color: '#ef4444', href: ANVIL_URL, usage: '90%' },
  { name: 'Forge Compass', desc: 'SPA router', color: '#8b5cf6', href: `${FORGESTACK_URL}/compass`, usage: '80%' },
  { name: 'Rail', desc: 'Carousel engine', color: '#06b6d4', href: RAIL_URL, usage: '75%' },
  { name: 'Forge CLI', desc: 'Project scaffolding', color: '#ec4899', href: `${FORGESTACK_URL}/cli`, usage: '70%' },
];

export const QUICK_START_CODE = `import { Rail, RailSlide } from '@forgedevstack/rail';
import { Navigation, Pagination } from '@forgedevstack/rail/modules';
import '@forgedevstack/rail/styles.css';

export default function App() {
  return (
    <Rail
      modules={[Navigation, Pagination]}
      slidesPerView={3}
      spaceBetween={24}
      navigation
      pagination={{ clickable: true }}
      loop
    >
      <RailSlide>Slide 1</RailSlide>
      <RailSlide>Slide 2</RailSlide>
      <RailSlide>Slide 3</RailSlide>
    </Rail>
  );
}`;

export const STORY_SLIDES = [
  {
    title: 'Welcome to Rail',
    subtitle: 'The carousel engine for React',
    gradient: 'linear-gradient(135deg, #0891b2, #06b6d4, #22d3ee)',
    iconKey: 'rocket' as const,
  },
  {
    title: '25+ Modules',
    subtitle: 'Navigation, pagination, autoplay, zoom, virtual slides...',
    gradient: 'linear-gradient(135deg, #7c3aed, #8b5cf6, #a78bfa)',
    iconKey: 'package' as const,
  },
  {
    title: '7 Stunning Effects',
    subtitle: 'Fade, cube, flip, coverflow, cards, creative',
    gradient: 'linear-gradient(135deg, #db2777, #ec4899, #f472b6)',
    iconKey: 'sparkles' as const,
  },
  {
    title: 'Story Mode',
    subtitle: 'Instagram-style stories with progress bars',
    gradient: 'linear-gradient(135deg, #ea580c, #f97316, #fb923c)',
    iconKey: 'smartphone' as const,
  },
  {
    title: 'Part of ForgeStack',
    subtitle: 'Bear UI · Grid Table · Anvil · Compass · Rail',
    gradient: 'linear-gradient(135deg, #059669, #10b981, #34d399)',
    iconKey: 'zap' as const,
  },
];

export const HERO_STATS = [
  { value: '25+', labelKey: 'modules' as const },
  { value: '7', labelKey: 'effects' as const },
  { value: '~8 kB', labelKey: 'bundleSize' as const },
  { value: '100%', labelKey: 'typescript' as const },
];
