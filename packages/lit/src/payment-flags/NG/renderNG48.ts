import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderNG48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGGSURBVHgB7dq/TsJQFMfx3y21RQbjilN9A+ILiCZG30LZTWQzYcLBoBsm7spboAv4BPAGMMlqXOT/9VykpTK21WjP+SQ05bbLt/e201XwlYvbyDkX0KoIhSJieD1/QNJ27kuIqQul67h+bvgD1uJ4eeIh53YAVY0b/ocVaGIfUTnuLXrhx2d0i44eePAWvbTSbVSOzhAOd23AydAiUIgqn88jcVtZRKY1MJkBw6k/4mHTKdsUSe/5cihrwm2kjplI02U6R/4DUPsWvQeF4KaNDFLNCfXRt836djHGUv8X1vosMCbxXEk8VxLPlcRzJfFcSTxXEs+VxHMl8VxJPFcSz5XEcyXxXEk8VxLPlcQHtEaqrfVZ0GgH/8YzpNpkvjrX6NDM65dgwGzWGU/TtwJMj2kbTkKD6s6GO65j5J5CLbejme1aqy1bkQwGAyTufYjEaPRQazYsVNtvmKsDGuiDAxOu1aE5/frg3Tb7qD3t0kMo0dUufp/+8Z9Gi5b6FT5Ge7ihXvIJAQ57tvZPMjoAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
