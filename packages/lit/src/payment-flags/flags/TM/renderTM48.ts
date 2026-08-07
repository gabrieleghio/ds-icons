import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderTM48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATtSURBVHgB7ZpJbBtVHMa/GY8dOyhJkwYiYgWcpY4BFdE2VE0rkZQL5UK5IFYJUglE4NCAOHDhgOCAkID2AK16ILSiB8SF5EJPdDm0qE1CxeqUEBtVtmghiZOIeJ/h/ceZ8dj12GPSGU/S/iTbb/Ozv3nL//P4cVjFNzqyye1eOQhRGgS4wSOZSaUKw8IOuNNZ7J69hh1//qOWT97TivPdbUg4HShubzck4DLH4VDwuWPHlTKOngKjr/rgEk+zpE+p0Ip5O70VT0/MoimeuqHTRY8LX/V14QPnT2qZHcVrCCPF7w0OHQ3nxJ98JQSNcEIRv3iVRyTkgjuT1e0tKTjQ3plGU0eujc3FE+FEKrVNCJx8+SVohDs8TnBuJzYn6jA3w0OM8ri7jlXUOcr2JkYdkFwiWnuycHrugJ2QJAlSMoPsijpzfW7BNSJIEneQ43IljnoXeCaciEzxiM/zqIZYmEdyiXW2B7aCYwJpQNlVQDaezhXy3ADPyh9SGvEuQX2Dd3sWzb4sqqHZJ8rvsyvKwOaQBoXCWi6fZO3uvE+E4AGu/p5f8/7H02qbK9/mOkuwNd+xJSWLN8obD+xX05/8MgZL4LiCbMV5TYKODNyPGNvVS0HlVF+NcLsgGGkUq88JHLwShR8RtfxC110442+X4zwyWHcYEq/ASZw61eV8F/43xVO9t6Ed+7070dvYjvHIJYyxh9kYEr+JhYihC9Pyq5Zds9cR+CuG0f5ewIU1Mb0cxYfBb9DuacHnO1/DcM9jOHDxU0TjCzCLimt+gYWv4XO/3iBcgcqpfiHswM0gGp9noj9Dg9PDLsLr7GI0wyx0R15Mc7LJIfFu5MNXqd2efP/fv/FIxyGbHG2verv6j/s+VtMPnnqz4LPpAnwZPieP/uFtB/DU+Y9gBrojTyaHhFcDmZzIVFXbiC6X5mfk195GL9sLHoYZ6KqrtcmZmP9DTT9hknjdYdIzOdrdXqGcydEzMMVTvRyBBi/MwFKT09fSDaNQ6FOgzc8MDC1qxeSQqdFCefnC1BuLc4FG4yP4gu8RNb1MO6kJVLWjkckpyKM6+pq7DYUuakOGRyHIPIAZGBKvxPJdoWsF5WRyynmAYr67/nPF2E111EbLWOQizMBSk0O2dSkTx6mBd/De1mfYus4vg76WHjmuf73nLdnlKVDMHzfJ6ppucooZmRqV7StNa+3ULoXi9szCcpOjCKLXckwvRQy1Wwu635TMytyMVJVnp3C3uadyyCNB+86+L5uXJ1d/yTUwQ7HMlkRwKSqv8fFa/qq7WSanHCTQCpF63NJ3ciw1OXbDUpNjN2xzJ6cW2O5OjpVYbnLshO7X3Eh/V+lh2zs5VlBTk1NrbpucSmxUk1P131Xa3f77aaxrqjc5gXz5bZOzYUyOKKkHFPRMTqndft2YHEkqyLKR584omWwyv55r/XeVGYjJ/CCyIf6BZ6N9Vq2Mp5FNZCCxGbCRTA7poYNI2ZVkvozDYSGRSR1yu1wvYvU4msgaiCvAXIat8TY2NVKVz+ElBB7eTjZr2kTMLYNN/39hc0J0EpMPD30RA8/vBZ1MLEFTh4gT/Vuw6HaW7IXKT/T75XbrhBDT+ygl5EUdfPZoOPj8sU42GYbYnnC5uDUdMT2+24+Je1sLyidZnoQvetYc5yTTH5J0GiLeTaTqt5Ne+tD/AFykn3s0D9csAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
