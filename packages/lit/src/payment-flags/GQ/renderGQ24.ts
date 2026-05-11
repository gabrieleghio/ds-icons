import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderGQ24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1734)"/>
<defs>
<pattern id="pattern0_2072_1734" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1734" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1734" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB5ZpPSBRRHMe/M7tpJsmmhqJIm4YeilDEq61dgg5hlyiMWBBby4NG0k1c6VYH14OZhwolwYORdDOMTSGEVFazwj+VG/5ZxRJFVzfd3em90R13Rd2dnVHc5wfevvd+8+bwee83b2eG4bBJdi10Wg/KSdOwWVhjQAAs/ZVo8gU4+kPE9Ro3rBwHPRhHEGD3aFEw8AB2DQ3MnOm0RUfN6E9E/wTrkAXWcV4UJl1FkxYl740kprfPPIKWdyIh4RP4aHEQM5DVhncN8Lg2+jTDtW5U8OD4ct8g+7wZLmQxJU6hPprojbIVxCWeVNm+vptPxLffL+B0ZYFFAuTJps4HdDkebs9JDE9Y4FpLAXNsy2h+pzH/1lPEDGByAvzgdztwFCaA3+sgnYDhSYt4KbAIH2zACtn8vpIMYHECgspT6AT8mH4M1ghJnjK/VICxKbYmIGR5ytziNYyTO0FWkCVPccwXYWLuHliAw91OQerFng75RPOVJFSTEmk4HA6pLXvlfZg7ZlHX/QeRTNjylIr2aTR9nkekokieYmydRPvQImTztwYY5TZqJXEFhH3N+6OL0cB6Px3ZqTGhnzTq95SRKYQfl4kq17w/C6seFDz7hYGp1dBPSqgOrMONK0CD3DtmqRcVi3BxuQV0jCyj8EKcmAlBOWEgImaxrultREG7SXzpMPW0HkM9Ogx9GMTb5BgpbjhXKY1XwvLystRWJe39MWTEwlqWIescrj5Xar/+srWB3r4YL7WFsn6ogepp70N/6hhe3UqDXKrzTAF1sLhaqLbyuuM8bJWZ0MdHQQktprNSu6hxHGqj+spTcZrqSsUPGlXka6+nyvubOyRooZDawhQY805BLfYj1XdD0crTB5uK/EREKmGvPBU3H+anOkEIGg9L/uH35zC1NcCByGPWs9WWnfYlYy1EvgEsIEv+hv0dagafgBVClj+/MAJLXxVYIiR5Kv6mqxisEVQ+zTmNlz0ViFtfAmvsKU/F27qLxZpFdpVnXZyyozxNcdbFKYE3OYIXcW6nuLmxKL79no8nT/Qfpd76Kiy9VeLuziKrgfY2ntzrdvl6NX1m5E9Z4Q3/5eihhPo4SVny+gdRx8Fo1SHKYzONNutLR5txJBAwnuNAuvgyvNRwU28aabXiCHyBScVJuZwzA3vA90m2ZBjJLkC/y8vGwbL/F5pA9jYO3ViBJWcBCzT0HyK5Q2/sR+E8AAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
