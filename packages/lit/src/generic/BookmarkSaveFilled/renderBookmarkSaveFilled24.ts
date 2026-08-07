import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderBookmarkSaveFilled24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M17.8909 1.61621H6.21094C5.93094 1.61621 5.71094 1.83621 5.71094 2.11621V21.9762C5.71094 22.1762 5.83094 22.3562 6.02094 22.4362C6.08094 22.4662 6.15094 22.4762 6.21094 22.4762C6.34094 22.4762 6.47094 22.4262 6.56094 22.3262L12.0809 16.8062L17.5309 22.3162C17.6709 22.4562 17.8909 22.5062 18.0809 22.4262C18.2709 22.3462 18.3909 22.1662 18.3909 21.9662V2.11621C18.3909 1.83621 18.1709 1.61621 17.8909 1.61621Z"/>`)}
  </svg>`;
