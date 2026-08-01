export type Locale = 'en' | 'es';

export interface TranslationStrings {
  nav: {
    home: string;
    getStarted: string;
    demos: string;
    api: string;
    changelog: string;
    studio: string;
    toggleTheme: string;
    language: string;
  };

  home: {
    badge: string;
    title: string;
    subtitle: string;
    typewriterTexts: string[];
    getStarted: string;
    viewDemos: string;
    apiDocs: string;
    modulesTitle: string;
    modulesDescription: string;
    effectsTitle: string;
    effectsDescription: string;
    featuresTitle: string;
    featuresDescription: string;
    ecosystemTitle: string;
    ecosystemDescription: string;
    ecosystemBanner: string;
    visitForgeStack: string;
    studioTitle: string;
    studioDescription: string;
    studioBadge: string;
    studioAction: string;
    storyAboveTitle: string;
    storyAboveSubtitle: string;
  };

  modules: Record<string, { title: string; description: string }>;

  effects: Record<string, { title: string; description: string }>;

  getStarted: {
    title: string;
    description: string;
    install: string;
    installDesc: string;
    importCss: string;
    basicUsage: string;
    basicUsageDesc: string;
    basicUsageModulesDesc: string;
    basicUsageTip: string;
    addModules: string;
    responsive: string;
    events: string;
    availableModules: string;
    availableModulesDesc: string;
    stylesDesc: string;
    styles: string;
    moduleTable: Record<string, string>;
  };

  api: {
    title: string;
    description: string;
    props: string;
    events: string;
    modules: string;
    prop: string;
    type: string;
    default: string;
    descriptionLabel: string;
    eventsDesc: string;
    modulesDesc: string;
    event: string;
    arguments: string;
  };

  demos: {
    title: string;
    description: string;
    basic: { title: string; description: string };
    effects: { title: string; description: string };
    story: { title: string; description: string };
    gallery: { title: string; description: string };
    grid: { title: string; description: string };
    video: { title: string; description: string };
    a11y: { title: string; description: string };
    progress: { title: string; description: string };
    vertical: { title: string; description: string };
    freeMode: { title: string; description: string };
    lazy: { title: string; description: string };
    breakpoints: { title: string; description: string };
    viewDemo: string;
  };

  changelog: {
    title: string;
    description: string;
    latest: string;
  };

  studio: {
    title: string;
    description: string;
    premium: string;
    comingSoon: string;
  };

  footer: {
    partOfForgeStack: string;
    mitLicense: string;
    builtWith: string;
    ecosystemText: string;
  };

  stats: {
    modules: string;
    effects: string;
    bundleSize: string;
    typescript: string;
  };

  common: {
    back: string;
    copyCode: string;
    copied: string;
  };
}
