import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderArrowChevronUpTop16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1662)">
<path d="M16.0996 11.4199C16.0996 11.2329 16.0288 11.0678 15.9004 10.9395L8.57031 3.60938C8.44127 3.48042 8.26586 3.41016 8.08984 3.41016C7.91381 3.4102 7.73839 3.48036 7.60938 3.60938L0.279297 10.9395C0.162065 11.0567 0.0965214 11.2125 0.0849609 11.3721C0.0767784 11.3866 0.0703259 11.4021 0.0703125 11.4199C0.0703125 11.5931 0.13819 11.7822 0.272461 11.9043C0.401144 12.0309 0.575672 12.0996 0.75 12.0996C0.926088 12.0996 1.10141 12.0294 1.23047 11.9004L8.08105 5.05078L14.9395 11.9004C15.0685 12.0294 15.2439 12.0996 15.4199 12.0996C15.596 12.0996 15.7713 12.0294 15.9004 11.9004C16.0288 11.772 16.0996 11.6069 16.0996 11.4199Z"/>
</g>
<defs>
<clipPath id="clip0_2055_1662">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
