import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderZM24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2496)"/>
<defs>
<pattern id="pattern0_2072_2496" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2496" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2496" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHjSURBVHgB7Zo/TgJBFId/uyxi4p94AaNWxtioFxBtPIG1egKNPQlqr3AEalt7tKIyWthDjIVaoYCAsIzvAQu7K4pINOzMfMnMzhu2+d7MzpLsM9BmJo6ZegP7EIhSGIVsCNwKE4nSMVLOlMHdeBzzIRtpCuYhOQLI2SFsVOLINeUnYsiqIO7ACQgXsGqR+K5b3IhQN4b2npAEskWNLpVWyL71KRyYhkHPeRtjnLoI5BJn2IcXNOKZXTcpKyudMAypMcY8YdT0/opAc1jtc4PPz4REsHzfBLiQSp4ZJAHGZKx5FraCaYwsyzawTSf2FrVZgV/zWOyOAyPvZphEXJSB6xBdrYDKu/lJIjIkmyHZc3qb3Qd95b+i1/N+Gmk1B/HaHUt14PlF/bEfC5Lhl/8O6eSZftIO0r3nB0Fp+UBu+7tk7/m5h97zL7Hu2P0nR297VdHyqqLlVUXLq4qWVxUtrypaXlW0vKpoeVXR8qrilR/i62cQaPj8uCzl0gnEO6SmXPeENyx/1Qmr7QRItgN4xYvkVfB+xExaVhiJmo2dTjlapVuyNao82YPd/1z6NJVdPEPKzMeR54pELsyDGmRpJ2zyoHngcSlm6QQLlIA9rlHF/yP+ugmBNEkfvQmsLSVaC/0BjOWn3AwEQPoAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
