import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderBY16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1492)"/>
<defs>
<pattern id="pattern0_2072_1492" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1492" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1492" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANTSURBVHgB7ZrfS1NRHMC/527J3NycTqWa6SzwIcisiOwh2CIiIcjooWUgLTBJAp/qLUL6Bf0ywYd+oKMXrX8ghYKpL/mmEUVYtonLH6lluq05vTvd7233us2tlBA8cj5wdu85956N7znnnvPZdgjE8JjN5sWwvkFrybXn1bvsFtcZ5RJMt3XAZPNTEOfmgFkIDBAKD4+Evz5bKpLw6DbbRNB4tIVbbCXtj2BT4dZldRf8Y+CtrpOPLCMF7NOA6HCEx31y8K91Vm+uy2kraLgAgsmYtqI4Owffmp/Ad/dzYBm5AXTBPaR316FzOc4qtzLMjUYjGAwGIISkrTzZ0gYTN5tA/DkLLBCV0jxQCNBoXBltJCPvP/ZrckzlWGAymeTAV0Kgtw+Gjp0GlghKwYekRojRLXxyVJUrw1iv16/oTaZaWsHnrAXW0BMhPmvX4nM8dv0+RPyjUHD7KmiyTfKVt/pi9a7doWH5KM7MwsStJnnYs0jyg6w2xbS7AwYrKiEy7E9ZEcsHD1YyG3gqEsaBHGAFBtiacBMOcww8XcOwirCshPx5waGuJIqFFDYc5JXOqoZltRXDjq4XkFFcuOxG7HWc3Vnv/Ukqqudqz1tcTih905kycATLS/s6Ie/SedgoaNHoChpqASVHYzapF1LN9rgSWO9cg4yibUxJTjq0RY/vguHAvlVVypd6P7NsJ3OSk4wwUnd51a7OquQko054OOzL4iQnFaxLDhI/4fHZXoFLDlFfVLjkcMnhksMlh0sO43DJUTJccrjkcMlJgEsOlxwuOVxy1hOUrD79l+RcadsPrDH/I6ye87+rFLjkxCQHZ3slbVTJSQheXsultT4/aS3HPK7x6RyAVbjkKJIjZC9tRlLEJp5kyWEOmvjskpF3Hzwai9mOmaysLHlD0krAPTmnRu8BS4jzIiyGFmI52i98PlnTo0hOIBCAYDAoNdDfZzfWfsnBeMRfi3GBy99Um4kHbOYFXaQ/z1Vty5eGv+Yf+/BwJyY6AXLjQTmwCfX21L/cLjjANyNC1DHlbvcNHT8rb0xKRcQ/BnhdCZxdqJeQ6GE8k2f7yvC472h4tEQK0PXlRM1AsutPS3kMfA23ntI1TxQ8hJJGkhna232xy4cf+htoZTajxdRNHgAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
