import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderBB16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1402)"/>
<defs>
<pattern id="pattern0_2072_1402" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1402" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1402" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGySURBVHgB7ZqxTsMwFEXvc0phQWJgAQkR/gAxsVH4EUCIiaGVADFSVkSlMLDTLylsbOUPGhhgYUBioYXE2KFNXAQDTVJXsY+Uyn720FPfOo4UwgC3NoewVAWhInoVpODp6gJZs3hwhJTcgzMPj+fNQYFFn+6JC+60hXgdKcUnmFVQeI3lw07ki4E8/2wB5MIIyI18RdJLWDreEfZuMjYtfpIp2cCoLMwje5xZjA6XCwyE7/0+uQidGgPj1XgOzQjxMtKITybCh8SCUlkp0YaM/WpcYCUUGlZWexU2PFq0Ff/JsB+DwVh5U7HypqLt3kbrSZvfQQs29qaSe+z/G+9x/h1s7E3FypuKlTcVK28quR9yTveStnqAUVHr6vy8sbE3ldxjX9//vW0faTVjY6+Dce7qf2FjbyraYq/u/LqwsTcVK28qVj6Bo9gM+0n5m7gX9lBo+IfaazMQv00Ge/2rYAmQPrwrFreb1IhfikNO4AHOdvweXjShizQ8vyB7gjdkB+/AbzQZfO8VFGyKgg8jEOIUbMnW94bnez4eGiugcBfyHVUN32gMVwuEMyG+FvkKvgD79oCoQUZFXAAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
