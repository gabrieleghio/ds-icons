import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderTargetOpticalCrossMedicalPharmacy16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_7218_340)">
<path d="M7.99834 1V15H5.57686C5.39392 15 5.24424 14.8503 5.24424 14.6674V10.7524H1.33262C1.14968 10.7524 1 10.6028 1 10.4198V5.58018C1 5.39724 1.14968 5.24756 1.33262 5.24756H5.24424V1.33262C5.24424 1.14968 5.39392 1 5.57686 1H7.99834Z" fill="#CC0000"/>
<path d="M14.9967 5.58018V10.4198C14.9967 10.6028 14.847 10.7524 14.6641 10.7524H10.7491V14.6674C10.7491 14.8503 10.5994 15 10.4165 15H7.99834V1H10.4165C10.5994 1 10.7491 1.14968 10.7491 1.33262V5.24756H14.6641C14.847 5.24756 14.9967 5.39724 14.9967 5.58018Z" fill="#A60D0D"/>
</g>
<defs>
<clipPath id="clip0_7218_340">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
