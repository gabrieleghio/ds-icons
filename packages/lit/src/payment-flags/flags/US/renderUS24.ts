import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderUS24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2424)"/>
<defs>
<pattern id="pattern0_2072_2424" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2424" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2424" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIRSURBVHgB7Zo/b9NAGMaf9xoS5w9SxZRsERuw0A0hKtyIL8FWqQtLSSQ+B6ggBhaQGJmREAJFMXyBdKAzmRKyUZM/FCV+uWt7xhkqmiqp27v7SYnveWRbfu1Hz3SEY3y/sRpNojqDfSWxBF55e0iRXSFo58an5lttkPrz7zSq0yvTFhhVLJGUhz+C0PmzEm2sfQw6QunzGPzCIOfMTkWr7furmfW725t68IePtpDPF5HzCnjz7GV8/taTx/H69dMXZ/Zvfm4iDZgZo9EIYRhqqyq9hmDBde0UClfh5UsgEjAJIkKxWESpVEp69wWBbmsjm/VgMuoFJPBp/d42a5XL/Xszi4p6knf5XaTNj98H8dqsfM+J1cNnkmJRUT/Jv/b+A9LmoNeL1y72tuLa3lZc22tc21uEa3stkm2/DFzbXyDsjn23241jX6lUYDo91/ZH2B37vQe1OPZlLwfTcW1/TAa2QDR7hGt7ezE39sz/9V3b24o5sU+0+GnPc21vK5c39ie1+RzXuba3lcsT+9O2+Rz3mWn7crl8uIXDVKIoQr/fj7WKfaDFYDCAyYzH46RsC2b+opUafjgcHu5eSh31DAv6sfziv8IQ4f5+7MmEPye1Hy27Qm2pqrAF5u+3mq3rYi0Ifoopb0ijAxuQg8t5a2o5027fav4mBNWT29PO65GwZGT4Axn2r5NJtKM+uPL+AtXvJOeEMEoBAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
