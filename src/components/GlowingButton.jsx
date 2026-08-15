'use client';

/**
 * Animated Glow Button Component
 * Rotating conic-gradient glow pill button for React & Next.js
 *
 * @controls {
 *   "text": { "type": "text", "label": "Text", "default": "Private beta - now onboarding" },
 *   "href": { "type": "text", "label": "Link", "default": "#" },
 *   "glowColor": { "type": "color", "label": "Glow Color", "default": "#C64920" }
 * }
 */

import React, { useEffect } from 'react';
import './GlowingButton.css';

export function GlowingButton({
  text = 'Private beta - now onboarding',
  href,
  glowColor = '#C64920',
  speed = '2.2s',
  showDot = true,
  children,
  className = '',
  style = {},
  onClick,
  ...props
}) {
  // Inject global CSS fallback for environments without CSS bundlers
  useEffect(() => {
    const id = 'glow-btn-global-style';
    if (document.getElementById(id)) return;
    const styleTag = document.createElement('style');
    styleTag.id = id;
    styleTag.innerHTML = `
      @property --glow-angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
      }
      @keyframes glow-btn-rotate {
        0% { --glow-angle: 0deg; }
        100% { --glow-angle: 360deg; }
      }
    `;
    document.head.appendChild(styleTag);
  }, []);

  const rootStyle = {
    '--glow-color': glowColor,
    '--glow-speed': speed,
    height: style.height || '36px',
    width: style.width || (children ? 'auto' : '242px'),
    ...style,
  };

  const content = (
    <span className="glow-btn-inner">
      {showDot && <span className="glow-btn-dot" />}
      {children || text}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`glow-btn-root ${className}`.trim()}
        style={rootStyle}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`glow-btn-root ${className}`.trim()}
      style={rootStyle}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}

// Backward-compatibility alias if imported as NeGaBa
export const NeGaBa = GlowingButton;
export default GlowingButton;
