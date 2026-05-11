import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderVE48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGxSURBVHgB7Zo7TsNAEIb/NRaPPFAaihRIFicIJ4CgSIiSijY3CHARwhEoqSgRKFICFwg3iCsoaCJwzCPEyyyJV3GgAIETsbOfZHtmtLL17/xeeSULjOicobCYQ01KbEIdhiGBGweoF7dxEteEOt2dw5MOmhR6MB9fRCgXd+iqstsLdMBDeIz/EmLdpa5X5ZjwfAbILpIlHBiDjIDwFXgIdMmbz2DfJbvX4spyloQvwThUI1VDI5qEIBzVBDZUf0vxoMwCjCbRWFrUE+Y2yepf4YiJHIyx4rlixXPFiucKa/ECq4dSZ3N5GM/gUYfW9lxxMSMapwc6ruwdYRZY23Ml9dX+p/ZO/XWwq/0Qa3ud/cL2adv1z+5vbT/E2l5n9tueDzP7vE0b8Z0xjZynbb8ijJ0Lzb1807Fd7blixXPFiueKFc+VhPgIZiMnciW+FSdP0mz5z2P6aCLaDp2u4kJIvQ9pQPRpjv43Sk+PdAVj3hYSx6JZ8AqDPtq0E/DABYlOpeevOeWu3+0PUKaCDw6QcNK7pcLEzu8y61Ud8fFfXgnTZRrvWYsech24qO9Sw1XhHajeggMu9lVmAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
