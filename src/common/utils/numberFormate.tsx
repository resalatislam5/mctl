// NUMBER WITH COMMA

import type { JSX } from 'react';

/**
 * Format a number with commas.
 * Accepts number or numeric string.
 *
 * @param value - Number or numeric string to format
 * @returns JSX element with formatted number or 'Invalid format' in a span with appropriate color
 */
export const dueNumberFormat = (value: number | string): JSX.Element => {
  let num: number;

  if (typeof value === 'number') {
    num = value;
  } else if (typeof value === 'string') {
    num = parseFloat(value);
    if (isNaN(num))
      return <span style={{ color: 'black' }}>Invalid format</span>;
  } else {
    return <span style={{ color: 'black' }}>Invalid format</span>;
  }

  const color = num > 0 ? 'red' : 'black';
  return <span style={{ color }}>{num.toLocaleString()}</span>;
};

/**
 * Format a number with commas and color based on value.
 * - Positive numbers → green
 * - Zero or negative numbers → black
 * - Invalid input → 'Invalid format' (black)
 *
 * @param value - Number or numeric string to format
 * @returns JSX element with formatted number or 'Invalid format'
 */
export const advanceNumberFormat = (value: number | string): JSX.Element => {
  let num: number;

  if (typeof value === 'number') {
    num = value;
  } else if (typeof value === 'string') {
    num = parseFloat(value);
    if (isNaN(num))
      return <span style={{ color: 'black' }}>Invalid format</span>;
  } else {
    return <span style={{ color: 'black' }}>Invalid format</span>;
  }

  const color = num > 0 ? 'green' : 'black';
  return <span style={{ color }}>{num.toLocaleString()}</span>;
};

export const numberWithComma = (value: number | string): number | string => {
  let num: number;

  if (typeof value === 'number') {
    num = value;
  } else if (typeof value === 'string') {
    num = parseFloat(value);
    if (isNaN(num)) return 0;
  } else {
    return 0;
  }

  return num.toLocaleString();
};
