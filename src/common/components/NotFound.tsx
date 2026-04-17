import { ArrowLeftOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const { Title, Text } = Typography;

const NotFoundPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [floatY, setFloatY] = useState(0);

  useEffect(() => {
    setVisible(true);
    let frame: number;
    let start: number | null = null;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      setFloatY(Math.sin(elapsed / 1200) * 12);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div style={styles.page}>
      {/* Decorative blobs */}
      <div style={{ ...styles.blob, ...styles.blob1 }} />
      <div style={{ ...styles.blob, ...styles.blob2 }} />
      <div style={{ ...styles.blob, ...styles.blob3 }} />

      <div
        style={{
          ...styles.card,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Floating illustration */}
        <div
          style={{
            transform: `translateY(${floatY}px)`,
            transition: 'transform 0.05s linear',
            marginBottom: 32,
          }}
        >
          <svg
            width='200'
            height='160'
            viewBox='0 0 200 160'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            {/* Planet body */}
            <ellipse
              cx='100'
              cy='90'
              rx='54'
              ry='54'
              fill='#EFF6FF'
              stroke='#BFDBFE'
              strokeWidth='2'
            />
            {/* Crater details */}
            <circle
              cx='82'
              cy='78'
              r='8'
              fill='#DBEAFE'
              stroke='#93C5FD'
              strokeWidth='1.5'
            />
            <circle
              cx='112'
              cy='102'
              r='5'
              fill='#DBEAFE'
              stroke='#93C5FD'
              strokeWidth='1.5'
            />
            <circle
              cx='95'
              cy='108'
              r='3.5'
              fill='#DBEAFE'
              stroke='#93C5FD'
              strokeWidth='1'
            />
            {/* Ring */}
            <ellipse
              cx='100'
              cy='90'
              rx='74'
              ry='18'
              fill='none'
              stroke='#93C5FD'
              strokeWidth='3'
              strokeDasharray='8 4'
            />
            {/* Astronaut body */}
            <g transform='translate(60, 22)'>
              {/* Suit */}
              <rect
                x='10'
                y='22'
                width='28'
                height='32'
                rx='8'
                fill='#E0E7FF'
                stroke='#A5B4FC'
                strokeWidth='1.5'
              />
              {/* Helmet */}
              <circle
                cx='24'
                cy='16'
                r='14'
                fill='#EEF2FF'
                stroke='#A5B4FC'
                strokeWidth='1.5'
              />
              <circle cx='24' cy='16' r='9' fill='#C7D2FE' opacity='0.6' />
              {/* Visor glare */}
              <path
                d='M18 11 Q20 9 23 10'
                stroke='#fff'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
              {/* Arms */}
              <rect
                x='-2'
                y='26'
                width='10'
                height='6'
                rx='3'
                fill='#E0E7FF'
                stroke='#A5B4FC'
                strokeWidth='1'
              />
              <rect
                x='40'
                y='26'
                width='10'
                height='6'
                rx='3'
                fill='#E0E7FF'
                stroke='#A5B4FC'
                strokeWidth='1'
              />
              {/* Legs */}
              <rect
                x='11'
                y='52'
                width='10'
                height='14'
                rx='5'
                fill='#C7D2FE'
                stroke='#A5B4FC'
                strokeWidth='1'
              />
              <rect
                x='26'
                y='52'
                width='10'
                height='14'
                rx='5'
                fill='#C7D2FE'
                stroke='#A5B4FC'
                strokeWidth='1'
              />
            </g>
            {/* Stars */}
            <circle cx='18' cy='18' r='2' fill='#93C5FD' />
            <circle cx='170' cy='30' r='1.5' fill='#A5B4FC' />
            <circle cx='40' cy='140' r='1.5' fill='#93C5FD' />
            <circle cx='185' cy='120' r='2' fill='#A5B4FC' />
            <circle cx='155' cy='12' r='1' fill='#C4B5FD' />
            <circle cx='10' cy='100' r='1.2' fill='#C4B5FD' />
          </svg>
        </div>

        {/* 404 Badge */}
        <div style={styles.badge}>404</div>

        <Title level={2} style={styles.title}>
          Lost in Space
        </Title>

        <Text style={styles.subtitle}>
          The page you're looking for has drifted out of orbit. It may have been
          moved, deleted, or never existed in this universe.
        </Text>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Action Buttons */}
        <Space size={12} wrap style={{ justifyContent: 'center' }}>
          <Button
            type='primary'
            size='large'
            icon={<HomeOutlined />}
            style={styles.primaryBtn}
            onClick={() => (window.location.href = '/')}
          >
            Back to Home
          </Button>
          <Button
            size='large'
            icon={<ArrowLeftOutlined />}
            style={styles.secondaryBtn}
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </Space>

        {/* Footer hint */}
        <Text style={styles.hint}>
          Error code: <code style={styles.code}>PAGE_NOT_FOUND</code>
        </Text>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background:
      'linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 50%, #EEF2FF 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  blob: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(60px)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  blob1: {
    width: 400,
    height: 400,
    background: 'rgba(147, 197, 253, 0.28)',
    top: '-80px',
    left: '-80px',
  },
  blob2: {
    width: 350,
    height: 350,
    background: 'rgba(196, 181, 253, 0.25)',
    bottom: '-60px',
    right: '-60px',
  },
  blob3: {
    width: 280,
    height: 280,
    background: 'rgba(165, 180, 252, 0.2)',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  card: {
    position: 'relative',
    zIndex: 1,
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(191, 219, 254, 0.5)',
    borderRadius: 24,
    padding: '48px 40px',
    maxWidth: 520,
    width: '100%',
    textAlign: 'center',
    boxShadow:
      '0 4px 6px -1px rgba(0,0,0,0.04), 0 20px 60px -10px rgba(99,102,241,0.12)',
  },
  badge: {
    display: 'inline-block',
    background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    color: '#fff',
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 3,
    padding: '4px 16px',
    borderRadius: 999,
    marginBottom: 16,
    textTransform: 'uppercase' as const,
  },
  title: {
    margin: '0 0 12px',
    color: '#1E1B4B',
    fontWeight: 700,
    fontSize: 28,
    lineHeight: 1.3,
  },
  subtitle: {
    display: 'block',
    color: '#6B7280',
    fontSize: 15,
    lineHeight: 1.7,
    maxWidth: 380,
    margin: '0 auto',
  },
  divider: {
    height: 1,
    background:
      'linear-gradient(to right, transparent, rgba(165,180,252,0.4), transparent)',
    margin: '32px 0',
  },
  primaryBtn: {
    background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    border: 'none',
    borderRadius: 10,
    height: 44,
    fontWeight: 600,
    fontSize: 14,
    boxShadow: '0 4px 14px rgba(99,102,241,0.35)',
  },
  secondaryBtn: {
    borderColor: '#C7D2FE',
    color: '#4338CA',
    borderRadius: 10,
    height: 44,
    fontWeight: 600,
    fontSize: 14,
    background: 'rgba(238, 242, 255, 0.6)',
  },
  ghostBtn: {
    borderColor: '#E5E7EB',
    color: '#6B7280',
    borderRadius: 10,
    height: 44,
    fontWeight: 600,
    fontSize: 14,
  },
  hint: {
    display: 'block',
    marginTop: 28,
    color: '#9CA3AF',
    fontSize: 12,
  },
  code: {
    background: '#F3F4F6',
    padding: '2px 8px',
    borderRadius: 6,
    fontFamily: 'monospace',
    fontSize: 11,
    color: '#6366F1',
  },
};

export default NotFoundPage;
