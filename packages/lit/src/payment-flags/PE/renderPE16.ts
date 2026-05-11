import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderPE16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_2146)"/>
<defs>
<pattern id="pattern0_2072_2146" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2146" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2146" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF7SURBVHgB7Zo7TsNAEEBnVmHzgSINRTrDCRBdaEg4CZwgXIEbwBE4iUGiT24QlwgaF0kIRvIwE+JgUoAUGynxzJPW3p1i7bc7u9UgLAmh3W54P0iJeojYgwIE0QjKJgpOoCAjJLrtfrzeZwGUB4sHde9D7gZQAlsqv5rqPUn6fYgjJ6MyxXeAxUZLptee9g4vISe+jwhNTggHm9PpdKBsZrj5H6Xc5kAwIcpCgff+usZ5P8giByze+joJlUKWTbxEfQrLBSA6d3y5rQ5To4LieVr47SeX+o9cKpLqu8D61lbd91dMXismrxWT14rJa8XktWLyWjF5rZi8VkxeKyavFZPXislrxeS1YvJaMXmtmHxGCtWG1saOiB6ywRsRVJm8H3eHDhAfs4AU68w4WrUMEJ8pe01ye++A7lDq0ereD6HEOrwtL0IUxmfJy7HrQxyj4xfPDzoYs++FdBYXXnf+HPFKHKVEV3wHlL9tf0P/3ZiQOzfNVnIqvvLRT6eug3Fua6GKAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
