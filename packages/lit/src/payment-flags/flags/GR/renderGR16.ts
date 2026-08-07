import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderGR16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1744)"/>
<defs>
<pattern id="pattern0_2072_1744" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1744" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1744" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgB7ZpBTsJAFIb/V6qAK+IOVsUTcAPRhTsTomsjFzB4BI+A8QBgXLty50b0AniDuio74woEC+ObQisYaoQoLZ35EpqZB6X5ZsrLmzIEn0ojB8OogUSZe2WE4FwdzI0Xzu4RawSeQVTH7em1HzK8Y6VhIUVtFr/AD+JrDaHEI9DEcdP2fOHLp+iBjxbUwPJ8+U43cdSoYlp8I8uDkeGRorln5vP5+V+Z3UZsEQIY9oGPrh+xeNrPTbasBR/a2ALMDBKHnEjpJQfB7fmxXWP8W5iQ2kSimZ3YsjnzJhlYFeLmEFHQ6XSC9upsY4iWVxUtryrkOI7wO6EFzH9c+OQOkdB7DZr6tlcVLa8qamd7XtwH2f43y9KwmnzR7K1r+4jR8qqi5VXFRETo2j5itLyq6ISXREL+cJIF/Vczqic5UaFr+wlaXlV0tl9HhMBSTJ+38JOctUfX9mO0fIAYIdF8SxRSvhX03D4SzXDKT6Bt8Gg8BgG5Wcd9j8UdIGvzP3thBGI3cruTvneBS7JtO5dOp9tQZx+exC4UCjtGsVh8I6I9DrxADWz23ZeNmYUfr3iqQgi5L6+E1bJkybIQLXZ7GgwGdTnhMvAJL1F8aBmrC/gAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
