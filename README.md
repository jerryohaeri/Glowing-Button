# ✨ Animated Glowing Button

[![React](https://img.shields.io/badge/React-18%2B-blue.svg)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![CSS: @property](https://img.shields.io/badge/CSS-@property-ff69b4.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS/@property)

A sleek, modern, and highly customizable **Rotating Conic-Gradient Glowing Pill Button** component for React and Next.js projects.

---

## 🌟 Features

- 🪄 **Smooth 360° Conic Glow**: Powered by modern CSS `@property` animations for high-performance GPU rendering.
- 🎨 **Fully Customizable**: Change glow colors, rotation speeds, sizes, indicator dots, and labels with simple props.
- ⚡ **Lightweight & Zero-Bloat**: Works with vanilla CSS or as a standalone component without heavy animation libraries.
- 🔗 **Dual Tag Support**: Automatically renders an `<a>` anchor tag if an `href` is provided, or a standard `<button>` tag for interactive actions.
- 📱 **Interactive Showcase**: Includes a built-in sandbox demo with preset themes and real-time live preview.

---

## 🚀 Quick Start

### 1. Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/<your-username>/animated-glowing-button.git
cd animated-glowing-button
npm install
```

### 2. Run the Demo Locally

Start the Vite development server:

```bash
npm run dev
```

Open your browser at `http://localhost:3000` to interact with the button playground.

---

## 💻 Usage

### Basic Example

Import and use `GlowingButton` in any React or Next.js component:

```jsx
import { GlowingButton } from './components/GlowingButton';

export default function HeroSection() {
  return (
    <GlowingButton
      text="Private beta - now onboarding"
      href="https://example.com"
      glowColor="#C64920"
    />
  );
}
```

### Color Presets

```jsx
{/* Ember Flare */}
<GlowingButton text="Private beta - now onboarding" glowColor="#C64920" />

{/* Cyber Violet */}
<GlowingButton text="Join Developer Discord" glowColor="#8B5CF6" />

{/* Matrix Emerald */}
<GlowingButton text="Deploy to Production" glowColor="#10B981" />

{/* Electric Cyan */}
<GlowingButton text="Explore Documentation" glowColor="#06B6D4" />

{/* Neon Rose */}
<GlowingButton text="Upgrade to Pro Plan" glowColor="#EC4899" />
```

---

## ⚙️ Component Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `string` | `"Private beta - now onboarding"` | Label text displayed inside the button. |
| `href` | `string` | `undefined` | Target URL. Renders an `<a>` tag when provided. |
| `glowColor` | `string` | `"#C64920"` | Hex / RGB / HSL color for the gradient glow & dot. |
| `speed` | `string` | `"2.2s"` | CSS duration string for rotation cycle speed. |
| `showDot` | `boolean` | `true` | Whether to display the glowing status dot on the left. |
| `onClick` | `function` | `undefined` | Click event handler callback. |
| `className` | `string` | `""` | Optional CSS class name for the wrapper. |
| `style` | `object` | `{}` | Inline styles to override dimensions, margins, etc. |

---

## 📂 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── GlowingButton.jsx      # Core React component
│   │   └── GlowingButton.css      # CSS styling & @keyframes animations
│   ├── App.jsx                    # Interactive showcase & controls
│   ├── App.css                    # Showcase styling
│   ├── index.css                  # Global styles & dark mode theme
│   └── main.jsx                   # React entry point
├── index.html                     # HTML template
├── vite.config.js                 # Vite bundler configuration
├── package.json                   # Dependencies & scripts
├── .gitignore                     # Git ignore file
├── LICENSE                        # MIT License
└── README.md                      # Documentation
```

---

## 🚢 Pushing to Your GitHub Repository

Follow these simple steps in your terminal to push this project to GitHub:

1. **Create a new repository on GitHub** (e.g., `animated-glowing-button`).
2. **Initialize git & commit your files**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for animated glowing button component"
   ```
3. **Link your remote repository and push**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
