import { FC, useState } from 'react';
import { Typography, Badge, Flex, DataTable } from '@forgedevstack/bear';
import { Layout } from '@/components/Layout';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks/useThemeColors';
import { API_TABS, CORE_PROPS, EVENTS, MODULE_INFO, CAT_COLORS } from './ApiReference.const';
import type { ApiTab, CorePropRow, EventRow } from './ApiReference.types';

export const ApiReference: FC = () => {
  const { t } = useI18n();
  const { mutedText, headerBg, cardBorder } = useThemeColors();
  const [tab, setTab] = useState<ApiTab>('props');

  const propsColumns = [
    { key: 'prop', header: t.api.prop, accessor: (row: CorePropRow) => <span className="font-mono text-rail-400 text-xs">{row.prop}</span> },
    { key: 'type', header: t.api.type, accessor: (row: CorePropRow) => <span className="font-mono text-xs" style={{ color: mutedText }}>{row.type}</span> },
    { key: 'default', header: t.api.default, accessor: (row: CorePropRow) => <span className="font-mono text-xs" style={{ color: mutedText }}>{row.default}</span> },
    { key: 'desc', header: t.api.descriptionLabel, accessor: (row: CorePropRow) => <span style={{ color: mutedText }}>{row.desc}</span> },
  ];

  const eventsColumns = [
    { key: 'event', header: t.api.event, accessor: (row: EventRow) => <span className="font-mono text-rail-400 text-xs">{row.event}</span> },
    { key: 'args', header: t.api.arguments, accessor: (row: EventRow) => <span className="font-mono text-xs" style={{ color: mutedText }}>{row.args}</span> },
    { key: 'desc', header: t.api.descriptionLabel, accessor: (row: EventRow) => <span style={{ color: mutedText }}>{row.desc}</span> },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Typography variant="h1" className="text-4xl md:text-5xl font-bold mb-3">{t.api.title}</Typography>
        <Typography variant="body1" style={{ color: mutedText }} className="mb-10 text-lg">
          {t.api.description}
        </Typography>

        <Flex gap={1} className="p-1 rounded-xl w-fit mb-10" style={{ backgroundColor: headerBg }}>
          {API_TABS.map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className="px-5 py-2 rounded-lg text-sm font-medium transition-all"
              style={{
                backgroundColor: tab === key ? '#06b6d4' : 'transparent',
                color: tab === key ? '#fff' : mutedText,
                boxShadow: tab === key ? '0 4px 12px rgba(6,182,212,0.25)' : 'none',
              }}
            >
              {t.api[key]}
            </button>
          ))}
        </Flex>

        {tab === 'props' && (
          <DataTable<CorePropRow>
            columns={propsColumns}
            data={CORE_PROPS}
            rowKey={(row) => row.prop}
            variant="bordered"
            compact
          />
        )}

        {tab === 'events' && (
          <>
            <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
              {t.api.eventsDesc}
            </Typography>
            <DataTable<EventRow>
              columns={eventsColumns}
              data={EVENTS}
              rowKey={(row) => row.event}
              variant="bordered"
              compact
            />
          </>
        )}

        {tab === 'modules' && (
          <>
            <Typography variant="body2" style={{ color: mutedText }} className="mb-6">
              {t.api.modulesDesc}
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {MODULE_INFO.map((mod) => (
                <div
                  key={mod.name}
                  className="p-4 rounded-xl transition-colors"
                  style={{
                    backgroundColor: headerBg,
                    border: `1px solid ${cardBorder}`,
                  }}
                >
                  <Flex align="center" gap={2} className="mb-1.5">
                    <Typography variant="body2" className="font-mono font-semibold">{mod.name}</Typography>
                    <Badge
                      className="text-[9px] px-1.5 py-0"
                      style={{ backgroundColor: `${CAT_COLORS[mod.cat]}20`, color: CAT_COLORS[mod.cat], border: `1px solid ${CAT_COLORS[mod.cat]}30` }}
                    >
                      {mod.cat}
                    </Badge>
                  </Flex>
                  <Typography variant="caption" style={{ color: mutedText }}>
                    {mod.desc}
                  </Typography>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};
