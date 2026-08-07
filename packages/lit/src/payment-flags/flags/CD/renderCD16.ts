import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderCD16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 23 16" width="23" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="22.4" height="16" fill="url(#pattern0_2072_1510)"/>
<defs>
<pattern id="pattern0_2072_1510" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_1510" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_1510" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUNSURBVHgB3ZpPbNtUHMe/bp3+S1KiLmV0lzr8GWwSNBMcxoS2hMMOCNDEhUM1miIm7VCUSjsy0RbBCU1qRA+TirZW1QTcpgkJaRzSVQg4DLXjwGCsSsKhHevosjZNqmSLeb+3OnHSOHESO8nykdxnv3hZP/69vPdNbQEKoyEH0h1+CLKHHXnQBHRbNuA/cA4fvjANyFhCKyZdb2BWeV3gP0dXJchykO1JaAJIevj5aS5N+wqJGxbc+9oWfvSX7PVuR8OP5f0rITSBuJZ06k4L7s9ZsXG1gx8z6XBrZ+qQyKruY1WXMme22QGLlZ0h4EnBYYli5GAAIy9NwtEWzfSnNwWsnbchdqkLaTbuwTf+U0rGxVGRifszZ7d3PxYvgbtnCUvrbjQCIwcCOPvK+C7pdSZMW3qzBS2sr5PVO83a+M4FaBGEYyJrsxZiV8n/TLKFEXzHC9c3IUSTDtSLk8/NMOkJ9LPfRyFfOp8uNprjsqwcenLP0DHUh/bP8qs8+nIA9eDo3nlcPe7F9JHhjDhJ3ztvxe23nKy1FRQnhF3H/pXMpYCtD8XgVX/bC8ke5lWvZfVJ+uzABG/VUJVJXEs4nzU5ndnX9y92oKqTOEHVH3t1AmajVJo2tfiDKx1YZpW++6Vdt3g+mpX39M3jhHQZ/fYIn+BI1tEeLfgmS/+5EY5JiGz2Y+aWjx9Xi1al49ctfGjHr7ehEtSVF7VOml/1wLd/Bif6L6MU7j1LfJu9NVS1eL81zKTH2YQ2m9NfrXQhxGIv+q7N8JaGeylIXDm/Emit/sQ9gY/ZWq3GDGkFsdQJei5ANeJaAcVM6c6BJHpOxvXN9jSkF987pPlmrm9DCG9KKAct6dRKK5+9H1zphNF0vZbEw/djTD7Fj0tWnpBskaKvD7AJUa98qSh6/1LpoFUuln2P4Dy9hafeTWD1brZflzxVXg1Nauo+lz2i5210RVEjabGnuXTPYDyn/9e11xG4eUaf/MCeRd7SCjDx2xhvab2/eGyYL4kDeRcnn0qiaDWQdM9ggm1bbD/7qV6448GnP40w+SP8WJd8ZNMF7/dBLq1Aw5z6SN6vEXULrdX1kI6wDPL57+OYWx4CYquZ/rLirV6MiqJ60ZKm6P3FjTF89edo9mSVvK7K60VLmqIoLVs0kxsNfZ6dp2O7pKdu+jHFpIt99zBE3qwoWgyauWkyo5lcQa+0QlXytYyiCrRWkzS1CuVKK1QkX48oWkiaIGmazCr5al2WfD2iqJb03LKPSY/xmbxSdMnXK4oWkqa1mqQX/vWgWorK1zuKqjFSWkFTvlGiqBnSCrvkGymKmiWtkJE/7PwZnx2daqwoajIiSfsPnsPh3l/Q93T2hYaIoiYjhBaQ+Q1IvlGjqGEUyvZ0B/Of7xo3ipqBSNLr7A4mtb2CsUPcyChqBsKP7b2ZMWiUvBlR1DDM+kprZhQ1A0PkaxFFzaAq+VpGUTOoSL4eUdQMypKvZxQ1gxx5un9ZaL5vhChqCKo7tATJz2PnubuELMOqejqjkaKoITzMmZsWRQjyNciCh47oYR2BOXYwf+dgov5R1CjoOZxUDEjGVH1CQAjC4Ui1WxaFnefw7Me30fNBHJa92Si6kerGxduncOHvU3y/CQghsO9Z0Yto9AfhGa/1xe2g86MtSbmDSTShNBGCILxJOzkPKIWC8LEZz8963ReYdOCPM7WSlmE+8+wzvcDG/iQmXfzPU/8DHdk/tRUT9bAAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
