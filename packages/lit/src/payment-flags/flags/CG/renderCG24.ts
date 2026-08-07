import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderCG24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1518)"/>
<defs>
<pattern id="pattern0_2072_1518" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1518" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1518" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALSSURBVHgB5dpNbxJBGMDxZ6bQ0kuzN21s4tbUQw+t6MH2JvULeOKq/QbUfoCmN9PEGDyoJ0w4NdHEew8GNDGeDH4AE0lNtCWCvJaXLjvOA9JCg8LOzjID/hPSZbK0+XUJuw9ZAp12QwZMNyJAWIg/C4FGPVy0YHuxCa4i8JkwEl1Y+xQ/X8IerZt8M8G3TNAsKfDe0uX93MZyNJ2m7ed6wsOXm7LhcJIsmYU3uUTKMAwfP+qb0A2fmeIP/j8hBFR271IT9m/ZfMsPbrNtBtUag0yiCL+eHeOSWZuzt3wANALA2nsFptp4xd2YYxBbsUBWlBLwf69D40XmbI0QdocfYhY8W5mmoLqrswze3m6A4WcgK+voFDLb3yBw0vU7GQn1ahW/1VvwNW/gdtmGizr1h/pPHbg5Kx+OP/ulBV4FHFOON3zy4fgWHwTHlOJVwjGl+Niq1TqtySy79wMaX2pD7asMH1s9bV3IyCy7dwTVD+Wh91eC37luwYMrcuGFeBYqBwVHrxk5HuE7S/Ku3jCEF+I/wWkjxesEx0aG1w2OjQR/f6EpHV4+KLqCY57j8RP95crgc66T8BM9x09pbvMUL3s0xfAcnpUAxzzDezma4lWcjDzBez2ayko6XtWEJpJU/DjBMWl41ROaSFLw4wjHpOBVj6aiucbrMJqK5gqvy2gqmjBex0HFaUL4SYBjjvGTAscc4XUdTUUbGq/zaCraUHjdR1PRBuLHYTQV7Z/4cRlNRfsrftwmNJH64v8HONaLZ2xsJ7RhuihCfLLzxGD2xMKxKjt38a0UBZu96yw8Nuuw5LNady/JahSj6aBsjq7wR7nLRYE9Ja07L2fqqSfLlhmelzuh5Z8fQyVRAg37un5YvEZhN5nfMtlGeN5Kg8RKr3Pawhlt3MWNnhuUDj8GNwklEb4cBBchvPgq5+Qlcr8G6vsXWJIR8j5AafRmOp/Hpd/O2/37kOL9YQAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
