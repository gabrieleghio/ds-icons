import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderLS48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH7SURBVHgB7ZqxUsIwGMf/KQg4yeLA1vMFwE0ni0/AI/AA3qGjG0yMoG/gG/AGVBdH4AnaCQYXnDjgICbptRRORbhr4iX9HWnzhXb49UvaXhqCkGKniFy2Abp2AOJAO+gQyHTxcfcSthCxLXZsnGT6rGZDf3wsV1VMH/xA/vzZgxniIfwCXGaZeB1xcVJgJY+wU+gBZb8FK7OwwUbWurdASSM6hpwG8lqJc0iQUOEWNd1YILSyachBa0SPjgLH2vkXerPtZ8FgUnlTSeVNhYzHYxoGpVIJujOZTKJ62u1NRZl8q9UCIUTsVaFszHPxEEopZPEvxnylUtnaq0CJvOu6GA6Hos73PFaBEvndca5q3EuX51nezfR3bTKQLv9TllVkX6r8bxlWkX2p8vuyKzv7WSRM/Hm+D555mc//9PXWVBKXt20bx3DseYeQuHy/3z9YxHEccV7SJH7D4+Ke54mbWa/Xw2g0gu/7osSP4aVcLqNWqwl5GaQzOaaSeLeXBcXf3gnixxG0rzfRmebf6jifi6iaPudNJZU3lVQ+QuIUshJ29Li8G0XzNbRmuYpHAwtr+hqF81VQdOsB3Id7zWLy1HoiaDpF5OcDmLUOz8Pj+4WFpjtll6EKvjDPDDzme8sr2xNs7as6a+Lr8mR/Q5IwzqjLNm+YF7pBwoEvK+2wLewk4ywAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
