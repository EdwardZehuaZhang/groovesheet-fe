# GrooveSheet Design System

This document outlines the design system for GrooveSheet's frontend application. All UI components should follow these guidelines to maintain visual consistency across the application.

---

## 🎨 Color Palette

### Primary Colors
- **Background**: `#171717` - Main dark background
- **Primary Blue**: `#012FA7` - Primary brand color, used for CTAs and key interactions
- **Primary Blue Hover**: `#0139C7` / `#0138C0` - Hover state for primary elements
- **Feature Accent**: `#012FA7` - Used for feature card borders and accents

### Neutral Colors
- **White**: `#FFFFFF` / `#FFF` - Primary text color
- **Light Gray**: `#F4F4F4` - Light UI elements, button backgrounds
- **Medium Gray**: `#E8E8E8` - Borders, dashed outlines
- **Dark Gray**: `#323033` - Card backgrounds, secondary surfaces
- **Charcoal**: `#1B191C` - Dark text on light backgrounds
- **Disabled Gray**: `#666` - Disabled states
- **Muted Gray**: `#8D8C8D` - Inactive tab text
- **Border Gray**: `#3D3B3E` - Tab borders, dividers

### Dot Grid Pattern
- **Dot Color**: `#171E43` - Background dot grid pattern
- **Dot Size**: `1.5px` radial gradient circles
- **Dot Spacing**: `43px x 43px` grid

### Status Colors
- **Error**: `#FF6B6B` - Error messages and states
- **Success**: `#22C55E` - Success states, completed uploads

### Transparent Overlays
- **Light Overlay**: `rgba(255, 255, 255, 0.05)` - Upload area backgrounds
- **Dark Overlay**: `rgba(0, 0, 0, 0.8)` - Modal overlays
- **Progress Bar Background**: `rgba(255, 255, 255, 0.1)`

---

## 📝 Typography

### Font Family
**Primary Font**: `'Hubot Sans'` with fallbacks:
```css
font-family: 'Hubot Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Code Font**: 
```css
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
```

### Font Weights
- **Light**: `300` - Disclaimers, small text
- **Regular**: `400` - Body text, headings, most content
- **Medium**: `500` - Buttons, emphasized text

### Typography Scale

#### Display/Hero
- **Hero Title**: `76.8px` / `76.8px` line-height, weight 400
- **Hero Subtitle**: `28.8px` / `38.4px` line-height, weight 400

#### Headings
- **H1 (Section Titles)**: `40px` / `52px` line-height, weight 400, `-0.8px` letter-spacing
- **H2 (Upload Header)**: `40px` / `44px` line-height, weight 400
- **H3 (Feature Titles)**: `24px` / `28.8px` line-height, weight 500

#### Body Text
- **Large Body**: `24px` / `32px` line-height, weight 400 (buttons, tabs)
- **Medium Body**: `20px` / `24px` line-height, weight 400 (descriptions)
- **Regular Body**: `18px` / `24px` line-height, weight 400 (upload text)
- **Small Body**: `16px` / `22px` or `20.8px` line-height, weight 400
- **Button Text**: `14px` / `18.2px` line-height, weight 500

#### Small Text
- **Disclaimer**: `12px` / `16px` line-height, weight 300

---

## 🔘 Buttons

### Primary Button
```css
background: #012FA7;
color: #FFF;
border-radius: 120px; /* Pill shape for pricing buttons */
border-radius: 6px; /* For rectangular buttons */
padding: 12px 24px;
font-size: 14px;
font-weight: 500;
line-height: 18.2px;
transition: all 0.3s ease;
```

**Hover State**: `background: #0139C7` or `#0138C0`

### Outline Button
```css
background: #F4F4F4;
color: #1B191C;
border: none;
border-radius: 120px;
padding: 12px 24px;
font-size: 14px;
font-weight: 500;
```

**Hover State**: `background: #E8E8E8`

### Large Action Button (Browse/Upload)
```css
width: 100%;
height: 98px;
background: #012FA7;
border-radius: 6px;
color: #FFF;
font-size: 24px;
font-weight: 400;
line-height: 32px;
```

**Hover State**: `background: #0139C7`

### Disabled State
```css
background: #666;
opacity: 0.6;
cursor: not-allowed;
```

