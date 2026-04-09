export type EffectType = 'slide' | 'fade' | 'cube' | 'flip' | 'coverflow' | 'cards' | 'creative' | 'tinder' | 'stack' | 'slicer' | 'gl';
export type PaginationType = 'bullets' | 'fraction' | 'progressbar' | 'none';
export type DirectionType = 'horizontal' | 'vertical';

export interface StudioConfig {
  slidesPerView: number;
  spaceBetween: number;
  speed: number;
  loop: boolean;
  centeredSlides: boolean;
  grabCursor: boolean;
  autoHeight: boolean;
  direction: DirectionType;
  effect: EffectType;
  navigation: boolean;
  pagination: PaginationType;
  scrollbar: boolean;
  autoplay: boolean;
  autoplayDelay: number;
  autoplayPauseOnHover: boolean;
  keyboard: boolean;
  mousewheel: boolean;
  freeMode: boolean;
  slideCount: number;
  initialSlide: number;
  slidesPerGroup: number;
  rtl: boolean;
  allowTouchMove: boolean;
  watchOverflow: boolean;
  resistance: boolean;
  resistanceRatio: number;
  storyMode: boolean;
  storyDuration: number;
  storyShowProgress: boolean;
  navArrowStyle: 'circle' | 'plain' | 'rounded';
  navArrowIcon: NavArrowIconType;
  navArrowColor: string;
  navArrowSize: number;
  hideArrowOnClick: boolean;
}

export interface StudioPreset {
  name: string;
  icon: string;
  config: Partial<StudioConfig>;
}

export interface StudioControlsProps {
  config: StudioConfig;
  set: <K extends keyof StudioConfig>(key: K, value: StudioConfig[K]) => void;
  applyPreset: (partial: Partial<StudioConfig>) => void;
  reset: () => void;
  isDark: boolean;
  cardBg: string;
  cardBorder: string;
  mutedText: string;
}

export type NavArrowIconType = 'chevron' | 'arrow' | 'chevrons' | 'arrowCircle' | 'navigate';
