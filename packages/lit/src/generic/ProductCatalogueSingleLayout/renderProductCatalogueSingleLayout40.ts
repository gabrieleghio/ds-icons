import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueSingleLayout40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M36.85 18.59H3.83C3.37 18.59 3 18.22 3 17.76V3.83C3 3.37 3.37 3 3.83 3H36.84C37.3 3 37.67 3.37 37.67 3.83V17.75C37.67 18.21 37.3 18.58 36.84 18.58L36.85 18.59ZM4.67 16.92H36.02V4.67H4.67V16.93V16.92Z"/>
<path d="M36.85 37.68H3.83C3.37 37.68 3 37.31 3 36.85V22.93C3 22.47 3.37 22.1 3.83 22.1H36.84C37.3 22.1 37.67 22.47 37.67 22.93V36.85C37.67 37.31 37.3 37.68 36.84 37.68H36.85ZM4.67 36.01H36.02V23.75H4.67V36.01Z"/>`)}
  </svg>`;
