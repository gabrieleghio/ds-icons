import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderLC48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP8SURBVHgB5ZrPTxNBFMffLC20lB9FjAo9WIGDiRoxUU8ioIkeDf8AcDGQ+INeTQyBixcSUxJNlERoryYmcDHx0LRo9EoP3jy0QYVojKkC5Udhx33TvmUgBIPuzCblm8DszG4n++l7853d6TAoKZLMBPPgG2KcdwGHLig3MZ7mzIhOdDfF7Sb8N5hcDHOTJ63DMJS/ssxg3c+6m7ICfiCxkIHDAU7K+o31C57bicV+AB6mVm+gFry+AFjfDpSLrKyGzfU8bCz/pqZwfrMy4jE4H4ISZ2VNHXj9ASg3YSCRi5smFPLLxbYK1mlY4O10kaeqGspZ3mopsJapG/JJ3al+9ShoFWM7cMEAl9TgBbjVBOCvANfkGvzN48WyoxFck2vwraXhpzv1ZbkCf6kB4Ehl8RjT/mwduCLX4GW5FX3t8Gh0lPLj4+OixHqzD7RLOzwZXTabhUgkArlcTtR3Z4MOaYenqKdSKVFS9BFe97SnFV42utHRUVHGYjFRIvjFIGiVVviOkrFh1DHtUVhSFpyrB63SBo+GFiqZGkWbFI8X1xdwSLRqfK/SBk/TGUaaYEnT09O28emc87XA4/RGbk4pLgvB6QvRaXxa4Ntqto/J3XcLo4/SaXxa4G8cK5bpdFr87SXMCMoKXXO+cng0MJreotHovtfOzMyIMuTXY3zK4eUozs7O7nstzgJkfDqe95XCy0aHYDS3o06GDEjEgxAObd8CglP00fVVG59SeNno5OktWMsEeOdlL7x6Ui/qJPkZQPVCh1J4Mjr5KQ6FwOFQMaznT3tEnSQ//alOfWXwmLZkdCMjI3b74wc1IuKysP7iUa1dpyzBtFdpfMrg9zK64TsBuN/r3/P6vh6fOI+SZwV6BVYhJfBodPSYigaGaYxgw3f3/10Az+N1aHw0TDDyqoxPCbwcrampKRHtv4GT8LpeKwvolRelyviUwNM4xYjnFl6LcX4QTVrjn+ffK5/zHYeXFyyyn97tcPKDCD+XevNUHKta4VUCL1SYh46WKATr/u0nMJz7O9omRT8oFdF3FN5embVueGu+xyo/w/8oGFgq9TOvZIXXUXhhdOYvR8BtWf2YX/tFv06/7TkKj9Exv/Q5B14SX/so+nV6ocMxeLyxhtxDy6U/gAphv1Xf7zm60OEY/BU+BubPCVAlDszK/JdwpjAGTokNJBY4VaobT5TVXpzd4tyE/I9vdt1gDFJUKawuQzlra23VPuYc5gzY4vbyCm7W2cyviN1L5STkKawswfr2biyoqGDjrD+ZCVaZVXNwuPbhZZ5fb24xYt2ncrgj0WrIwuFQxuK9hgc73G0wsdjPi/vy2kGv1I8zDinG+VufZyMatQKOTX8ACQZa0iCIiZcAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
