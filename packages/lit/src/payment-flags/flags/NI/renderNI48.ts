import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderNI48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 63 45" width="63" height="45"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="63" height="45" fill="url(#pattern0_2055_4)"/>
<defs>
<pattern id="pattern0_2055_4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2055_4" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHSSURBVHgB7Zo9UgIxGIbfrAsqNhQ2WDFeQDyBYqmNdIwVN8CbiDfQwlErbBhL0YoObwA00DiKBQuzwMbEdeMu409l4iR5ZoB839I8vAmzDB9BxGE9i8xKFZTugrCHfjyCkBou9s+jBnl/Lt/m4QR3bJWH/nQR+EVclbqh/FGjAzPEI7rw/G2XiVcQF09lAHeV7QkCbaAUmE2A6Sjq5JFxj112vtk5/xBNr4XiusGDTHEv9iFMvbBHl3YcJl4Qb1pahtbEg2Vf6k7iInGgNQtHWXPbn7HypmLlTcXKm4rR8qTf79OoyOVy0J3BYCDWdtubilL53ssJVKJMfjhpMfkahuMWVKFMvvccpq4yfSXyPPXXSZg4f1WVvhL5KHVRK0pfunw89QhV6UuXX0xd9BWkL1X+q9QjVKQvVf671MV1yem7kMjWxjX+E0bf3kpNXiaU/t4n7O+qzzKzDu3xnsTS/qozFStvKlbeVKy8qSTlaQCtWbjt42MpTVHxoR2dmSf82g7I/F6UfFhnNtZvB3Af7uaPYj1ySlCpZ+Gn2zBpDo+ig8uDTQdnpSECpwg+mGcCXJz6e3yZHE8qNypwaJW1C5ALxV9DaROEPsCb1XDDAme8ATxfqJDMuo1mAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
