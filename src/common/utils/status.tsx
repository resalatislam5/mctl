// const statusColor = [
//   { name: 'ACTIVE', color: '#52c41a' },
//   { name: 'INACTIVE', color: '#ff4d4f' },
//   { name: 'TRUE', color: '#1677ff' },
//   { name: 'FALSE', color: '#faad14' },
// ];

// type StatusType = 'ACTIVE' | 'INACTIVE' | 'TRUE' | 'FALSE';

// export const getStatus = (status: StatusType | boolean) => {
//   const formattedStatus =
//     typeof status === 'boolean' ? (status ? 'TRUE' : 'FALSE') : status;

//   const statusObj = statusColor.find((s) => s.name === formattedStatus);

//   return (
//     <p
//       style={{
//         backgroundColor: statusObj?.color || '#d9d9d9',
//         color: '#fff',
//         padding: '4px 10px',
//         borderRadius: '6px',
//         display: 'inline-block',
//         fontSize: '12px',
//         fontWeight: 500,
//       }}
//     >
//       {formattedStatus}
//     </p>
//   );
// };

const STATUS_COLOR = {
  ACTIVE: 'green',
  INACTIVE: 'red',
  TRUE: 'blue',
  FALSE: 'orange',
} as const;

import { Tag } from 'antd';

type StatusType = keyof typeof STATUS_COLOR;

export const getStatusTag = (status: StatusType | boolean) => {
  const formattedStatus =
    typeof status === 'boolean' ? (status ? 'TRUE' : 'FALSE') : status;

  return <Tag color={STATUS_COLOR[formattedStatus]}>{formattedStatus}</Tag>;
};
