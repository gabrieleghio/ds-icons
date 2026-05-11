import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderPK48 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 63 45" width="63" height="45"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="63" height="45" fill="url(#pattern0_2055_4)"/>
<defs>
<pattern id="pattern0_2055_4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2055_4" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQrSURBVHgB7ZpNbBNHGIbfMW4TJY3lW5tQJLtwaithemkplXBaiXCD8ndBwo4AIUVIcYgER8fcQAI7B5D4ESRIcADxd4KEA0QiAU42B24gG4HyIy4IJQcQzjLvmgV7seNdb5h1Eh7J9s54d73vfN988814BD6SzWb9jY2N3ZqmhWUxDJu0bV+DOicDzKYw+mrQqBB8m5iYCEjRd+VhADWyAMQb5JAX7Xg4mfOw5FT4AiOAZVJv2O/3SqtHpfiA8U1LSwuam5shhIAtGpahbtHkKy/f8rNGTQDvvo95pfBuo8bn8+nCFx20o1cUDtgIep1YT7cPGec0NTVhUeP1FJfCJSXbrr7A8WAJs6TFe1FH+Jt9iGzcgdDK3xAO/Y3M0ye493gMI5kHyDx7gvmmLsRTdPe2vYht2QP/Dz7kJl+g80hMCn+Ar4nr4ru37kXfrgO6aDI4dBmxk3G8nn6Dr42rfT4e6UWqq69EePRoT1XhgR9XIHvxod49nOCaeAqnxQ3o6rS4FfoiBxD4aQWiHdvhBFfERzt2lAgnPTZcffXKX/XPTes2wgnKxdNl47t6S+oY1W+MDs15HV081ZVA9tIjhFb9XriXtH769DDOH0zK+/4MuygPeAWXLX1Q9vVqXD987ovrCBtFHxpXr0Vw51+wg1LL0+oR6fJmrAxp7b3b9EailxSTm3yJ/qtn8X98N+yi1PLh0Nqy9bmpF6gGAyJHAkLXp5uzIdbs24BaUWr5SgHK7ph+8/4t/dNp1qfY7ZeXrTfGeasMDF3R3T1x4RicoFS8EaXNMBbYgRYP7vxTb4Cyv2Mx+amLWR0jtRv3Uyq+Ut/e9I+zZMVMxGLmp1b8THnxtNR8WX/zug58XJGvilLxI5mxit8xS7Mb+MxwapzsOoznUy8tna9UvDlBKYapalKmr05I7k/oWeD10duWzlcqfmD48pxjOic8tXgALX7+UBLRDYXsceTxmKXrlAe8/qtn5jyHDZA+NSwTog5YgbEiffrOJ+EDMgWuNASaEePj45pRaG1tRa2I/5ZbOo9WzV58ZMm6HM8phmt4TG8ZMGlldpH1MlXeLDPG4kDJczgHmFP82/znZ1YtnsS27nHcv8vB3L/qDLFIvCtJTkrOwhKDzlJTM7yflalxMa5leH0Xjs9bA/A+vJ9dXE1v+cCd0lWtBigzDKA9J+I1CSeu9HkzDGBc0yu30FEOY9RIXTtrf4nb7YBXCTYCozfn/VysCK0qzM4okC/+e8MRgH275nX9ehWvBLejfb3wTbyBpmlYSlD8PaMwPT2NRU2+xLhpj7T2iFGi+JmZmcXnAdRD4e9niypFv+DOy4aGhjQc7sNbQJsQSRajU794gsHgayFEO7gzcWmQRV78ywM94MnxPdfW1haUjdAJfY+qcjQFr7sQIoHv3v7Braf80Q/uBK/DOddJAgAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
