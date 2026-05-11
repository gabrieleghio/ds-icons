import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderSK24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2268)"/>
<defs>
<pattern id="pattern0_2072_2268" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2268" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2268" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOCSURBVHgB7ZpfSFNRHMe/9zp1bW4aofgXb6mQCupAKR/MPxAoFFRKEIkIPpmCgj61l3oJCgILinqJkiIJoz8QBRVqiUUFRtAUCjaxtPIhnbq5prudc+3e7ubMTcNdd/eBs/v7/XYu4/s7v/O758IY/MFqtSZotdo2nucriFuBMIPoes+ybFdKSsoNMcbQj8nJSY582UdMDuGPjWGYSpIEmyB+YmLCCnUIF7G5XC6Thqx6I1l1TowaDAbo9XqQ7CBcIPrgcDhgt9vFEBcTE9POki/axIjRaERcXFxYCadQPXRBqTZZrJwl1yIxoNPpEM7QBMioYOVeuK24L6Tbe/tQMRHxaiUiXq1oECQzXB7WS7zNAiURKXu1oslqfiQ5zLbtfifN367FWshLOpCtoT92F6GAd/6U7EjZq5Wgu72c1bp3sFsgVETKXq1sqOzlJb1VSl1OpOzVyrrKPra9BVoyVsP3KbDQdQkuMpRGpOzVyrrKvvvWEOK7nyN//jsyXMtnZX/d3q7R4vH2XMQvOVEN5RG0+PasI7iTZJL8o1PD6BjvQ7xszpCRw/mMKrwy7pRipXYrnkFZBC1eLlzwE03CqL/yDieqs3H5yWfczG9acd9HXQo2Ewb82nNG03OkWclR/nNhGHwKNj1NsFObHmLG4UawZCbqYLlYI9i8fRb2gj0IBd+WFiU7oIYnCqeY63KxHo7vy5RsxmiAEghI/OLrN5LdUpOD1ppsBEM9EW6u+3vkXbKMQgkEJN73gHK2oRDm2rUrIEEXjXMNBbjaXOwVd3aehBKIajXuOCU6caz/XHi+TMBjGYGmvAxMbKwQK8tLRH05h5l5Nz6Mzay452BxKno6SrG/MFmK0b2+YD6NxYFBhIo53iPZATU8Ebr39T3XvXoAZWzKgTO9Fry0TOFASapQ5gVcgtccunWcnWaSyK8IJfKGF5R4kZi6Q8L53jcJ/qCrTbeN61o3lMCGxYv8Kwm0qf3qvQd37wOSADuUwn8TL6LZW4LousPClZa3u/c+ub6FEllVfBIRH85vOrTV/fA55PSLjsPjQTjj5L30DbM8+AHRo4+BeTI8/Nrn4q0E1UO1zcoWl+GZC8wwxyVsW4oeJu8BHNQCA+vu8U+7WJPNNs27oypJwAY1QITzbnfVsiljJC2nkWHo//KYImwum7DP+H7yIy8W5ha7TNO2aRr5DVVROwE9Fnj6AAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
