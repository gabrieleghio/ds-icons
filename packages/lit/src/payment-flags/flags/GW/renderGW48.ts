import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderGW48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKOSURBVHgB7Zg9b9NAGMf/d3FemjQiIIooLGGq2BDqTowEEku/AAMgMbCFDnwAWDNQtgwsHfgCSCwsBiaGILpmihciEAMpbRM7sc88l9TNi5oXSyn120+y7HuRot89z93ljuEYrVAoWEa2DLASFUtYEjc//IAvYNhLMOysq9gdVhFa5mrRRkJzgCKWjG/kjyFHXeFQaRB0LivOStyPULSLloDW0FBQPmauPx4VzzGGDDg4lsP6Gs4dIYCOCfw9HJTlACgWnnPmoOx2WiXx7BLF/QInodwK+WWHdSyBO5yG4ZZbkQ6d9ji5EXma/KUx23Crkx+bKCPCxPJRJZaPKrF8VInlvVLt7SMMeJav2Saq1j5qwkDQ8SxftVqDdwii70leRr0mzMG3MAMffWVeh6awUBc9NGHhnXUw1lbptrCl5LDBksgzjg2eQpCYKq+JDrbN35hF3emi0uuO1b1NX8EmzyAITE17la/gVeoSvCD7B0VcMjPttxKrAGVypfcHB44ztV+eboBeJC8O+geIuXNeCl2jOf3U/DW1z+vUWqAi7jJXvo8zuzk/Y9NIfLsHX9EyTz4X2urkSj8LuRsEkYXk62K4om/yNKX55f72dlp7kFgo7aWclH6WvHAyt9VEFu/tw/4/vXmZ4VcWkn+o5Puyk8jFUD6a3UYQWSjtTxP30u5X4vN8VInlo0osH1Vi+agSy7sIhJyJo7mU/+QWOk7I9bv2aOk7yTuf3VKbhqZN11Vi3u1F0JBXcAaJd0ZOnxxvFMVI7fQy3UcMrCjrjkj9aJnuIzcnPqKB8pddrkJv2RCqA0dHNGhQ/t+VH/0F74HxU79vNG9QwJ9Qxu/h/+Oc/eNo9H5Jyrex/VWXP/oPQ1/YmXc4tSAAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
