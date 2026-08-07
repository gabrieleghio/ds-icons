import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderCL16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1540)"/>
<defs>
<pattern id="pattern0_2072_1540" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1540" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1540" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKLSURBVHgB7ZhBbxJBFMf/M1DUArocNEEPbtXSgzGs8QOU9ayNJ2PjQS4mvcE3UL8BntrEg/bkF9CYeFn0qGnag6cmhu2lmHqQEMGkaXd8s5F1IQW2SSkss78EmPf2heQ38xgmw9DBeK3B2S+BiQJFBYyA3Q9LGBdCiC3OeSWbza53csx9N1Z1CGbRSMcIGae8D5sxZtIk2NwNT0F8gtCpC6xarabFcWu1CL947Bz1wxl6MZw0NNsYBySLdruNZrPZSemJRKLMwVHyqmKzAD87VNzIaQgT1OZIJpNIpVL+3CK1PTO8DE8M/SI9m4S1ZkJLzyBsyAnwUeDdj4e3+pN7uitefpRD2KDdvjvGMZCrXryvu+PSci6Uq+/nWPJy1eUESKT4s6c3EWYY8mvCi2Yy3lBKlpfncZU+jQXNkz6Kre1fsHfb2Km38OadTXHjyDrx9SHGTb1e98Z9V94mES2dwIPClYHiEiOXcetkfT/xSWRg2xdffME6rWQQZJ2sDxNDf/NBJiCM4pJAG17l7fbA589ffUMYCSSvX54d+Dw/n0EYCSRv9Mj1bmpzQzbESSWQfP7fWb66sQdzxcLtxx8xt/Tejd3nCxcQRuJBinZ+tFzp6sZPLyf/Cs2VKgp3LqIUwqOupO8hZxSE5pCjApG8qkTyqsI+3Tjv7faX4id/aTlp7B38/3OL2l5VInlVieRVJZJXlUheVSJ5VYnkVaVL3sF0I3pikhfVTvDHEZhmevw2uUP3GZ2oRUvfpoJp6wDp0yKv334xIV4yS9c0HnM26QZfhyoI1Ba/N69x0240nENuUsKGCpC4c7h/Vw67Lu2s6+kiY6xESQOny8g3G0F7mwD7jANekQsuc38B2ILA7fsA1lsAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
