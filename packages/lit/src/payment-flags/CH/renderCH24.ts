import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderCH24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1524)"/>
<defs>
<pattern id="pattern0_2072_1524" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1524" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1524" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFtSURBVHgB7ZpLTgJBEIb/7hnURDQuxRV6Aj2Bj5N4AzwKHsGTiF4Ab4AriDvjMz6Gtgqnkx42sOh0Jl31JQ1UQSDfdE2ozJRBzQTY2yoxcMAZ/ldWkNeDdRj2Ktz4nOGHGdB3BW4p6iN3HB5NhfMe6JnjaUEbL0HcQwfgq8JJOStw6QLxHVrbqEsiE6jk8UHrxSfId6PElSXxgc/t0uoiL3GGfXhDu83cqZmWiwOzYB/5iYfMaT0FsQ3fzFmcsStiUYiWL5GSH7f6M510J5+WvVRUXioqLxWVl0q8JmedBibW90RqhLTspaLyUlF5qai8VOI1Oes0Hnolpz2ovFRUXioqLxVtcpLRadd9YC17qTTkI12CbC3zpZjlRz54Q958NsOxpd2+8xHLvyO/CmCfVwTTWIRxuDY8eblZYCxsDm9yUOHIHgLPPJHIg3mQAImT7wW/bPzx1gOJPJd3jLSkONNG9CP3378Y8oZz4g+ARE4IhRX4NQAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
