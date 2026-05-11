import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderDO24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1620)"/>
<defs>
<pattern id="pattern0_2072_1620" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1620" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1620" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKeSURBVHgB7ZhNaxNBGMf/s4khRqzxoBKqsErFgEpLwIsKTVQKnhShUry0Sjyn+AXa9OyhfgGhJwt+AJEeYvED2GKFaApdS5vUXlQw6TZ1d3wmZl9SlQjNTkt2fzDsPM8MhN+8bHaGwUK9G0cklgPjaYCl4QHlwtO2fT6cuwJPYFhgHNO39PUZJyVIjqjgSoFqKjxkX+WbkLAWgpHJ6Bua0shIED8ocPI0ECoU4vF4GMkHY5RR7VblEA1PmApDp0kkEm37bLIQOo1JZZskf3CzEYsBqOuxcQUmy9m9lEhTvvPi+4lY3odpwcfAXDk2SIUPOJnOj/pBIsYUd5hWWpu7a8Z3s9tOgY8J5P1KIO9XAnm/Esj7lUDer7Byucyt4H+OnHuBf8mDb05i0RjGvblVaN/WoB4/g+fXj2HwyGuwk5NgpybgJZVKxa5LlTffO0eL0GyvXTdG1u26cpnDS9zyUpf9fHWo8cwvHW3JW/GiOQyZhCGRR2+/01JvznjxPPCxj+4PlzGFEqaWemgLrGKlH9KQOvNij9sIcUGxz2n/ugaZSJVX46ed4ELp9zNZctrp5ScTqfJjqftOQMsdd17RICzbqdGU3D0vVT53LYuBxMW/ton8+NUsZCJVPh7tQSH7EhM3n9hbQDxFLPKi3Ss4538UNhfttf9YTzBvb2/7a5/b9mGXHsNTftbsavBt71cCeb8SyPuVQN6vBPJ+JZC3MNHttN4PCvk3VrDFu1zfNNzRO5Ln81ZUo5Gp0VHPhLc3qNIhJ5g7VOru3LNwWI9M70TrowxMFbkqqVc9cndfG/8T15HTO/gKPr2YUTJ0rWjAzNDxXoMvIHHGb4ha44V3W9/QhvTyWZrwh7TiFyAf7n3hBTDksb2VQnFWEz/6C2P97CtrFby5AAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
