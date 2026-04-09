import { BearIcons } from '@forgedevstack/bear';
import type { StudioConfig, StudioPreset, EffectType, PaginationType, DirectionType, NavArrowIconType } from './Studio.types';

export const DEFAULT_CONFIG: StudioConfig = {
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 300,
  loop: false,
  centeredSlides: false,
  grabCursor: true,
  autoHeight: false,
  direction: 'horizontal',
  effect: 'slide',
  navigation: true,
  pagination: 'bullets',
  scrollbar: false,
  autoplay: false,
  autoplayDelay: 3000,
  autoplayPauseOnHover: true,
  keyboard: false,
  mousewheel: false,
  freeMode: false,
  slideCount: 5,
  initialSlide: 0,
  slidesPerGroup: 1,
  rtl: false,
  allowTouchMove: true,
  watchOverflow: true,
  resistance: true,
  resistanceRatio: 0.85,
  storyMode: false,
  storyDuration: 3000,
  storyShowProgress: true,
  navArrowStyle: 'circle',
  navArrowIcon: 'chevron',
  navArrowColor: '#ffffff',
  navArrowSize: 44,
  hideArrowOnClick: false,
};

export const EFFECT_OPTIONS: { value: EffectType; label: string }[] = [
  { value: 'slide', label: 'Slide' },
  { value: 'fade', label: 'Fade' },
  { value: 'cube', label: 'Cube' },
  { value: 'flip', label: 'Flip' },
  { value: 'coverflow', label: 'Coverflow' },
  { value: 'cards', label: 'Cards' },
  { value: 'creative', label: 'Creative' },
  { value: 'tinder', label: 'Tinder' },
  { value: 'stack', label: 'Card Stack' },
  { value: 'slicer', label: 'Slicer' },
  { value: 'gl', label: 'GL Depth' },
];

export const PAGINATION_OPTIONS: { value: PaginationType; label: string }[] = [
  { value: 'none', label: 'None' },
  { value: 'bullets', label: 'Bullets' },
  { value: 'fraction', label: 'Fraction' },
  { value: 'progressbar', label: 'Progress Bar' },
];

export const PRESETS: StudioPreset[] = [
  {
    name: 'Default',
    icon: 'layers',
    config: { ...DEFAULT_CONFIG },
  },
  {
    name: 'Hero Banner',
    icon: 'image',
    config: {
      slidesPerView: 1,
      effect: 'fade',
      autoplay: true,
      autoplayDelay: 5000,
      loop: true,
      pagination: 'bullets',
      navigation: true,
      slideCount: 3,
    },
  },
  {
    name: 'Card Carousel',
    icon: 'creditCard',
    config: {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: true,
      loop: true,
      pagination: 'none',
      navigation: true,
      slideCount: 7,
    },
  },
  {
    name: 'Coverflow Gallery',
    icon: 'sparkles',
    config: {
      effect: 'coverflow',
      slidesPerView: 3,
      centeredSlides: true,
      loop: true,
      grabCursor: true,
      pagination: 'bullets',
      navigation: false,
      slideCount: 7,
    },
  },
  {
    name: 'Stacked Cards',
    icon: 'package',
    config: {
      effect: 'cards',
      slidesPerView: 1,
      grabCursor: true,
      pagination: 'none',
      navigation: false,
      slideCount: 5,
    },
  },
  {
    name: 'Free Scroll',
    icon: 'zap',
    config: {
      slidesPerView: 3,
      spaceBetween: 16,
      freeMode: true,
      mousewheel: true,
      pagination: 'none',
      navigation: false,
      slideCount: 10,
    },
  },
  {
    name: 'Stories',
    icon: 'smartphone',
    config: {
      storyMode: true,
      storyDuration: 3000,
      storyShowProgress: true,
      navigation: false,
      pagination: 'none',
      scrollbar: false,
      autoplay: false,
      slideCount: 5,
      slidesPerView: 1,
    },
  },
  {
    name: 'Tinder',
    icon: 'heart',
    config: {
      effect: 'tinder',
      slidesPerView: 1,
      grabCursor: true,
      pagination: 'none',
      navigation: false,
      slideCount: 8,
    },
  },
  {
    name: 'Vertical',
    icon: 'arrowUpDown',
    config: {
      direction: 'vertical',
      slidesPerView: 1,
      navigation: true,
      pagination: 'fraction',
      slideCount: 5,
    },
  },
  {
    name: 'Card Stack',
    icon: 'copy',
    config: {
      effect: 'stack',
      slidesPerView: 1,
      grabCursor: true,
      pagination: 'none',
      navigation: false,
      slideCount: 6,
      centeredSlides: true,
    },
  },
];

