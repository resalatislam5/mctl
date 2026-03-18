import { Grid } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

export const useBreakpoint = Grid.useBreakpoint;

type RangeValue = [Dayjs, Dayjs];

export const datePresets = [
  {
    label: 'Today',
    value: (): RangeValue => [dayjs().startOf('day'), dayjs().endOf('day')],
  },
  {
    label: 'Yesterday',
    value: (): RangeValue => [
      dayjs().subtract(1, 'day').startOf('day'),
      dayjs().subtract(1, 'day').endOf('day'),
    ],
  },
  {
    label: 'Last 1 week',
    value: (): RangeValue => [
      dayjs().subtract(1, 'week').startOf('day'),
      dayjs().endOf('day'),
    ],
  },
  {
    label: 'Last 2 weeks',
    value: (): RangeValue => [
      dayjs().subtract(2, 'week').startOf('day'),
      dayjs().endOf('day'),
    ],
  },
  //   {
  //     label: 'Last 3 weeks',
  //     value: (): RangeValue => [
  //       dayjs().subtract(3, 'week').startOf('day'),
  //       dayjs().endOf('day'),
  //     ],
  //   },
  {
    label: 'Last 1 month',
    value: (): RangeValue => [
      dayjs().subtract(1, 'month').startOf('day'),
      dayjs().endOf('day'),
    ],
  },
  {
    label: 'Last 3 months',
    value: (): RangeValue => [
      dayjs().subtract(3, 'month').startOf('day'),
      dayjs().endOf('day'),
    ],
  },

  {
    label: 'Last 6 months',
    value: (): RangeValue => [
      dayjs().subtract(6, 'month').startOf('day'),
      dayjs().endOf('day'),
    ],
  },
  //   {
  //     label: 'Last 1 year',
  //     value: (): RangeValue => [
  //       dayjs().subtract(1, 'year').startOf('day'),
  //       dayjs().endOf('day'),
  //     ],
  //   },
];
