import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderMT24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2040)"/>
<defs>
<pattern id="pattern0_2072_2040" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2040" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2040" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGkSURBVHgB7ZpBTsJAFIb/qRiwBMIWVq0L10Z2bgTDxlvoCfAK3kCP4EmqByC4ctvZsXBjYmswAuOb4mglaeKGNsybL5lm5tEEvpmfposn8E0cx51GozFWSg1oOUCJPB+dogSeoHA7SuW9KQh9mc1mAUlHNA1QASXJr1GQe0sMh3MpvWxdoXjpCATLPURRJ+jU6NQvST4wn7VaLTSbTQghUBYvooZtsqLj/qCRqNW6QBuwWOC6RuJjc1O73c7EbcMj2wMaWv0d6w2goz3TsT82N/m+D5vxhZdfDv7krSjqk8nkZ97v97GrbNp5YAxr+cLHbD7qRfVd/gtoXOy5Uhj7fKRtinoeF3uu/Oul2qao53Gx54qT54qT54qT54qT54qT54qT54qT54qT54qT54qT54qTNyilYDObdlr+wSySJIHNzE1DErKNmHp02o+moOXTNLUuAbobKyXxBL/yQuFO6M7Ler0+RYV9eKU2IWoU4lEqD70wDF+FEEMqSXCAxD+XONfT7IHX7XZlr9cLaROuoHtUq/hJ2x8RXW7e9nFyMZdSf+kXPBGaGuoqDykAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
