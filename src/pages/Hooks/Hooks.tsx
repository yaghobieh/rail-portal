import { FC } from 'react';
import { Typography, CodeBlock, useBear } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';

const CODE_USE_RAIL = `import { useRail } from '@forgedevstack/rail/hooks';

function SlideNextButton() {
  const { slideNext, activeIndex, isEnd } = useRail();

  return (
    <button
      onClick={() => slideNext()}
      disabled={isEnd}
    >
      Slide {activeIndex + 1} \u2192 Next
    </button>
  );
}`;

const CODE_USE_RAIL_FULL = `function CarouselControls() {
  const {
    activeIndex,
    realIndex,
    isBeginning,
    isEnd,
    slideTo,
    slideNext,
    slidePrev,
    instance,
  } = useRail();

  return (
    <div>
      <p>Active: {activeIndex} (real: {realIndex})</p>
      <button onClick={slidePrev} disabled={isBeginning}>Prev</button>
      <button onClick={slideNext} disabled={isEnd}>Next</button>
      <button onClick={() => slideTo(0)}>Go to first</button>
      <button onClick={() => instance?.update()}>Force update</button>
    </div>
  );
}`;

const RETURN_VALUES = [
  { prop: 'activeIndex', type: 'number', desc: 'Current slide index' },
  { prop: 'realIndex', type: 'number', desc: 'Real slide index (loop-aware)' },
  { prop: 'isBeginning', type: 'boolean', desc: 'Whether carousel is at the first slide' },
  { prop: 'isEnd', type: 'boolean', desc: 'Whether carousel is at the last slide' },
  { prop: 'slideTo', type: '(index: number) => void', desc: 'Navigate to a specific slide index' },
  { prop: 'slideNext', type: '() => void', desc: 'Navigate to the next slide' },
  { prop: 'slidePrev', type: '() => void', desc: 'Navigate to the previous slide' },
  { prop: 'instance', type: 'RailInstance | null', desc: 'Direct access to the Rail engine instance' },
];

const TOC = [
  { id: 'use-rail', label: 'useRail' },
  { id: 'return-values', label: 'Return Values' },
  { id: 'full-example', label: 'Full Example' },
];

export const HooksPage: FC = () => {
  const { mode } = useBear();
  const isDark = mode === 'dark';
  const mutedText = isDark ? '#64748b' : '#94a3b8';
  const cardBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const headerBg = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)';

  return (
    <DocLayout title="Hooks" description="React hooks for interacting with the Rail carousel instance." toc={TOC}>
      <DocSection id="use-rail" title="useRail">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          Access the Rail instance reactively from any component inside <code className="text-rail-400">&lt;Rail&gt;</code>:
        </Typography>
        <CodeBlock code={CODE_USE_RAIL} language="tsx" title="useRail" copyable showLineNumbers />
      </DocSection>

      <DocSection id="return-values" title="Return Values">
        <div className="overflow-x-auto rounded-xl" style={{ border: `1px solid ${cardBorder}` }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: `1px solid ${cardBorder}`, backgroundColor: headerBg }}>
                <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Property</th>
                <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Type</th>
                <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {RETURN_VALUES.map((row) => (
                <tr key={row.prop} style={{ borderBottom: `1px solid ${cardBorder}` }}>
                  <td className="px-4 py-2.5 font-mono text-rail-400 text-xs">{row.prop}</td>
                  <td className="px-4 py-2.5 font-mono text-xs" style={{ color: mutedText }}>{row.type}</td>
                  <td className="px-4 py-2.5" style={{ color: mutedText }}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="full-example" title="Full Example">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          A complete controls component using all return values from <code className="text-rail-400">useRail</code>:
        </Typography>
        <CodeBlock code={CODE_USE_RAIL_FULL} language="tsx" title="Full Controls" copyable showLineNumbers />
      </DocSection>
    </DocLayout>
  );
};
