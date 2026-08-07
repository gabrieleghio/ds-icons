import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderSS48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 63 45" width="63" height="45"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="63" height="45" fill="url(#pattern0_2055_4)"/>
<defs>
<pattern id="pattern0_2055_4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2055_4" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASLSURBVHgB5Zp7aFtVHMe/p3n3YdNOtjFL+kik4pqyybRC+0c20bXC6hNc3cQqylofFCa6uYFWioPNf3yAE5QVYbW4P9RVVHC6xrLWTqYROrBlatJKV1o3TRht2uTmnp1zR9Kkz5tHk9y7D5zce05PaL6/1zn3JMA8ZtbeZK2XNarC5mLtaSzEXN9Zpi/d6c7SD53q5matjOsm/KWg/jNpQPT/i5lfOkD9V6ByPKxt1RTUdzUzGzTzEaLLg8H2KIihCKH//wDEIFQKT/E5jd76eCch2MhHiDYX0JqgKb4DuhIHaHAaou9vqBXCQp5GOgZmEJITMyEwdgZzwydBZyahNmKVLhDO0VvuR/72D6G3PgK1kSNnEq8FRvs+5D/wKUjuBqgFWeIjk5nwAmYAo71FMojSiUt8GL31YeSxVNCxlFAyCYmX3siiwHTXKzCyptRUSFh8GCUXxNilzliMZLCsN+Gbjrula7YyMTERuU/a89GMTflh39eHgyeG4ZsWkO2kVHyY41+Pom7/ALrOjiObiTvsWxw9+MjZCLk0Tvaj1XMam+auIhuYEkORe43B9lh7uEO0q+fq9/tfhc+fhwueSshhJN+Cno210IsCqq9l/jlhmkZ8HV/YP1g9KF0PNHSj6jb5Qq6xB6Z3rLvRcM9RXDasQ7YQn3j7eelaaJrGyeePSNd4uGy8FQ01x3DM2iQZJNPIzvlbmNC+A22wFE9Fxnj4+2bmt7lj/63HU58clsZXY9PsFbSM9uAhVhPSSXTOa1eayAU/WfMj8/gg7CXuRZ7m/eixF7vaZAnn8Ch4o/JZXDBXZqwgLiueC+ahLZej3zWh/0874qVnQy16122VomDv+Bmkk2Wr/aWpEpy7VIU620UU5q6c2+eY6JeY1xMlkKPDQHGVFA07rrqwlsiu9tyTjR8cQff5+7DiPGakZCgQZvDaX93oGDmBdLJqtedFjOfy0Hj5snNqbUNIlG3eYZz6tR17xn9AutHKnRhd1RdSd/tFtgpMMkPJf7Tl1Z57eptvBJkiob09z/G9Hx+S0iFslKaas7Lfv4cVtlO/vZVR4RzZng9z6IvnInv7b4fuZa9t0sogZ8PDQ7yVVfVMiw4jWzwP6V3vL72c3TDC8vCC1jp6OiN5vRIpPcxYCu5tnttp38QQsuSw7B1eMvDTnOMvs31C1U7w1MgWDFEnOWsi/oVdpTj4hA2FeWtm25SQ0k9Xt7kIr++2MW+nPn1Wg4LGPS8lOU+1sxAqeiFYBpH1+Oa/eU7a86EiN4J3fgVq8kJpJCyeGr0IbP4SYpEHSiUh8YLlZwjlTlDdLJRMXOJ5iAsVTkV7OxpZ4hVV0OIgVjwVF/1AQckFbRELVkMmnjqZYof0t9Bc5DRHDQVtEUExqkNdWmaMn9gu2CH1BT8zDkGo3CXlttILWgR+dBVgwmejxBP6HjE7Os0ho4EfnJWJhf9AKB0Av6ob6g4edlXkeJ3PeDUg2wVLvydQ/flNIVwTpDv4Xcxzn+7tLc2UkjZCyBakF3kb82T+AWW1jZK+/JD4rrf9d6l6Xwe4Pg8wfa3qcgAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
