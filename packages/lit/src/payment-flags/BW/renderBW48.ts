import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderBW48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGlSURBVHgB7ZqxUsJAEED3jkgSpMCSjvELpKQS/BIsHLACP8EvECvQRv0FfwB0nKHEPyA2yYyNFBBiZDz3HC8kjDNaUdzeKzK3O2lebmeyuSyDH7o3k1IYRx0moI5hHXSDwbMA6F23anfrFNLujyuCwRCXFdAfDze4MTited/yrcF4CjTEFZ5rO1XrpP/UhJR43t2FHdsFxjjoghCfsIojeA/nKlUJo7BrceAdlbELRRQvgG7IjZReQgiIlwuVO+R4PVA3WXkHdGZjY+uZ2tap1H+DMZaJ9bb9AyNPFSNPFSNPFdLyzPd9oYJyuQy6EwRBsjZlTxXZ7Aogiil7qhh5qhh5qpCWt4AIm+d3Egt7+yQwvT0htC178Y+8dX7/kgTFvSXozvztNVmbVx1VjDxVjDxVjDxVMvJydkVn5FhKGo7fOiMVfER6d3ireO2HD2LCsdl9UIk4WuADCLWrAOkjB5FS01iQ47lL1rwYlmzXmQCtObzpVbu2z2/PGjM5kYgJD2gwRd8jucgcb7T746YA0UmPp22Jbfw1GqH0o+M4vd5xdSYTXx1Wfax7NzVJAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
