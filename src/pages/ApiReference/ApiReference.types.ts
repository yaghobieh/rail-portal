export type ApiTab = 'props' | 'events' | 'modules';

export interface CorePropRow {
  [key: string]: unknown;
  prop: string;
  type: string;
  default: string;
  desc: string;
}

export interface EventRow {
  [key: string]: unknown;
  event: string;
  args: string;
  desc: string;
}

export interface ModuleInfoRow {
  [key: string]: unknown;
  name: string;
  cat: string;
  desc: string;
}
