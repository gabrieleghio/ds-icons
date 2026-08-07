import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderTargetOpticalInsurance32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_6628_817)">
<path d="M4 6.11866V11.1983C4 18.8178 8.69527 25.9019 16.4452 30V2L14.482 3.09831C11.6744 4.6634 8.57857 5.64501 5.37975 5.9745L4.00686 6.11866H4Z" fill="#CC0000"/>
<path d="M16.4452 2V30C24.1951 25.9088 28.8904 18.8178 28.8904 11.1983V6.11866L27.5519 5.98137C24.3324 5.65188 21.216 4.67026 18.3878 3.08458L16.4452 2Z" fill="#A60D0D"/>
<path d="M14.5781 20.5271C14.379 20.5271 14.1731 20.4516 14.0221 20.2937L10.2878 16.5595C9.97892 16.2506 9.97892 15.7494 10.2878 15.4405C10.5967 15.1317 11.0978 15.1317 11.4067 15.4405L14.5849 18.6188L21.4974 11.7063C21.8063 11.3974 22.3074 11.3974 22.6163 11.7063C22.9252 12.0152 22.9252 12.5163 22.6163 12.8252L15.141 20.3006C14.9899 20.4516 14.784 20.534 14.5849 20.534L14.5781 20.5271Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_6628_817">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
