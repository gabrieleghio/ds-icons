import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderQA48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 63 45" width="63" height="45"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="63" height="45" fill="url(#pattern0_2055_4)"/>
<defs>
<pattern id="pattern0_2055_4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2055_4" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxSURBVHgB7ZpPbtpAFMa/cV1ModBuaTYcIT1BaS/S3iC9QTkCPUKX7bKbdNXQVuq/TVhUkdoqMlESgxJFcgxSwqAwmbHGiUOyIANRZpT3swDPwILv+fknLx6DJgzDx8VicUUI0ZDLBmbg4G+Ifx8/Y2vtFwbRHiynA4HWm/3f77INpt56vV5dhl6Tp3UY4lAhuoLz5824003DR1EUYo7g0zhQCFWAp7686q/kVa9nu5VKBeVyGYwxmHIS9vFkaQnx/QdgXgG3jZDHWExwLE6yrToKhde+DL6S7VSr1TS4CTvf17Hzo4ON96tItnuwCSaPArsnSwCMdAGYEM98+bmc/ahUKuE62Bz4KlQBsvCytRte/svrtnpQfYjR4QBIa2o/0+mYlN3ZP6/VajBl/89/bHxYxeanb7IL+rCVZMLPzhcWPo/NhciH93ADjJIhgkcVXG40u/CxIFyTn2Ku8C4GzjNX27tm+2nI9tmCbL8AyPYOQLY3hWyvIdtryPZke7sh25tCtteQ7TVke7K93ZDtTSHba8j2GrI92d5uyPamkO01ZHuNk7YXYjHta6vtp9Mp4bWh5+6Gw2E6kGSCC/Ibnw8kScS6Gkj6whhrqKUK73leOpszy4iKK7ZX01hcTM7ncdJN9tbnnLeCIHgJPYeXJEn6moWYHyHa3cXh+AiD3L3kAKGaxLyLE5ih8LwXzf7P7oXe1gOJai5vGXNgUIgbf1CQudryXv4KXmo143as9k4BbsVGNsBKYUsAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
