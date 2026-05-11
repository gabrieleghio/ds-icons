import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderCartFilled32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2207_9)">
<path d="M26.46 23.8L6.4 23.87L7.55 20.93L26.46 21C26.87 21 27.21 20.71 27.27 20.3L29.04 8.25C29.07 8.02 29 7.78 28.85 7.6C28.69 7.42 28.47 7.32 28.23 7.32L7.09 7.37L6.81 2.77C6.79 2.34 6.43 2 6 2H2.82C2.37 2 2 2.37 2 2.82C2 3.27 2.37 3.64 2.82 3.64L5.23 3.59L6.22 19.95L4.46 24.32C4.36 24.57 4.39 24.86 4.54 25.08C4.69 25.31 4.94 25.44 5.22 25.44L7.05 25.37C6.82 25.79 6.7 26.26 6.7 26.73C6.7 28.34 8.01 29.64 9.61 29.64C11.21 29.64 12.52 28.33 12.52 26.73C12.52 26.27 12.4 25.8 12.13 25.45L19.45 25.38C19.22 25.8 19.1 26.27 19.1 26.74C19.1 28.35 20.41 29.65 22.01 29.65C23.61 29.65 24.92 28.34 24.92 26.74C24.92 26.28 24.8 25.81 24.53 25.46H26.44C26.89 25.46 27.26 25.09 27.26 24.64C27.26 24.19 26.89 23.82 26.44 23.82L26.46 23.8Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2207_9">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
