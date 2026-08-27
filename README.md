# O'Donnell Design

Source for [odonnelldesign.com](https://odonnelldesign.com/), the professional website of Siobhan O'Donnell.

## Structure

- `index.html` — homepage
- `assets/css/styles.css` — site styles and responsive rules
- `assets/js/site.js` — pronunciation tooltip interaction
- `assets/icons/` — site and LinkedIn SVG assets
- `assets/fonts/` — locally hosted Unica 77 LL webfonts

## Responsive breakpoints

The homepage is intentionally art-directed rather than built around device presets.

- Above `860px` — desktop composition
- `860px` and below — reduced outer margins and vertical spacing
- `680px` and below — compact layout and modest type reduction
- `420px` and below — small-phone layout
- `359px` and below — final typography refinement

The primary text measure remains capped at `595px`.

## Interaction

The pronunciation tooltip for “Siobhan” supports mouse, touch, and keyboard input.

- Hover: appears on pointer enter and hides on pointer leave
- Click/tap: remains visible for `2.8s`, then fades
- Keyboard focus: remains visible while focused

Reduced-motion and forced-colors preferences are respected.

## Deployment

This is a static site and can be hosted directly with GitHub Pages.

For a custom domain, configure `odonnelldesign.com` in the repository's **Settings → Pages**. GitHub may create or update the `CNAME` file automatically when the domain is saved there.
