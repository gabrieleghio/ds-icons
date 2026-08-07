import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueGridFilled40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M17.74 3H3.83C3.3716 3 3 3.3716 3 3.83V17.74C3 18.1984 3.3716 18.57 3.83 18.57H17.74C18.1984 18.57 18.57 18.1984 18.57 17.74V3.83C18.57 3.3716 18.1984 3 17.74 3Z"/>
<path d="M36.81 3H22.9C22.4416 3 22.07 3.3716 22.07 3.83V17.74C22.07 18.1984 22.4416 18.57 22.9 18.57H36.81C37.2684 18.57 37.64 18.1984 37.64 17.74V3.83C37.64 3.3716 37.2684 3 36.81 3Z"/>
<path d="M17.74 22.07H3.83C3.3716 22.07 3 22.4416 3 22.9V36.81C3 37.2684 3.3716 37.64 3.83 37.64H17.74C18.1984 37.64 18.57 37.2684 18.57 36.81V22.9C18.57 22.4416 18.1984 22.07 17.74 22.07Z"/>
<path d="M36.81 22.07H22.9C22.4416 22.07 22.07 22.4416 22.07 22.9V36.81C22.07 37.2684 22.4416 37.64 22.9 37.64H36.81C37.2684 37.64 37.64 37.2684 37.64 36.81V22.9C37.64 22.4416 37.2684 22.07 36.81 22.07Z"/>`)}
  </svg>`;
