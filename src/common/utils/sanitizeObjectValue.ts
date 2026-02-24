/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs';

export const sanitizeObjectValue = <T extends Record<string, any>>(
  obj: T,
  options?: {
    dateFormat?:
      | 'YYYY-MM-DD'
      | 'YYYY-MM-DD HH:mm:ss'
      | 'YYYY-MM-DD HH:mm'
      | 'YYYY-MM-DDTHH:mm:ssZ';
    removeZero?: boolean;
    removeFalse?: boolean;
    removeNaN?: boolean;
    ignoreKeys?: readonly (keyof T)[];
  },
): T => {
  if (obj == null) return obj;

  const { dateFormat = 'YYYY-MM-DD', ignoreKeys = [] } = options ?? {};
  const sanitized: any = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (ignoreKeys.includes(key)) return;

    if (dayjs.isDayjs(value)) {
      sanitized[key] = value.format(dateFormat);
    } else if (Array.isArray(value)) {
      const cleanedArray = value
        .map((item) =>
          typeof item === 'object' && item !== null
            ? sanitizeObjectValue(item, options)
            : item,
        )
        .filter((item) => {
          if (typeof item === 'object' && item !== null) {
            return Object.keys(item).length > 0;
          }
          return true;
        });

      if (cleanedArray.length > 0) sanitized[key] = cleanedArray;
    } else if (typeof value === 'object' && value !== null) {
      const nested = sanitizeObjectValue(value, options);
      if (Object.keys(nested).length > 0) sanitized[key] = nested;
    } else if (value !== null && value !== undefined && value !== '') {
      sanitized[key] = value;
    }
  });

  return sanitized;
};
