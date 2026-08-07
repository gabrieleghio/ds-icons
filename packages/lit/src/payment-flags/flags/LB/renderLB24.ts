import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderLB24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1920)"/>
<defs>
<pattern id="pattern0_2072_1920" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1920" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1920" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKCSURBVHgB7Zq/T9tAFIDfOa5UQitZCkMjFtql7VAJJtgKdK9YO5X+BaFrlyZL52RHIpm6d29Ju3VpKoEETMmUQKRIliAECeLjPZOLnIgfAXLP4uxPusRnXRR9fue7p9MT0KPiOE7StjMSYBEumlkI8V94Xv5lq1Xq36KPHceZEYnEJg6YAdORsia73aXXrlvz5XdTqWokxBX4ADrd7py9k0qtBsWfCAFJbBaYg4etIyUcYvNB38e2vWYLITJq0FOUnhQCTIMCSV6kftR7AGj5lu7PqkETBooHSQ76LQ7MbpOm+mVYN/QjRSwfVWL5qCLq9bpUnXQ6DZx8+luAjfkMcNJoNPrXoUW+WP3ptxK2sAhFvtZuQm77u3+99m8d3NM2hEEo8hRtegAEiRf2fkAYsMuTdLYXdQX1a+0D4IZdflhcQYsfN6zy1y1w5eY2ti3ghFU+d0XUFdzRZ5PP+e9189oxwV2AAxZ5kiqOuJ/nceXn2vpY5LMjRF1B4p9x7+dAuzxJ3zaLo1nCsfhpl1/69QXuAse7r1W+GMjkbgttfbrzfm3y41i5def92uRL94i6Qnfer0X+svz9rujM+7XIZ8e8WOnK/FhPcmgBvCrTcx5NwsZCBlamF0AnoZ3krD5/B5vL3+AjfgdZmZ6H6vt17eLDhHaGR7OAFrOvbz6MR1rKkYYFIy92p6b6v3pmmX+Yu+95/ev43D6qxPJRJZZXeGA2w34kX1ad4xH3yodKZ9CvYmH3t+pRsU4bm2fYQyCfo2A1FiKkLAiqvJxIJCoRq8Orvmq1XlhzrutSRSIV5kEUQHH0XabLgdosKkjs1eXNAi8c71kZ/+TPydlZngJON84BHbIojMrllesAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
