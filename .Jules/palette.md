# Palette Phase: UX & Accessibility Learnings

## Custom Cursor & Focus
- **Challenge:** Custom GSAP cursors typically only track mouse coordinates, making the site feel "broken" or unresponsive for keyboard-only users.
- **Solution:** Added a global `focusin` event listener that moves the cursor to the center of any focused element. Used `getBoundingClientRect()` to calculate the center.
- **Result:** Visual continuity across all input methods.

## Semantic Accessibility in Minimalist Design
- **Hero Badges:** Used `role="status"` for the "Introducing..." badge to ensure screen readers announce it as an update.
- **Canvas Visualizations:** Added `role="img"` and `aria-label` to the interactive neural network background so its purpose is clear to assistive technology.
- **External Links:** GitHub and social links now have descriptive `aria-label` attributes, as their text content is often minimal.

## Hidden but Accessible
- **Form Labels:** Used the `.sr-only` pattern for the contact form. This maintains the clean, "label-less" look requested for high-end UI while ensuring the form is usable by screen readers.
- **Decorative Elements:** Explicitly used `aria-hidden="true"` on background noise textures and decorative glass blobs to reduce screen reader noise.

## Visual Feedback
- **Focus Visible:** Implemented a branded `:focus-visible` outline. This ensures that users who navigate via keyboard have a clear, high-contrast indicator of their location, matching the site's accent colors rather than relying on browser defaults.
