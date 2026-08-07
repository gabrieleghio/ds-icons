import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../types';

export const renderExportTemplate40 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 40 40" width="40" height="40"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<path d="M36.5059 2.35986C37.0209 2.36012 37.4355 2.77448 37.4355 3.28955V36.6899C37.4353 37.2048 37.0207 37.6194 36.5059 37.6196H3.10547C2.5904 37.6196 2.17603 37.205 2.17578 36.6899V3.28955C2.17578 2.77432 2.59024 2.35986 3.10547 2.35986H36.5059ZM4.03516 35.7593H14.2949V16.8198H4.03516V35.7593ZM16.165 35.7593H35.5752V16.8198H16.165V35.7593ZM4.03516 14.9497H35.5752V4.21924H4.03516V14.9497Z"/>`)}
  </svg>`;
