export const ROUTE_PATHS = {
  HOME: '/',
  GET_STARTED: '/get-started',
  RAIL_PROPS: '/rail-props',
  MODULES: '/modules',
  EFFECTS: '/effects',
  HOOKS: '/hooks',
  STORY_MODE: '/story-mode',
  DEMOS: '/demos',
  API: '/api',
  CHANGELOG: '/changelog',
  STUDIO: '/studio',
} as const;

export interface NavItem {
  id: string;
  href: string;
  badge?: string;
}

export const NAV_LINKS: NavItem[] = [
  { id: 'getStarted', href: ROUTE_PATHS.GET_STARTED },
  { id: 'demos', href: ROUTE_PATHS.DEMOS },
  { id: 'api', href: ROUTE_PATHS.API },
  { id: 'changelog', href: ROUTE_PATHS.CHANGELOG },
  { id: 'studio', href: ROUTE_PATHS.STUDIO, badge: 'Premium' },
];
