import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderCU24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_1566)"/>
<defs>
<pattern id="pattern0_2072_1566" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1566" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1566" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARNSURBVHgB5ZpdaBxVFMf/d5LsJt3dZtdWm6yJDq0glrb0A9S2qWzEUtG2QkHBtGjAlzagRfxIW1BTsIg+tQhuX0RbEgXBVoRU0ECi9qUqNmmgTQm2G0M+qIEkG9Mku92d3jPNbGfTJDt3spuZ2f7IZOfeucvyv+fcc8+5DIPG+gY/kq6DYEoIYCHkHUo7FHYcl46c0noY/WstluUTZVtafyhdIyP/iYDFqtHeEFHFt3jk63wa5MFCH94N7sRgkQ95Dk3ABvazR66VGL7Sej1MwtnARoSXb8GY5EZeoCj8igGJSX3f0YLX3X4SXkZtLxe+BBLWTQ7i+bGrqvirxQ/B8TDu4KzwziJXEtN9/K/FKyvamGV8gDTjez+WrkZ42Wb0Fy2F8+FS49FUK02rNMvw3aOX8V2kEXuH/4bzYektveUfJNeYB7L+G5UvO9sL4qOpWwkCBLnL/HTtS7x/ow2+5BScjpDl9bgeeRgrDr+FwN49cBIDAwOpeyHL64n924feA/Xo3V+PWE8fnIhp8RrD35xBd9VuDH1xCk5jweKJxGgU/Yc+RteakKO8ICviNWgpdK0Nob/+GJ+QMdidrIrXGAp/je6tuzDcdAZ2xpT4FYffzDjGCQFRWLyn6kl1i/NUPWVovJ0DorB4En7nM7P1NewaEIWSHLL6qnNNqfY/L+zD+PkLEKUpsIGXzJutKZl16W3Bay5/g9agWn4mRTyT83IX921/BuVH30NB6d28vmTtE5CK3WBuF+/34daNIRjB0pJZl5bPafmlLz4H+dswRBH1hkUvmY1Yfqr7mro+S3duh1F6DxxCtPkXiPD41H94iZfNU1IBOkvKkXN0lp/X7Sc7r6gT4N32tOrec5EYGUPf2x/xff17mMHNT1e2jvcgeCuKVu9jyCk68RnLONqqaM9eda5xzjE9Nfvx//k/YBZa+xQAKRAuJgZrWGXep7SVmeXPkgp8WL7DkgMSQ+Jdj1bM+7x43WpMdHZBBBL7QdkO/LWkAlZhKMmhLU1j/PcLiLxah4lLV2Z9bgRy71fkfYsqXD3AnXkZSXJWNjeqR3+Dn3yeto0FavaoGd9k52VEauqQCS019m4zlhrnAv1JjiHxtOdHm1swF5meSzwxKuPp8PK6WliNsPiFQNauPPmZeuZnB/Tis692GkqLK8OfWurimciJeHJvWtuU79uZrIq3Q0ATISvi7RTQRFiweLsFNBFMi7c6oCkKTKH/nqmtztKTmIWiq+eFLE9FyEku2sp8PJsYEm9VyZlr0sQncW+lY2XJmX3SAwWJb+NXiBoTSjJ1mmOHkjPrJOP61sVCPhe/smnxN7ntGe84+8Am5wa02aAQn4zxS/c2FsMJ1uqX/Yk4LtJ7eB38APF0YBM6SoLIc66j48hKqXokMhJPoPp0YGPkneCu+0M4iz1LN+mvJ60/VguFHaQ7LC4mUxahn2jjan/jG/1xtDeMUM9tUHCI9lIw3BQAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
