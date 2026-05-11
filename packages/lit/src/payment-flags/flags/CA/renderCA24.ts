import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderCA24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1500)"/>
<defs>
<pattern id="pattern0_2072_1500" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1500" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1500" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIgSURBVHgB7ZrdbcIwEMf/iSq1UmnFY+EJOkIXADoJTMAKsAGdAJgANoBOUDaAJ1DfUD/VF9w7wCIGVUlIjBvsn3QhviSn/H2WP4g9bJkC+SugKYAqNhbOfA7jFIuRbiNdEx/oFIC+9Hl8WAAlujii0xLikCHxAWYkukaVMPO5dJTw7LJONLd0j7Jep0JXXrkhu8a2SYQhBIzjhb8pv+UX2Zvqa/t0aErHLVkOEYVnCNbDCc2pvoo331TMmjvEFJ6RzEtWZK+Bsq/EwXnjh5Stwom3FSfeVsyKb7dhEnPix2Og1dr8GsKceJn1fh+m0C++0aD100z1cbZlxodDYLlUr/P9tRq0w9NbaSKuRYHvK5WE6PV2vmpVjdNq7a51OkLk8/Hix7Cg3tOIl1avC9HtHsZhsYPBYaVoFq8sbAqISZSFjZdgxaAh/iJw7sZ5W9ErPukkRvckSFuHxz34MTH3LTgSpNzh6RGflvAoFZBAvJ5mX6nQP/9VpALH4Xg60DrOj0aHY3dU4+f4+TD+XbNPUglRRacgXv8k5y+Ck5O04kTATXK2OPG24sTbygVMkaSHTwnX7G3FibcVJ15ivv/Vy2qvzOLHsvCB8+ZbLb7whqRnWWLxnzi/FsB63qHuxqK14JM3BfKXVAs4Zh9eNjchMlN66t4v05cy3pFIjhnsYEp6H/lk3eHxVkyqiTI56asiJjg94gQ2okP7B3gobBP9C6wZTfvZD6aCAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
