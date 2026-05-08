import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderApplePay48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 71 48" width="71" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="70.0444" height="48"/>`)}
  </svg>`;
