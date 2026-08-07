import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderHeartFavFilled16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_2055_1183)">
<path d="M15 4.08857C14.7967 3.6019 14.5067 3.1619 14.1334 2.78857C13.76 2.41523 13.3234 2.1219 12.8334 1.9219C11.8567 1.51857 10.7467 1.51857 9.77003 1.9219C9.28336 2.12523 8.84669 2.41523 8.47003 2.78857L8.00003 3.25857L7.52669 2.78857C6.77003 2.0319 5.76669 1.61523 4.69669 1.61523C3.62669 1.61523 2.62336 2.0319 1.86669 2.78857C1.11003 3.54523 0.693359 4.54857 0.693359 5.61857C0.693359 6.68857 1.11003 7.6919 1.86669 8.44857L7.76336 14.3452C7.83003 14.4119 7.91336 14.4419 8.00003 14.4419C8.08669 14.4419 8.17003 14.4086 8.23669 14.3452L14.1334 8.44857C14.5067 8.07523 14.8 7.63857 15 7.14857C15.2034 6.6619 15.3067 6.14523 15.3067 5.61523C15.3067 5.08523 15.2034 4.5719 15 4.0819V4.08857Z"/>
</g>
<defs>
<clipPath id="clip0_2055_1183">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
