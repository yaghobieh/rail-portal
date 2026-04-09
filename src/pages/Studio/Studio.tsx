import { FC, useState } from 'react';
import { Link } from '@forgedevstack/forge-compass/react';
import { Typography, Badge, Flex, BearIcons } from '@forgedevstack/bear';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ROUTE_PATHS } from '@/constants';
import { useStudioConfig } from './hooks/useStudioConfig';
import { StudioPreview } from './components/StudioPreview';
import { StudioControls } from './components/StudioControls';
import { StudioCodeExport } from './components/StudioCodeExport';

type StudioView = 'preview' | 'code';

const VIEW_OPTIONS: { key: StudioView; Icon: typeof BearIcons.VisibilityIcon }[] = [
  { key: 'preview', Icon: BearIcons.VisibilityIcon },
  { key: 'code', Icon: BearIcons.CodeIcon },
];

const RAIL_ACCENT = '#06b6d4';

export const Studio: FC = () => {
  const { t } = useI18n();
  const { isDark, mutedText, cardBg, cardBorder } = useThemeColors();
  const { config, set, applyPreset, reset, generatedCode } = useStudioConfig();
  const [view, setView] = useState<StudioView>('preview');
  const [showControls, setShowControls] = useState(true);

  const panelBg = isDark ? '#0a0f1a' : '#f8fafc';
  const headerBg = isDark ? 'rgba(10,15,26,0.95)' : 'rgba(248,250,252,0.95)';

  return (
    <div className="fixed inset-0 flex flex-col" style={{ backgroundColor: panelBg }}>
      <header
        className="flex items-center justify-between px-4 py-2.5 flex-shrink-0 z-20"
        style={{ backgroundColor: headerBg, borderBottom: `1px solid ${cardBorder}`, backdropFilter: 'blur(12px)' }}
      >
        <Flex align="center" gap={3}>
          <Link to={ROUTE_PATHS.HOME}>
            <button
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors hover:bg-white/5"
              style={{ color: mutedText }}
            >
              <BearIcons.ArrowLeftIcon size="xs" />
              Back
            </button>
          </Link>

          <div className="w-px h-5" style={{ backgroundColor: cardBorder }} />

          <Flex align="center" gap={2}>
            <Typography variant="body2" className="font-bold">
              {t.studio.title}
            </Typography>
            <Badge variant="warning" className="text-[9px] px-1.5 py-0">
              <BearIcons.StarIcon size="xs" /> {t.studio.premium}
            </Badge>
          </Flex>
        </Flex>

        <Flex gap={2} align="center">
          <button
            onClick={() => setShowControls(!showControls)}
            className="md:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
            style={{ border: `1px solid ${cardBorder}`, color: mutedText }}
          >
            <BearIcons.SettingsIcon size="xs" />
          </button>

          <Flex gap={0} className="p-0.5 rounded-lg" style={{ backgroundColor: cardBg, border: `1px solid ${cardBorder}` }}>
            {VIEW_OPTIONS.map(({ key, Icon }) => (
              <button
                key={key}
                onClick={() => setView(key)}
                className="px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5"
                style={{
                  backgroundColor: view === key ? RAIL_ACCENT : 'transparent',
                  color: view === key ? '#fff' : mutedText,
                  boxShadow: view === key ? `0 2px 8px ${RAIL_ACCENT}40` : 'none',
                }}
              >
                <Icon size="xs" />
                {key === 'preview' ? 'Preview' : 'Code'}
              </button>
            ))}
          </Flex>

          <Flex gap={1} className="hidden md:flex">
            {config.loop && <ConfigPill label="loop" />}
            {config.autoplay && <ConfigPill label="autoplay" />}
            {config.storyMode && <ConfigPill label="story" color="#a855f7" />}
          </Flex>
        </Flex>
      </header>

      <div className="flex flex-1 min-h-0">
        <aside
          className={`${showControls ? 'block' : 'hidden'} md:block w-72 lg:w-80 flex-shrink-0 overflow-y-auto p-4`}
          style={{ backgroundColor: isDark ? '#080d16' : '#f1f5f9', borderRight: `1px solid ${cardBorder}` }}
        >
          <StudioControls
            config={config}
            set={set}
            applyPreset={applyPreset}
            reset={reset}
            isDark={isDark}
            cardBg={cardBg}
            cardBorder={cardBorder}
            mutedText={mutedText}
          />
        </aside>

        <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
          {view === 'preview' ? (
            <div className="flex-1 flex items-center justify-center p-6 md:p-10 overflow-auto">
              <div className="w-full max-w-5xl">
                <StudioPreview config={config} />

                <div className="mt-6 flex justify-center">
                  <Flex wrap="wrap" gap={2} justify="center">
                    <ConfigPill label={config.effect} />
                    <ConfigPill label={`${config.speed}ms`} />
                    <ConfigPill label={`${config.slidesPerView} per view`} />
                    <ConfigPill label={config.direction} />
                    {config.navigation && <ConfigPill label="nav" color={RAIL_ACCENT} />}
                    {config.pagination !== 'none' && <ConfigPill label={config.pagination} />}
                  </Flex>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-auto p-6 md:p-10">
              <div className="max-w-3xl mx-auto">
                <StudioCodeExport code={generatedCode} isDark={isDark} mutedText={mutedText} />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const ConfigPill: FC<{ label: string; color?: string }> = ({ label, color }) => (
  <span
    className="px-2 py-0.5 rounded-full text-[9px] font-mono"
    style={{
      backgroundColor: color ? `${color}15` : 'rgba(255,255,255,0.05)',
      color: color ?? '#94a3b8',
      border: `1px solid ${color ? `${color}25` : 'rgba(255,255,255,0.08)'}`,
    }}
  >
    {label}
  </span>
);
