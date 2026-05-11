import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderArrowChevronRight40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<g clip-path="url(#clip0_2055_1614)">
<path d="M11.244 1.24489C11.5698 0.918823 12.0984 0.918243 12.4246 1.24391L30.7654 19.574C30.9221 19.7306 31.0096 19.9433 31.0096 20.1648C31.0096 20.3863 30.9221 20.599 30.7654 20.7556L12.4246 39.0857C12.0984 39.4113 11.5698 39.4108 11.244 39.0847C10.9182 38.7585 10.9188 38.23 11.2449 37.9041L28.993 20.1648L11.2449 2.42555C10.9189 2.09967 10.9183 1.57109 11.244 1.24489Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_2055_1614">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>`)}
  </svg>`;
