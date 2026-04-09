import { FC } from 'react';
import { Typography, CodeBlock, useBear } from '@forgedevstack/bear';
import { DocLayout } from '@/components/DocLayout';
import { DocSection } from '@/components/DocSection';

const CODE_EVENTS = `<Rail
  onSlideChange={() => { /* ... */ }}
  onReachEnd={() => { /* ... */ }}
  onProgress={(progress) => { /* ... */ }}
  onTouchStart={(data) => { /* ... */ }}
  onInit={() => { /* ... */ }}
  onDestroy={() => { /* ... */ }}
>
  ...
</Rail>`;

const CODE_SLIDE_RENDER = `<Rail>
  <RailSlide>
    {({ isActive }) => (
      <div>Current slide is {isActive ? 'active' : 'not active'}</div>
    )}
  </RailSlide>
</Rail>`;

const RAIL_PROPS = [
  { prop: 'direction', type: "'horizontal' | 'vertical'", def: "'horizontal'", desc: 'Slide direction' },
  { prop: 'slidesPerView', type: "number | 'auto'", def: '1', desc: 'Number of slides visible at once' },
  { prop: 'spaceBetween', type: 'number', def: '0', desc: 'Gap between slides in px' },
  { prop: 'slidesPerGroup', type: 'number', def: '1', desc: 'Slides to advance per swipe' },
  { prop: 'speed', type: 'number', def: '300', desc: 'Transition duration in ms' },
  { prop: 'loop', type: 'boolean', def: 'false', desc: 'Enable infinite loop mode' },
  { prop: 'centeredSlides', type: 'boolean', def: 'false', desc: 'Center the active slide' },
  { prop: 'initialSlide', type: 'number', def: '0', desc: 'Index of the initial slide' },
  { prop: 'grabCursor', type: 'boolean', def: 'false', desc: 'Show grab cursor on hover' },
  { prop: 'effect', type: 'RailEffect', def: "'slide'", desc: 'Transition effect type' },
  { prop: 'allowTouchMove', type: 'boolean', def: 'true', desc: 'Enable touch/drag interaction' },
  { prop: 'threshold', type: 'number', def: '5', desc: 'Minimum drag distance (px)' },
  { prop: 'resistance', type: 'boolean', def: 'true', desc: 'Edge resistance' },
  { prop: 'autoHeight', type: 'boolean', def: 'false', desc: 'Adapt height to active slide' },
  { prop: 'watchSlidesProgress', type: 'boolean', def: 'false', desc: 'Track slide visibility progress' },
  { prop: 'modules', type: 'RailModuleFactory[]', def: '[]', desc: 'Active modules array' },
  { prop: 'breakpoints', type: 'Record<number, Partial<RailOptions>>', def: '\u2014', desc: 'Responsive option overrides per viewport width' },
  { prop: 'onRail', type: '(instance) => void', def: '\u2014', desc: 'Callback that receives the Rail instance' },
];

const SLIDE_PROPS = [
  { prop: 'zoom', type: 'boolean', def: 'false', desc: 'Enables zoom wrapper' },
  { prop: 'virtualIndex', type: 'number', def: '\u2014', desc: 'Actual slide index (required for virtual slides)' },
  { prop: 'className', type: 'string', def: '\u2014', desc: 'Additional CSS class' },
  { prop: 'style', type: 'CSSProperties', def: '\u2014', desc: 'Inline styles' },
];

const RENDER_PROPS = [
  { prop: 'isActive', desc: 'true when current slide is active' },
  { prop: 'isPrev', desc: 'true when slide is previous from active' },
  { prop: 'isNext', desc: 'true when slide is next from active' },
  { prop: 'isVisible', desc: 'true when slide is visible (requires watchSlidesProgress)' },
];

const TOC = [
  { id: 'rail-props', label: 'Rail Props' },
  { id: 'events', label: 'Events' },
  { id: 'railslide-props', label: 'RailSlide Props' },
  { id: 'render-function', label: 'Render Function' },
];

export const RailProps: FC = () => {
  const { mode } = useBear();
  const isDark = mode === 'dark';
  const mutedText = isDark ? '#64748b' : '#94a3b8';
  const cardBorder = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const headerBg = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)';

  const renderPropsTable = (
    rows: { prop: string; type: string; def: string; desc: string }[],
  ) => (
    <div className="overflow-x-auto rounded-xl" style={{ border: `1px solid ${cardBorder}` }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ borderBottom: `1px solid ${cardBorder}`, backgroundColor: headerBg }}>
            <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Prop</th>
            <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Type</th>
            <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Default</th>
            <th className="text-left px-4 py-3 font-medium" style={{ color: mutedText }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
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
  );

  return (
    <DocLayout title="Rail Props" description="Complete reference for Rail and RailSlide component props, events, and render functions." toc={TOC}>
      <DocSection id="rail-props" title="Rail Props">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          The <code className="text-rail-400">Rail</code> component receives all carousel parameters as props:
        </Typography>
        {renderPropsTable(RAIL_PROPS)}
      </DocSection>

      <DocSection id="events" title="Events">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          All events are supported as <code className="text-rail-400">on&#123;EventName&#125;</code> props:
        </Typography>
        <CodeBlock code={CODE_EVENTS} language="tsx" title="Event Props" copyable showLineNumbers={false} />
      </DocSection>

      <DocSection id="railslide-props" title="RailSlide Props">
        {renderPropsTable(SLIDE_PROPS)}
      </DocSection>

      <DocSection id="render-function" title="Render Function">
        <Typography variant="body2" style={{ color: mutedText }} className="mb-4">
          <code className="text-rail-400">RailSlide</code> accepts a render function that receives slide state:
        </Typography>
        <ul className="mb-4 space-y-1">
          {RENDER_PROPS.map((item) => (
            <li key={item.prop} className="flex items-start gap-2 text-sm" style={{ color: mutedText }}>
              <code className="text-rail-400 text-xs font-mono flex-shrink-0">{item.prop}</code>
              <span>\u2014 {item.desc}</span>
            </li>
          ))}
        </ul>
        <CodeBlock code={CODE_SLIDE_RENDER} language="tsx" title="Render Function" copyable showLineNumbers />
      </DocSection>
    </DocLayout>
  );
};
