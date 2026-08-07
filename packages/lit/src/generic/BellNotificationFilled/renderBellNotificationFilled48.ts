import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderBellNotificationFilled48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 48" width="48" height="48"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M23.7403 45.2127C20.0003 45.2127 16.9103 42.4227 16.4203 38.8227H4.56026C4.17026 38.8227 3.81026 38.5927 3.65026 38.2327C3.49026 37.8727 3.55026 37.4527 3.82026 37.1527C3.88026 37.0927 9.43026 30.8127 9.43026 25.8927V15.3327C9.43026 10.5227 12.1703 6.0727 16.5903 3.7227C20.4103 1.6927 27.1003 1.6927 30.9103 3.7227C35.3303 6.0727 38.0703 10.5227 38.0703 15.3327V25.8927C38.0703 31.2827 43.5903 37.0727 43.6503 37.1327C43.9303 37.4227 44.0103 37.8527 43.8503 38.2127C43.6903 38.5827 43.3303 38.8227 42.9303 38.8227H31.0703C30.5803 42.4227 27.4803 45.2127 23.7503 45.2127H23.7403Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="48" height="48" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
