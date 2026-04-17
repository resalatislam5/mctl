import React, { useEffect, useState } from 'react';
import { Button, Typography, Space, Tag } from 'antd';
import {
  LockOutlined,
  HomeOutlined,
  ArrowLeftOutlined,
  ExclamationCircleOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const glitchKeyframes = `
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@500;700&display=swap');

  @keyframes scanline {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }

  @keyframes flicker {
    0%, 97%, 100% { opacity: 1; }
    98% { opacity: 0.6; }
    99% { opacity: 0.9; }
  }

  @keyframes glitch {
    0%, 90%, 100% { clip-path: none; transform: none; }
    91% { clip-path: polygon(0 10%, 100% 10%, 100% 25%, 0 25%); transform: translate(-3px, 2px); }
    92% { clip-path: polygon(0 60%, 100% 60%, 100% 75%, 0 75%); transform: translate(3px, -2px); }
    93% { clip-path: none; transform: translate(0); }
  }

  @keyframes pulseRing {
    0% { transform: scale(0.8); opacity: 0.8; }
    50% { transform: scale(1.2); opacity: 0.2; }
    100% { transform: scale(0.8); opacity: 0.8; }
  }

  @keyframes countUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes borderGlow {
    0%, 100% { box-shadow: 0 0 10px #ff003320, 0 0 20px #ff003310; }
    50% { box-shadow: 0 0 20px #ff003350, 0 0 40px #ff003330; }
  }
`;

const AccessDenied403: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Inject styles
    const style = document.createElement('style');
    style.textContent = glitchKeyframes;
    document.head.appendChild(style);

    // Periodic glitch
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 400);
    }, 4000);

    return () => {
      clearInterval(glitchInterval);
      document.head.removeChild(style);
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: '#060810',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Rajdhani', sans-serif",
    position: 'relative',
    overflow: 'hidden',
    animation: mounted ? 'flicker 8s infinite' : 'none',
  };

  const gridBgStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255, 0, 51, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 0, 51, 0.04) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    zIndex: 0,
  };

  const radialGlowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '600px',
    background:
      'radial-gradient(circle, rgba(255,0,51,0.06) 0%, transparent 70%)',
    zIndex: 0,
  };

  const scanlineStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background:
      'linear-gradient(transparent, rgba(255, 0, 51, 0.15), transparent)',
    animation: 'scanline 6s linear infinite',
    zIndex: 1,
    pointerEvents: 'none',
  };

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    background: 'rgba(10, 12, 20, 0.95)',
    border: '1px solid rgba(255, 0, 51, 0.25)',
    borderRadius: '2px',
    padding: '56px 64px',
    maxWidth: '560px',
    width: '90%',
    animation: mounted
      ? 'slideIn 0.6s ease forwards, borderGlow 3s ease-in-out infinite'
      : 'none',
    backdropFilter: 'blur(12px)',
  };

  const lockWrapperStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '32px',
  };

  const pulseRing1Style: React.CSSProperties = {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '1px solid rgba(255, 0, 51, 0.4)',
    animation: 'pulseRing 2.5s ease-in-out infinite',
  };

  const pulseRing2Style: React.CSSProperties = {
    ...pulseRing1Style,
    width: '140px',
    height: '140px',
    animation: 'pulseRing 2.5s ease-in-out infinite 0.5s',
    borderColor: 'rgba(255, 0, 51, 0.2)',
  };

  const lockIconWrapperStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'rgba(255, 0, 51, 0.08)',
    border: '1px solid rgba(255, 0, 51, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,
  };

  const errorCodeStyle: React.CSSProperties = {
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: '96px',
    fontWeight: 900,
    color: '#ff0033',
    lineHeight: 1,
    margin: 0,
    textShadow: '0 0 30px rgba(255,0,51,0.5), 0 0 60px rgba(255,0,51,0.2)',
    animation: glitchActive ? 'glitch 0.4s steps(1) forwards' : 'none',
    display: 'block',
    textAlign: 'center',
    letterSpacing: '-2px',
  };

  const dividerStyle: React.CSSProperties = {
    width: '48px',
    height: '2px',
    background: 'linear-gradient(90deg, #ff0033, transparent)',
    margin: '20px auto',
  };

  const infoRowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 14px',
    background: 'rgba(255, 0, 51, 0.04)',
    border: '1px solid rgba(255, 0, 51, 0.12)',
    borderRadius: '2px',
    marginBottom: '8px',
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: '12px',
  };

  return (
    <div style={containerStyle}>
      <div style={gridBgStyle} />
      <div style={radialGlowStyle} />
      <div style={scanlineStyle} />

      {/* Corner decorations */}
      {['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].map((corner) => (
        <div
          key={corner}
          style={{
            position: 'absolute',
            zIndex: 1,
            ...(corner === 'topLeft' && { top: '20px', left: '20px' }),
            ...(corner === 'topRight' && { top: '20px', right: '20px' }),
            ...(corner === 'bottomLeft' && { bottom: '20px', left: '20px' }),
            ...(corner === 'bottomRight' && {
              bottom: '20px',
              right: '20px',
            }),
            width: '24px',
            height: '24px',
            borderTop: corner.startsWith('top')
              ? '1px solid rgba(255,0,51,0.4)'
              : 'none',
            borderBottom: corner.startsWith('bottom')
              ? '1px solid rgba(255,0,51,0.4)'
              : 'none',
            borderLeft: corner.endsWith('Left')
              ? '1px solid rgba(255,0,51,0.4)'
              : 'none',
            borderRight: corner.endsWith('Right')
              ? '1px solid rgba(255,0,51,0.4)'
              : 'none',
          }}
        />
      ))}

      <div style={cardStyle}>
        {/* Lock Icon with pulse */}
        <div style={lockWrapperStyle}>
          <div style={pulseRing2Style} />
          <div style={pulseRing1Style} />
          <div style={lockIconWrapperStyle}>
            <LockOutlined style={{ fontSize: '36px', color: '#ff0033' }} />
          </div>
        </div>

        {/* 403 Code */}
        <span style={errorCodeStyle}>403</span>
        <div style={dividerStyle} />

        {/* Title */}
        <Title
          level={3}
          style={{
            color: '#e8e8e8',
            fontFamily: "'Rajdhani', sans-serif",
            textAlign: 'center',
            letterSpacing: '4px',
            fontSize: '18px',
            fontWeight: 700,
            margin: '0 0 10px',
            textTransform: 'uppercase',
          }}
        >
          ACCESS DENIED
        </Title>

        <Paragraph
          style={{
            color: 'rgba(200,200,200,0.5)',
            textAlign: 'center',
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: '13px',
            marginBottom: '32px',
            lineHeight: 1.7,
          }}
        >
          You do not have permission to access this resource.
          <br />
          This incident has been logged.
        </Paragraph>

        {/* Info rows */}
        <div style={{ marginBottom: '32px' }}>
          {[
            { label: 'STATUS', value: 'FORBIDDEN' },
            { label: 'CODE', value: 'HTTP 403' },
            { label: 'ACCESS', value: 'RESTRICTED' },
          ].map(({ label, value }) => (
            <div key={label} style={infoRowStyle}>
              <Text
                style={{
                  color: 'rgba(255,0,51,0.6)',
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '11px',
                }}
              >
                {label}
              </Text>
              <Tag
                style={{
                  background: 'rgba(255, 0, 51, 0.08)',
                  border: '1px solid rgba(255,0,51,0.25)',
                  color: '#ff6680',
                  fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '11px',
                  borderRadius: '2px',
                  padding: '0 8px',
                }}
              >
                {value}
              </Tag>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <Space style={{ width: '100%', justifyContent: 'center' }} size={12}>
          <Button
            type='primary'
            icon={<HomeOutlined />}
            href='/'
            style={{
              background: '#ff0033',
              border: 'none',
              borderRadius: '2px',
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              letterSpacing: '1px',
              height: '40px',
              padding: '0 24px',
              fontSize: '13px',
              boxShadow: '0 0 15px rgba(255,0,51,0.3)',
            }}
          >
            HOME
          </Button>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => window.history.back()}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,0,51,0.35)',
              color: '#ff6680',
              borderRadius: '2px',
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              letterSpacing: '1px',
              height: '40px',
              padding: '0 24px',
              fontSize: '13px',
            }}
          >
            GO BACK
          </Button>
          <Button
            icon={<ReloadOutlined />}
            onClick={() => window.location.reload()}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(200,200,200,0.4)',
              borderRadius: '2px',
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              height: '40px',
              width: '40px',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Space>

        {/* Footer */}
        <div
          style={{
            marginTop: '32px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255,0,51,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <ExclamationCircleOutlined
            style={{ fontSize: '11px', color: 'rgba(255,0,51,0.4)' }}
          />
          <Text
            style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '10px',
              color: 'rgba(200,200,200,0.25)',
              letterSpacing: '1px',
            }}
          >
            INCIDENT ID:{' '}
            {Math.random().toString(36).substring(2, 10).toUpperCase()}
            <span
              style={{
                display: 'inline-block',
                animation: 'blink 1s step-end infinite',
                marginLeft: '2px',
              }}
            >
              _
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied403;
