import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderJO24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1848)"/>
<defs>
<pattern id="pattern0_2072_1848" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1848" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1848" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPTSURBVHgB3ZpJaBNhFMf/k5ma2EwWq6WxcQkqgisqHqqiVA9WD/YgigdXFERUUHE5KFgVvLhgBQ9VREHsQVQEBZcqxOWgB6XeREFaUVqLoF3SimnT+N7UiUm6JZ0lmfnBa9/3tYf83/Z9mQT4j5+siixMFreh1ZNtRTphVyC0u8DfEBBEqwjRYg1kIdYt8I9nrmAD7YZa4jHc6GlHXawLNqeRbL5Y5wpuI4cNsuDASqkQayUZn3qjaKJg2BRu8T/iFtF7nfIf4B1ZEFAIB7wUhEoKQKlDxEcKQodSLfZDeOoKJpSNFUSS3p+anjbUUjt0xO0VBMegiyR2ST7cco5HpeiGnXBk+o+lgoRTo8bioauUfBF2IGPxKhyEh64gBaLI8kHIWrxKpSgrrbCrwAerMmLxjIdOBZ4H3ApWnAeaxKuo8+Cqs8RSraCLeJWFDqel5oGu4lV4HnAVbJQ8yGcMEc9wKxwuGJPX8yDlhldsYKkWbVqHkmMHMGryBOSS5ubmhG9Y5tP5efMOPsxYgqYjJxH98g35gGniVX5cuobPqzZQMG4j14xIPJevFjjzX3ceUioh8uoNckXW4t3LyhA4th/y0jJohYPwuWIDBeJgTloha/GBf1nXmv1k1HnQcvoCYm3tMIuMxbsp01Mf30pkXF7Wt3brUAEq309X41PZatPmgbhF8p5QF25h4FiUUJlPunK+3zHF66LN6xW/U6fe5cy3P6hT2sC3pgJ6E4lEEn5GmW+hjPCETh9OkZdvlJ7lv+uF6Pdi4uVzSrCNJutLztQnfaWvCKeA6AWLHrdnB4r3bFd8o9B0yeGhlPxbD3huTH/9SDlFjBSejoQs4YyzcD3O59FzZ6L0TJUyPHOBaXf7ZDi7JUcPoHjvdphNctlnnXmtcF+bXd6DYZp47uvg2Sql1M0gPshnDMn7hpd9k1fE8YoivJ3oRF4QiSZcwzLf4RRQu8BDJpNv+pvHjDBE/P1ZhahZ5KWsmz5SskLXV/d2glMRnTclPgy6iOcSP1vup4xb69m9JvFW6OuhGLF4LvHjq8bkfV8PRdavPO+OLg1kLJ5LvGaRTylxu5AivhcDv82rne9BzWKPJfs6hbRLH4t/TlbOi9/x3pSnOVY7uoalpzd5VU/i4y/ollvOqy4KjUB3318+Cefo6ApPGw1bwPf5bhIejSXvXRTCCPm7XdF6AUIoQn19b7aMu3Pc6HQKsC/xBlx8N0VajsZWeoay/MV0T/j6QjnU4rHH920Gh4QLsRXspaZ3/4JtiDv2kTcP5mLGd9yek9qX1PjVqH7fyht/AdLgkT2HyB8ZAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
