import { Typography } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const HeaderTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => setTime(dayjs().format('ddd DD MMM YYYY hh:mm:ss A'));

    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return <Typography.Text type='secondary'>{time}</Typography.Text>;
};

export default HeaderTime;
