import { FC, useState, useEffect } from 'react';
import { Link } from '@forgedevstack/forge-compass/react';
import {
  Button,
  Typography,
  Flex,
  Badge,
  BearIcons,
  Dropdown,
  useBear,
} from '@forgedevstack/bear';
import { useI18n } from '@/i18n';
import type { Locale } from '@/i18n/types';
import { GITHUB_URL, NPM_URL, NAV_LINKS, ROUTE_PATHS, CURRENT_VERSION } from '@/constants';

const LOCALE_META: Record<Locale, { flag: string; label: string }> = {
  en: { flag: '\u{1F1FA}\u{1F1F8}', label: 'English' },
  es: { flag: '\u{1F1EA}\u{1F1F8}', label: 'Español' },
};

export const Navbar: FC = () => {
  const { mode, toggleMode } = useBear();
  const { t, locale, setLocale } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light', mode === 'light');
  }, [mode]);

  const localeItems = (Object.keys(LOCALE_META) as Locale[]).map((loc) => ({
    key: loc,
    label: `${LOCALE_META[loc].flag}  ${LOCALE_META[loc].label}`,
    onClick: () => setLocale(loc),
  }));

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: mode === 'dark' ? 'rgba(15, 15, 26, 0.85)' : 'rgba(255, 255, 255, 0.85)',
        borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <Flex align="center" gap={3} className="flex-shrink-0">
          <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rail-400 to-rail-600 flex items-center justify-center">
              <BearIcons.LayersIcon size="xs" />
            </div>
            <Typography variant="h5" className="font-bold">Rail</Typography>
          </Link>
          <Badge variant="info" className="hidden md:inline-flex text-xs font-mono">
            v{CURRENT_VERSION}
          </Badge>
        </Flex>

        <Flex align="center" gap={5} className="hidden md:flex flex-1 justify-center">
          {NAV_LINKS.map((item) => (
            <Link key={item.id} to={item.href}>
              <Flex align="center" gap={1}>
                <Typography variant="body2" className="hover:opacity-100 opacity-60 transition-opacity cursor-pointer whitespace-nowrap">
                  {t.nav[item.id as keyof typeof t.nav]}
                </Typography>
                {item.badge && (
                  <Badge variant="warning" className="text-[10px] px-1.5 py-0">
                    {item.badge}
                  </Badge>
                )}
              </Flex>
            </Link>
          ))}
        </Flex>

        <Flex align="center" gap={2} className="flex-shrink-0">
          <a href={NPM_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" icon={<BearIcons.PackageIcon size="xs" />} aria-label="npm" />
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" icon={<BearIcons.GithubIcon size="xs" />} aria-label="GitHub" />
          </a>
          <Dropdown
            trigger={
              <Button variant="ghost" size="sm" leftIcon={<BearIcons.GlobeIcon size="xs" />} className="font-mono text-xs">
                {LOCALE_META[locale].flag}
              </Button>
            }
            items={localeItems}
            placement="bottom-end"
            size="sm"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMode}
            aria-label={t.nav.toggleTheme}
            icon={mode === 'dark' ? <BearIcons.SunIcon size="xs" /> : <BearIcons.MoonIcon size="xs" />}
          />
          <Link to={ROUTE_PATHS.GET_STARTED} className="hidden sm:inline-flex">
            <Button variant="rail" size="sm" leftIcon={<BearIcons.BookOpenIcon size="xs" />}>
              {t.nav.getStarted}
            </Button>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Menu"
          >
            {menuOpen ? <BearIcons.CloseIcon size="sm" /> : <BearIcons.MenuIcon size="sm" />}
          </button>
        </Flex>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 space-y-1"
          style={{ borderTop: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}` }}
        >
          {NAV_LINKS.map((item) => (
            <Link key={item.id} to={item.href}>
              <Typography
                variant="body2"
                className="block px-3 py-2 rounded-lg opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[item.id as keyof typeof t.nav]}
              </Typography>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
