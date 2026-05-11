import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../types';

export const renderBookmarkSaveFilled20 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 20 20" width="20" height="20"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<path d="M14.4076 1.5105H4.68758C4.45758 1.5105 4.26758 1.7005 4.26758 1.9305V18.4805C4.26758 18.6505 4.36758 18.8005 4.52758 18.8605C4.57758 18.8805 4.63758 18.8905 4.68758 18.8905C4.79758 18.8905 4.89758 18.8505 4.97758 18.7705L9.57758 14.1705L14.1176 18.7605C14.2376 18.8805 14.4176 18.9205 14.5676 18.8505C14.7176 18.7805 14.8276 18.6305 14.8276 18.4605V1.9305C14.8276 1.7005 14.6376 1.5105 14.4076 1.5105Z" fill="black"/>`)}
  </svg>`;
