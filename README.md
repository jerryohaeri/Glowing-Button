# ✨ Animated Glowing Button

[![React](https://img.shields.io/badge/React-18%2B-blue.svg)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![CSS: @property](https://img.shields.io/badge/CSS-@property-ff69b4.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen.svg)]()

A sleek, modern, and customizable **Rotating Conic-Gradient Glowing Pill Button** for React & Next.js projects. Perfect for call-to-actions, private beta announcements, waitlists, hero headers, and feature highlights.

---

## ⚡ Try It Out

### Option 1: Run the Interactive Showcase Locally
Clone and run the interactive playground to test different colors, rotation speeds, links, and presets in real-time:

```bash
git clone https://github.com/jerryohaeri/Glowing-Button.git
cd Glowing-Button
npm install
npm run dev
```

Visit `http://localhost:3000` to access the live sandbox!

---

## 📋 Quick Copy-Paste (Single-File Component)

Want to drop this into your existing React or Next.js project immediately? Copy the self-contained component below into `components/GlowingButton.jsx` (or `.tsx`):

```jsx
'use client';

import React, { useEffect } from 'react';

export function GlowingButton({
  text = 'Private beta - now onboarding',
  href = '#',
  glowColor = '#C64920',
  speed = '2.2s',
  showDot = true,
  children,
  className = '',
  style = {},
  onClick,
  ...props
}) {
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
      .glow-btn-root {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        padding: 1px;
        text-decoration: none;
        background: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        font-family: inherit;
        transition: transform 0.15s ease, filter 0.2s ease;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .glow-btn-root::before,
      .glow-btn-root::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background-image: conic-gradient(
          from var(--glow-angle, 0deg) at 50% 50%,
          transparent 0%,
          transparent 33%,
          var(--glow-color, #C64920) 50%,
          transparent 66%,
          transparent 100%
        );
        animation: glow-btn-rotate var(--glow-speed, 2.2s) linear infinite;
        pointer-events: none;
        -webkit-mask-image: -webkit-radial-gradient(white, black);
      }
      .glow-btn-root::before {
        filter: blur(14px);
        opacity: 0.9;
      }
      .glow-btn-root:hover {
        transform: translateY(-1px);
      }
      .glow-btn-root:hover::before {
        filter: blur(18px);
        opacity: 1;
      }
      .glow-btn-root:active {
        transform: scale(0.97);
      }
      .glow-btn-inner {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        height: 100%;
        padding: 0 24px;
        border-radius: 100px;
        background: rgba(10, 10, 10, 0.88);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        color: #F2F2F2;
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        transition: background 0.2s ease, color 0.2s ease;
      }
      .glow-btn-root:hover .glow-btn-inner {
        background: rgba(22, 22, 22, 0.85);
        color: #FFFFFF;
      }
      .glow-btn-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--glow-color, #C64920);
        box-shadow: 0 0 8px var(--glow-color, #C64920);
        flex-shrink: 0;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .glow-btn-root:hover .glow-btn-dot {
        transform: scale(1.25);
        box-shadow: 0 0 12px var(--glow-color, #C64920);
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

export default GlowingButton;
```

---

## 🎨 Presets & Usage Examples

### 1. Ember Flare (Default)
```jsx
<GlowingButton
  text="Private beta - now onboarding"
  href="/beta"
  glowColor="#C64920"
/>
```

### 2. Cyberpunk Violet
```jsx
<GlowingButton
  text="Join Developer Discord"
  href="https://discord.gg"
  glowColor="#8B5CF6"
  speed="1.8s"
/>
```

### 3. Matrix Emerald
```jsx
<GlowingButton
  text="Deploy to Production"
  glowColor="#10B981"
  onClick={() => console.log('Deploying...')}
/>
```

### 4. Electric Cyan
```jsx
<GlowingButton
  text="Explore Documentation"
  href="/docs"
  glowColor="#06B6D4"
/>
```

### 5. Neon Rose
```jsx
<GlowingButton
  text="Upgrade to Pro Plan"
  href="/pricing"
  glowColor="#EC4899"
/>
```

---

## ⚙️ Component Props API

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `string` | `"Private beta - now onboarding"` | Label text displayed inside the button. |
| `href` | `string` | `undefined` | Target URL. Renders an `<a>` tag when provided, otherwise a `<button>`. |
| `glowColor` | `string` | `"#C64920"` | Hex, RGB, or HSL color for the rotating conic glow and indicator dot. |
| `speed` | `string` | `"2.2s"` | CSS duration string controlling the rotation cycle speed. |
| `showDot` | `boolean` | `true` | Whether to display the glowing indicator dot on the left. |
| `onClick` | `function` | `undefined` | Click event handler callback. |
| `children` | `ReactNode`| `undefined` | Custom children content (overrides `text` prop if provided). |
| `className`| `string` | `""` | Additional CSS classes for styling. |
| `style` | `object` | `{}` | Inline style overrides (e.g., custom width, height, margin). |

---

## 🛠️ How It Works Under The Hood

1. **CSS `@property` Registration**: Registers `--glow-angle` as an `<angle>` property, enabling browsers to interpolate and animate conic gradient angles smoothly via CSS `@keyframes` on the GPU.
2. **Dual Pseudo-Elements (`::before` & `::after`)**:
   - `::before`: Rendered with heavy Gaussian blur (`filter: blur(14px)`) to create the ambient aura glow around the button.
   - `::after`: Provides sharp, defined edge illumination along the border.
3. **Glassmorphic Surface (`backdrop-filter`)**: The inner container features deep dark translucency with subtle backdrop blur, letting the rotating glow beam through the edges cleanly.

---

## 📄 License

MIT License © [Jerry Ohaeri](https://github.com/jerryohaeri). Free for personal and commercial use.
