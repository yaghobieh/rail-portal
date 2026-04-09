import type { ControlPosition } from './StoryDemo.types';

export const CONTROL_POSITION_CLASSES: Record<ControlPosition, string> = {
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'top-center': 'top-10 left-1/2 -translate-x-1/2',
  'top-left': 'top-10 left-4',
  'top-right': 'top-10 right-4',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
};

export const COUNTER_POSITION = 'bottom-4 right-4';
export const CLOSE_POSITION = 'top-3 right-3';
export const HEADER_POSITION = 'top-8 left-4 right-4';

export const DEFAULT_STORY_DURATION = 4000;
