import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderArrowChevronRight20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1623)">
<path d="M6.62891 -0.199951C6.84226 -0.199951 7.05964 -0.108749 7.21387 0.0324707L7.2207 0.0383301L16.3906 9.20923C16.5504 9.36915 16.6289 9.58094 16.6289 9.79028C16.6289 10.0046 16.5375 10.2255 16.3809 10.3821L7.20996 19.552C7.07403 19.6877 6.9011 19.76 6.71973 19.7805C6.69462 19.7918 6.66757 19.8 6.63867 19.8C6.41299 19.8 6.20314 19.7071 6.04785 19.552C5.88789 19.392 5.80859 19.1794 5.80859 18.97C5.80867 18.7558 5.90117 18.5357 6.05762 18.3792L14.6357 9.80005L6.04785 1.22192C5.89245 1.06653 5.79883 0.856081 5.79883 0.630127C5.79886 0.404274 5.89255 0.194666 6.04785 0.0393066C6.20778 -0.120623 6.41947 -0.199922 6.62891 -0.199951Z"/>
</g>
<defs>
<clipPath id="clip0_2055_1623">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
