import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderML24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2016)"/>
<defs>
<pattern id="pattern0_2072_2016" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2016" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2016" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGUSURBVHgB7do9TgJBGMbxZ2YJgY3FNiYam7UzVsYLCEYL4wmMhXICvII3wBMQCs+BnkAKjXZu4QeJFhaAi7ozvgO6AoUFuyFk5/0lkzADyeY/M6FagV9130NhoQqFEs1KSOBh6Rppu91fQSICLaFR2wkfG39LRn3NR95p0tRHCuYy/gcFBw6icjlsB3KwkmL4vNOAH8FpNj3Py+F8/XgsvOgABdofITCt5UWk7lU4mJai0afsjlaDudmAj9A9kdCyGv/KpQcUZaLweWSud5EuvAsxsia2aGAjXslLZJkrxvpK47XZbsfkfc547v843lYcbyuOtxXH24rjbcXxtuJ4W3G8rTjeVhxvK463FcfbiuNtxfG24nhbcXxMIdP0xNzEX8SzfoQsC/VIvtZXkk77Ml54p6MPaQOURpYoOvMuhXdGrrYQ4iyHr1wN+c+j+HW0nhqOBJ7zSN2LTu9Wauj73fCpIVFpvUFGZVoKYAETHkFtm8/DP7yDuwCHN6t0QSr0bQuzp2cwzFump91Cb3MvbAfmod/rsYK2md2GbAAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
