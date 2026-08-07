import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderLocationGeolocalizationPointer16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_477)">
<path d="M7.89 15.78C7.58 15.78 7.32 15.52 7.32 15.21V14.52C4.11 14.25 1.54 11.68 1.26 8.46H0.57C0.26 8.46 0 8.2 0 7.89C0 7.58 0.26 7.32 0.57 7.32H1.26C1.53 4.11 4.11 1.54 7.32 1.26V0.57C7.32 0.26 7.58 0 7.89 0C8.2 0 8.46 0.26 8.46 0.57V1.26C11.67 1.53 14.24 4.1 14.52 7.32H15.21C15.52 7.32 15.78 7.58 15.78 7.89C15.78 8.2 15.52 8.46 15.21 8.46H14.52C14.24 11.67 11.67 14.24 8.46 14.52V15.21C8.46 15.52 8.2 15.78 7.89 15.78ZM2.49 8.46C2.76 11.03 4.76 13.03 7.32 13.29V11.35C7.32 11.04 7.58 10.78 7.89 10.78C8.2 10.78 8.46 11.04 8.46 11.35V13.29C11.03 13.02 13.03 11.03 13.29 8.46H11.35C11.04 8.46 10.78 8.2 10.78 7.89C10.78 7.58 11.04 7.32 11.35 7.32H13.29C13.02 4.75 11.03 2.75 8.46 2.49V4.43C8.46 4.74 8.2 5 7.89 5C7.58 5 7.32 4.74 7.32 4.43V2.49C4.75 2.76 2.75 4.75 2.48 7.32H4.43C4.74 7.32 5 7.58 5 7.89C5 8.2 4.74 8.46 4.43 8.46H2.49Z"/>
</g>
<defs>
<clipPath id="clip0_2055_477">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
