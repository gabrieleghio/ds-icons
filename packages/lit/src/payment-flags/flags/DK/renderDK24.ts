import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderDK24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1608)"/>
<defs>
<pattern id="pattern0_2072_1608" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1608" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1608" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgB7ZqxTgJBEEBnlgsEbSxsKEywksLC0FgK1lLwBeoX4C/4B/gJfAGJsUdLG7WwUBovMYHGwgZFc+y4c7CXO4kCknhwu48ctzM7Cby7vUt2swgjmpBfS4t0jRBLKizBjBSfWxNrbjbKEBtEd4BQPxi0GzqF/NWEQt5JUUsFefgjCy8/ggBcb4DlKjy4ghPzii8T7Mm+PNKd81ThCIHyunMFBGRVCQ4HxdTkcrmJNevgQByQ+vTVuQcDP/YvgEifCIGypotWlTjLzyq+6LAP31B2C3KIewIId3QiE+pMItmoXykSJVsdxsZz0n1/xcqbipU3FStvKlbeVKy8qWCn0yEdTDMtXXa63W7QtsPeVKy8qVh5UzFaPp615Dggip4VeJHaCqJ51tV3vfuJNdfONsTNC3hB2z7zpmLlTcXKm4qVNxUrbypWXiMh2dC3mOUvddBPuH7Ej+BWENGVjt9U57s65Ng1Wm7Yh916YXmkM8eTn3VHZA4Rh/vwen7R7ITXw38iPJ2MEzWlf6rIdkNUwX31JJZVwgUDYHHlu89t/4XHWzEr8nFTAh77e1Rj+E//cLQI8dSTH0X25R/9AtJumkxcLHmrAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
