import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderMW16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2062)"/>
<defs>
<pattern id="pattern0_2072_2062" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2062" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2062" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG5SURBVHgB7Zq/TsJAHMe/1xYlUYTFxMSFuMjo4AvoA/ACDDKyGZ7AR0A3Nt+B1QF0NmHFCSYWF0g0FGjvvKtQwGjE2KvY332SL7lrk0s/9yf00gMW5GSuZJoyIoFpy1zgE/Iy3Q17WF3pznxDuhv+wDo6IGfLn/IslFBLfKzkb2UOQBCG92lAEgcxkWEMRWsXx/YWTq1tZGDJa1Zw70lM0Ocemv4Ij9xFX/iIA+0jr6RLzh5KdiaU/Y6G/4L6dKi9E7TKl5wMKk52bell+sILOqDhv0IX2uQrqWwg/lvq3jDoBB38fEjWICrxoC3ZjmpPB5HLF+2dyMTnqPbUEooa0n91Wqb9f4G0vHOXPgwr+8xG0nleencw054qRp4qRp4qRp4qRp4qRp4qtHd1SCiCfXF9qcwKtUJYd3IpJB1vMA3LZs1TxchTxchTxchTZVU+6R+uPvgp+da8wsfxnIj4K/iEh2UG1rbAcR/edHnQAUIkawooH+764KPF4ApL3LB8LZ9LI61OJ+ZBh26n2jmyetXeQFbOZHqggTqAeK4KKxs/ucMrC4hLuR5OEC9xrLOWzIML93o24HgD7Q8h2EfUh84AAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
