// import { notification } from 'antd';
// import { capitalizeFirstLetter } from './helper.function';

// type NotificationType = 'success' | 'error' | 'info' | 'warning';

// export const notify = (
//   type: NotificationType = 'success',
//   description?: string,
// ) => {
//   notification[type]({
//     message: capitalizeFirstLetter(type),
//     description: description ?? '',
//     placement: 'bottomRight',
//     duration: 3,
//   });
// };

import { notification } from 'antd';
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { capitalizeFirstLetter } from './helper.function';

type NotificationType = 'success' | 'error' | 'info' | 'warning';

const icons = {
  success: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
  error: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
  info: <InfoCircleOutlined style={{ color: '#1890ff' }} />,
  warning: <ExclamationCircleOutlined style={{ color: '#faad14' }} />,
};

const colors = {
  success: '#f6ffed',
  error: '#fff1f0',
  info: '#e6f7ff',
  warning: '#fffbe6',
};

export const notify = (
  type: NotificationType = 'success',
  description?: string,
) => {
  notification[type]({
    message: capitalizeFirstLetter(type),
    description: description ?? '',
    placement: 'bottomRight',
    duration: 3,
    icon: icons[type],
    style: {
      backgroundColor: colors[type],
      borderRadius: 8,
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      padding: '16px 24px',
    },
  });
};
