import { FC } from 'react';
import { Typography, CodeBlock, DataTable } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';
import { useI18n } from '@/i18n';
import { useThemeColors } from '@/hooks/useThemeColors';
import {
  CODE_INSTALL,
  CODE_IMPORT_STYLES,
  CODE_BASIC,
  CODE_MODULES,
  MODULES_LIST,
  TOC,
} from './GetStarted.const';
import type { ModuleListItem } from './GetStarted.const';

export const GetStarted: FC = () => {
  const { t } = useI18n();
  const { isDark, mutedText } = useThemeColors();

  const moduleColumns = [
    {
      key: 'name',
      header: t.api.prop,
      accessor: (row: ModuleListItem) => (
        <span className="font-mono text-rail-400 text-xs">{row.name}</span>
      ),
    },
    {
      key: 'desc',
      header: t.api.descriptionLabel,
      accessor: (row: ModuleListItem) => (
        <span style={{ color: mutedText }}>{t.getStarted.moduleTable[row.descKey]}</span>
      ),
    },
  ];

  return (
    <DocLayout title={t.getStarted.title} description={t.getStarted.description} toc={TOC}>
      <DocSection id="installation" title={t.getStarted.install}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.installDesc}
        </Typography>
        <CodeBlock code={CODE_INSTALL} language="bash" title="Terminal" copyable showLineNumbers={false} />
      </DocSection>

      <DocSection id="usage" title={t.getStarted.basicUsage}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.basicUsageDesc}
        </Typography>
        <CodeBlock code={CODE_BASIC} language="tsx" title="Basic Usage" copyable showLineNumbers />

        <Typography variant="body2" style={{ color: mutedText }} className="mt-6 mb-4">
          {t.getStarted.basicUsageModulesDesc}
        </Typography>
        <CodeBlock code={CODE_MODULES} language="tsx" title="With Modules" copyable showLineNumbers />

        <div
          className="mt-4 p-4 rounded-lg"
          style={{
            backgroundColor: isDark ? 'rgba(6,182,212,0.05)' : 'rgba(6,182,212,0.06)',
            border: `1px solid ${isDark ? 'rgba(6,182,212,0.15)' : 'rgba(6,182,212,0.2)'}`,
          }}
        >
          <Typography variant="caption" style={{ color: '#06b6d4' }}>
            {t.getStarted.basicUsageTip}
          </Typography>
        </div>
      </DocSection>

      <DocSection id="modules-list" title={t.getStarted.availableModules}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.availableModulesDesc}
        </Typography>
        <DataTable<ModuleListItem>
          columns={moduleColumns}
          data={MODULES_LIST}
          rowKey={(row) => row.name}
          variant="bordered"
          compact
        />
      </DocSection>

      <DocSection id="styles" title={t.getStarted.styles}>
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          {t.getStarted.stylesDesc}
        </Typography>
        <CodeBlock code={CODE_IMPORT_STYLES} language="typescript" title="Import Styles" copyable showLineNumbers={false} />
      </DocSection>
    </DocLayout>
  );
};
