import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderSD24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2244)"/>
<defs>
<pattern id="pattern0_2072_2244" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2244" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2244" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALjSURBVHgB5Zk5bBNBFIb/cXwE5doCEKe0ooBAAXZHGohFRYMUxKGEAosOmjgNlISK1mkQEkIIBClIYYmGo8BJQ6QI4VCkiIDECMUJEoIQW856newy42NxVpF87Tqz488ae2fkwv+8/63f2yEoEpP8klvzDmu63g+CfojHLHQSOZuaeVpaIPn3cK88PtERO5hyyRCfhKbmgkFlNlEQP3J8sVMlcuiTF5fnPGgBEporFyA06iEQ8qS0enXeh5GPu9CTdUEUNOhQ6Hta3yxbI/fa0LeXCd+XX/G1Ye4Q8ProJs59c6NbJRABQl8eFIKZoxuRX6MfVPzuh8a32t35u0DKpyN6YgM+ulGnVtogCh7iQgbF6BPIW71dFmi2AffPZOlQsObTIQJmH1dM7Gf+HC4OZrDUpUE0qrqrLXVrGBjK0I1QIRJV39JFTIOa/89ESoO6/sxFSYO6KxkR0qDhMs7JaWBJDevUNHDDIkppsH7nEu4Gb0Jq7wKP9CwvG9eWdy+R6RcIPLiCxGoSvGNL68aEsw0Ym34OnqGNzZ5RY+a1rolRNlS8+foBf5UUTh8+SXsmH3ggnU4b17Y37TynQVOeWPCaBrbZ3gwvadBU25thaTAwHgYPNF38cN81RIci4AHLipxKsKKHFT9hKp4XmiJelg4gduNx/pMnbLf99cAFxG+95E44w7bI82hzM7aIZ1GODkbg338MPGO5eGbzyPnbO97V6bpecZ3Qc7r/s84GzukUehgw9ROY+QWnYE3kV+lDjInvwMo6nETj4j//Ad4lC5F3GI2Jf5t0lM3N1CfeoTY3U7v4+TXg1Q9H2txMbeIdbnMz1YkXxOZmKosXyOZmtopn5U75Cb5gNjfDurpJY5YrRpfZ/NEXoYVT4i5a7E4ZU5Wety2kCsIFy+9tGCMI+yWQbJxOZEzS2jz+Gy3AIh1HCpfhXhlyB1vQW2AsgAV6G0J0xHfgB2lNGO/pGKVDKon9B/VahqhDJZ8cAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
