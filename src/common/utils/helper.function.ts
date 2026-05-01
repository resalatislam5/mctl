import dayjs, { Dayjs } from 'dayjs';

/**
 * Format date & time using dayjs
 * @param date - Date | string | number
 * @param format - dayjs format string
 * @returns formatted date string
 */

export const dateAndTimeFormat = (
  date: string | number | Date | undefined,
  format: 'DD MMM YYYY, hh:mm A' | 'DD MMM YYYY' | 'DD-MM-YYYY' = 'DD MMM YYYY',
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

const ones = [
  '',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
];
const tens = [
  '',
  '',
  'Twenty',
  'Thirty',
  'Forty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety',
];

function convertBelow100(n: number): string {
  if (n < 20) return ones[n];
  return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
}

function convertBelow1000(n: number): string {
  if (n < 100) return convertBelow100(n);
  return (
    ones[Math.floor(n / 100)] +
    ' Hundred' +
    (n % 100 ? ' ' + convertBelow100(n % 100) : '')
  );
}

function convertInteger(n: number): string {
  if (n === 0) return 'Zero';

  let result = '';

  if (n >= 10000000) {
    result += convertBelow1000(Math.floor(n / 10000000)) + ' Crore ';
    n %= 10000000;
  }
  if (n >= 100000) {
    result += convertBelow1000(Math.floor(n / 100000)) + ' Lakh ';
    n %= 100000;
  }
  if (n >= 1000) {
    result += convertBelow1000(Math.floor(n / 1000)) + ' Thousand ';
    n %= 1000;
  }
  if (n > 0) {
    result += convertBelow1000(n);
  }

  return result.trim();
}

export function numberToWords(
  amount: number | string | undefined,
  mainUnit: string = 'Taka',
  subUnit: string = 'Poisha',
  subUnitDivisor: number = 100,
): string {
  if (isNaN(Number(amount)) || Number(amount) < 0) return 'Invalid Amount';

  const totalSub = Math.round(Number(amount) * subUnitDivisor);
  const main = Math.floor(totalSub / subUnitDivisor);
  const sub = totalSub % subUnitDivisor;

  if (main === 0 && sub === 0) return `Zero ${mainUnit} Only`;

  let result = '';
  if (main > 0) result += `${convertInteger(main)} ${mainUnit}`;
  if (sub > 0)
    result += `${main > 0 ? ' and ' : ''}${convertInteger(sub)} ${subUnit}`;

  return result + ' Only';
}
