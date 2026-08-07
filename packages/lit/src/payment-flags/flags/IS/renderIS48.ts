import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderIS48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7Zq/S8NAFMe/L40/QXQSqoMRwU0sgpOD1c3/QVAXVxUEcdNJcNLVScH/wVFFnBysjoKoSwtOioP9YfO8pM01AUFq0dq8+8Cl773c8sk9DnINISC11Qe3ewVEaYDTqJPsybyO76cmdTxyeaXjgbljNJEM2NrD7fpRULD8a2rHAXdfg7D1E/EWIQVyDzG+++D7IpDnxKm6OpCB4/uqTrcxtruIsHiiAyBvEOohmUzq+M1OfFlHWy+aArMaRaCcDyoO3K5VW639ip6U6FS90IHY4S2kt6BQD6FcqNYw7bV9Sk+y2hFrIgtLaSt6t75Wbz2ifhYEY+SlYuSlYuSlYuSlYuSlQtlsloMk8vrZAHejQzoevXvCfyKXy+nYtL1U6GJ4ULd9f+gEJq48f5R1bNpeKma3l4oNITBHfz3syF9IDZyr89Xyt3No8gBNp/SqQ7PbS8XIS8XIS8XIS8XIS8XI12DEm6ifkqcznQXfq8QVtxTOri2we167Wag8AI5ZB3D1Q6Tye61GvG/Dat8DFxdU5vhFN18ZdRI+IQkfEvaE6uHXyebCD8hsHFnIrL2A3BlVeIQIlDi5s15U2fAym4+42RgGYcnL8Pfw7w8+Va2+DXqf8H0Vn5VVpRqiuFNHAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
