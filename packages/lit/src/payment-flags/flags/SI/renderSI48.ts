import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderSI48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALsSURBVHgB7ZrfS5NRGMe/552NMbdpmdRw6JtZlJRl3RReOOs2ugiJulH/AEGvNLozUEOCFhjkhVBQ1IX0A7QgkCywu1pJNMNki9RVEOm06dTtdM7wne9M3V4KeX994N17nuecm895zjnvuRjBCsFgMN9mszVRSr0s9EJnMK93giD43G73HSlH+E84HBZZ5wvWFKF/QoSQGjYJoaT81NRUEMYQlwjFYrHKHFb1BlZ1Uco6nU7k5uaCzQ70AvNDNBpFJBKRUqLVam0WWEeTlHG5XHA4HLoS53AfXlDuJstVC+x9VErY7XboGT4BMryCPNJbxdfCTvv0GAbG0PI5SgbHP45i/kon2n860VNShZlttlRf3tICLk6+wVUyDvu1TljKD0DtZF35xMQk5i7Uo2WmEF1lp9PEOTy+JVahY7GIjasDjcxC7WQtv/R8kAlF8KDo+KbjetgEcPHFvkdQO1kve7pyQZBXPH75XKpt6XiY1k9XLxSqxTztjUqO59Kz1ci+fcOBLWOjaF2Tk5b6erT1j6Lrkwr3ffRXqvlPla/etxP1J4pRUqDNa7Gi7zyHC3v3F6LuZDFEmfT7iRncfv0FT0bC0AqK5c+WOtB85u8LzBFPHq6fr0CJNQ7chSZQvOy/d/eibSCwbl9bfwBjPfegFbKWHy7Yk3y3fh7EDzYBvsf+tH4ex3w30R4YSMYfXG6oHSLU9dJUtMlpz+ke6WP397fIxH3PMTQeroUqkZ32ivZ8Y0Utnu4qx6HIxocaXyHDO0qhBRRVXhf8r++81jHljYopb1QUX2+1AgHNPCbgKUuN2m3R7Vyk+BZfTrXNPW9UTHmjYsobFVPeqKTJJ6Bv1vpx+SEpiCb0rT9PV/0I4BdY+FJKzLHO3+xJZL4Wawruw91mZcUllN4gflHMt8UtflAiwigQGjz4dbxUqAyFprEUr2GJEIwAE2e+p5JNeT5QtLeBEtJEZH9P2yK2YqMNsefVwtyyr3KaFZzxB9Aq78BZ5ESnAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
