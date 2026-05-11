import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderShapeFaceShapeDiamond40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M19.7404 2.46875C20.0263 2.46875 20.3166 2.59207 20.4826 2.84375L31.1428 19.1836C31.3333 19.4801 31.3333 19.852 31.1428 20.1484L20.4826 36.4883L20.4816 36.4873C20.3219 36.7425 20.0364 36.8906 19.7404 36.8906H19.6906V36.877C19.4498 36.8633 19.2266 36.7546 19.0676 36.5693L18.9992 36.4785L8.33905 20.1387L8.33807 20.1377C8.14782 19.8413 8.14764 19.4701 8.33807 19.1738L18.9992 2.84375C19.1652 2.59213 19.4546 2.4688 19.7404 2.46875ZM10.1398 19.6602L19.7404 34.3789L29.34 19.6602L19.7404 4.94141L10.1398 19.6602Z" fill="black"/>`)}
  </svg>`;
