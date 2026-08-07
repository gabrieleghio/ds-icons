import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderTL48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARvSURBVHgB3ZrLTxNRFMa/aSmdWoEao4mJmolLNYEmPlAXtm6IcQNufCQmEjWmG8H4B6BuZCdujDuoiQsTDWx8xJi0sPARTcrCBzuKbohGLQhYK/R6z8Alw6TzKn1Nf8lkyswA/e75zjl37oyEFVKhUCjXnO9hjEUgSRHUGRIwDrCBg19+xzXHVJQXl3yJTe/8ytJPD+qcNMvlooems2khfrI5COXaWeDMVh9mnvhR54OQ9s96wiT+PN8GxdHLXcCtGLfECxm/xxqx+N39g5DnW5YxzOXZ6jH+6QaJT/GtTXuxsg1I3AW2N3jw65GMOT4I9cA8Fz/PVgZAYkkv393TX5SZA+JPgOAmhmPd/9B0NIf8vITclBduxidJWBDiISmk5nqhC7M54PkbYIYPxOEDDJuPuH8QyOarkV/5mVn9kkgD2hPZTw349VhW927j21J+9bNh5LWINAjw1G/fCzRsyasu8PE9uSC/IMEtaCNvSzyhTYP2PYDsBxqVJbQc/+uqQXBsez36NBDMjTaq6VDL7dGx7fXo00BATgju+wfvBobs59qsB0XZXk+hNCA8QQZ592LNdoZ1216PURoQlAK1NFFat+31GKUBQU4I7l+eI5ALql0PirJ9X18fRkdHDc8bpYGABoEGIMBTgupBtTqDY9tHIhEkEglEo1Ekk0mry03TQFCtzuDY9oODg1AURd3i8bjV5aZpIKjWHMFR5EXUBXajL+g9zVPmAhBqMr8u86gyt9CWkacIk+iOjg709/eDr3Ctnmtra4MsywgEAurx6elpmPHmA/DwJdB51HwAqD3SHKHc7dEw8p2dnRgeHoZT7LghtJGP8kWg5zQsKWd7NIz8xMQEpqam1EGwS3d3N0ZGRiyvs+oGWrTtsdROMG114+Pj6gCQ7cneRmQyGcRiMQwNDcEJlAZvP/K1sxPW14pBIEo1XbZV8PSFTo/TwifoObVsf6sCSFDEf9wPlHTdQGv7ov8qRd4JJJaqfq/dnOdzAJoLlBND8VTxzaCqTyliBzuTHoJ6/cwzP2b5RrlebgybKokTkL27urrWiNWeN4NsnrpvLpxEU6S/XmlW+30lhBOG4ltbW1XRlNu0UUUPh8NqdU+n05bOIJvf7gUGrprnN0W60qIFhgWP2p1ZCzM7b8fmC+99ajGr5ty+JPfzWqyqebVXfktS7fVYVfNaXO4uyTexWskhe5PNa411izeyuVrBeRGjtlWrFC3eyOaV7tXroSjxhWzuJtECx+IL2dwNDysKYVt8IZtT5aZi5tantrbE19NTWi2W315r83LcYlYTQxVam1Muf39Q/lvMcqOfypL4JN8i2oPC5jtb6G7LXRXcjD9szQtJKRJPj2Ei4mDsJHDznATvK363VSei81z0Hyy/kCTwgN0hZbQunRLv4Z1qasTsU7+r3rYogsn2L7O7KPK0HhUdvuhNtIwFlMyPun8Dc5J5csfow5rwvt7RdB6S1CPp3surACW9rS78H1iSSdKY7PEMhNPLC5D/ASE8VgHCuhXbAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
