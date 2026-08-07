import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderAN48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB7ZrNSsNAFIXvjKUt/QkubReSKLhxoYh7q0+iT6BLXbpzqY/gk1T3QuvCpSS4aF1Kf1IKknhvNWEqFEqZpCF3PmiZc2cRzszpMDRXwB+u626Wy+XLMAxbKFugCe/gGFbFfn0BXaCvrpTyvtFoPEY1QV/9ft/GyTY9DzSTFfMKnhDiFBfBk6SSMp5RZhtNSS/grp+jsKOZer0O1WoVcHVAB77cgFXB3QEdoD/wfR8Gg0FUsovF4pXEicuoYlkW1Go1bcazAvmhDSVvSu2EYn8YFSqVCuQZWgCFllRV3nb8P3jaz2tgjDHPFWOeK8Y8V1ibF2LvJoxVwYLc8x3f703s2VKANRG8XcdjuX8H68DEniuJxH6ZSC8T9aR/Gib2XEn1krMoxqme/OaS84uJfazM3Z4Pa7veJs3Cf+GVuuj1enHsdb0eUnnf2oZV2f38AN3g67l4bE57rhjzXDHmuWLMc2XOPPWu5JkgCOY0mX+KxGg0gjwzmUxU2aGGpOdIkfnxeJy7BJCf4XCodmNRC86DoH60UqnUgYT68DLYhEi4zWZzRzqO80UdiVjwgAcu+j2jwezAo1ZMXAkHixcou5A+YQqfNsb/djqdHpFfeugP7bay8jKtlmoAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
