import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderApplePay24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 36 24" width="36" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="35.0222" height="24"/>`)}
  </svg>`;
