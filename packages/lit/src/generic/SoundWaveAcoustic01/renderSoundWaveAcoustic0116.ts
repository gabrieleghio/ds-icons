import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderSoundWaveAcoustic0116 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 16 16" width="16" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M10.1152 10.3649C9.79516 10.3649 9.53516 10.1049 9.53516 9.78491V7.11491C9.53516 6.79491 9.79516 6.53491 10.1152 6.53491C10.4352 6.53491 10.6952 6.79491 10.6952 7.11491V9.78491C10.6952 10.1049 10.4352 10.3649 10.1152 10.3649Z" fill="black"/>
<path d="M8.11516 12.3649C7.79516 12.3649 7.53516 12.1049 7.53516 11.7849V5.11491C7.53516 4.79491 7.79516 4.53491 8.11516 4.53491C8.43516 4.53491 8.69516 4.79491 8.69516 5.11491V11.7849C8.69516 12.1049 8.43516 12.3649 8.11516 12.3649Z" fill="black"/>
<path d="M6.11516 14.3649C5.79516 14.3649 5.53516 14.1049 5.53516 13.7849V3.11491C5.53516 2.79491 5.79516 2.53491 6.11516 2.53491C6.43516 2.53491 6.69516 2.79491 6.69516 3.11491V13.7849C6.69516 14.1049 6.43516 14.3649 6.11516 14.3649Z" fill="black"/>`)}
  </svg>`;
