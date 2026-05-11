import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderKG16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1870)"/>
<defs>
<pattern id="pattern0_2072_1870" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1870" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1870" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUjSURBVHgB7ZpNbBtFFMfffvozrlWVRnw0sriSSo3gRCqR9EZP5US5FE4UIZVwgQs9IFEucCnqBbiVS3vlQo8NCLgGQbkhxXKoqjZV6vgj/ljb2/cfe+zZreNY7aybOv1VW+/Mjh3/33vz3szIBvVYo1zWdWnF92mJm0s0ffzF1+V5L39Vdhj4j4XnHIdu8m2Opp+859HyAuXzQvwtJ7dOB0O4BAZYsP92ch+QIjxlmJTigDC6QTEV+PyvxlfZ78iunO3Sp7ZJtCJ7Zlh4kkyaNuDIJF+QXqWuAQyf3oLSE3JQYgqFqyCqFZYCrekJ9OGE9U23q/fgQIu3aUIYmQ7F3iuR/VqD3JM1Mg51RB9o3YpRp2BT40aKvD8S1NlwaBIYXON92Zg19NsCAhPni5T4qNgXuxf16zO0883hSIxw12/17yMVH2fRqc+3xhat0t6whQEa1zOkE1V8ZGGfZNHJz7YCfQjpfmgXHPJLpjCMOeeRs1ij+Nky2fMNMdY61qKZK/fE6863hykKIvF8WDjmc/mTWSF6L9zTVUp/tckGGXgIEaDLAKrntWf72NlSQHiD5++D5bmxhIPmLyl6cGpOvE8CYyY+LJJutHrePObRoZ9vi1AFEFC+MDv4Y72MH3u7Svbxhmgj9Fv/xESSa95Ik7898MfMlbtszLK4R//W67nA88dB9bz1sZX9UjbSxpN9cOrr++Qu1sU9Qr107iW2QHdd5bxZo9g7FXE5b9TJiHVtjleLQxwGM1H++Gr/54pn3p9Jip8pd8tinMfXDe4bL4J2Q67tgbawh9fjPS+BysUXhFcBpgIiAiWvfOGoMIxKNyccFc8zP90R4wG8jFwhwXMYQtt3Jk0gW0vavGhpclYXf4CNkuaIAPjiLkfA9vsvBt6LNrK8FJa+dF+8DyBXyHyB5/F3S6QLbeJdnseS+rVgslLrPLI5jFO5eES0q/yKduL8dn8MRKrtRs+QwOqVQh1oE28ppUnN7PZ8MzAOEYKr/kOWts+8TDV+hSA7JMo9XRn6ec7JGulCm3j1y7f/d4b2S2SUSFGYy2FkxQDqMtfM7MM5r6KWo2GlyV0Mei8cHaM+Y18mvN2+IHZsYUqc8VXKoXb4fToFq+gTXxp8lPWK17+vKys1IBOcipoAh71PZn45VhfaxDd/V5KSEtbYlcm5jeSGaxhIgLUfu8/EBkjZzQXKaEHfXkyb+Na/A4+gnKmUuI7Dk9WQd8Nlq/rFETGudC64DlAXT2rZe1K0iYen5LyX5UyC/oqyxgeYx5mrdx6ZzxinTiFUBrVijLtBGgetCU+GLUjzpmRUojIybWEwS5nPj47p8H5hs99GVOg83dFa6jCfpfdRp1OXNncdCxHYo7dGJLA0C5f1Hut/7Ot1olU8hFeVQwfM1b0iYBjwuLqdBfhc3Wd62hc5yNo7IQNkbxYCa/9RYOubXS0EhEdxlgciO8AcdoaHEMe8bXFZbG8MzvAw721es+OQwwmt/nQeYYGJnd5iX55iA6jnceOCKQTRu60LHpeJiQdYnSEK1Fo9Clk1at9nAyVPFxMVL4ERENKY+9j+ytoNsRCJFSIWSo1rmUhES56K+P1CpEfXzxLPxUt8mm7C+iB+VTaqfjSHBvuFWlDfmun79Kts4UB/hwf4UxYD0APHlikg/jsDv7x0HFqjA/Q7PHbt+nEv/6q5QPmiZ9Ey9+XpYLDesugUbgI/UMIPEk2fVrj3BE2W6OeZT6v8R35rpenyQjEvzsofAiGzVLuLnskZAAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
