import type { TagDescription } from '@reduxjs/toolkit/query';

export const tags = ['DASHBOARD', 'ROLE', 'COUNTRY', 'USER'] as const;

type tagTypes = (typeof tags)[number];

export const CREATE_TAG = (type: tagTypes): TagDescription<tagTypes> => {
  return { type, id: `${type}_TAG` };
};
