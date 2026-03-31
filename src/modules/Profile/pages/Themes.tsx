import { CheckOutlined } from '@ant-design/icons';
import { Button, message, Space, Tag, Typography } from 'antd';
import React, { useState } from 'react';

const { Title, Text } = Typography;

/* ─── Theme Definitions ─────────────────────────────────── */
const FONT_FAMILIES = [
  { id: 'inter', label: 'Inter', value: "'Inter', sans-serif", sample: 'Aa' },
  {
    id: 'poppins',
    label: 'Poppins',
    value: "'Poppins', sans-serif",
    sample: 'Aa',
  },
  {
    id: 'merriweather',
    label: 'Merriweather',
    value: "'Merriweather', serif",
    sample: 'Aa',
  },
  {
    id: 'roboto-mono',
    label: 'Roboto Mono',
    value: "'Roboto Mono', monospace",
    sample: 'Aa',
  },
  {
    id: 'playfair',
    label: 'Playfair Display',
    value: "'Playfair Display', serif",
    sample: 'Aa',
  },
  {
    id: 'nunito',
    label: 'Nunito',
    value: "'Nunito', sans-serif",
    sample: 'Aa',
  },
];

const COLOR_THEMES = [
  {
    id: 'forest',
    label: 'Forest Green',
    primary: '#16a34a',
    bg: '#f0fdf4',
    accent: '#bbf7d0',
    text: '#14532d',
    preview: ['#16a34a', '#22c55e', '#bbf7d0'],
  },
  {
    id: 'ocean',
    label: 'Ocean Blue',
    primary: '#2563eb',
    bg: '#eff6ff',
    accent: '#bfdbfe',
    text: '#1e3a8a',
    preview: ['#2563eb', '#3b82f6', '#bfdbfe'],
  },
  {
    id: 'sunset',
    label: 'Sunset Orange',
    primary: '#ea580c',
    bg: '#fff7ed',
    accent: '#fed7aa',
    text: '#7c2d12',
    preview: ['#ea580c', '#f97316', '#fed7aa'],
  },
  {
    id: 'royal',
    label: 'Royal Purple',
    primary: '#7c3aed',
    bg: '#faf5ff',
    accent: '#ddd6fe',
    text: '#4c1d95',
    preview: ['#7c3aed', '#8b5cf6', '#ddd6fe'],
  },
  {
    id: 'rose',
    label: 'Rose Pink',
    primary: '#e11d48',
    bg: '#fff1f2',
    accent: '#fecdd3',
    text: '#881337',
    preview: ['#e11d48', '#f43f5e', '#fecdd3'],
  },
  {
    id: 'slate',
    label: 'Slate Gray',
    primary: '#475569',
    bg: '#f8fafc',
    accent: '#cbd5e1',
    text: '#1e293b',
    preview: ['#475569', '#64748b', '#cbd5e1'],
  },
];

const DARK_MODE_OPTIONS = [
  { id: 'light', label: 'Light', icon: '☀️' },
  { id: 'dark', label: 'Dark', icon: '🌙' },
  { id: 'system', label: 'System', icon: '💻' },
];

const FONT_SIZES = [
  { id: 'sm', label: 'Small', value: '13px' },
  { id: 'md', label: 'Medium', value: '15px' },
  { id: 'lg', label: 'Large', value: '17px' },
];

