import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderIN16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1816)"/>
<defs>
<pattern id="pattern0_2072_1816" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1816" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1816" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALJSURBVHgB7Zoxb9NAFMf/56ImpCVkQkQVUsRKhyCYYCBm69iJbvEEYzLAAAx1F5DKEj5Bk61sfIMUJNhQMnSPFxLEFCqo2qDkuOdy7sVqmiXn4c6/qH2+50TJL373fI7M8J+eXyhkc7kaZ6wCjgoMgwNdx0Gj+Px7S+YY/Ru8vVniS0ttsVmC+QRsPHaLL38EoXx/d60HO8Qlwenxn7tXBrtrHlfEr2UYVjIOGIMxcCF4POI4OpnIVGn5aq7uiHxNZvJZhtWsWeIE+ayIg7qaORdjYI8cEcsykVt2YDJU0REMlSlb0454HCfmZ/ahnkMqbyupvK2k8rZitTzr9/tcDorFInTTbB6i1TpEt/sTw+EpCoUMyuUb8Lx1VKvr0M1gMIi2E5MPgl/Y3PwYSs+iVLqOdvtJGHWhyidS9iTuuh8uFVefRzEJEpFXhajMt7cfotd7Ji41X4j4NBxTnpAVkgTa5WmOq+Lt9hZ8/4Eo7XyYoxKnMeXlF0AVQn1BN9rlVYla7X7Y3C6C8vX6vWhMX5putMur89zz7kTbOztfxCX0uzBK1G4/rz8sAu3ydDqTqF3c979Oxfh+9XW60C4v5zGhdnFqcmqM71dfpwvt8uocV+c/NTnq9hQv2j+rNywS7fLqPG40vs2cy5Sn/RJa8elGuzxJyKNI89h198MmJ0ucIo0pL+c5nQaTWOomsrw9W7nti3g097kkTud8XUvcxJe3Z2v2rWhhMwuqEJ3icRK7pCUhWtLu7W2gUrkVdXOKNG42N9DpVBcmzmc9+PkfY68RlT3yMB9l5qW/5NhKKm8rqbytpPK2Mi3PYTYxP5I/iEYjmM1fZZuj4/AJPkUJuqIcwbwKIB9yO1FSDO8ZfBTYCB0wi+7D4+jxN7jtCPkhH8MViQA2QOITPKbN6fuTXsETmRpTbk9L7CPpf4MD4fYZv9EQjyHl/gF5jyLBUzlL6QAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
