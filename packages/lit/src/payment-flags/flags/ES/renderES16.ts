import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderES16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1660)"/>
<defs>
<pattern id="pattern0_2072_1660" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1660" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1660" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALvSURBVHgB7ZpNTxNBGMf/sy3QLqbWCLaaNDT1oB5QuPgSDYIHiDFqxBhPKBrv+AE8+gHwIxAOHogY8dDgBTQxCheMPRAv0iIqTQAR2qUUuo+zC7tLm8b0RWHZ3V+z3WeenW7zm5nuTDfLsM1Lv99/IOvrI6J2YmiH5aBPYEJ/V3p2QMsw5S3qCYYFVjPGS2FYn7gsb3RczczHVflRb2jGJuIacal2tdUdrQ/1ggxxkTF4IPCXdZD5luWSKZK1VFjM+h4LArE+LVPPxUWLiSsoPh4obkzPMaLLPE8tWqLOctr5eJnhp1zU82ytrY4d/b6F1X3/iiNvVxx5u8J+RPnsv83RBlTMi49GfPs8TMvPBSO2dc+7UQXz0lmsZJvgq03w0mRePr0ZhK8mjkbvZ5iViuSlzQASq51IDi1h7dV7NSfimH58CnP8fQ7em60I3DmDiO816lzLMBtlD/v1nB/TSz1qjytyylYM7ZhSL7b4COmNAMxG2fJfV65jkzx6uVgDFOZyvP5sqhNmo6RhPzAs6vHJi016LHa/2drzTRp+qOe/xHgvx7biE81Jda+MgJ3nud8tYa9xFjl2paRh33hpyCjQB1RK3nlwDXtNVfP8xt3jRfOHj6SwH/gv8g2BNPYDVcmfa36qxxOxJ3qszQIK0rD5pjgN52pvV0oa9g+eJ/R4/F5CXbCUi68mgRuDxvo/2Yc9p+zffMQ3gulfPeoafy7ZVrRO4YVQ+VMTOTjCowswE2XL17l+49ShQXxPtWFh8bTaCIVo8m6WQdA7gaA4qX7ObPyzOzn7BedOzjZVzfOmgsqvx0bFkF5sYC5YnQXK6bGzyLErjrxdceQ1ZFibwtlQIMK4VsiQtfUzZOgz0JRAjN5qCYm3zRqvYLUmUHwk7pXeYUZMeMbG/GF/dj03ZbPn8Ga6pG8RoWM5viyTq4N3ehz2YEaWXVeUIO8Bpagn1CsIxG8zsBbsLqWuzCv/AqJxYniXqXX33+IdruT+AFkE63K4IoibAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
