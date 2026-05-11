import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderCM16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1546)"/>
<defs>
<pattern id="pattern0_2072_1546" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1546" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1546" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKqSURBVHgB7Zq9b9NAGId/Pttp0rSlBZISFgJSI7FV/QNoyspSsTEBEh2YGjowAysD6YSQGGBDYqmEOiEUysIE7VwkElQggiAlTVLSJI6vd0njfKgfamOfo9iPdLbv/EbW4/f1yY5OQpPY/Dh0ZRESoqwXRQ+8f/EZZnN19Rd6QsKGLCEemsPr5hCpb2PzYVB1nQU8Qo/ifQvFdE3Hq60PSKYTCPOhhjxVE2wThgOQgLCmI5FMYFxB7OYd0DZxjwqoMouScFoCkgyzCQVwanQdKJWBfLHR5zdA0RAjoGTRiBpi4h6lJ/F+hLD69vuAkeHWGMvPLC/7aWNEMT9j/YS/TZ7NAVHScXbAMt4N6dIjcDCuvFNx5Z2KK+9UXHm7mFzYhp3YJu+fKSN4b5vtd2EXtslPLuT29/Zl3xZ5nnXeWsf2ZF+BINSQBl+kCs8FDeduFTrOXVzKIfvOj9I3FbUiwe6mByKwXH7sWgmXnmaOjPFOVRBaqnSMfb8fxM5XL6zE8rLPf/Lh55OzJ/rNFou3WpwjpOyzqyP1fehBFvIoPTSuVpDw+9kEcvvxViPsmec3oJJWceX5n0NjfjwMCMl4k756w+OTnUiEXs3DZvyj8E5VIRKh8t5Ia0YvfhliZX4epU3VGPNFKhCJsGeew+W49N+XZ4xnO782jIkbRQTZm95xlWE2QuX/vRmty3bDJ0Pexmb/QyRCy/4g8ZOcNxv3e96puPJOxZV3Kq68U3HlDSjFIKN36XH5j0avKvbDQjSl9j+JKdYJ26wZAxWtcQMGrAL4aqzCTms1FkeWsayAaHFQ9baxDq9cbbQeyNAazCadgWmw1Cb5SkyC+EoOUnUOkFJwAFxcIbjOjxsTXnwlheW3lyHpd1lvA+KhljeKBNXxWCOYYVlP8YvuAdwH3O/frAZzAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
