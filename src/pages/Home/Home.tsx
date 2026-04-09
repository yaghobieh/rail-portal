import { FC } from 'react';
import { Link } from '@forgedevstack/forge-compass/react';
import { Typography, Button, Badge, Flex, CodeBlock, BearIcons, Card } from '@forgedevstack/bear';
import { Layout } from '@/components/Layout';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks/useThemeColors';
import { ROUTE_PATHS } from '@/constants';
import { StoryDemo } from './components/StoryDemo';
import { TypingText } from './components/TypingText';
import {
  MODULE_KEYS,
  EFFECT_KEYS,
  EFFECT_GRADIENTS,
  ECOSYSTEM_LIBS,
  QUICK_START_CODE,
  HERO_STATS,
} from './Home.const';

export const Home: FC = () => {
  const { t } = useI18n();
  const { isDark, cardBorder, mutedText, subtitleColor } = useThemeColors();

  return (
    <Layout>
      <section className="mesh-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="info" className="mb-6">
                {t.home.badge}
              </Badge>

              <Typography variant="h1" className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2">
                <span className="text-gradient-rail">{t.home.title}</span>
              </Typography>

              <Typography variant="h4" className="font-semibold mb-4" style={{ color: subtitleColor }}>
                {t.home.subtitle}
              </Typography>

              <div className="min-h-8 mb-8" style={{ color: mutedText }}>
                <Typography variant="body1" className="font-mono text-sm">
                  <TypingText texts={t.home.typewriterTexts} />
                </Typography>
              </div>

              <div
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-sm mb-8"
                style={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                  border: `1px solid ${cardBorder}`,
                }}
              >
                <span style={{ color: mutedText }}>$</span>
                <span>npm i @forgedevstack/rail</span>
              </div>

              <Flex gap={3} wrap="wrap">
                <Link to={ROUTE_PATHS.GET_STARTED}>
                  <Button variant="rail" size="md" leftIcon={<BearIcons.BookOpenIcon size="xs" />}>
                    {t.home.getStarted}
                  </Button>
                </Link>
                <Link to={ROUTE_PATHS.DEMOS}>
                  <Button variant="railGhost" size="md" leftIcon={<BearIcons.PlayIcon size="xs" />}>
                    {t.home.viewDemos}
                  </Button>
                </Link>
                <Link to={ROUTE_PATHS.API}>
                  <Button variant="ghost" size="md">
                    {t.home.apiDocs}
                  </Button>
                </Link>
              </Flex>

              <Flex gap={8} className="mt-12" wrap="wrap">
                {HERO_STATS.map((stat) => (
                  <div key={stat.labelKey} className="text-center">
                    <Typography variant="h4" className="font-bold">{stat.value}</Typography>
                    <Typography variant="caption" style={{ color: mutedText }} className="uppercase tracking-wider text-[10px]">
                      {t.stats[stat.labelKey]}
                    </Typography>
                  </div>
                ))}
              </Flex>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-center mb-6">
                <Typography variant="h3" className="text-2xl font-bold mb-1">
                  {t.home.storyAboveTitle}
                </Typography>
                <Typography variant="body2" style={{ color: mutedText }}>
                  {t.home.storyAboveSubtitle}
                </Typography>
              </div>
              <StoryDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-16">
        <CodeBlock
          code={QUICK_START_CODE}
          language="tsx"
          title="Quick Start"
          copyable
          showLineNumbers
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-3">{t.home.modulesTitle}</Typography>
          <Typography variant="body1" style={{ color: mutedText }} className="max-w-2xl mx-auto">
            {t.home.modulesDescription}
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODULE_KEYS.map((key) => {
            const mod = t.modules[key];
            if (!mod) return null;
            return (
              <Card key={key} variant="ghost" padding="md" interactive className="card-hover">
                <Typography variant="body2" className="font-semibold mb-1">{mod.title}</Typography>
                <Typography variant="caption" style={{ color: mutedText }} className="leading-relaxed">
                  {mod.description}
                </Typography>
              </Card>
            );
          })}
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${cardBorder}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-3">{t.home.effectsTitle}</Typography>
            <Typography variant="body1" style={{ color: mutedText }} className="max-w-2xl mx-auto">
              {t.home.effectsDescription}
            </Typography>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {EFFECT_KEYS.map((key, i) => {
              const effect = t.effects[key];
              if (!effect) return null;
              return (
                <Card
                  key={key}
                  variant="ghost"
                  padding="md"
                  interactive
                  className={`card-hover text-center bg-gradient-to-br ${EFFECT_GRADIENTS[i]}`}
                >
                  <Typography variant="body2" className="font-semibold mb-1">{effect.title}</Typography>
                  <Typography variant="caption" style={{ color: mutedText, fontSize: 11 }} className="leading-relaxed">
                    {effect.description}
                  </Typography>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${cardBorder}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-3">{t.home.ecosystemTitle}</Typography>
            <Typography variant="body1" style={{ color: mutedText }} className="max-w-2xl mx-auto">
              {t.home.ecosystemDescription}
            </Typography>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ECOSYSTEM_LIBS.map((lib) => (
              <a
                key={lib.name}
                href={lib.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card variant="ghost" padding="md" interactive className="card-hover text-center h-full">
                  <div
                    className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${lib.color}20` }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lib.color }} />
                  </div>
                  <Typography variant="body2" className="font-semibold mb-0.5">{lib.name}</Typography>
                  <Typography variant="caption" style={{ color: mutedText, fontSize: 11 }}>
                    {lib.desc}
                  </Typography>
                  <div className="mt-2">
                    <div className="w-full h-1 rounded-full overflow-hidden" style={{ backgroundColor: `${lib.color}15` }}>
                      <div className="h-full rounded-full" style={{ width: lib.usage, backgroundColor: lib.color, transition: 'width 0.6s ease' }} />
                    </div>
                    <Typography variant="caption" className="mt-1 block font-mono" style={{ color: lib.color, fontSize: 10 }}>
                      {lib.usage}
                    </Typography>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: `1px solid ${cardBorder}` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="rounded-2xl p-8 md:p-16 text-center glow-rail cta-rail-gradient">
            <Badge variant="warning" className="mb-6">
              <BearIcons.StarIcon size="xs" /> {t.home.studioBadge}
            </Badge>
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4">{t.home.studioTitle}</Typography>
            <Typography variant="body1" style={{ color: mutedText }} className="max-w-2xl mx-auto mb-8">
              {t.home.studioDescription}
            </Typography>
            <Link to={ROUTE_PATHS.STUDIO}>
              <Button variant="rail" size="lg">
                {t.home.studioAction}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