### Button Best Practices
- Use `transition: all 0.2s ease` or `0.3s ease` for smooth interactions
- Remove browser default focus outlines: `outline: none; box-shadow: none;`
- Add `-webkit-appearance: none; appearance: none;` to remove browser defaults
- Use flexbox for icon + text layouts: `display: flex; align-items: center; gap: 8px;`
- Icon size in buttons: `14px x 14px`

---

## 📦 Cards & Containers

### Upload Area
```css
border: 4px dashed #E8E8E8;
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(11.8px);
border-radius: unset; /* No border radius */
padding: 40px;
```

**Dragging State**: 
- Border color: `#012FA7`
- Background: `rgba(1, 47, 167, 0.1)`

**Completed State**:
- Border color: `#22C55E`
- Background: `rgba(34, 197, 94, 0.05)`

### Feature Cards
```css
/* Outer card with colored border */
padding: 16px 4px 4px 4px; /* Top card */
padding: 4px 4px 16px 4px; /* Bottom card */
border-radius: 16px;
background: #012FA7;

/* Inner card content */
padding: 40px 24px 24px 24px;
border-radius: 13px;
background: #323033;
gap: 40px;
```

### Pricing Cards
```css
border-radius: 12px;
background: #323033;
padding: varies by section;
```

---

## 📐 Spacing System

### Standard Gaps
- **XS**: `4px` - Minimal spacing
- **Small**: `8px` - Icon spacing, small gaps
- **Medium**: `12px` - Progress bar spacing
- **Default**: `16px` - Card body gaps
- **Large**: `24px` - Card spacing, content gaps
- **XL**: `28.8px` - Hero text gaps
- **2XL**: `32px` - Section gaps
- **3XL**: `40px` - Container gaps, feature card content
- **4XL**: `60px` - Major section spacing
- **5XL**: `80px` - Section padding (top/bottom)

### Container Padding
- **Horizontal**: `20px` - Standard left/right padding
- **Vertical Section**: `80px` - Top/bottom padding for major sections

### Max Widths
- **Hero Content**: `660px`
- **Upload Area**: `586px`
- **Hero Container**: `1414px`
- **Content Container**: `1190px`
- **Title Wrapper**: `420px`
- **Description Wrapper**: `430px`
- **Hero Subtitle**: `592.8px`

---

## 🎭 Interactive States

### Hover Effects
- **Transform**: `translateY(-2px)` - Lift effect for cards/buttons
- **Scale**: `scale(1.1)` - For small elements like close buttons
- **Opacity**: Reduce to `0.8` for subtle hover effects

### Transitions
- **Fast**: `0.2s ease` - Quick interactions (hover, button presses)
- **Standard**: `0.3s ease` - Default transitions (backgrounds, colors, transforms)
- **Tab Indicator**: `left 0.3s ease` - Animated underline

### Focus States
- Remove default browser focus: `outline: none; box-shadow: none;`
- Firefox fix: `.element::-moz-focus-inner { border: 0; }`
- Add custom focus styles if needed for accessibility

### Animations
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 🔧 Component Patterns

### Progress Bar
```css
.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #012FA7, #0139C7);
  transition: width 0.3s ease;
  border-radius: 4px;
}
```

### Tab System
```css
/* Tab Container */
border-bottom: 2px solid #3D3B3E;

/* Tab Button */
padding: 0 46px 4px 46px;
font-size: 24px;
font-weight: 400;
line-height: 32px;
color: #8D8C8D; /* Inactive */

/* Active Tab */
color: #F4F4F4;

/* Tab Indicator (underline) */
position: absolute;
bottom: -2px;
height: 2px;
background: #F4F4F4;
transition: left 0.3s ease;
```

### Modal Overlay
```css
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.8);
z-index: 2147483647;
animation: fadeIn 0.3s ease-in-out;

/* Modal Content */
animation: slideUp 0.3s ease-in-out;
max-width: 645px;
max-height: 90vh;
overflow-y: auto;
```

### Backdrop Blur
```css
backdrop-filter: blur(11.8px);
background: rgba(255, 255, 255, 0.05);
```

---

## 🌐 Layout

### Flexbox Patterns
```css
/* Centered Content */
display: flex;
justify-content: center;
align-items: center;

/* Column Layout */
display: flex;
flex-direction: column;
gap: [value]px;

/* Responsive Container */
width: 100%;
max-width: [value]px;
padding: 0 20px;
```

