import { FC } from 'react';
import { Typography, Badge, useBear } from '@forgedevstack/bear';
import { Layout } from '@/components/Layout';
import { useI18n } from '@/i18n';

const RELEASES = [
  {
    version: '1.0.1',
    date: '2026-08-01',
    latest: true,
    highlights: [
      'A11y: roving tabindex, focus-on-change, in-carousel keyboard arrows, aria-roledescription polish',
      'Autoplay pauses when prefers-reduced-motion is set',
      'Lazy module + RailSlide lazy for deferred image loading',
      'Pagination progressbar tracks continuous progress; vertical progressbar support',
      'FreeMode momentum via requestAnimationFrame decay',
      'createBreakpoints / slidesPerViewAt helpers',
      'Fixed published styles.css export (dist/styles.css now ships)',
      'New portal demos: a11y, progress, vertical, freeMode, lazy, breakpoints',
    ],
  },
  {
    version: '1.0.0',
    date: '2026-03-24',
    latest: false,
    highlights: [
      'Core carousel engine with touch, drag, and momentum physics',
      '25 modules: Navigation, Pagination, Autoplay, Keyboard, Mousewheel, Virtual, Parallax, FreeMode, Grid, Manipulation, Zoom, Controller, A11y, History, HashNavigation, Thumbs, Scrollbar + 7 effects + StoryMode',
      'React components: <Rail>, <RailSlide>, <RailNavigation>, <RailPagination>',
      'useRail hook with reactive state',
      'Full ARIA accessibility module',
      'Responsive breakpoints with mobile-first approach',
      'Instagram-style Story Mode with progress bars',
      'Plugin architecture for custom modules',
      'Complete CSS stylesheet with all module styles',
      'Portal with docs, demos, API reference, and i18n (EN/ES)',
    ],
  },
];

export const Changelog: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();
  const isDark = mode === 'dark';
  const mutedText = isDark ? '#64748b' : '#94a3b8';
  const lineBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-3">{t.changelog.title}</Typography>
        <Typography variant="body1" style={{ color: mutedText }} className="mb-12 text-lg">
          {t.changelog.description}
        </Typography>

        <div className="space-y-12">
          {RELEASES.map((release) => (
            <div key={release.version} className="relative pl-8" style={{ borderLeft: `2px solid ${lineBorder}` }}>
              <div
                className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4"
                style={{
                  backgroundColor: '#06b6d4',
                  borderColor: isDark ? '#0f0f1a' : '#ffffff',
                }}
              />

              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Typography variant="h3" className="text-2xl font-bold">v{release.version}</Typography>
                {release.latest && (
                  <Badge variant="info">{t.changelog.latest}</Badge>
                )}
                <Typography variant="caption" style={{ color: mutedText }}>{release.date}</Typography>
              </div>

              <ul className="space-y-2">
                {release.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: mutedText }}>
                    <span className="text-rail-400 mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
