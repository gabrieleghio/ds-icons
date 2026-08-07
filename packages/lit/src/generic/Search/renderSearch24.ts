import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderSearch24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 24 24" width="24" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_227)">
<path d="M10.09 19.1798C5.08 19.1798 1 15.0998 1 10.0898C1 5.07976 5.08 0.999756 10.09 0.999756C15.1 0.999756 19.18 5.07976 19.18 10.0898C19.18 15.0998 15.1 19.1798 10.09 19.1798ZM10.09 2.50976C5.91 2.50976 2.51 5.90976 2.51 10.0898C2.51 14.2698 5.91 17.6698 10.09 17.6698C14.27 17.6698 17.67 14.2698 17.67 10.0898C17.67 5.90976 14.27 2.50976 10.09 2.50976Z"/>
<path d="M21.53 22.2798C21.33 22.2798 21.14 22.1998 21 22.0598L15.49 16.5498C15.35 16.4098 15.27 16.2198 15.27 16.0198C15.27 15.8198 15.35 15.6298 15.5 15.4898C15.64 15.3498 15.83 15.2698 16.03 15.2698C16.23 15.2698 16.42 15.3498 16.56 15.4898L22.07 20.9998C22.36 21.2898 22.36 21.7698 22.07 22.0698C21.93 22.2098 21.74 22.2898 21.54 22.2898L21.53 22.2798Z"/>
</g>
<defs>
<clipPath id="clip0_2055_227">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
