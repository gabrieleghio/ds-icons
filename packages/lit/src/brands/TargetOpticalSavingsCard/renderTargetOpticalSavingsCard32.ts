import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderTargetOpticalSavingsCard32 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 32 32" width="32" height="32"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<g clip-path="url(#clip0_5350_264)">
<path d="M29.3849 6.00003H2.6151C1.17102 6.00003 0 7.17106 0 8.61516V23.7485C0 25.1926 1.17102 26.3637 2.6151 26.3637H29.3849C30.829 26.3637 32 25.1926 32 23.7485V8.61516C32 7.17106 30.829 6.00003 29.3849 6.00003Z" fill="#CC0000"/>
<path d="M29.3849 6.00003H16V26.3637H29.3849C30.829 26.3637 32 25.1926 32 23.7485V8.61516C32 7.17106 30.829 6.00003 29.3849 6.00003Z" fill="#A60D0D"/>
<path d="M3.70833 22.0681H13.5963V23.3041H3.70833V22.0681Z" fill="#D6D6D6"/>
<path d="M0 9.99997H32V14H0V9.99997Z" fill="#333333"/>
<path d="M22.112 20.0681H28V23.3041H22.112V20.0681Z" fill="#D6D6D6"/>
</g>
<defs>
<clipPath id="clip0_5350_264">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
