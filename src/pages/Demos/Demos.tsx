import { FC } from 'react';
import { Typography, useBear } from '@forgedevstack/bear';
import { Layout } from '@/components/Layout';
import { useI18n } from '@/i18n';
import { DEMO_KEYS } from './Demos.const';
import { DemoSection } from './components';

export const Demos: FC = () => {
  const { t } = useI18n();
  const { mode } = useBear();
  const isDark = mode === 'dark';
  const mutedText = isDark ? '#64748b' : '#94a3b8';
  const cardBg = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)';
  const cardBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12">
          <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-3">{t.demos.title}</Typography>
          <Typography variant="body1" style={{ color: mutedText }} className="max-w-2xl mx-auto">
            {t.demos.description}
          </Typography>
        </div>

        <div className="space-y-10">
          {DEMO_KEYS.map((key) => {
            const demo = t.demos[key] as { title: string; description: string };
            return (
              <DemoSection
                key={key}
                demoKey={key}
                title={demo.title}
                description={demo.description}
                cardBg={cardBg}
                cardBorder={cardBorder}
                mutedText={mutedText}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
