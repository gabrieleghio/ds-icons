import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderBT48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOuSURBVHgB5ZrPTxNBFMe/W1bFFgWVQOpBWrxigie9sdV49cdfYA/eC1c9CBfP5U4iJCZETooXIwlt/ZEYEwMGj0LrRaIxiKQICnZ5r9ulu6U/dre77Hb5JK+7M52m+c57+2ZmZwSUyKbQ1S4iIRcgUVGCz5CBxQCQDA9hSq0T+GM1hYgcQIpuI/A7y8gJM4iFX9KVy98yyOIoCH9F9qF4l/u7g8sieT0ua4SfCgGhkxQSAfgGeQ348wTY+LJfFTkuYlikcE+oNac7SHgQ/uINOXKOdG0DBRHI7yrVgoAhKmJQbRdsh3/YIpsl+1iuCrWVxROSqG3vm1BfJpsh+6WvDgj6sgi/wd5+a6ypf8RTUit6e8X4T7wrvvsh0BmnNJ0uWQbYyVVvS0kNlNSwDVMINMbLaiHcA2/AwrtHD9azeG1nbOQOJLVGrGo6yHviawmvxo8csJQGPpMtZZRyA7TivZXfzQhneiLA9TiQmFSuJvGOeLPCtUyPkY3CLN4Q74Jwxv1sb1T4TQF2467nm/G4Dbgn3mXhjIthbzKMZ+Xa392PKcOdSZz1/LEIcJZWzEGJ/qlL/93PUbIxNI06zlvAWc9zWHfeLZcL6zQFXST7BOxmlZnaWpfSQVaZtt6Bzs3w2OsXs7BME0NYPQ5nhtdMMnNIeCXOiOfVmDbczXBIwhlnnnkexqxy5RawSa9g3j83tFBpBvufefZ6+DFsYYWS4/ykrR3h3JKWk9yFlHK1G5s6Qive3rDnJFdPeK3JSHRQWZJyyPfW+H0/telP0ivYM7blBPs8b2Romx0HJobrt6nXETYkQ2fCPjzZOMNv0iTnXlS5GkHbEfNTtnjcvHhOYL+nlBlZNcwsUiZGKAKScAvzk5ydr0oiY+N5uhazqzP2okcwJl71OAvXdoKVZeklCRiQ4AWMZXsWz6+N1Uxe7ASp/D2vrB7dUV4osvX20ZWe7Z6+UpkspFnVXb1teSVmJ8aHuu8j5eVpJZyFOYllFxWrBotXO6ejE17AfLbn3c93EnCObGBIqXsQQ6tgfZKzv/uZpo80Wh3j4k3sfrYKjcVb2P1sFXTi5ULFAQWLu59epVDxDpSlptVCfqt0w9enZC/gG+HMVkFXXBDJ2xnytsSl/Cb1Bk3mgs8oAgxOv1sBmTye/687j8MHksYFPnl5IoAF8HG08jk1v5M9P4f+QDSGdaGAGKaROyrChTZc4xvdtsnqDcQpRBJUO4jDRYbTyEjTn7z+t4tkNI3iQ70Hoz9CQQSh/RsAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
