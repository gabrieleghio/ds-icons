import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderME16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1996)"/>
<defs>
<pattern id="pattern0_2072_1996" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1996" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1996" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPfSURBVHgB7ZpLaBNPHMe/u8kmaVOl/3/9l8pfJfWBWltsoSAi+OhBL1ZJPehNUfCooiAInsST4OviTUFPeigBe9GDT+hJIVKrWB8kJx/xVazR5rnOd9ppN1Xx4kwhmw9sszM7S/Od38zO95cdC5MkE7HGEBoOusBGTBzVxiO47rn2vieXVYXFP8nEipiDwB1RjKHqcdMFlDZ1xZ+lpfjhxKqUP4Qr2AFOV3Cov22PV3juWgb5gQ9ws2VUC1bUhtPzDyJ756uaWLBcPBS0bfugajR+6Y0Q/hHVBgNJXVY0gPDOZlln2dhgi89O1ahwexTVzIzAbrS9JTdbQjUzU58NH1MT71dq4v2KUfHhXc2oO/A/7Ganop4mpP7YInH9P5gkCENQeGRSXLA9ivGrGekrnDVzRIcsmHBh4pzkrr6HCbRE3ulprCjTWbmZ/JTJYOTrxQhoOLtERpzCCa+7mYJsP32vrW1EaIk8hZVFpFV0aS5KqXFE9s3H10IY/S87cDO9HO++zUHLszFsjo1gx9LHiIpOyx9Py/YUHeptQrh3njzXMRq0DXsVXXZCTkQ0Ij6zoTocub8NL0ebptq9FR1w5Wk3Bl+34sz664iejCEvOiwkEhE1IrR9R2iGnVC3r0UKYcS9wr28EvX9Lzomkg8Rcd3CibEHHtmOQWxvG/xDqzBMUVvn/YrRYX8r2I0LQ+t+e/1o9x1swQhMYTTyW8SS1uDkfnt99bzXMIlR8ZGRz+gT6/mv2L3yIZqzn2AS7eKLw1lpUMb2P5eGZ8eyIbTUj1W0Yblv2WOxvn+W7b5ffIuycIS60TLny8KiUiiF81DQ39tOHifW3sBhYXbo9jgNTgtzw09XrO/5gU/S5vIItEakVVae/29jDSfaXVX4Eh+GLkJCBDM6BZ3dqQeb5EOuJTo9EmiJdSY2cxPtU+fG5jyj7oVD/cyG6xXCZTvp7gIwgdaljsM21PuvFEObW0p9nzwP/dSWc5y/r/Oe+mMLZZlTgAmRLrRGnl/czRTFnJ0rhWdFxpadzNq8sKyu8R7m+0xtdQon2k0O5zDF8UnOyPLgnI6IZEfBMh+ShB0QFA84Ey9QjMx5prTed38s5wYm1vS8PJ9+k8KOMvXmyKi99ZITIyLQGpYjY7aYNfFqns8mtZTWr9TE+5WaeIUpTz1bzNRH8XdVIbS1CdVM5ZskN2mLfPaeKjLzYgeY+M38j1h/77AabLkRaXo3Fhj281Yy0dnooJD00z48F26qI/5ksd0VfzTKHYncmAdf4KaKKPXwzPJWDyXa9tiQ+/I6YRYX+rkr/sn9Ir6e64qnZeb0A852iuYkuzsiAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
