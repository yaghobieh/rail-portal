import type { ReactNode } from 'react';

export type ControlPosition =
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'center';

export interface StorySlideItem {
  title: string;
  subtitle?: string;
  gradient: string;
  icon?: ReactNode;
  iconKey?: string;
  link?: { label: string; href: string };
}

export interface StoryDemoProps {
  /** Slide items — if provided, overrides the default STORY_SLIDES */
  items?: StorySlideItem[];
  /** Position of the play/pause control button */
  controlPosition?: ControlPosition;
  /** Custom play icon (ReactNode) */
  playIcon?: ReactNode;
  /** Custom pause icon (ReactNode) */
  pauseIcon?: ReactNode;
  /** Hide the play/pause control entirely */
  hideControl?: boolean;
  /** Show a slide counter (e.g. "2 / 5") */
  showCounter?: boolean;
  /** Custom header slot rendered at the top of the story */
  header?: ReactNode;
  /** Show a close button in the top-right corner */
  showClose?: boolean;
  /** Callback when close is clicked */
  onClose?: () => void;
  /** Story auto-advance duration in ms */
  duration?: number;
}