/* ─── Component ─────────────────────────────────────────── */
const Themes: React.FC = () => {
  const [activeColor, setActiveColor] = useState('forest');
  const [activeFont, setActiveFont] = useState('inter');
  const [activeDark, setActiveDark] = useState('light');
  const [activeFontSize, setActiveFontSize] = useState('md');

  const user = {
    name: 'Resalat Islam',
    email: 'resalat.m360ict@gmail.com',
    type: 'ADMIN',
  };

  const selectedTheme = COLOR_THEMES.find((t) => t.id === activeColor)!;

  const handleSave = () => {
    message.success('Theme preferences saved!');
  };

  return (
    <div>
      <Title level={5} style={{ marginBottom: 4, fontWeight: 700 }}>
        Themes
      </Title>
      <Text
        type='secondary'
        style={{ fontSize: 13, display: 'block', marginBottom: 24 }}
      >
        Personalise the look and feel of your dashboard.
      </Text>

      {/* Profile Hero */}
      <Space align='start' size={20} style={{ marginBottom: 28 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 10,
            border: '1px solid #e8e8e8',
            background: '#f9f9f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          <svg width='56' height='56' viewBox='0 0 90 90' fill='none'>
            <circle cx='45' cy='32' r='18' fill='#FDDBB4' />
            <rect x='27' y='48' width='36' height='30' rx='6' fill='#E8F5E9' />
            <rect x='32' y='54' width='26' height='24' rx='4' fill='#fff' />
            <rect x='38' y='56' width='14' height='4' rx='2' fill='#E53E3E' />
            <ellipse cx='38' cy='33' rx='2' ry='2.5' fill='#3D2B1F' />
            <ellipse cx='52' cy='33' rx='2' ry='2.5' fill='#3D2B1F' />
            <path
              d='M40 40 Q45 44 50 40'
              stroke='#C87941'
              strokeWidth='1.2'
              fill='none'
              strokeLinecap='round'
            />
            <path
              d='M27 30 Q45 16 63 30'
              stroke='#5C3D1E'
              strokeWidth='3'
              fill='#5C3D1E'
              strokeLinecap='round'
            />
            <rect
              x='34'
              y='29'
              width='10'
              height='5'
              rx='2'
              fill='none'
              stroke='#3A3A3A'
              strokeWidth='1.2'
            />
            <rect
              x='46'
              y='29'
              width='10'
              height='5'
              rx='2'
              fill='none'
              stroke='#3A3A3A'
              strokeWidth='1.2'
            />
            <line
              x1='44'
              y1='31'
              x2='46'
              y2='31'
              stroke='#3A3A3A'
              strokeWidth='1.2'
            />
          </svg>
        </div>
        <div>
          <Title level={4} style={{ margin: 0, marginBottom: 4 }}>
            {user.name}
          </Title>
          <Text
            type='secondary'
            style={{ fontSize: 13, display: 'block', marginBottom: 6 }}
          >
            {user.email}
          </Text>
          <Tag
            color='success'
            style={{ fontWeight: 700, fontSize: 11, padding: '1px 8px' }}
          >
            {user.type}
          </Tag>
        </div>
      </Space>

      {/* ── Live Preview Strip ── */}
      <div
        style={{
          borderRadius: 10,
          padding: '14px 18px',
          background: selectedTheme.bg,
          border: `1.5px solid ${selectedTheme.accent}`,
          marginBottom: 28,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          transition: 'all 0.3s',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: selectedTheme.primary,
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <Text
            style={{
              fontFamily: FONT_FAMILIES.find((f) => f.id === activeFont)?.value,
              fontSize: FONT_SIZES.find((s) => s.id === activeFontSize)?.value,
              color: selectedTheme.text,
              fontWeight: 600,
              display: 'block',
            }}
          >
            Preview: {selectedTheme.label}
          </Text>
          <Text
            style={{
              fontFamily: FONT_FAMILIES.find((f) => f.id === activeFont)?.value,
              fontSize: '12px',
              color: selectedTheme.text,
              opacity: 0.7,
            }}
          >
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
        <Button
          size='small'
          style={{
            background: selectedTheme.primary,
            borderColor: selectedTheme.primary,
            color: '#fff',
            fontSize: 12,
          }}
        >
          Sample Button
        </Button>
      </div>

      {/* ── Color Theme ── */}
      <SectionTitle label='Color Theme' />
      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          marginBottom: 28,
        }}
      >
        {COLOR_THEMES.map((theme) => (
          <div
            key={theme.id}
            onClick={() => setActiveColor(theme.id)}
            style={{
              cursor: 'pointer',
              borderRadius: 10,
              border:
                activeColor === theme.id
                  ? `2px solid ${theme.primary}`
                  : '2px solid #e8e8e8',
              padding: '10px 14px',
              minWidth: 120,
              background: activeColor === theme.id ? theme.bg : '#fafafa',
              transition: 'all 0.2s',
              position: 'relative',
            }}
          >
            {/* Swatch row */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
              {theme.preview.map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 4,
                    background: c,
                  }}
                />
              ))}
            </div>
            <Text style={{ fontSize: 12, fontWeight: 600, color: '#333' }}>
              {theme.label}
            </Text>
            {activeColor === theme.id && (
              <div
                style={{
                  position: 'absolute',
                  top: 6,
                  right: 6,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: theme.primary,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckOutlined style={{ fontSize: 9, color: '#fff' }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Font Family ── */}
      <SectionTitle label='Font Family' />
      <div
        style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          marginBottom: 28,
        }}
      >
        {FONT_FAMILIES.map((font) => (
          <div
            key={font.id}
            onClick={() => setActiveFont(font.id)}
            style={{
              cursor: 'pointer',
              borderRadius: 8,
              border:
                activeFont === font.id
                  ? `2px solid ${selectedTheme.primary}`
                  : '2px solid #e8e8e8',
              padding: '10px 16px',
              background: activeFont === font.id ? selectedTheme.bg : '#fafafa',
              transition: 'all 0.2s',
              textAlign: 'center',
              minWidth: 100,
            }}
          >
            <div
              style={{
                fontFamily: font.value,
                fontSize: 22,
                fontWeight: 700,
                color: activeFont === font.id ? selectedTheme.primary : '#555',
                lineHeight: 1.2,
                marginBottom: 4,
              }}
            >
              {font.sample}
            </div>
            <Text style={{ fontSize: 11, color: '#888' }}>{font.label}</Text>
          </div>
        ))}
      </div>

      {/* ── Font Size ── */}
      <SectionTitle label='Font Size' />
      <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
        {FONT_SIZES.map((size) => (
          <div
            key={size.id}
            onClick={() => setActiveFontSize(size.id)}
            style={{
              cursor: 'pointer',
              borderRadius: 8,
              border:
                activeFontSize === size.id
                  ? `2px solid ${selectedTheme.primary}`
                  : '2px solid #e8e8e8',
              padding: '10px 24px',
              background:
                activeFontSize === size.id ? selectedTheme.bg : '#fafafa',
              transition: 'all 0.2s',
              textAlign: 'center',
            }}
          >
            <Text
              style={{
                fontSize: size.value,
                color:
                  activeFontSize === size.id ? selectedTheme.primary : '#555',
                fontWeight: activeFontSize === size.id ? 700 : 400,
              }}
            >
              {size.label}
            </Text>
          </div>
        ))}
      </div>

      {/* ── Mode ── */}
      <SectionTitle label='Display Mode' />
      <div style={{ display: 'flex', gap: 10, marginBottom: 32 }}>
        {DARK_MODE_OPTIONS.map((opt) => (
          <div
            key={opt.id}
            onClick={() => setActiveDark(opt.id)}
            style={{
              cursor: 'pointer',
              borderRadius: 8,
              border:
                activeDark === opt.id
                  ? `2px solid ${selectedTheme.primary}`
                  : '2px solid #e8e8e8',
              padding: '10px 24px',
              background: activeDark === opt.id ? selectedTheme.bg : '#fafafa',
              transition: 'all 0.2s',
              textAlign: 'center',
              minWidth: 90,
            }}
          >
            <div style={{ fontSize: 20, marginBottom: 4 }}>{opt.icon}</div>
            <Text
              style={{
                fontSize: 12,
                color: activeDark === opt.id ? selectedTheme.primary : '#555',
                fontWeight: activeDark === opt.id ? 700 : 400,
              }}
            >
              {opt.label}
            </Text>
          </div>
        ))}
      </div>

      {/* Actions */}
      <Space>
        <Button
          type='primary'
          style={{
            background: selectedTheme.primary,
            borderColor: selectedTheme.primary,
          }}
          onClick={handleSave}
        >
          Save Preferences
        </Button>
        <Button
          onClick={() => {
            setActiveColor('forest');
            setActiveFont('inter');
            setActiveDark('light');
            setActiveFontSize('md');
          }}
        >
          Reset to Default
        </Button>
      </Space>
    </div>
  );
};

/* ── tiny helper ── */
const SectionTitle: React.FC<{ label: string }> = ({ label }) => (
  <div style={{ marginBottom: 12 }}>
    <Text
      style={{
        fontSize: 13,
        fontWeight: 700,
        color: '#374151',
        textTransform: 'uppercase',
        letterSpacing: 0.6,
      }}
    >
      {label}
    </Text>
    <div
      style={{
        width: 28,
        height: 2,
        background: '#e5e7eb',
        borderRadius: 2,
        marginTop: 4,
      }}
    />
  </div>
);

export default Themes;
