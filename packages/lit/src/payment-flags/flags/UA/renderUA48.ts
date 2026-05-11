import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderUA48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 63 45" width="63" height="45"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="63" height="45" fill="url(#pattern0_2055_4)"/>
<defs>
<pattern id="pattern0_2055_4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2055_4" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFvSURBVHgB7Zo9TsNAEEa/3TiEnyYVElSBE4QDIAg3gBIa3yAcJdwACkqUIyRE9OEGSUUkKgRxIrDxsGPLSSwhOlLszJNs7Yy2eZ5ZF6sxKAi7dZugTcCpcQ88w3k9W6LO9/3FXZEz2TvsNmyMnosa8B3COK2ihdvzcSZvr7ojEeIF+Qc4CiqXDyGtile3gWDT9YSFN1AKJJ9AHOWx87VJeh2Qte3Fpo0dJ74F7+BCVtnLnfx4lqUI9oTL21xsqtTgNSuF5Z96ubd9avXfMKYUem77NyovFZWXispLReWlovJSUXmpqLxUVF4q5uWJL7Zy9nbhPZPX5VrbXioqLxWVl4rKS0XlpaLyUlF5qZTkeXTFZ1IqxyzfL4LpHF4zL/sNLREei2gaAdHMvw5gnw/n9j5d5gxwY0Y91GsBhsLm8Eb7xzi0By28mQQtHsyDBJy48z3jZWk8aTJASBY8l9fEeiH8P313xAdfCTpccE78AAPfX3EnPN/QAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
