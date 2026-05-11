import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderTargetOpticalSavingsCard20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_5350_258)">
<path d="M18.3656 4.00003H1.63444C0.731887 4.00003 0 4.73192 0 5.63449V15.0928C0 15.9954 0.731887 16.7273 1.63444 16.7273H18.3656C19.2681 16.7273 20 15.9954 20 15.0928V5.63449C20 4.73192 19.2681 4.00003 18.3656 4.00003Z" fill="#CC0000"/>
<path d="M18.3656 4.00003H10V16.7273H18.3656C19.2681 16.7273 20 15.9954 20 15.0928V5.63449C20 4.73192 19.2681 4.00003 18.3656 4.00003Z" fill="#A60D0D"/>
<path d="M2.31771 14.0426H8.4977V14.8151H2.31771V14.0426Z" fill="#D6D6D6"/>
<path d="M0 6.49999H20V8.99999H0V6.49999Z" fill="#333333"/>
<path d="M13.82 12.7926H17.5V14.8151H13.82V12.7926Z" fill="#D6D6D6"/>
</g>
<defs>
<clipPath id="clip0_5350_258">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
