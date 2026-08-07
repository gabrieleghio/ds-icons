import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderExportTemplate48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M43.6054 2.53662H3.52539C2.97539 2.53662 2.52539 2.98662 2.52539 3.53662V43.6166C2.52539 44.1666 2.97539 44.6166 3.52539 44.6166H43.6054C44.1554 44.6166 44.6054 44.1666 44.6054 43.6166V3.53662C44.6054 2.98662 44.1554 2.53662 43.6054 2.53662ZM4.52539 4.53662H42.6054V17.6566H4.52539V4.53662ZM4.52539 42.6166V19.6566H17.0754V42.6166H4.52539ZM19.0754 42.6166V19.6566H42.6054V42.6166H19.0754Z"/>`)}
  </svg>`;
