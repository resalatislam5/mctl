import dayjs from 'dayjs';

/**
 * Format date & time using dayjs
 * @param date - Date | string | number
 * @param format - dayjs format string
 * @returns formatted date string
 */

export const dateAndTimeFormat = (
  date: string | number | Date,
  format: 'DD MMM YYYY, hh:mm A' | 'DD MMM YYYY' | 'DD-MM-YYYY' = 'DD-MM-YYYY',
): string => {
  if (!date) return '';

  return dayjs(date).format(format);
};
