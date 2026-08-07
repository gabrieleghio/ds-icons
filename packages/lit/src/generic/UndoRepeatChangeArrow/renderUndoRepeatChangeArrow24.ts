import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderUndoRepeatChangeArrow24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_816)">
<path d="M11.97 22.96C5.92 22.96 1 18.04 1 11.99C1 11.6 1.31 11.29 1.7 11.29C2.09 11.29 2.4 11.6 2.4 11.99C2.4 17.27 6.69 21.57 11.98 21.57C17.27 21.57 21.56 17.28 21.56 11.99C21.56 6.7 17.25 2.41 11.97 2.41C9.27 2.41 6.69 3.55 4.88 5.55C4.85 5.59 4.84 5.64 4.86 5.68C4.88 5.72 4.92 5.75 4.97 5.75H7.7C8.08 5.75 8.4 6.06 8.4 6.45C8.4 6.84 8.09 7.15 7.7 7.15H3.03C2.65 7.15 2.33 6.84 2.33 6.45V1.71C2.33 1.33 2.64 1.01 3.03 1.01C3.42 1.01 3.73 1.32 3.73 1.71V4.44C3.73 4.44 3.76 4.53 3.81 4.55C3.82 4.55 3.84 4.55 3.85 4.55C3.88 4.55 3.91 4.54 3.94 4.51C6.04 2.25 8.89 1 11.97 1C18.02 1 22.94 5.92 22.94 11.97C22.94 18.02 18.02 22.94 11.97 22.94V22.96Z"/>
</g>
<defs>
<clipPath id="clip0_2055_816">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
