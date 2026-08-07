import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderAG16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1336)"/>
<defs>
<pattern id="pattern0_2072_1336" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1336" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1336" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARZSURBVHgB3ZpfbFNVHMe/97ZdO0NZiSK6GWl8cNEH8aE8GDUwHvwTky36gmbR7UFgbyaS4aOxOB9cwmYUg0YXTfSF+UKMEjGxFR8kAlnEoOHBtIgpm1PTQRnrWHc535Yb7sra+++cu7FPcrLe3t+5O99zft9zfk0L3CQh2puiZUQz1mCbEK0Py5AULbfKBquq5W7orfF+y92522DQ0tpn0U25TCKRCB2LdfRv1EL966Dj1GIZa51XwnE8EWpNLCxEyrpm4DW++UJ4HZ4MtWIt83ToDrwcXl99rUPbpn0f6zDMmy3Q8FL5IgpGBWuNdi2Ej6ObEBUaTcLWgDZNR7rlLrxanoIKtqWAnh3A9q3A5nZxvMSB4mXgfAHIngQ+PwL8eg5KGIluxH1aGNOWhV2y8sL71b+HFmZw6NoMZJEUQsf2C/Fb7WOP/AC8/i6QL0AaA5E2DITbqq+t4vVlg0VgSo9CBn3dwOlxZ8IJM4Px7CcD6jCF16M36pRuuRNxTYMfKGDs7Vp6u4Hx7Od3Auhz6miE3rhjGOlI4452MNUPvAFfsD+f4xWuOHU0Qm/WuUscDb1hl8t2gwP73K94PdUM2A9P0Ofd4vhuRlPxZDCyAZ1aBG7Y0lnzrgy4VzjdL0yY7o18bsVWPOEx4cb/fT2QSk+X81iO8xNxnjvBkXj6xslMmrhdKTu2p5zHDoY3NPW5FUfiSa8oC536P3kvpLK5w1kcx2fncyuOxZPa7hmyjUush1ScbJxOfW7Flfi4KH/pfzuKlyAVlsB20OccnxuWLW/t+PKR5zD8WD9WCwOnxjFw+rCjWNvy1o7eM9+gK38Sq4Huc1nHwuvxJJ6kMwfRfvkfrCT8/16FE8/i4/NXkM5+iJVk5LthMQHT8Ipn8SRVOCtmfhwrAX3e+V8efvAlvjaIw0hdPIsgqU2693Q38S2e0P/x8iyCgD5PZw9CBlLE03eyBmQHbebH51akiCdd+V/Q+9u3UAl9zqNNFp6KnGY8+PNRtG55GLKZP/83/njocfjFd5HTjPyLu1CZkVvfVkS9/OczOyEb6eK5QlNDI5BJYd9b1efKRrp4Mv3BmGifQgb/iuf8/8VXUIES8WRqaNT3arH/5DujUIUy8fR9fucu+IE+r8j+fGxBmXhy9czvVb96gfuGCp9bUSqe0P8zXx9z1YcenxxSl+4mysWTC7v3Ol5FFadFIwIRT/9f2LPXUSz3CdXpbhKIeFI6fsJ2RXmf+0RQBCae0Meln04se4+TE4TPrSwRvwj10P/15S/T3Kkt/GDUXVN81ry4aqiXXxW6e6nQII41MmdY5BvGhBBv/Ghez4q5mRUBi7fMkVx49JnlL4WrKl9NqOeK0FWy5Lamae9pGSQT12LzExq0JALm/o+G8deeQQSNASP31FzhgepXr0dj9yRD0DMrMQFBQ+EVLO54dm4yv+R7Z/4gsfq7PA2PIljU+qxGViT78VKsNPp8sVjkG9cBYskYM5/yxHkAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
