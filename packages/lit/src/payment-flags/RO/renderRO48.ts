import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderRO48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGZSURBVHgB7Zo/TsMwFId/dgKETlmQQF2CuADiAhQEA+IQwAnaBbHCDlJYmeg9kAInaDc2moF/UhkYWpRWJOa5VdPSsYmqKs+f9KL42VL0+T1nssAIr+ZC2lUIVGhUQQZe766RN8/HZWRCoCkU/IPorT5KycHTu/AgrQYtuERG8YVFYVsB9w9OuRU4655ODeXlbwAhPDCANsCLYQWB67o2ts5PKeWls3KFWmSJQmBWNtaQO1/CwqwkFD3S7qhkMNYb0I9KNQmhqukq6VAsZxJfRHR7r9KZLkFM5MSu1GdhnLFRZEpCTg4r8v90sSo+zbSdBGOMPFeMPFeMPFeMPFeMPFeMPFeMPFeMPFeMPFeMPFeMPFeMPFeMPFeMPFeMPFeM/BiFIjNtp+Uf01HSR5GJ1IS+Ug1Jj6c0oeV1qGJ1QEI175JTB0maE0Lc2khiH9I6Se/hJT3oi1tZ+Ggjd9oqRl4oqNZh9F6XCP1v2oA9qnYIBmjxGMm+fh/+8EI/xMvNJpX9jGabmD9qDhFQs191nZ+do+gz1B/9AxDzheTNhe/RAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
