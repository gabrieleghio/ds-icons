import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderMV16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2056)"/>
<defs>
<pattern id="pattern0_2072_2056" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2056" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2056" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJgSURBVHgB7Zo/b9NAGId/58YlCUHyggSbQUIqEoPhCxCzMmXrRlhZwgRiZkAwhYU53bq1DIzIaT8ADRISEQzxRiUWS5QkVYSPex1MncRBCsh34exHsnN38vK87/1zfAy/8GBb2Ky2wHldVOvQjx7A2+6kvxM3MLp52LJhMk8UbeiPjwl3XfT9qbx5fYB8iMeIAIxult6aW00kxM+zDZRFhzCmnUILQnCciuuE/4ib7HCz+rBkwGiJsRC11IR4RWjrBiWyIq5QlIeYBsDg/LYw5U780DkNxZNU2YxffaamtzoWBrLuvn+kkM8rhXxeKWFFbjypYF358Gy00vNFt88rK3f7f6Xp3MU9cTmXrsEqX0DXf4fG7mME42+QjTR527qMve0XkXSMH3xRJk5IkSdxr/kq+k3idh4oEyekjPk08df9gyjzKslcnsb4vDix1z+EajKXp8ktjffHn6CazOWTE1yS3vFnqCZzeVrO1pXM5ZfN5usQlMzll3Vvq1yDajKX3+m9SW2v27egmszlO0I+LfvLVgGZSNnkNHYfLWxoKPNp679MpMiTOG1l5wNAe32VE5+0V1oSv9Ju4P7+0+hNjlYB2gPsbz9XFgDpr7Q0B3SWTIKyKf7J0YG/+azKxOdpHlcuMhO685VPfpeLbp9XCvm8UsjHhNAbPlcn+W5cGZ0d2NGSMU+mlx0ZIecHcXUocj8UAQgXYvR/Qz7fhdcJzpJrIHzJPDgWzNMj5Osc3sCdfLxquOgF2OAu6GBePhgI3ztUmNkSe3QgkbOWaHUgl+zHGeddcT9Ebdx2Az+gpp8gBrqNTCdDugAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
