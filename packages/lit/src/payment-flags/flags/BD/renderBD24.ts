import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderBD24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1404)"/>
<defs>
<pattern id="pattern0_2072_1404" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1404" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1404" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMTSURBVHgB7Zq/btNQFId/Tpy0oaCmDCAVqY1gYECi4QEaAhISC7wArZSJBVBZmGAEFpYiYGIgKDwBLAgGQvoApYiFASXpkAEkkqoqaWqn5h6ntpII2tJ7zyW1+0mx7CSy7nfP/efja8Ajl00C8TnAyYqrLILHJxjGPF68e+l9YbjH3OUU0P4gzlIIPhUgegH5t5Ut+UtlhEPcowJY50whnkO3eMwUn6hoEwYCg+MAdhvYsL1vUoB5W5g6c17rR9zsyAcNCiR5iTqA5VWAcT4iDmn/T2YUgSbW45eN9PwYpKb+J/r8IggxoZZnHd2S1iau1TaQXm1j+qeFUdtB0nbc3z4fiaI6HMHr43EsjJmoJvSPN4aY6hz/amQYKiDpG8st3Kyu+7I7URiP48GpBH8lrK37p8ojT8J3vzV3Le0xK1pIpm7jvqiAV+ND0IHSPn9PSD/6+uufxT0mm5t4/mXNrTwdKJMncVWFVnmv7VAiP1NrKS8sVQB1IU6k5SebbbegHNB9afDkQlqeIk59lQOaGmnW4EJKnqJOozQnt2i6ZIq+lPx03QY3FP0ZpgqWkr/6nTfqHmfFCpEDKfmJJt9g1E2mboEDKfkppoj0k7T2tmjaiX3xVDdqD6B8w9zfyQ8p+ZWYHvmlwzxPelLypbEYdLCcGEB5Skjo4M0xnkqWki+cGNLS70tHB1B+RYg/m1ST/fkbBZHYqCZ4JiXpuz4R8lzRpxwfpba4kJan6D9kKmAnp8e3FFFyZ4q+6ghRLo/GFE6UVSsVVlUFqLzXdihtU1To62dG3L66F2jsuHP6kBZxQnnqmpoqTU2U4Zmt7S4L09iaNZ5OiMEzpm/JzPLSwoPSWxnxpubKD8t9/J1a7SQ/SJYGygVRSUtioUR5em3SXS8tWOUHki75g7e0YaVX3uFJGgwMfX4kX/SvLD1pqf9GuyfnuCjknY/+JW3Wse3gtQDyIbdWVyLUMB4bnZ2XsUWEax9eGfn3JyPIFxvujkR3Y14oKAvfi3TSu7JwNyS6+/LS0IuGfuYUxaEk+vV8J+DAb7+DAEq8jtpWAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
