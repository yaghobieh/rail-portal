import { CompassProvider, Routes } from '@forgedevstack/forge-compass/react';
import { ROUTE_PATHS } from './constants';
import { Home } from './pages/Home';
import { GetStarted } from './pages/GetStarted';
import { RailProps } from './pages/RailProps';
import { ModulesPage } from './pages/Modules';
import { EffectsPage } from './pages/Effects';
import { HooksPage } from './pages/Hooks';
import { StoryModeDocs } from './pages/StoryModeDocs';
import { Demos } from './pages/Demos';
import { ApiReference } from './pages/ApiReference';
import { Changelog } from './pages/Changelog';
import { Studio } from './pages/Studio';

const routes = [
  { path: ROUTE_PATHS.HOME, name: 'home', component: Home },
  { path: ROUTE_PATHS.GET_STARTED, name: 'get-started', component: GetStarted },
  { path: ROUTE_PATHS.RAIL_PROPS, name: 'rail-props', component: RailProps },
  { path: ROUTE_PATHS.MODULES, name: 'modules', component: ModulesPage },
  { path: ROUTE_PATHS.EFFECTS, name: 'effects', component: EffectsPage },
  { path: ROUTE_PATHS.HOOKS, name: 'hooks', component: HooksPage },
  { path: ROUTE_PATHS.STORY_MODE, name: 'story-mode', component: StoryModeDocs },
  { path: ROUTE_PATHS.DEMOS, name: 'demos', component: Demos },
  { path: ROUTE_PATHS.API, name: 'api', component: ApiReference },
  { path: ROUTE_PATHS.CHANGELOG, name: 'changelog', component: Changelog },
  { path: ROUTE_PATHS.STUDIO, name: 'studio', component: Studio },
];

export const App = () => (
  <CompassProvider routes={routes}>
    <Routes />
  </CompassProvider>
);
