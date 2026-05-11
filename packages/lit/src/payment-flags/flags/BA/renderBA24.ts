import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderBA24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1392)"/>
<defs>
<pattern id="pattern0_2072_1392" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1392" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1392" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMHSURBVHgB5ZrNTxNBGMafbYGQiliCQTg0WfgHqPFE4gEw+HHyVvw4tJWDR2IPegEp8WA8iXLRgxGOnpRIPGj8jIFAYuDorVWJRNHYEPtpwvjO1mmpCWXast2d5ZdsuzMMkLfzzvM7dDX8I/YY3mYPRhlDPw374TAYsOrSMNV1CrNiTjNeO2/qNy4+fT0ytKDD+cQ1hoGuM/RuDLtuxehVHz7+AZGzL+A7/AsOJ55N46hGux6C5nooZn0dKUxeeI7wiUU4BTrKSGWAzWTJ3KQbrSd54Z3GjNaMzYwXc8t+fPreDn/3GrwH0lAdjfq7qTF/n/tTnHOjZeheYZXbAxEDqzEf5pb8aKPi+YfgBBobgGRxL3U3Dg5FC0NXc8niRNKDJ0vO6QK+279TxXHZ4gVO6oKKi+c4pQu2F6+R5pgYsK9Xiz/w3d/xD+gdPxE9N4/goHpGWP9RvHehCuK0+6G7QYTp4veqUlXxgplXfRgYi2CW3lWkpO3hPoRqCdERmKCjwI+Endne9tKBtxuqGKGqtJdBBSPsmPYybc++XC7+soJGqDntZVDBCKYVL7CzEfYs7WWwgxFMSXsZ7GAE09JeBquNUFPay2BnI9Ql7WWw2giWFi+wygh1TXsZzDaCZWkvg9lGsDTtZTDTCKanvQxWGcE2aS+DmUawffECM4xgu7SXoRYj2DrtZajFCLZPexmqNYIt0l6GSowwMZw3gqahLEqlvQzcAuHpIC7RFfsmbwRHFC/gRhgcj2DmZZ/xnfxuKJn2MnAjXKej0H2k1AjKp70MhhGW/fB60uilQBRZ4Ii0F/CixPU/3AjGUyYb7ejV19DWki6X9q0QT2aoQiVGGA/M47R/sVAhBR57U1ixlYVT4UYYmT6PyIMAPm+08T1eaaBYfEs902+sYFQ84z3UBFU6QCbVjUcQWY42N4NH749h4WMPxgLP7mjQb3uRza3QCh37hxjWr/W4EL+SANsaoIk49gcxqneQ35T2dv6BxFG686O+SDVvbf+BZxt7h0x2Cologk/9BT0XisZG9dUCAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
