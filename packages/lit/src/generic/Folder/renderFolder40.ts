import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderFolder40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M12.8203 7.59473C13.1443 7.59473 13.4467 7.76182 13.6152 8.03125L15.9863 11.8643H35.9512C36.4661 11.8645 36.8806 12.279 36.8809 12.7939V31.4443C36.8809 31.8856 36.5761 32.2512 36.165 32.3477L36.2021 32.3848H3.38086C2.86563 32.3848 2.45117 31.9693 2.45117 31.4541V8.52441C2.45117 8.00919 2.86563 7.59473 3.38086 7.59473H12.8203ZM4.32031 30.5146H35.0312V13.7344H15.4707C15.1871 13.7344 14.9202 13.6062 14.7451 13.3936L14.6758 13.2969L12.3047 9.46387H4.32031V30.5146Z"/>`)}
  </svg>`;
