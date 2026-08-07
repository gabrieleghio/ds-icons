import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderLensSunLogoPrizm48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 48 46" width="48" height="46"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_4)">
<path d="M15.4692 4.50724C0.183438 6.85889 -0.316029 31.5825 9.99586 39.8549C20.7552 48.3978 39.9742 34.1838 44.7608 15.9325C47.2477 5.15238 30.0161 2.54059 15.4796 4.49683L15.4692 4.50724ZM16.4473 7.41039L22.9612 13.2271L19.9436 12.0513L17.1028 9.51231L16.4577 11.6142V7.41039H16.4473ZM8.39341 14.1428L15.6149 7.69134V9.16892L12.2226 12.3218L15.1154 12.1345L8.39341 14.1428ZM10.3288 14.4029L14.3246 13.3103H19.4857L18.081 12.2177L23.856 14.3925H10.3288V14.4029Z"/>
</g>
<defs>
<clipPath id="clip0_2055_4">
<rect width="47.9993" height="45.8" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
