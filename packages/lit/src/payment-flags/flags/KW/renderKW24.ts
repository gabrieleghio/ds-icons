import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderKW24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1902)"/>
<defs>
<pattern id="pattern0_2072_1902" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1902" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1902" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJISURBVHgB7ZpNTxNBGMf/s9t2V5C4pKnVGuLGiyRGgwlGLxpqoneNnjTK0Zte/ABy8ErhSEgIX4MLL3cCXLnAiR5ISA+F8NYO89BO2RBYaFkIz+z+kklnp9umv3n577ZTAc2fAQ/11G8IDKmjIZjHMqQsYXxxWjeI5qOPn89n4Tk+jEeuQ9SKKC2va/k1UAe8KQCvCzCf4w54SfLDqky12nNdwNd+oNeFMUgJHNaBvVqgDf9sNMQftBp3DoDVLcBNAfluGIFQY2xbjXpNNtsaa16e+6IX94EPfqMjTIBMt/dbh+HyxD0H+P4M8AxZBtV25DXv+oC3fWBPR/JEXoXhl37es6BjeYKWAc0CygOOXElewzUMI5EnOIZhZPIaTmEYuTzBJQyvRZ7gEIbXJt9EysjfMjLK5XKrbiHGJPJxJZGPK4l8XEnk40oiH1cS+bhiyA/yZ3DeN8tAe6TyPWpn5FfKw0rXY9xWNuXJllVk8oOWg5FMFgXBZzJF8km/pXrwN90LblxJviDs49EetHhuYnQsX7TvYCSdVeuc7wWjbXkdajTVudOW/FORxqiTYxVqYVzagmuohXGhPPdQCyNUnq7do5kc61ALcvqej6zmTp9EoUZTfNLJGyNO7AZveaVcIrP54AkP1TSfUNImpLmmrsZ8W4lXVU0jhBij7SpPlSVV/M/2XfxQ0t0GjfZZSMi1j7sbT2jNV1Qp/s9kZ19Zrg/DIfEa6u+pLoJPzLiPhoUE/f92ADfLTexszindhapbLX2qVGjAcQS4bI1ZSzufzQAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
