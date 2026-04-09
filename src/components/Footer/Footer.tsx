import { FC } from 'react';
import { Typography, Flex, BearIcons, useBear } from '@forgedevstack/bear';
import { useI18n } from '@/i18n';
import {
  GITHUB_URL,
  FORGESTACK_URL,
  BEAR_URL,
  GRID_TABLE_URL,
  ANVIL_URL,
  RAIL_URL,
  ROUTE_PATHS,
} from '@/constants';

const ECOSYSTEM_LIBS = [
  { name: 'Bear UI', href: BEAR_URL, color: '#f59e0b' },
  { name: 'Grid Table', href: GRID_TABLE_URL, color: '#22c55e' },
  { name: 'Anvil', href: ANVIL_URL, color: '#ef4444' },
  { name: 'Forge Compass', href: FORGESTACK_URL, color: '#8b5cf6' },
  { name: 'Rail', href: RAIL_URL, color: '#06b6d4' },
  { name: 'Forge CLI', href: FORGESTACK_URL, color: '#ec4899' },
];

export const Footer: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();

  return (
    <footer
      className="mt-auto"
      style={{
        borderTop: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
        backgroundColor: mode === 'dark' ? 'rgba(15,15,26,0.5)' : 'rgba(249,250,251,0.8)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Flex align="center" gap={2} className="mb-3">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-rail-400 to-rail-600 flex items-center justify-center">
                <BearIcons.LayersIcon size="xs" />
              </div>
              <Typography variant="body2" className="font-semibold">Rail</Typography>
            </Flex>
            <Typography variant="caption" className="opacity-50">
              The carousel engine for React. Touch-ready, accessible, infinitely extensible.
            </Typography>
          </div>

          <div>
            <Typography variant="body2" className="font-semibold mb-3">ForgeStack Ecosystem</Typography>
            <Flex direction="column" gap={1}>
              {ECOSYSTEM_LIBS.map((lib) => (
                <a key={lib.name} href={lib.href} target="_blank" rel="noopener noreferrer" className="group">
                  <Flex align="center" gap={2}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: lib.color }} />
                    <Typography variant="caption" className="opacity-50 group-hover:opacity-100 transition-opacity">
                      {lib.name}
                    </Typography>
                  </Flex>
                </a>
              ))}
            </Flex>
          </div>

          <div>
            <Typography variant="body2" className="font-semibold mb-3">Resources</Typography>
            <Flex direction="column" gap={1}>
              <a href={ROUTE_PATHS.GET_STARTED}><Typography variant="caption" className="opacity-50 hover:opacity-100 transition-opacity">Documentation</Typography></a>
              <a href={ROUTE_PATHS.DEMOS}><Typography variant="caption" className="opacity-50 hover:opacity-100 transition-opacity">Demos</Typography></a>
              <a href={ROUTE_PATHS.API}><Typography variant="caption" className="opacity-50 hover:opacity-100 transition-opacity">API Reference</Typography></a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Typography variant="caption" className="opacity-50 hover:opacity-100 transition-opacity">GitHub</Typography>
              </a>
            </Flex>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
        >
          <Typography variant="caption" className="opacity-40">
            {t.footer.mitLicense} · {t.footer.builtWith} ForgeStack
          </Typography>
          <Typography variant="caption" className="opacity-40">
            {t.footer.ecosystemText}{' '}
            <a href={FORGESTACK_URL} className="text-rail-400 hover:text-rail-300 transition-colors">
              ForgeStack
            </a>{' '}
            ecosystem.
          </Typography>
        </div>
      </div>
    </footer>
  );
};
