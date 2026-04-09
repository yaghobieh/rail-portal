import { FC } from 'react';
import { Typography, CodeBlock, useBear } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';

const CODE_BASIC_STORY = `import { Rail, RailSlide } from '@forgedevstack/rail';
import { StoryMode } from '@forgedevstack/rail/modules';

export default function Stories() {
  return (
    <Rail
      modules={[StoryMode]}
      storyMode={{
        enabled: true,
        duration: 5000,
        progressBar: true,
        pauseOnHover: true,
      }}
      direction="horizontal"
      onStoryProgress={(index, progress) => {
        console.log(\`Story \${index}: \${Math.round(progress * 100)}%\`);
      }}
      onStoryComplete={() => console.log('All stories viewed')}
    >
      <RailSlide>Story 1</RailSlide>
      <RailSlide>Story 2</RailSlide>
      <RailSlide>Story 3</RailSlide>
    </Rail>
  );
}`;

const CODE_ADVANCED_STORY = `<Rail
  modules={[StoryMode]}
  storyMode={{
    enabled: true,
    duration: 4000,
    progressBar: true,
    pauseOnHover: true,
    loop: true,
  }}
  direction="horizontal"
>
  <RailSlide>
    <div style={{ background: 'linear-gradient(135deg, #0891b2, #22d3ee)' }}>
      <h2>Welcome</h2>
      <p>Swipe or tap to navigate</p>
    </div>
  </RailSlide>
  <RailSlide>
    <div style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)' }}>
      <h2>Features</h2>
      <p>25+ modules, 7 effects</p>
    </div>
  </RailSlide>
</Rail>`;

const STORY_OPTIONS = [
  { prop: 'enabled', type: 'boolean', def: 'true', desc: 'Enable story mode' },
  { prop: 'duration', type: 'number', def: '3000', desc: 'Duration per slide in ms' },
  { prop: 'progressBar', type: 'boolean', def: 'true', desc: 'Show progress bar at top' },
  { prop: 'pauseOnHover', type: 'boolean', def: 'false', desc: 'Pause auto-advance on hover' },
  { prop: 'pauseOnTouch', type: 'boolean', def: 'true', desc: 'Pause while touch is active' },
  { prop: 'loop', type: 'boolean', def: 'false', desc: 'Loop back to first story after last' },
];

const STORY_EVENTS = [
  { event: 'storyProgress', args: '(slideIndex, progress)', desc: 'Fired on each progress tick (0\u20131)' },
  { event: 'storyComplete', args: '()', desc: 'Fired when all stories have been viewed' },
  { event: 'storyChange', args: '(index)', desc: 'Fired when moving to a new story slide' },
];

const TOC = [
  { id: 'basic', label: 'Basic Usage' },
  { id: 'options', label: 'Options' },
  { id: 'events', label: 'Events' },
  { id: 'advanced', label: 'Advanced Example' },
];

export const StoryModeDocs: FC = () => {
  const { mode } = useBear();
  const isDark = mode === 'dark';
  const mutedText = isDark ? '#64748b' : '#94a3b8';
  const cardBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const headerBg = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)';

  return (
    <DocLayout title="Story Mode" description="Create Instagram-style stories with timed auto-advance, progress bars, tap-to-navigate, and pause-on-hold." toc={TOC}>
      <DocSection id="basic" title="Basic Usage">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          Import the <code className="text-rail-400">StoryMode</code> module and configure with the <code className="text-rail-400">storyMode</code> prop:
        </Typography>
        <CodeBlock code={CODE_BASIC_STORY} language="tsx" title="Story Mode" copyable showLineNumbers />
      </DocSection>

      <DocSection id="options" title="StoryMode Options">
        <div className="overflow-x-auto rounded-xl" style={{ border: `1px solid ${cardBorder}` }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: `1px solid ${cardBorder}`, backgroundColor: headerBg }}>
                <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Option</th>
                <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Type</th>
                <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Default</th>
                <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {STORY_OPTIONS.map((row) => (
                <tr key={row.prop} style={{ borderBottom: `1px solid ${cardBorder}` }}>
                  <td className="px-4 py-2.5 font-mono text-rail-400 text-xs">{row.prop}</td>
                  <td className="px-4 py-2.5 font-mono text-xs" style={{ color: mutedText }}>{row.type}</td>
                  <td className="px-4 py-2.5 font-mono text-xs" style={{ color: mutedText }}>{row.def}</td>
                  <td className="px-4 py-2.5" style={{ color: mutedText }}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="events" title="Story Events">
        <div className="overflow-x-auto rounded-xl" style={{ border: `1px solid ${cardBorder}` }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: `1px solid ${cardBorder}`, backgroundColor: headerBg }}>
                <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Event</th>
                <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Arguments</th>
                <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {STORY_EVENTS.map((row) => (
                <tr key={row.event} style={{ borderBottom: `1px solid ${cardBorder}` }}>
                  <td className="px-4 py-2.5 font-mono text-rail-400 text-xs">{row.event}</td>
                  <td className="px-4 py-2.5 font-mono text-xs" style={{ color: mutedText }}>{row.args}</td>
                  <td className="px-4 py-2.5" style={{ color: mutedText }}>{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="advanced" title="Advanced Example">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          Create a richer story experience with custom content and looping:
        </Typography>
        <CodeBlock code={CODE_ADVANCED_STORY} language="tsx" title="Advanced Stories" copyable showLineNumbers />
      </DocSection>
    </DocLayout>
  );
};
