import dayjs, { Dayjs } from 'dayjs';

/**
 * Format date & time using dayjs
 * @param date - Date | string | number
 * @param format - dayjs format string
 * @returns formatted date string
 */

export const dateAndTimeFormat = (
  date: string | number | Date | undefined,
  format: 'DD MMM YYYY, hh:mm A' | 'DD MMM YYYY' | 'DD-MM-YYYY' = 'DD-MM-YYYY',
): string => {
  if (!date) return '';

  return dayjs(date).format(format);
};

export const capitalizeFirstLetter = (value: string) => {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

export const dateForPost = (
  date: string | number | Date | undefined | Dayjs | null,
): string => {
  if (!date) return '';
  return dayjs(date).format('YYYY-MM-DD');
};
