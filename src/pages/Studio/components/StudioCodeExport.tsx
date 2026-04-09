import { FC, useState, useCallback } from 'react';
import { Typography, CodeBlock, Flex, BearIcons, Button } from '@forgedevstack/bear';

interface StudioCodeExportProps {
  code: string;
  isDark: boolean;
  mutedText: string;
}

const COPY_FEEDBACK_DURATION = 2000;

/**
 * Displays the generated Rail JSX code from the current Studio
 * configuration, with copy-to-clipboard and a download button.
 */
export const StudioCodeExport: FC<StudioCodeExportProps> = ({ code, isDark, mutedText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), COPY_FEEDBACK_DURATION);
  }, [code]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([code], { type: 'text/tsx' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'RailCarousel.tsx';
    a.click();
    URL.revokeObjectURL(url);
  }, [code]);

  return (
    <div className="space-y-3">
      <Flex justify="between" align="center">
        <Typography variant="caption" className="font-semibold uppercase tracking-wider" style={{ color: mutedText, fontSize: '10px' }}>
          Generated Code
        </Typography>
        <Flex gap={1}>
          <Button
            variant="outlined"
            size="sm"
            onClick={handleCopy}
            leftIcon={copied ? <BearIcons.CheckIcon size="xs" /> : <BearIcons.CopyIcon size="xs" />}
          >
            {copied ? 'Copied!' : 'Copy'}
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={handleDownload}
            leftIcon={<BearIcons.DownloadIcon size="xs" />}
          >
            .tsx
          </Button>
        </Flex>
      </Flex>

      <CodeBlock
        code={code}
        language="tsx"
        title="RailCarousel.tsx"
        copyable={false}
        showLineNumbers
      />
    </div>
  );
};
