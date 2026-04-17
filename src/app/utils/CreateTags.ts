import type { TagDescription } from '@reduxjs/toolkit/query';

export const tags = [
  'DASHBOARD',
  'ROLE',
  'COUNTRY',
  'USER',
  'DISTRICT',
  'DIVISION',
  'UPAZILA',
  'BATCH',
  'COURSE',
  'AGENT',
  'AGENT_COMMISSION',
  'AUDIT_LOG',
  'PACKAGE',
  'STUDENT',
  'ENROLLMENT',
  'ACCOUNT',
  'MONEY_RECEIPT',
  'HEAD',
  'EXPENSE_HISTORY',
  'AGENT_PAYMENT',
  'BALANCE_TRANSFER',
  'PROFILE',
  'APP_CONFIG',
  'COURSE_PROGRESS',
] as const;

type tagTypes = (typeof tags)[number];

export const CREATE_TAG = (type: tagTypes): TagDescription<tagTypes> => {
  return { type, id: `${type}_TAG` };
};
