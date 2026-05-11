import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderPY16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2194)"/>
<defs>
<pattern id="pattern0_2072_2194" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2194" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2194" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgB7ZrBSxtBFId/M65FkzaNUAopFBIDnmxJoceKSaE91V7bo+2hV/sftL31aE+FXorHnttTe0htvYiCIgp6iAkeEhElisYsamacWd24KxJPmYWZ+WB35s3s5Zs3+5iFJTinmE4mHYdNMPA8QPLQj0VwPjla2p/yB4i8CfE07WFFEaWhOxwV1joqFCpuxZOfzibKRoj7eAtAHznF7K3xoHicEvSLJaEE2sA44IrrQHYk0tdh7x1KyIT/0E1hHKPQDpnIGJEJBxrsfAx8VKrm/If6NBQPEgttZ5IP6Wrujstvsu6+HbHypmLlTcXKm4rR8qRarXI/SKVS0J1ardbu221vKtHJ730CNshZGxERyn8MtxEQnfztD+E2ApRW+8ZJE3Gnv8O8K+b70E0iq/Y/1v50nl/9DZU4UMjs5gqWd0p4NfQcw3eyXpZltpe3S/i1/h9bh3W8HX4JVSiVL9x/7GX/89zUlfOvh55BJUq3/VjmCTKJq+tKJnEPLwZHoBLlx9vGcRM/yzMobsxjq1nH3diAtyPGMiOI93a32EmCBc+e7U1FacFTCefXjxM8/HYR9g5Ae47r7a79qjMVK28qVt5UrLypXJLn0JuwHxXx33bUcqE17CgYLVAQPn0x6Z4tANdsB0ifVlNch4FB+oUg9z0pVmRBHPPTMIcylt4NUiy+2QVlBbE8FZhBGbT1VHbCPyg9+DoO0iP/y8tBLd1/z2RtI/wf6I1JL+GCU6ECsskh1iHbAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