export const SLIDE_GRADIENTS = [
  'linear-gradient(135deg, #0d1b2a, #1b2838, #0891b2)',
  'linear-gradient(135deg, #1a0533, #4c1d95, #8b5cf6)',
  'linear-gradient(135deg, #3b0a2a, #be185d, #ec4899)',
  'linear-gradient(135deg, #431407, #c2410c, #fb923c)',
  'linear-gradient(135deg, #022c22, #047857, #34d399)',
  'linear-gradient(135deg, #0c1445, #1d4ed8, #60a5fa)',
  'linear-gradient(135deg, #2e0249, #9333ea, #c084fc)',
  'linear-gradient(135deg, #042f2e, #0d9488, #5eead4)',
  'linear-gradient(135deg, #450a0a, #dc2626, #fb7185)',
  'linear-gradient(135deg, #422006, #ca8a04, #fde047)',
];

export const MIN_SLIDES = 1;
export const MAX_SLIDES = 20;
export const MIN_SLIDES_PER_VIEW = 1;
export const MAX_SLIDES_PER_VIEW = 10;
export const MIN_SPACE_BETWEEN = 0;
export const MAX_SPACE_BETWEEN = 100;
export const MIN_SPEED = 100;
export const MAX_SPEED = 2000;
export const SPEED_STEP = 50;
export const MIN_AUTOPLAY_DELAY = 500;
export const MAX_AUTOPLAY_DELAY = 10000;
export const AUTOPLAY_DELAY_STEP = 500;
export const PREVIEW_SLIDE_HEIGHT = 400;

export const MIN_SLIDES_PER_GROUP = 1;
export const MAX_SLIDES_PER_GROUP = 5;
export const MIN_RESISTANCE_RATIO = 0;
export const MAX_RESISTANCE_RATIO = 1;
export const RESISTANCE_RATIO_STEP = 0.05;
export const AUTOPLAY_TICK_MS = 50;

export const MIN_STORY_DURATION = 1000;
export const MAX_STORY_DURATION = 15000;
export const STORY_DURATION_STEP = 500;

export const NAV_ARROW_STYLE_OPTIONS: { value: 'circle' | 'plain' | 'rounded'; label: string }[] = [
  { value: 'circle', label: 'Circle' },
  { value: 'plain', label: 'Plain' },
  { value: 'rounded', label: 'Rounded' },
];

export const MIN_ARROW_SIZE = 28;
export const MAX_ARROW_SIZE = 64;

export const ARROW_COLOR_OPTIONS = [
  '#ffffff',
  '#06b6d4',
  '#8b5cf6',
  '#ec4899',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#3b82f6',
];

export const STORY_PREVIEW_HEIGHT = 480;
export const STORY_PREVIEW_WIDTH = 270;

export const STORY_SLIDE_TITLES = [
  'Welcome',
  'New Features',
  'Updates',
  'Coming Soon',
  'Follow Us',
];

export const STORY_SLIDE_SUBTITLES = [
  'Swipe to explore',
  'Check what\u2019s new',
  'Latest improvements',
  'Stay tuned',
  'Join the community',
];

export const DIRECTION_OPTIONS: { value: DirectionType; label: string }[] = [
  { value: 'horizontal', label: 'Horizontal' },
  { value: 'vertical', label: 'Vertical' },
];

export const PRESET_ICON_MAP: Record<string, typeof BearIcons.LayersIcon> = {
  layers: BearIcons.LayersIcon,
  image: BearIcons.ImageIcon,
  creditCard: BearIcons.CreditCardIcon,
  sparkles: BearIcons.SparklesIcon,
  package: BearIcons.PackageIcon,
  zap: BearIcons.ZapIcon,
  smartphone: BearIcons.SmartphoneIcon,
  heart: BearIcons.HeartIcon,
  arrowUpDown: BearIcons.SwapVertIcon,
  copy: BearIcons.CopyIcon,
};

export const NAV_ARROW_ICON_OPTIONS: { value: NavArrowIconType; label: string }[] = [
  { value: 'chevron', label: 'Chevron' },
  { value: 'arrow', label: 'Arrow' },
  { value: 'chevrons', label: 'Double Chevron' },
  { value: 'arrowCircle', label: 'Circle Arrow' },
  { value: 'navigate', label: 'Navigate' },
];

export const NAV_ARROW_ICON_MAP: Record<NavArrowIconType, { prev: typeof BearIcons.ChevronLeftIcon; next: typeof BearIcons.ChevronRightIcon }> = {
  chevron: { prev: BearIcons.ChevronLeftIcon, next: BearIcons.ChevronRightIcon },
  arrow: { prev: BearIcons.ArrowLeftIcon, next: BearIcons.ArrowRightIcon },
  chevrons: { prev: BearIcons.ChevronsLeftIcon, next: BearIcons.ChevronsRightIcon },
  arrowCircle: { prev: BearIcons.ArrowCircleLeftIcon, next: BearIcons.ArrowCircleRightIcon },
  navigate: { prev: BearIcons.NavigateBeforeIcon, next: BearIcons.NavigateNextIcon },
};
