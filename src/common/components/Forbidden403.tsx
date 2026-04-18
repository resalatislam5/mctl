import React from 'react';
import { Button, Space, Typography } from 'antd';
import {
  StopOutlined,
  HomeOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface Forbidden403Props {
  title?: string;
  description?: string;
  onGoHome?: () => void;
  onGoBack?: () => void;
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
    padding: '2rem',
    fontFamily: "'DM Sans', sans-serif",
  },
  card: {
    background: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #e5e7eb',
    padding: '56px 48px',
    maxWidth: '480px',
    width: '100%',
    textAlign: 'center',
  },
  iconWrap: {
    width: '72px',
    height: '72px',
    borderRadius: '20px',
    background: '#fff1f0',
    border: '1px solid #ffd5d3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
  },
  icon: {
    fontSize: '30px',
    color: '#f5222d',
  },
  badge: {
    display: 'inline-block',
    background: '#fff1f0',
    color: '#f5222d',
    border: '1px solid #ffd5d3',
    borderRadius: '999px',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    padding: '3px 12px',
    marginBottom: '16px',
    textTransform: 'uppercase' as const,
  },
  title: {
    fontSize: '26px',
    fontWeight: 700,
    color: '#111827',
    marginBottom: '10px',
    lineHeight: 1.3,
  },
  description: {
    fontSize: '15px',
    color: '#6b7280',
    lineHeight: 1.6,
    marginBottom: '36px',
    display: 'block',
  },
  divider: {
    width: '40px',
    height: '2px',
    background: '#f3f4f6',
    margin: '0 auto 28px',
    borderRadius: '2px',
  },
  codeBlock: {
    background: '#f3f4f6',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '32px',
    gap: '12px',
  },
  codeText: {
    fontSize: '13px',
    color: '#374151',
    fontFamily: "'Fira Code', monospace",
    background: 'transparent',
    wordBreak: 'break-all' as const,
  },
  codeLabel: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#9ca3af',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    whiteSpace: 'nowrap' as const,
  },
};

const Forbidden403: React.FC<Forbidden403Props> = ({
  title = 'Access Denied',
  description = "You don't have permission to view this page. Contact your administrator if you believe this is a mistake.",
  onGoHome,
  onGoBack,
}) => {
  const handleGoHome = onGoHome ?? (() => (window.location.href = '/'));
  const handleGoBack = onGoBack ?? (() => window.history.back());

  return (
    <div style={styles.container}>
      <link
        href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fira+Code&display=swap'
        rel='stylesheet'
      />
      <div style={styles.card}>
        <div style={styles.iconWrap}>
          <StopOutlined style={styles.icon} />
        </div>

        <span style={styles.badge}>Error 403</span>

        <Title level={2} style={styles.title}>
          {title}
        </Title>

        <Text style={styles.description}>{description}</Text>

        <div style={styles.divider} />

        <div style={styles.codeBlock}>
          <span style={styles.codeLabel}>Path</span>
          <span style={styles.codeText}>{window.location.pathname}</span>
        </div>

        <Space
          size={12}
          wrap
          style={{ justifyContent: 'center', width: '100%' }}
        >
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={handleGoBack}
            size='large'
            style={{
              borderRadius: '8px',
              fontWeight: 500,
              border: '1px solid #e5e7eb',
              color: '#374151',
              height: '44px',
              padding: '0 20px',
            }}
          >
            Go Back
          </Button>
          <Button
            type='primary'
            icon={<HomeOutlined />}
            onClick={handleGoHome}
            size='large'
            style={{
              borderRadius: '8px',
              fontWeight: 500,
              background: '#111827',
              borderColor: '#111827',
              height: '44px',
              padding: '0 20px',
            }}
          >
            Go to Home
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Forbidden403;
