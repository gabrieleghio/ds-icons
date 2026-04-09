import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import * as Icons from '@gabrieleghio/icons-react';
import { ICON_CATEGORIES } from './icons-metadata';
import './styles.css';

// Raggruppa icone per categoria (da metadata generato automaticamente)
const iconsByCategory: Record<string, Array<[string, any]>> = {};
Object.entries(ICON_CATEGORIES).forEach(([category, names]: [string, any]) => {
  iconsByCategory[category] = (names as string[])
    .map((name: string) => [name, (Icons as any)[name]] as [string, any])
    .filter((pair: any) => pair[1]);
});

const AVAILABLE_SIZES = [16, 20, 24, 32, 40, 48] as const;

const getColorPresets = (darkMode: boolean) => [
  { name: darkMode ? 'Light' : 'Dark', value: darkMode ? '#ffffff' : '#1a1a1a' },
  { name: 'Slate', value: '#64748b' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#8b5cf6' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Green', value: '#10b981' },
];

function App() {
  const [size, setSize] = useState<typeof AVAILABLE_SIZES[number]>(48);
  const [darkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState('#1a1a1a');
  const [copied, setCopied] = useState<string | null>(null);

  // Cambia il colore di default quando si cambia il tema
  React.useEffect(() => {
    setColor(darkMode ? '#ffffff' : '#1a1a1a');
  }, [darkMode]);

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="header">
        <div className="header-content">
          <h1>🎨 Icon Gallery</h1>
          <p className="subtitle">Beautiful icon collection</p>
        </div>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? 'Light mode' : 'Dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="container">
        <div className="controls-card">
          <div className="controls">
            <div className="control-group">
              <label>Size</label>
              <div className="size-buttons">
                {AVAILABLE_SIZES.map((s) => (
                  <button
                    key={s}
                    className={`size-button ${size === s ? 'active' : ''}`}
                    onClick={() => setSize(s)}
                  >
                    {s}px
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label>Color</label>
              <div className="color-section">
                <div className="color-input-wrapper">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="color-input"
                  />
                  <span className="color-hex">{color.toUpperCase()}</span>
                </div>
                <div className="color-presets">
                  {getColorPresets(darkMode).map((preset: any) => (
                    <button
                      key={preset.value}
                      className={`color-preset ${color.toLowerCase() === preset.value.toLowerCase() ? 'active' : ''}`}
                      style={{ backgroundColor: preset.value }}
                      onClick={() => setColor(preset.value)}
                      title={preset.name}
                      aria-label={preset.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats">
          <span>
            {Object.values(iconsByCategory).flat().length} icons available
          </span>
        </div>

        {Object.entries(iconsByCategory).map(([category, icons]) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="gallery">
              {icons.map(([name, Component]: [string, any]) => (
                <div
                  key={name}
                  className="icon-card"
                  data-name={name}
                  onClick={() => handleCopy(name)}
                  title={name}
                >
                  <div className="icon-display">
                    <Component size={size} color={color} />
                  </div>
                  <p className="icon-name">{name}</p>
                  {copied === name && <span className="copied-badge">✓ Copied!</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
