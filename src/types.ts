import { LabelValueDefinitionStrings } from '@atproto/api/dist/client/types/com/atproto/label/defs.js';

export interface Label {
  identifier: string;
  locales: LabelValueDefinitionStrings[];
}

export interface Account {
  did: string;
  handle: string;
}
