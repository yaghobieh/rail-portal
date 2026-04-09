import { FC, ReactNode, useState } from 'react';
import { Typography, BearIcons, useBear } from '@forgedevstack/bear';
import { Layout } from '../Layout';
import { ROUTE_PATHS } from '@/constants';

interface TocItem {
  id: string;
  label: string;
  href?: string;
}

interface DocLayoutProps {
  title: string;
  description: string;
  toc: TocItem[];
  children: ReactNode;
}

const DOC_NAV = [
  { label: 'Get Started', href: ROUTE_PATHS.GET_STARTED },
  { label: 'Rail Props', href: ROUTE_PATHS.RAIL_PROPS },
  { label: 'Modules', href: ROUTE_PATHS.MODULES },
  { label: 'Effects', href: ROUTE_PATHS.EFFECTS },
  { label: 'Hooks', href: ROUTE_PATHS.HOOKS },
  { label: 'Story Mode', href: ROUTE_PATHS.STORY_MODE },
];

export const DocLayout: FC<DocLayoutProps> = ({ title, description, toc, children }) => {
  const { mode } = useBear();
  const isDark = mode === 'dark';
  const mutedText = isDark ? '#64748b' : '#94a3b8';
  const cardBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const [tocOpen, setTocOpen] = useState(false);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <Typography variant="caption" className="uppercase tracking-widest font-semibold mb-3 block" style={{ color: mutedText, fontSize: 10 }}>
                Docs
              </Typography>
              <nav className="space-y-0.5 mb-6" style={{ borderBottom: `1px solid ${cardBorder}`, paddingBottom: '0.75rem' }}>
                {DOC_NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block py-1 text-sm transition-colors hover:text-rail-400"
                    style={{ color: mutedText }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {toc.length > 0 && (
                <>
                  <Typography variant="caption" className="uppercase tracking-widest font-semibold mb-3 block" style={{ color: mutedText, fontSize: 10 }}>
                    On this page
                  </Typography>
                  <nav className="space-y-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={item.href ?? `#${item.id}`}
                        className="block py-1 text-sm transition-colors hover:text-rail-400"
                        style={{ color: mutedText }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </>
              )}
            </div>
          </aside>

          <button
            className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-rail-500 text-white shadow-lg shadow-rail-500/30 flex items-center justify-center"
            onClick={() => setTocOpen(!tocOpen)}
            aria-label="Table of contents"
          >
            <BearIcons.MenuIcon size="sm" />
          </button>

          {tocOpen && (
            <div
              className="lg:hidden fixed inset-0 z-40 flex items-end justify-center p-4"
              onClick={() => setTocOpen(false)}
            >
              <div
                className="w-full max-w-sm rounded-2xl p-6 shadow-2xl max-h-[70vh] overflow-auto"
                style={{
                  backgroundColor: isDark ? '#151525' : '#ffffff',
                  border: `1px solid ${cardBorder}`,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Typography variant="body2" className="font-semibold mb-3">Documentation</Typography>
                <nav className="space-y-2 mb-4" style={{ borderBottom: `1px solid ${cardBorder}`, paddingBottom: '0.75rem' }}>
                  {DOC_NAV.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block py-1 text-sm"
                      style={{ color: mutedText }}
                      onClick={() => setTocOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                {toc.length > 0 && (
                  <>
                    <Typography variant="body2" className="font-semibold mb-2">On this page</Typography>
                    <nav className="space-y-2">
                      {toc.map((item) => (
                        <a
                          key={item.id}
                          href={item.href ?? `#${item.id}`}
                          className="block py-1 text-sm"
                          style={{ color: mutedText }}
                          onClick={() => setTocOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="flex-1 min-w-0">
            <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-3">
              {title}
            </Typography>
            <Typography variant="body1" style={{ color: mutedText }} className="mb-12 text-lg">
              {description}
            </Typography>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};
