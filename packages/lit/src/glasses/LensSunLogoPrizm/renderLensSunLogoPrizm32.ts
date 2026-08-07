import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderLensSunLogoPrizm32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2260_6243)">
<path d="M9.91128 2.41911C-1.01451 4.10257 -1.37127 21.7622 5.99806 27.6711C13.6796 33.7806 27.4148 23.6241 30.8264 10.5912C32.6102 2.88736 20.3019 1.02551 9.91128 2.43026V2.41911ZM10.6025 4.49278L15.2515 8.65127L13.0887 7.81511L11.0596 5.99786L10.6025 7.50294V4.49278ZM4.84974 9.30904L10.0116 4.69346V5.75259L7.58119 8.00464L9.64371 7.87085L4.84974 9.30904ZM6.23219 9.48742L9.08627 8.70701H12.7765L11.7731 7.9266L15.8982 9.47628H6.23219V9.48742Z"/>
</g>
<defs>
<clipPath id="clip0_2260_6243">
<rect width="31.9996" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
