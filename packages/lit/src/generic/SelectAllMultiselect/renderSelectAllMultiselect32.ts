import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderSelectAllMultiselect32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M25.28 7.63V5.84C25.28 4.27 24 3 22.43 3H6.85C5.28 3 4 4.27 4 5.84V22.3C4 23.87 5.28 25.14 6.85 25.14H22.46C24.02 25.14 25.3 23.87 25.3 22.3L25.28 7.63ZM22.46 23.51H6.85C6.18 23.51 5.63 22.97 5.63 22.3V5.84C5.63 5.17 6.18 4.63 6.85 4.63H22.43C23.1 4.63 23.65 5.17 23.65 5.84V7.63L23.67 22.3C23.67 22.97 23.12 23.51 22.46 23.51Z" fill="#010101"/>
<path d="M28.28 8.84C28.28 7.27 27 6 25.43 6H25.28V7.63H25.43C26.1 7.63 26.65 8.17 26.65 8.84L26.67 25.3C26.67 25.97 26.12 26.51 25.46 26.51H9.85C9.18 26.51 8.63 25.97 8.63 25.3V25.14H7V25.3C7 26.87 8.28 28.14 9.85 28.14H25.46C27.02 28.14 28.3 26.87 28.3 25.3L28.28 8.84Z" fill="#010101"/>`)}
  </svg>`;
