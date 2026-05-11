import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderHU16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1792)"/>
<defs>
<pattern id="pattern0_2072_1792" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1792" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1792" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGSSURBVHgB7Zq/TsJQFIfPOa3Kv4GVrcEXQN1YLITFt2BhxkfB2UWfwNGExFgd3Ay8gKETrAxibOjt8ZbQhpKokw733C9pc84vXb72nKTDRdhy57XqNXKHjODr1gfTYJgS8qj39nqbRZje7r2W55DzCIgeGA+HSqnORTgNN/Lj5tlMhngGhyulTtzx8WlfD4CXxVVyoIQEhAimkDBDxAm8J2qboFch99IFpKHehw01LV7Wl2mkH7KMDiS6/ti+AB2dkxZvZQ8dGSi+S6Xo59NuR2A2+4tsuu+PWHmpWHmpWHmpiJbH+XzOWdNoNMB0FotFXtuxl4qVl4qVl4qVl4qVl4qVl4poeRcMhZl/zbE96OXdUbUEphOtPvPa7rxUrLxUrLxUrLxUCvLf/RUZw54e6T7ImmStwGSUKvhNCBmesi5ex6Di2LgJSH2UdoujdZ4h8hX6fb8eHTgTBPRADDx7uX5oUnATLNlRHQYOQQQ8SxzVTavCAaX2oNsHpqFOW/C//Pme6ckPtOzzYS0eBaNgmWZfg2d/YQYZ4hYAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
