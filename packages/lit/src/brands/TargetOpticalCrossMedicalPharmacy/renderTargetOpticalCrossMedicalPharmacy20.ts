import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderTargetOpticalCrossMedicalPharmacy20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_7218_343)">
<path d="M9.99786 1V19H6.88453C6.64932 19 6.45688 18.8076 6.45688 18.5723V13.5388H1.42766C1.19244 13.5388 1 13.3464 1 13.1112V6.88881C1 6.6536 1.19244 6.46115 1.42766 6.46115H6.45688V1.42766C6.45688 1.19244 6.64932 1 6.88453 1H9.99786Z" fill="#CC0000"/>
<path d="M18.9957 6.88881V13.1112C18.9957 13.3464 18.8033 13.5388 18.5681 13.5388H13.5346V18.5723C13.5346 18.8076 13.3421 19 13.1069 19H9.99786V1H13.1069C13.3421 1 13.5346 1.19244 13.5346 1.42766V6.46115H18.5681C18.8033 6.46115 18.9957 6.6536 18.9957 6.88881Z" fill="#A60D0D"/>
</g>
<defs>
<clipPath id="clip0_7218_343">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
