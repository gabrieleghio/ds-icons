import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderLI16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1936)"/>
<defs>
<pattern id="pattern0_2072_1936" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1936" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1936" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJlSURBVHgB7ZoxaBNRGMf/7+VSD6IQC7ZCl2szuDikm9jBRMFOChEXtwh1E1JQUeigi4IuTWenTnbSXZFE1w6tWNCl5CYhKnrgpYaYu+d7V+9IjMMdJ+3lvfuRl9z35eXg9+579wL3CHyM5TyoVgNBiUclyAbDNgitY/fJup8i3rtx1wDtN0CIAelhJhytDPOxuS8/d6ulhriPGABnXkPhTpUHRpCnR3g9ZHkjkAbGeOsDbvdPgvBKzyxrIKzG58M+VOctC+kQF1JcULj81fNz5ygXLwadqAapoRODUYkOfxu91O9fe4fvzza8trq0iWQz7JfB5NkHQSTmewSE7L2rO9AnHK+dOfXVO31z5yQSi1/2HIoYVC/sjuRqlz9gXAg1yYuz37B6YxOl020vNj/neDuKfK430lfkXqw0vN8YUx0vt906juv1Bf45iSRBULjNgkg79s9OrafPYUzbiIMYrNmlKzh0+j+Cw1BlH1fcO8dU/HP8b0LJm+0c4iKmStIIJV95VI41AFYni8rDMpJGKHlxoyqvLGL9dQFRab6fxnztUuJudoLQf+nEDau6tgC7/RFRuLmxiKQSa50fd5SWD7XOS0XUdV5W1C77V/pMUPYnSAay84U5wXFa9qqSyqtKKq8qqbyqpPKqksqrSiqvKqm8qqTyPi7khv0VC/mmH/xkcut32YA+Y1tcnr3x4z0+Nnu8gzsyRuON8OlwL3ugtgkha6QBI/9L720REAOKwMBaF7uf5ih//mo5cMtMbMxTACHOfc+L46HtSS/1mSphEPtvizhYDmKeNbnuW1u36xXLskTiNxz5trY4+9MJAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
