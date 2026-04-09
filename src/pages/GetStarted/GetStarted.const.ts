export const CODE_INSTALL = `npm i @forgedevstack/rail`;

export const CODE_IMPORT_STYLES = `// Import Rail core styles (required)
import '@forgedevstack/rail/styles.css';`;

export const CODE_BASIC = `import { Rail, RailSlide } from '@forgedevstack/rail';
import '@forgedevstack/rail/styles.css';

export default function App() {
  return (
    <Rail
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onRail={(rail) => console.log(rail)}
    >
      <RailSlide>Slide 1</RailSlide>
      <RailSlide>Slide 2</RailSlide>
      <RailSlide>Slide 3</RailSlide>
      <RailSlide>Slide 4</RailSlide>
    </Rail>
  );
}`;

export const CODE_MODULES = `import { Navigation, Pagination, Scrollbar, A11y } from '@forgedevstack/rail/modules';
import { Rail, RailSlide } from '@forgedevstack/rail';
import '@forgedevstack/rail/styles.css';

export default function App() {
  return (
    <Rail
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <RailSlide>Slide 1</RailSlide>
      <RailSlide>Slide 2</RailSlide>
      <RailSlide>Slide 3</RailSlide>
      <RailSlide>Slide 4</RailSlide>
    </Rail>
  );
}`;

export interface ModuleListItem {
  [key: string]: unknown;
  name: string;
  descKey: string;
}

export const MODULES_LIST: ModuleListItem[] = [
  { name: 'Virtual', descKey: 'virtual' },
  { name: 'Keyboard', descKey: 'keyboard' },
  { name: 'Mousewheel', descKey: 'mousewheel' },
  { name: 'Navigation', descKey: 'navigation' },
  { name: 'Pagination', descKey: 'pagination' },
  { name: 'Scrollbar', descKey: 'scrollbar' },
  { name: 'Parallax', descKey: 'parallax' },
  { name: 'FreeMode', descKey: 'freeMode' },
  { name: 'Grid', descKey: 'grid' },
  { name: 'Manipulation', descKey: 'manipulation' },
  { name: 'Zoom', descKey: 'zoom' },
  { name: 'Controller', descKey: 'controller' },
  { name: 'A11y', descKey: 'a11y' },
  { name: 'History', descKey: 'history' },
  { name: 'HashNavigation', descKey: 'hashNavigation' },
  { name: 'Autoplay', descKey: 'autoplay' },
  { name: 'EffectFade', descKey: 'effectFade' },
  { name: 'EffectCube', descKey: 'effectCube' },
  { name: 'EffectFlip', descKey: 'effectFlip' },
  { name: 'EffectCoverflow', descKey: 'effectCoverflow' },
  { name: 'EffectCards', descKey: 'effectCards' },
  { name: 'EffectCreative', descKey: 'effectCreative' },
  { name: 'Thumbs', descKey: 'thumbs' },
  { name: 'StoryMode', descKey: 'storyMode' },
];

export const TOC = [
  { id: 'installation', label: 'Installation' },
  { id: 'usage', label: 'Basic Usage' },
  { id: 'modules-list', label: 'Modules List' },
  { id: 'styles', label: 'Styles' },
];
