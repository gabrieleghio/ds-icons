import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderIE16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1804)"/>
<defs>
<pattern id="pattern0_2072_1804" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1804" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1804" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGASURBVHgB7dqxTsJAHMfx3x0FNTqw1qm+gXE3Fh/DRX0CcHBwdDJxAZ1cHX0KMD6AvAGdZDVqxErb8w7Dpe1iQqvB/v+fpIQ7BvK9u3Q6gbmu30SctAHl65GPAp4O7lC6i00UoQSGEui517idz4nZZ9f3EMV9PfJQgmWMTwnEFC33BoGcDUsM/wc8VUd/1EHTweXuUSZ8tQas6EcILMp1XZRuAwtTCniPgJfQTnmNCB0Jqdp2as3R8U6h8GVkctbrev0ambk9fezFtp1pSFSZWYAUP1tbsR3Pk7m8am/1DzieKo6niuOp4niqOJ4qjqeK46nieKo4niqOp4rjqeJ4qjieKo6niuOp4njLXF6psCSXZ+IHdhQmqLJJlBoIPEq92/d24kP/GsaVOwEm5/UzcxvLXEC8cuA4PUTxob2OZpZngkLG4zFK94YyjcxNTImTwTOiWgsKAWgYiSn2zZfvF97ZIMDpwxYSHOtDMsTfU7/+KPT18T8Pa9gxV0/Nn34BHDh5TD91glsAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
