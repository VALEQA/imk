# StudiKompas Accessibility Compliance

## Overview

StudiKompas is built with accessibility as a core principle and strives to comply with **WCAG 2.1 Level AA** standards. This document outlines the accessibility features implemented throughout the platform.

## Accessibility Features Implemented

### 1. Semantic HTML Structure

All pages utilize semantic HTML elements to provide proper document structure:

- `<main>` for primary content areas
- `<nav>` for navigation sections
- `<header>` and `<footer>` elements
- Proper heading hierarchy (h1, h2, h3, etc.)
- `<section>` and `<article>` for content organization
- Form elements with associated `<label>` tags

### 2. Keyboard Navigation

- All interactive elements are keyboard accessible
- Tab order follows a logical flow
- Focus indicators are visually distinct
- Forms can be completed entirely with keyboard
- No keyboard traps
- Enter key submits forms
- Escape key closes dialogs/modals

### 3. Screen Reader Support

- ARIA labels (`aria-label`) for icon-only buttons
- ARIA roles for custom components (`role="button"`, `role="alert"`, etc.)
- ARIA live regions for dynamic content updates
- Proper use of `aria-pressed`, `aria-expanded`, etc. for state
- Alternative text for all meaningful images
- Screen reader-only text using `.sr-only` class

### 4. Color Contrast

- All text meets WCAG AA contrast requirements:
  - Normal text: minimum 4.5:1 ratio
  - Large text (18pt+): minimum 3:1 ratio
- Color is not the only means of conveying information
- Status indicators include text labels alongside colors

Implemented color palette:
- Primary text: White on dark backgrounds
- Secondary text: Light gray on dark backgrounds
- Links and interactive: Blue highlighting with underline
- Status badges: Color + text label combination

### 5. Visual Design

- Clear, readable typography with adequate line spacing
- Consistent layout and navigation patterns
- Focus indicators clearly visible
- Icons paired with text labels
- Adequate spacing between interactive elements
- Responsive design works at all zoom levels
- Text remains readable at 200% zoom

### 6. Form Accessibility

- All form inputs have associated `<label>` elements
- Required fields clearly marked with `*` and `aria-required="true"`
- Error messages linked to form fields with `aria-describedby`
- Help text associated with inputs
- Form validation errors displayed prominently
- Clear error recovery instructions

### 7. Navigation

- Clear, consistent navigation menus
- "Skip to main content" links available (can be enhanced)
- Current page/section indicated in navigation
- Breadcrumb navigation for context
- Search functionality with proper labeling
- Multiple ways to find content

### 8. Responsive Design

- Mobile-first approach
- Touch targets minimum 44x44 pixels
- Works at all viewport sizes
- Readable on all devices
- Zoom functionality preserved
- No horizontal scrolling except for tables

### 9. Dynamic Content

- ARIA live regions announce important updates
- Status changes communicated to screen readers
- Loading states clearly indicated
- Modal dialogs properly focused
- Auto-refreshing content can be paused

### 10. Links and Buttons

- Link text is descriptive and meaningful
- "Click here" and similar generic text avoided
- Buttons have clear purpose
- External links indicated (future enhancement)
- Same icon doesn't always represent same action

## Implementation Guidelines for Developers

### Adding New Features

When adding new features to StudiKompas:

1. **Always use semantic HTML** - Use proper heading levels, form elements, etc.
2. **Label all inputs** - Every form field must have a `<label>`
3. **Provide ARIA labels** for icon-only buttons: `aria-label="Close"`
4. **Test keyboard navigation** - Ensure all features work with Tab, Enter, etc.
5. **Check color contrast** - Use tools like WebAIM Contrast Checker
6. **Add alt text** for meaningful images (skip decorative ones)
7. **Use aria-live** for dynamic updates: `aria-live="polite"` or `aria-live="assertive"`

### Testing Accessibility

Tools to use:

- **axe DevTools** - Browser extension for automated testing
- **WAVE** - WebAIM accessibility checker
- **NVDA/JAWS** - Screen reader testing
- **Keyboard only** - Navigate entire app without mouse
- **Zoom to 200%** - Test readability at high zoom levels
- **Lighthouse** - Built-in Chrome DevTools accessibility audit
- **Color Contrast Analyzer** - Verify color ratios

### Common Patterns Used

#### Accessible Button
```tsx
<button 
  onClick={handleClick}
  aria-label="Close dialog"
  className="..."
>
  ✕
</button>
```

#### Accessible Form
```tsx
<form onSubmit={handleSubmit}>
  <label htmlFor="email">Email Address</label>
  <input 
    id="email" 
    type="email" 
    required 
    aria-required="true"
  />
  
  <button type="submit">Submit</button>
</form>
```

#### Accessible Alert
```tsx
<div role="alert" aria-live="polite" className="error-message">
  {error}
</div>
```

## WCAG 2.1 Compliance Checklist

### Perceivable
- [x] Text alternatives for non-text content
- [x] Sufficient color contrast (4.5:1 for normal text)
- [x] Content does not rely solely on color
- [x] Adaptable content structure

### Operable
- [x] All functionality available via keyboard
- [x] No keyboard traps
- [x] Clear focus indicators
- [x] Touch targets at least 44x44 pixels
- [x] No seizure-inducing content

### Understandable
- [x] Clear language and readability
- [x] Consistent navigation patterns
- [x] Form validation and error recovery
- [x] Descriptive link text
- [x] Clear page titles and headings

### Robust
- [x] Valid HTML structure
- [x] Proper use of semantic elements
- [x] Correct ARIA implementation
- [x] Works with assistive technologies

## Known Limitations & Future Improvements

Current limitations:

1. **Live chat** - Real-time features may need additional testing with screen readers
2. **Complex charts** - Future data visualizations should include text summaries
3. **Real-time notifications** - Ensure all updates are announced to screen readers

Future enhancements:

- [ ] Add "Skip to main content" link
- [ ] Implement internationalization for accessibility
- [ ] Add captions for video content (when applicable)
- [ ] Enhanced keyboard shortcuts documentation
- [ ] Extended ARIA annotations for complex interactions
- [ ] High contrast mode toggle

## Accessibility Testing Schedule

- **During development**: Developer performs keyboard testing
- **Before release**: Automated testing with axe/WAVE
- **Quarterly**: Manual testing with screen readers
- **User feedback**: Continuous improvements based on user reports

## Third-Party Components

All shadcn/ui components used in StudiKompas are:
- Built with accessibility in mind
- WCAG 2.1 Level A compliant
- Tested with screen readers
- Keyboard accessible

## Support & Feedback

Users experiencing accessibility issues should:

1. Report issues with detailed description
2. Include: browser, screen reader (if applicable), operating system
3. Describe the specific feature and expected behavior
4. We will respond within 48 hours

**Contact**: [accessibility@studikompas.edu](mailto:accessibility@studikompas.edu)

## References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Articles](https://webaim.org/articles/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [shadcn/ui Accessibility](https://ui.shadcn.com/docs#accessibility)
- [React Accessibility](https://react.dev/learn/accessibility)

---

Last updated: July 2024
Compliance Level: WCAG 2.1 Level AA (Target)
