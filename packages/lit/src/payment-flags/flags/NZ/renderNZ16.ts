import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderNZ16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2128)"/>
<defs>
<pattern id="pattern0_2072_2128" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2128" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2128" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIASURBVHgB7Zq/UsJAEMa/A2akUui0Y2xttKNwxj+Nj4FvIFTSJTwB0NgKT2K0shIrWijsQW1Axom7gUASDRMkBMjdb2bh7pK58GX3krtjBaboGfq4ITufWNx4BUQN0Jp2gxh/6Tn6eCDLIf50yS5Ic9cW34Ecwm26ZCcpEn4Nh3BNO0OxmEcmk0bY9PtDNBptlEoGosUkG5EN7IYcWTFJw/ueCvvcUq1eoVw+RTqdwirgfvP5AwghYBhviA4O8OSk/O1s1U270uvdrsTjXjgCstk7RA9L/ZzWEs5DLuHkHZdVKr/7ch73wud7+5heZwfrwf07E5AYqcW7xrxpalgIZ7ibJhZBiCrWw8e0pMJeVvxf6H89wecR5PwFh4ZvN9r77LKVPfwXFfay4h/2QUJ0iaf9MiwT6k5U2MuKv/ggc/t5zJnbrwp+C9gWBOV5WfGs58uRLDeDrufDmsy48Znb1+sviIJms41NwPWe1/Vny/OFwtFKIoA9zjeYr7MJuMIe2EX8UUtaCyVeVpR4WVHiZUXt5GwbagMzBLbS80wYO4ZbKV5tYIaAEj8jur339eDWx+KNWfUL8WbkrLRY/OOsPsT4BsQtAlgPaxs42kRdTDIvW5ArD69Dug/J83ofVkailZgnA5xweckFz98oVkIi598eI1qiGGcG2RNZbeJw/ACMjYALHNO9ZQAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
