import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderCalendarBookAppointment40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_183)">
<path d="M36.87 5.25H30.2V3.83C30.2 3.37 29.83 3 29.37 3C28.91 3 28.54 3.37 28.54 3.83V5.25H21.19V3.83C21.19 3.37 20.82 3 20.36 3C19.9 3 19.53 3.37 19.53 3.83V5.25H12.18V3.83C12.18 3.37 11.81 3 11.35 3C10.89 3 10.52 3.37 10.52 3.83V5.25H3.83C3.37 5.25 3 5.62 3 6.08V36.86C3 37.32 3.37 37.69 3.83 37.69H36.86C37.32 37.69 37.69 37.32 37.69 36.86V6.09C37.69 5.63 37.32 5.26 36.86 5.26L36.87 5.25ZM10.5 6.92V9.84C10.5 10.3 10.87 10.67 11.33 10.67C11.79 10.67 12.16 10.3 12.16 9.84V6.92H19.51V9.84C19.51 10.3 19.88 10.67 20.34 10.67C20.8 10.67 21.17 10.3 21.17 9.84V6.92H28.52V9.84C28.52 10.3 28.89 10.67 29.35 10.67C29.81 10.67 30.18 10.3 30.18 9.84V6.92H36.02V14.26H4.67V6.92H10.51H10.5ZM4.67 36.03V15.93H36.04V36.03H4.67Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_183">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
