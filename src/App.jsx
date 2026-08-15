import React, { useState } from 'react';
import { GlowingButton } from './components/GlowingButton';
import { Copy, Check, Sparkles } from 'lucide-react';
import './App.css';

const PRESET_COLORS = [
  { name: 'Ember Flare', color: '#C64920' },
  { name: 'Neon Purple', color: '#8B5CF6' },
  { name: 'Cyber Cyan', color: '#06B6D4' },
  { name: 'Emerald Glow', color: '#10B981' },
  { name: 'Rose Quartz', color: '#EC4899' },
  { name: 'Solar Gold', color: '#F59E0B' },
];

export function App() {
  const [text, setText] = useState('Private beta - now onboarding');
  const [href, setHref] = useState('#');
  const [glowColor, setGlowColor] = useState('#C64920');
  const [speed, setSpeed] = useState('2.2');
  const [showDot, setShowDot] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('react');

  const handleCopyCode = () => {
    const snippet =
      activeTab === 'react'
        ? `<GlowingButton
  text="${text}"
  href="${href}"
  glowColor="${glowColor}"
  speed="${speed}s"
  showDot={${showDot}}
/>`
        : `import { GlowingButton } from './components/GlowingButton';

export default function Page() {
  return (
    <GlowingButton
      text="${text}"
      href="${href}"
      glowColor="${glowColor}"
    />
  );
}`;

    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="app-container">
      {/* Header & Hero */}
      <header className="hero">
        <div className="badge-wrapper">
          <Sparkles size={14} color="#FF6B4A" />
          <span>Ready for Production & GitHub</span>
        </div>
        <h1>Animated Glowing Button</h1>
        <p>
          A sleek, rotating conic-gradient glow pill button component built with React, CSS @property, and smooth transitions.
        </p>
      </header>

      {/* Interactive Sandbox */}
      <section className="playground-card">
        <div className="playground-grid">
          {/* Live Preview Area */}
          <div className="preview-stage">
            <div className="preview-grid-pattern" />
            <GlowingButton
              text={text}
              href={href || undefined}
              glowColor={glowColor}
              speed={`${speed}s`}
              showDot={showDot}
              onClick={(e) => {
                if (href === '#') e.preventDefault();
                setClickCount((c) => c + 1);
              }}
            />
            <div className="click-feedback">
              {clickCount === 0 ? 'Click the button to test interactions' : `Clicked ${clickCount} time${clickCount > 1 ? 's' : ''}`}
            </div>
          </div>

          {/* Controls */}
          <div className="controls-panel">
            <div className="control-group">
              <label className="control-label">Button Text</label>
              <input
                type="text"
                className="control-input"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter button text..."
              />
            </div>

            <div className="control-group">
              <label className="control-label">Target Link (href)</label>
              <input
                type="text"
                className="control-input"
                value={href}
                onChange={(e) => setHref(e.target.value)}
                placeholder="https://..."
              />
            </div>

            <div className="control-group">
              <label className="control-label">
                <span>Glow Color</span>
                <span style={{ color: glowColor, fontFamily: 'var(--font-mono)' }}>{glowColor}</span>
              </label>
              <div className="color-presets">
                {PRESET_COLORS.map((preset) => (
                  <button
                    key={preset.name}
                    className={`color-chip ${glowColor === preset.color ? 'active' : ''}`}
                    style={{ backgroundColor: preset.color }}
                    title={preset.name}
                    onClick={() => setGlowColor(preset.color)}
                  />
                ))}
                <div className="custom-color-wrapper">
                  <input
                    type="color"
                    className="custom-color-input"
                    value={glowColor}
                    onChange={(e) => setGlowColor(e.target.value)}
                    title="Custom Color"
                  />
                </div>
              </div>
            </div>

            <div className="control-group">
              <label className="control-label">
                <span>Rotation Speed ({speed}s)</span>
              </label>
              <input
                type="range"
                min="0.8"
                max="5.0"
                step="0.1"
                className="range-slider"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
              />
            </div>

            <label className="toggle-label">
              <input
                type="checkbox"
                checked={showDot}
                onChange={(e) => setShowDot(e.target.checked)}
              />
              Show Glowing Indicator Dot
            </label>
          </div>
        </div>
      </section>

      {/* Preset Variations Gallery */}
      <section>
        <h2 className="section-title">Color Variations & Presets</h2>
        <p className="section-desc">Explore different color accents and copy configurations.</p>
        <div className="gallery-grid">
          <div className="gallery-card">
            <span className="gallery-card-label">Amber Flare</span>
            <GlowingButton text="Private beta - now onboarding" glowColor="#C64920" />
          </div>
          <div className="gallery-card">
            <span className="gallery-card-label">Cyber Violet</span>
            <GlowingButton text="Join Developer Discord" glowColor="#8B5CF6" />
          </div>
          <div className="gallery-card">
            <span className="gallery-card-label">Matrix Emerald</span>
            <GlowingButton text="Deploy to Production" glowColor="#10B981" />
          </div>
          <div className="gallery-card">
            <span className="gallery-card-label">Electric Cyan</span>
            <GlowingButton text="Explore Documentation" glowColor="#06B6D4" />
          </div>
          <div className="gallery-card">
            <span className="gallery-card-label">Neon Rose</span>
            <GlowingButton text="Upgrade to Pro Plan" glowColor="#EC4899" />
          </div>
          <div className="gallery-card">
            <span className="gallery-card-label">Solar Gold</span>
            <GlowingButton text="Claim Special Offer" glowColor="#F59E0B" />
          </div>
        </div>
      </section>

      {/* Code Snippet Box */}
      <section className="code-section">
        <div className="code-header">
          <div className="code-tabs">
            <button
              className={`code-tab ${activeTab === 'react' ? 'active' : ''}`}
              onClick={() => setActiveTab('react')}
            >
              Component Usage
            </button>
            <button
              className={`code-tab ${activeTab === 'page' ? 'active' : ''}`}
              onClick={() => setActiveTab('page')}
            >
              Full Example
            </button>
          </div>
          <button className="copy-btn" onClick={handleCopyCode}>
            {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>
        </div>
        <pre className="code-content">
          <code>
            {activeTab === 'react'
              ? `<GlowingButton
  text="${text}"
  href="${href}"
  glowColor="${glowColor}"
  speed="${speed}s"
  showDot={${showDot}}
/>`
              : `import React from 'react';
import { GlowingButton } from './components/GlowingButton';

export default function HeroSection() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
      <GlowingButton
        text="${text}"
        href="${href}"
        glowColor="${glowColor}"
        speed="${speed}s"
        showDot={${showDot}}
      />
    </div>
  );
}`}
          </code>
        </pre>
      </section>

      {/* Props Reference Table */}
      <section>
        <h2 className="section-title">Component Props Reference</h2>
        <p className="section-desc">Customizable parameters available on the GlowingButton component.</p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="prop-name">text</td>
                <td className="prop-type">string</td>
                <td className="prop-default">"Private beta - now onboarding"</td>
                <td>Label text displayed inside the button.</td>
              </tr>
              <tr>
                <td className="prop-name">href</td>
                <td className="prop-type">string</td>
                <td className="prop-default">undefined</td>
                <td>Optional URL link. Renders an &lt;a&gt; tag if provided, else &lt;button&gt;.</td>
              </tr>
              <tr>
                <td className="prop-name">glowColor</td>
                <td className="prop-type">string</td>
                <td className="prop-default">"#C64920"</td>
                <td>Hex, RGB, or HSL color for the rotating conic glow and dot.</td>
              </tr>
              <tr>
                <td className="prop-name">speed</td>
                <td className="prop-type">string</td>
                <td className="prop-default">"2.2s"</td>
                <td>CSS duration string controlling the rotation cycle speed.</td>
              </tr>
              <tr>
                <td className="prop-name">showDot</td>
                <td className="prop-type">boolean</td>
                <td className="prop-default">true</td>
                <td>Whether to display the glowing status dot on the left.</td>
              </tr>
              <tr>
                <td className="prop-name">onClick</td>
                <td className="prop-type">function</td>
                <td className="prop-default">undefined</td>
                <td>Event handler called when the button is clicked.</td>
              </tr>
              <tr>
                <td className="prop-name">className</td>
                <td className="prop-type">string</td>
                <td className="prop-default">""</td>
                <td>Additional CSS classes to apply to the root wrapper.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          Built with React & Modern CSS • Ready for GitHub push
        </p>
      </footer>
    </div>
  );
}

export default App;
