import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderProductCatalogueSingleLayoutFilled40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M36.85 3H3.83C3.3716 3 3 3.3716 3 3.83V17.76C3 18.2184 3.3716 18.59 3.83 18.59H36.85C37.3084 18.59 37.68 18.2184 37.68 17.76V3.83C37.68 3.3716 37.3084 3 36.85 3Z" fill="black"/>
<path d="M36.85 22.09H3.83C3.3716 22.09 3 22.4616 3 22.92V36.85C3 37.3084 3.3716 37.68 3.83 37.68H36.85C37.3084 37.68 37.68 37.3084 37.68 36.85V22.92C37.68 22.4616 37.3084 22.09 36.85 22.09Z" fill="black"/>`)}
  </svg>`;
