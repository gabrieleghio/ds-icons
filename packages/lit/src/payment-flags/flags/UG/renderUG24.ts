import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderUG24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2418)"/>
<defs>
<pattern id="pattern0_2072_2418" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2418" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2418" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALrSURBVHgB7ZrBbhJRFIb/mRKtpk3ZVO3KwRco7twJ3bqAN8A3UJ4AeAJwbxzY1R08gI660XQzmLgfjIvGxgRMaY21znjOyIULDG3TcCcww5ec9s7Juc3895w5l7kFGJEkK5FZZF4EzSYrIACDzFmwm1VlzkDvEGfBb1jFAiTX6MfTgcUJfsR/s3iT7B5iiIb/ZRBLEt8O9OHFzl1EnsPvo7GOGLMSH1dW4uOK9kkfbXV3oI71xxlsFgr+7y+9HtLpNM4+t3HWbuOk1cJpq4kwOJLGysUnDAPbr0xftKBYLKJarY7FnXc6ONzL4vxrByoJTfyN3TR23lrQk8kxfyqVguM4U/EuVQQvAFeEKmTxyp55zniQ8DaVeYeyHATH8pzEfQNhoEz8zptp4Uyj0bhwHs/ZNk2EgRLxt3N5P/NBNJuXNzbuD3KPUIUy8UEElXylUvFtEt4ZVJOAAm6mdwP9kyXPosvl8vC6VCoNx2FkXkm3T/0NfkvmLi8yz6Jl4cInL4CzpmHeHE1cz/2YaBaZTGYqVvbRB5+xeBX3NmHz/6O0hweKtyxrKlb21Wq1Yaxt28spvl6vXyn7PJYzLC+aaZrLKV6Iuiz7PBbiJ0s+l8stp3hZ2KzsywvE8XLJcwWEIFydeMMwvG63OzP78uJwvCh5nsNzl1o8G5fyrAWQESXPsTwOSbha8aICZnV/AZc8V0KIGQ9HvLB8Pu/vAryFyc82d3UVojXtCkbn9v4KMKtz+xixEh9XYi1eyft8KHi4HmKeNhB//NJD/7WHP8eIPD826aTpCbD1XEfiZ42E7193GZcPlxLc36fEb3jQDrbguYOMq/yPzaIgTnL0DTJXKnUX0Uaub7fP3d7DO+H4hWgj66N3SVv3NLwXjhOyU0SvAlgPa+tLPvpQ/0KzgOQtDTa1fgNxwYPzyMMDPQv0qASy5OggDpBw0rvHw7GD8Y/8ZUQNz+h1L41wUb/XUm+jR/zDuovaQ0o4u/4BrYe1eFa8WC0AAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
