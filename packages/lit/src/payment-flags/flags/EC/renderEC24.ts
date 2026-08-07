import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderEC24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1632)"/>
<defs>
<pattern id="pattern0_2072_1632" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1632" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1632" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7ZrNSxRhHMe/z7iZq1lbSrWdliB6I9Mu1aHSXqAiiIq6pKBBh6KwPyDISOpQBwUvQSShHQsikKKDb5F5iC0PaoioWKmVutiurrLO0/ObnHFWx0ljZqTZ/cg4z/PMPI98nuf3/JwdlmGGniB8aTGUco580OEyOMNHiaPCvxdP1DZGvwZaEOAS6kUxAPfTy2QU+PeLM9W+taIHiSGu0juZijyPWPVirhPPzAAyvCIkJLgGLgPjUWAsrDUFUqO44RHhXqq2rF4lxNPhOmghyUsWqxyOzLSl4BCtb656U3oaXE3cwoqkHhfcbgp1IyQ2p44EJimfqCTlExUPLKKrOxWv3qxC87t0DA4ZD3v8WBiXikLYuCE271o4IuHu/Wy8bTF+0MjNiSJvd1QZw2/Q/19g4tGWqxX/eliC2USQeImYgBPHZh+36L57D7KVCdBjh/DA99myLfJ6FpoIErpwZgyPa3xxq22HsB5H5fVU1/pQLWQXoqQwpESFnejlHU14ZnJOiM/F8WxvJLkc4oRl2X4pRI6ewtDOIvRNbkJO+md4/DWi9QWcxnH58i9XxXFFq7eNb8Xl7nKEYpm47q+Fkzia8GiltwZfL3i9ddd57M7ohJ0sW8KjVTej5sdpOImj8m2RbabXX44ehpM4Kv9J7G8zaFs4CcORKm3PI20trKK+tBz5WzrArj3V2lYW5vy132Rtm1bmVRfR0LUdBZU3YRnRUa1oy8rnb2lXxOfCI1Om/eSRCYOxOgzHsgJb5G+dfG7YLvePmfbjo9EFxnsGO7BFvrFrh1b+E/7tSnm6e8S033TbkHKm+6mf0XhWkoLNJ8u0mscLK6B9ysQPhWsg6yeK9zUr5d6vPvQNroO0KXNen5gQP+h9j+qihygTkUP9iNt151BWdxaWEZuNLlvkCf0EEOokHFz7AT39a5TMzrwrRKhP4MBUEx7tuRMnTVguTujkbcv2KiRPe3YpSYsmjsTpbDm6bG+7vMpiJsFWaZXlkFcxmgQrpNnsRxRz9PKd2dlar42S+1/mDsqyVk6+t09UkvKJSlJeRYa7metH8g1qZZwv8n/lf8pEvF9QEtVGtRYWFyPikF02CeRDbr90XozzShb0+XzelJQgGAsgUeC8Z9vw8GYpLxQK8enpAtHQi0RAiAtf5U1p3PeTOrKyihlj9L28XDiLE/usQfyRpmgsVkELTg2/AfImgNdiwCO4AAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
