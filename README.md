# Juicy — A React Product Showcase

A minimal, animated product showcase built as a hands-on exercise in React state management and CSS animation. The live version is at [React_web_app.vercel.app](web-app-git-master-c-o-d-e-f-a-t-es-projects.vercel.app).

---

## What it does

Four juice flavours are displayed as equal-width panels that fill the screen. Hovering a panel reveals the product image and triggers a colour gradient unique to that flavour. Clicking "View more" expands the panel to fullscreen with a smooth CSS animation, showing the product description, price, and size options. Selecting a size highlights it, and the Back button collapses everything with a reverse animation.

---

## What I learned building this

### React state — more moving parts than expected

The expand/collapse flow uses four pieces of state working together:

```js
const [hovered, setHovered]     = useState(false);
const [clicked, setClicked]     = useState(false);
const [unClicked, setUnClicked] = useState(true);
const [active, setActive]       = useState(false);
```

`clicked` and `unClicked` together drive the animation — `unClicked` flips first to trigger the collapse CSS animation, then a `setTimeout` resets `clicked` after the animation finishes. Getting the timing right between React state and CSS transitions was the trickiest part.

The initial version also had a classic bug: using a plain `let` variable (`classis`) to track which size button was selected. Because it was not state, clicking a button updated the variable but React had no reason to re-render, so nothing visually changed. Replacing it with `useState` fixed it immediately — a good reminder that **anything that should cause a visual change needs to live in state**.

### CSS animations triggered by class names

Rather than using a JS animation library, all transitions are driven by adding and removing class names in React:

- `.active` triggers `@keyframes expand` — the panel grows to full width
- `.unactive` triggers `@keyframes unexpand` — it shrinks back
- `.coolappear` fades content in when the panel opens
- `.fadation` fades the "View more" button out

One lesson here: CSS `animation` does not automatically reverse. You need a separate `@keyframes` for the reverse direction and swap the class. The `animation-fill-mode: forwards` property is also essential — without it, the element snaps back to its original state the moment the animation ends.

### Dynamic styling with the `color` library

Each section receives its colour as a prop and uses it in two ways: as the base of a radial gradient on hover, and as the seed for a lighter tint:

```js
import Color from "color";

background: `radial-gradient(circle, ${Color(colors).lighten(0.8).hex()} 5%, ${colors} 50%)`
```

This means adding a new flavour with a different colour requires zero CSS changes — the gradient generates itself. It was a useful introduction to programmatic colour manipulation as an alternative to hardcoding multiple colour values.

### CSS architecture — keeping it maintainable

The first version of the stylesheet had scattered `z-index` values (0, 1, 2, 3, 4) with no clear system, and hardcoded positions like `left: 42rem` that broke when the section expanded to full width. The refactored version introduced:

- **CSS custom properties** for z-index layers, section width, and brand colours — one change updates everything
- **`left: 50%; transform: translateX(-50%)`** for centering elements inside a dynamically-sized container, instead of guessing pixel offsets
- **Compound selectors** like `.section.active .part2` to scope expanded-state styles without adding extra classes in JSX

---

## Tech

- React (Vite)
- Plain CSS — no UI library
- [`color`](https://www.npmjs.com/package/color) for programmatic colour manipulation
- Deployed on Vercel

## Running locally

```bash
npm install
npm run dev
```
