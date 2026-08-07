import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderFrameShapePanthosSunglasses16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M11.8014 11C10.0708 11 8.66111 9.5 8.60278 7.64084C8.42778 7.55634 8.21389 7.51408 8 7.51408C7.78611 7.51408 7.5625 7.55634 7.3875 7.64084C7.29028 9.53169 5.90972 11 4.19861 11C1.23333 11 1 8.33803 1 7.52465C1 5.85563 2.07917 5 4.19861 5C5.80278 5 6.78472 5.46479 7.19306 6.41549C7.44583 6.33099 7.72778 6.28873 8 6.28873C8.27222 6.28873 8.55417 6.33099 8.80694 6.41549C9.21528 5.46479 10.1972 5 11.8014 5C13.9208 5 15 5.84507 15 7.52465C15 8.33803 14.7667 11 11.8014 11Z"/>`)}
  </svg>`;
