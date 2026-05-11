import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderMD24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1986)"/>
<defs>
<pattern id="pattern0_2072_1986" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1986" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1986" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK3SURBVHgB7ZrPa9NgGMe/iXGsUbSHreDJrNKTdSsKbtRD6xDEiyB42K32uF3mf6DFP8CJN0HqTl6EiQeHFztRxqaH/ahexK09qbDCqmjcj9r4PmmbNaFYbJs3kuQDb5L3eZ9Svk+e983b5hHQIJkNYg/TEJCkHrrg8500ek1+PIIuWQWEmcv4ONswiPpxLKsw4StM+G10Kfw/JgZoj14gUpiHopChJl5EjglX4A0UEYdzc1CCEuLZGybhhwKs9bMMEdApJwbRc75CQqdUoWGXtR/sqo4iQ7opMeHThpck14S7DJGJDLBG0tV6AAQICUr72IFXH9yMXJ/lhMbWNtE0KohwM9aJ7G61bfDFexVfvFfpfOfQJc+eXDOur16fgxP4ae9VbE/75vT+Vx+7p4Of9l6F62ofzqy29dm8FQMv/LT3Ko6JD01tI5ovIDS5DadwTvxkuXaeKsMp/NWeF8PJh8Z1FeMt7U9xH7zwFzwnyMynTGcncOwnbeZ5Sm9OwvXOh/q//3V86GgJPOEq/sHoLCZOLrccI/vdc4/BE9vFnx5ZN/UnlLd6EBpZQHebRJO9majlc3Zg+5w/FdnAwGAJ7xbHoKqybiPhFIDlUhijA5sm/4Cs4nx8CceD32A3XNKehMQTr3HMIsgqnPwuMD8ewgluc14+oiJ56SXCkU8tx8meYOPkxwvuj7roSF5P7Q9rw022dSZ+A7xx5DnfWAfer53Rg8Erza04tsmpze83cBJ/b+9VzOK1KtyMZumT+AWjV92Fm9k5KEiiKo0Vkd3tV4al8gv4veO6DKBqrJ/s2FSNxSzCPQl94gz2kDLK0Sq0yehuo/FlCz1nCxX0kAJVYopYSJdZQC6yUBThDQpV7Ov/odUWvKV0EYvpIRYAKppt/1ql92h2Nw1ajqV/RsX+2SsoFulL/wAYhNGbnUmcWgAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
