import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderAU48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 63 45" width="63" height="45"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="63" height="45" fill="url(#pattern0_2055_4)"/>
<defs>
<pattern id="pattern0_2055_4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2055_4" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7Zq/b9NAFMe/11YiCyhdEGwRK1S0W4ZK/OjA38BCUHdEKgayxf0HSCMkxlKz8CcgIVUYxMBEgqi6NgMDZWkEQmqpkPueaztnt47s+kccnz/Si+/Olp3vvXfnO/kJuGhV+nlKdte2otEHxAbQ1p0GcXrQavTzgayG4jMgu0eaB474Pagh3GFAtjRHwh9DEt5u30GzWUe1WkHSDIdH2NraxdqagWwxyY7JDp2GGllzlob3aypc45ZO5wFarWVUKnNIA75vvX4dQggYxg9kBwf4rF3+L7dqplM5OHieisf9cATMz79C9rDUP25tRj7lEU7e8dj6+tl7yef98PX+e7jPuYTJ4P2fM1AYpcV7xrxpthEJOdxNE1EQohPp+u3PD93yyvJbXJzfbqkMe1UJfqGfN4OPI8z1EYeGTJhQjzo0yrBXleCwDxOiMWb7NIj6FijDXlWCxYdZ249jzNo+LDx7O5YGpedVxbefb2Wy3UxyPx99zR+wtu92vyILdH0XecDznte0L5bnG42bqUQAe5w7mJ+TBzxhD1xB8Sm3tBaleFUpxatKbPGN1QVkTVJr/ljiby9dxaPVW9ZxGokl3vH6JLyfBBda5LCnWbDs8W+9X9A3v1vHfDNa5EQWz2E+ztP65g7eUCfklxjimdOxvoBFyfP93j6J3im252VevFyxOqJPgp892cZ0kNDaXrfDO99hHgxnZmijarRt7P7Pv9bx/bs9TA9HbskX9pfh/4BfLM5mZhijk/9QbI7lSo/FfxzVOSS4Ayb/9SVZWA9rO5TaRFfYmZc9qJWHR5OUdoM8rw1hZSRaiXkqwLPzfS74ZjcrIZHzbxeRLVmMM4PsE9mG7XCcAB6AvRXLpKuJAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