### Z-Index Layers
- **Background Dot Grid**: `z-index: 0`
- **Hero Background**: `z-index: 1`
- **Content**: `z-index: 10`
- **Modal Overlay**: `z-index: 2147483647` (maximum)

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `max-width: 640px`
- **Tablet**: `max-width: 768px`
- **Desktop**: `min-width: 769px`

### Mobile Adjustments
- Reduce padding: `padding: 20px` → `padding: 10px`
- Stack horizontally aligned elements vertically
- Reduce font sizes proportionally
- Reduce icon spacing
- Adjust max-widths to `95%` or `100%`
- Min-heights: `120px` → `100px` for buttons

---

## 🎯 Accessibility

### Font Smoothing
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### Scrollbar Hiding
```css
/* Hide scrollbar but maintain functionality */
scrollbar-width: none; /* Firefox */
-ms-overflow-style: none; /* IE/Edge */

::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}
```

### Body Scroll Lock (when modal open)
```css
body.modal-open {
  overflow: hidden;
}
```

---

## 🎪 Special Effects

### Confetti
- Trigger on upload completion
- Duration: `3 seconds`
- Particle count: `50 per interval`
- Origins: `x: 0.1-0.3 and 0.7-0.9, y: random - 0.2`
- Interval: `250ms`

### Background Dot Grid
```css
background-image: radial-gradient(circle, #171E43 1.5px, transparent 1.5px);
background-size: 43px 43px;
```

---

## 💡 Best Practices

### CSS Organization
1. Use component-specific CSS files (e.g., `Hero.css`, `Pricing.css`)
2. Group related styles together
3. Use clear, descriptive class names
4. Avoid `!important` unless absolutely necessary (e.g., high z-index modals)

### Color Usage
- Always use white (`#FFF`) for primary text on dark backgrounds
- Use `#012FA7` for all primary CTAs and important actions
- Use `#323033` for card backgrounds to create depth
- Reserve `#FF6B6B` exclusively for error states
- Use `#22C55E` for success confirmations

### Typography Guidelines
- Keep font-weight at `400` for most content
- Use `500` only for buttons and emphasized elements
- Maintain consistent line-height for readability
- Never exceed `76.8px` for font size (reserved for hero titles)

### Button Guidelines
- Primary actions: Blue (`#012FA7`) background
- Secondary actions: Light (`#F4F4F4`) background with dark text
- Always include hover states with subtle color shifts
- Use pill shape (`border-radius: 120px`) for compact buttons
- Use rectangular (`border-radius: 6px`) for large action buttons

### Spacing Guidelines
- Maintain consistent gaps within component groups
- Use multiples of `4px` for all spacing values
- Larger spacing between major sections (`60px`, `80px`)
- Tighter spacing within related elements (`8px`, `12px`, `16px`)

### Animation Guidelines
- Keep animations subtle and purposeful
- Use `0.2s - 0.3s` duration for most transitions
- Prefer `ease` timing function for natural motion
- Only animate necessary properties for performance

---

## 🚀 Implementation Notes

### Global Styles
- All elements use `box-sizing: border-box`
- Font family is enforced globally with `!important` on `*` selector
- Dark theme (`#171717` background) is applied at app container level
- Dot grid pattern is a fixed background element

### Icon System
- Uses **Phosphor Icons** library (`@phosphor-icons/react`)
- Standard icon size in buttons: `14px x 14px`
- Larger icons for features and decorative elements
- Color inherits from parent or uses explicit color values

### File Upload UX
- Auto-upload on file selection
- Visual drag-and-drop with state changes
- File type validation: MP3, WAV
- File size limit: 100MB
- Progress indication with animated gradient bar
- Confetti celebration on completion

---

## 📚 Component Checklist

When creating new UI components, ensure:
- [ ] Uses `'Hubot Sans'` font family
- [ ] Colors match the defined palette
- [ ] Spacing uses the standard spacing system
- [ ] Buttons follow the button patterns
- [ ] Hover/focus states are implemented
- [ ] Transitions are smooth (`0.2s-0.3s`)
- [ ] Mobile responsive breakpoints are considered
- [ ] Accessibility features (font smoothing, focus states)
- [ ] Follows existing layout patterns (flexbox, max-widths)
- [ ] Z-index is appropriate for the layer

---

*Last Updated: November 2025*
