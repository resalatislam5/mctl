import { Button, Typography } from 'antd';

const AccessDenied = () => {
  return (
    <div
      style={{
        maxWidth: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto',
        height: '100%',
      }}
    >
      <Typography.Title level={1}>403</Typography.Title>
      <Typography.Title level={3}>Access Denied</Typography.Title>
      <Typography.Text color='secondary'>
        Sorry, but you don't have permission to access this page.
      </Typography.Text>
      <Button href='/'>GO TO HOME</Button>
    </div>
  );
};

export default AccessDenied;
