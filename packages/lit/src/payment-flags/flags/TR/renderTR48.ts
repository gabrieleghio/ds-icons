import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderTR48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPLSURBVHgB7Zo/TBNRHMd/73oUCpZWpWEwIHFwkD/C4AAJEcRBEiYHJZEBB6OJQx0MMSY4yIQTLEbiYEw0kcXJBAeJKAkMDiWKDi6UEgcBtS0pUGjv+X6PHtB6LXfwroa7fhJo37s/6ff9/t7LEUgR8Hq90obTTyltAwJtYD1mCIGhs7Gl5+oEwX+BEm8NIUXv2agGrE+QKpvtTevhIBc/4/LN2US4SpA6N5vkQJmvF+iO8DLmG6VsJSSwDgr7W2ciVyhVp2pgQ74jE0r9Ke8Hd0q41UBDoi5chBhsLQCh5DyZKfVtL4ePSJayeCYodJEq2+M0rVYWjmT6tNX15qQg3q4UxNsVGUzG2doCxV2X+KdcXQ3EWw40HIVEKAQbk1Ow9nIUEp+/wv8grc5XEnGO4KiuAs/IMBe9F+tvxmCl7wEkQwtgNj+z1XlRuHquQsXUuC7hSElXJxyffsevyyfC3R4FeJ4MZz2+9mI05eqzoESiIHnKQW6oA9e1nevwnHwg1O3R1dHiGNeZJOcX4E/3dUh8mc15vffVMwiz88wKAdPc3v1oIKvw352Xcwrn5zHBKPzI/btp87goekPICMIsL9fXQsX0uOaxpTPnDFkSwwDDAasBguHgOFnFF/CgmGJ5V0+35jzGr1EX5vmAlUMErY55BC0v2vrCxBe3NmvOY3LbF4Ty/sA9OLA95R58uNUvNNSCCIS5feWP70A8/8b74onTPKvrpZiVvaMs6ekBw0ANDb2Y4vZawhEjwpE4a3giN/1A97gucstvWHgmwsRn+7FSlkXJBYbKL2bVbPdcbr4opBcQJj45H9Kcx8y9H5Qs91MikT1Lpl6EiY9PTmvOY+e2H+T6Os1QkjweXvZEIE48i1UtsEwZzc5Y3lSPwbjGxIa9ghrjuDAiENreHht7rVmL1Q5PT71H4aW3b7DFfMvHmUkN748eoR43yu5sL763Z12elrvqWQC0qHdkiD8DHLreHn9wtK9f8xjGqe/bJ96qovXUKoCfOMb5CvZYG3v8NC/P9YgpmxmY5MrxIcdAmcPdnei9ftMfZ03fzMA6vdzcwXdo9IBxvdzSkbfneBXTtrFUtjYqrrDev4XlhJ09vCTbw4sz0Zi4DtqpGcG0hHcYMN3tDwsF8XalIN6upIlXwNrQjLHEZibUwSqlYGXW0vUFJEroB3WEL+vgAihgrUVAPTGma2WXLkJgmOCblyReFLDZe3hzjatLp6SmcDhMqaOdLUoQ7MEcVRwX8EvaC0qBEl8vkfh7eY2QX8yPM0onKIGP4EwMocFx6i94XZog7doVHQAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
