import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderSR16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2302)"/>
<defs>
<pattern id="pattern0_2072_2302" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2302" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2302" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK+SURBVHgB7Zq9b9NAGMafs524jtoGgYRkCaRItIyoZSpLSRj5A1hBdEUKIx9LlsIaECtIHRE7K6aoEhNlbgUNA4mEVNSQjyZOLsddGjtJaQoZfEZn/6TId++9UfLc+9757myCAdlC9ozranlGWFZUoRgE+EzAilvrzsaIDVgpZDOkQ97xYgbqU2IJlvtYcEp98dce5/YQDeEeJbPBlo2VR9k7GBGumzq0pA5CCFSBMYZeh4K2qGfKtCztvqERkmcDiz5jQOfCVUMEUk8avBcA2j7qAKKx6xqvL3lOWkKDyvQ7YEh2TK1KqX4ix+SpHeq/EIuPKrH4qELK5bJ3m4dt21CdSqXil+O0jyrktXXFT/tzJAGZ2GtNVF6mIJN91vHLoUV+drkD+26zfw2L0MQL4f3rWhNhEYp4Ee25q0cRn+PlsKJvQBJJuwdroQOTX8/fOhxru5Bv4OdbE81dA7ROcLgr528F/ivp1TYuPa2d6pNa7CKV747Zdu6lUd8OdgIOPO2rmyZK63NTfecb9w9auEBKfomUFlzM16HPsol+3RrB9+ez2B/4B420MS86wK1ouPyiOtHn68N5KRH3+K9WeGKyk4lU8aZNT20XE59MpIq3Fobia58S+PJgHs2d4cizFilkIm3MCyweWSG68irlj+3qhyTO3mzzFV+DrwUUFv/jjcVvfck/7GIyFJ/0qguZSBV/kvBp2qdi4jH80B6f5EQVqWkfJAzs3/zY0I/wx9N+LTkvZ1kZJu6vtl+ODzCjSiw+qsTiPUZvA0pyTJ4Q73iVntuDytDOyMaJYVtjPfbeb2x3QV2qXAYIPeJFJNoanhdohD0zZkwU2y5u8/V+RhiFA21BbRj2tp44G5pTcA4YZTluKCEKcOE822+I4ti+T7yQyHeCeW5eglwCH2d87e9wtZszdRSdonMgbL8B4Mfx+B2l0/0AAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
