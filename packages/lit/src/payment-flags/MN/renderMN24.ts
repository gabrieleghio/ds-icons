import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderMN24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2028)"/>
<defs>
<pattern id="pattern0_2072_2028" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2028" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2028" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJhSURBVHgB7ZpPaxNBGMafmd1qq0hFoxFBXA9FpZcinrwYvbYoBfGqPXi230D9BvHswXotQqDgOfXiSWgvotVDFgqFYrX1kFgxu+P7rtmyTf9k2t2W7uz8YJKZYUn47bOzeZOMQIea5512ceypgqrQsIIU3Lv6BFkzs/AKaVDAvANRHfO/vonnJD/UvGueg745En+OlOJHFQGMhFBTM95Qg4L2eC6SdxDU6clDMeCg69GVXvOGHiMhfkJK9AsBSW3f9A8ia0qui/0SKoU/1JphGE95Eu4kvaSidf5f9CSJD0gJ0+AgB6jRukercwIExG1J4iPxQccNFE/SFWxl08hsdaB7IZvuuytWXpdTw62omcKe5C8+/B41U9CWj1M3KX1t+WTipqSvJd+dtinpa8lvl7QJ6WsVzAvPLsNE7Od8UdH+nshr/Pzoz6j/oz6IxakLyDta8pcmllHuiDPlsVUELQdL0+eQZ7Qu+1JlbctceXQVeWfH5G++/bzRD5qy5zEfH1xH3tBKfvnd2S1zK7PZ/1R12GjJL02X6AScQZuuAG681hdfl5F3tO/2LGuCcBJb5BQVW+T0YqciJ+8UusixN7xe2CLHwCJH0P/VKh6k+Sc0ya3hSWTNh09VZMFKu73Rt2u+qFj5omLlY0KYjeoas/xsPFgPzdZP+tGJmJMK6n08wZt1flPj3UsmwT7sltiNBQfipRuiXZXoeyQ629H4gCZSsv4LWZMsTjKgwTsx5bjvr4Vw7lDWPopBI8Dfu9yJbnjj/hf/vv/tSgBM0DKYx+GjDr6pOrm9IPEbFLjPb/oPIyDzgBUsWwYAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
