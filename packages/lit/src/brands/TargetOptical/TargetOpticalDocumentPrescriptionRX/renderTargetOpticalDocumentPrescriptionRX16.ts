import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderTargetOpticalDocumentPrescriptionRX16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_7468_327)">
<g clip-path="url(#clip1_7468_327)">
<path d="M14.468 4.62301V16H2V0H9.84498L14.468 4.62301Z" fill="#D7D8D7"/>
<path d="M11.8143 10.7334H4.65612C4.44027 10.7334 4.26367 10.5568 4.26367 10.3409C4.26367 10.1251 4.44027 9.94849 4.65612 9.94849H11.8143C12.0302 9.94849 12.2068 10.1251 12.2068 10.3409C12.2068 10.5568 12.0302 10.7334 11.8143 10.7334Z" fill="#343434"/>
<path d="M9.18101 13.3117H4.65612C4.44027 13.3117 4.26367 13.1351 4.26367 12.9193C4.26367 12.7035 4.44027 12.5269 4.65612 12.5269H9.18101C9.39686 12.5269 9.57346 12.7035 9.57346 12.9193C9.57346 13.1351 9.39686 13.3117 9.18101 13.3117Z" fill="#343434"/>
<path d="M7.84265 5.01548H4.68346C4.46762 5.01548 4.29102 4.83888 4.29102 4.62304C4.29102 4.40719 4.46762 4.23059 4.68346 4.23059H7.84265C8.05849 4.23059 8.23509 4.40719 8.23509 4.62304C8.23509 4.83888 8.05849 5.01548 7.84265 5.01548Z" fill="#343434"/>
<path d="M5.86914 6.20066V3.0454C5.86914 2.82955 6.04574 2.65295 6.26159 2.65295C6.47743 2.65295 6.65403 2.82955 6.65403 3.0454V6.20459C6.65403 6.42043 6.47743 6.59703 6.26159 6.59703C6.04574 6.59703 5.86914 6.42043 5.86914 6.20459V6.20066Z" fill="#343434"/>
<path d="M14.4677 4.62301H9.84473V0L14.4677 4.62301Z" fill="#B0AEAE"/>
</g>
</g>
<defs>
<clipPath id="clip0_7468_327">
<rect width="16" height="16" fill="white"/>
</clipPath>
<clipPath id="clip1_7468_327">
<rect width="12.468" height="16" fill="white" transform="translate(2)"/>
</clipPath>
</defs>`)}
  </svg>`;
