import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderLensSunLogoPrizm20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2260_6249)">
<path d="M6.35196 2.25466C-0.208945 3.27144 -0.423004 13.8567 3.99731 17.41C8.61028 21.0704 16.8516 14.9805 18.8958 7.15661C19.9661 2.53294 12.5811 1.41983 6.34126 2.25466H6.35196ZM6.75867 3.4962L9.55214 5.98999L8.25709 5.48695L7.03695 4.39525L6.75867 5.2943V3.4962ZM3.31232 6.386L6.40548 3.62464V4.25611L4.94988 5.60468L6.19142 5.52976L3.31232 6.386ZM4.13645 6.50373L5.84892 6.0328H8.06443L7.46507 5.56187L9.93745 6.49303H4.13645V6.50373Z"/>
</g>
<defs>
<clipPath id="clip0_2260_6249">
<rect width="19.9997" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
