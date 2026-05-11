import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderVI48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASvSURBVHgB7ZpfaFtVHMe/9yZp0ibp/rXaBu36ZwWZaBPnZNN1tr5IfXGCG+7BP2MPcwOtOBD2sgcHPgjDTkTf1qqgbt2g4KBDEOsG+iBdUtGxrksTcTTdqtjmb5M0uZ7faW+8zVqTm3uTbUk/cJN7zr3n3vv9/bn3nMMRsITP51tvsVh6JUnqYsUulBlMl0cUxb7GxsbP5TqBfgKBQDM7+APbbUb54xcEoZsZwc/FT01N+VAZwmX88XjcZWRef4N5vVmutdvtsFqtYNZBucD0IRqNIhgMylXNVVVV74jsQK9cU1tbC5vNVlbCCdJDDiVtirpnRfbvlCtqampQzpABFHSJylK5eTwb9rZfXkYFU9HijSghkZ92r1hvffoS7gZrYV+pqBYfHd2H+I0PsHB7GNL8tKq2pocPQE/o/gu3L/LnoedSi+qcl+KLN6SNEMwNMKxzwlDr4ptgaVi1bdWS+OSf/SgEEpsKeth2Bak5D38WLWh+4ak1hhoD6C02G4ENaiS5wEY6ORskpwaRvNkPaSGMfGg9sBWFMtl/Na/zBKONp5SpcW/Oc9lYJrOvOudNjr2o7jjNPXwvQM9R/fjpvIRnU9Dbnt+QGcBYwA31hO7PHWEpzBEF5zyFmrnlLYjMEGrSQA/UhPn/ofk7X+o00BLm2ejSySlVGmgN8zuul89Jwvs/Z/al4ztXPmeVNOi7/kvmnP3SaGb/a2FbznrW689cO58wz+c5lejevdU7DfQM82yK0rfXKw30DvNsijawkdNAC9SerlMs1kZ1lYquMzkXrn2Ha95BHN4wDj1QzvxYHj3FBkwuzM4v4KUz4/jo+WY4G6zQgm6eJ+Envv8QO03XUQxoFEjCu7/4HSN/BNn/VXimI9CCbuK/GTuPDlsaTpuEYkBD27cHh5jgKC+TIQbGZqAF1UPa1QjFw5i5chAPSotDRk9IwG+GbdhX9ybG+77CzfMXkAznNozJJqD14Ct4aE83NrlEJJjH00w4cfmfVvSMHuL7r3c8gIEX26AW5ZBWt5yvmb/BhXuTdnzij2EsTEH1K24JQzh2YjMe2V+NwOUUJs8mEJy40wgktGG3EU09Rli3bmI9usWeXtz8GF778hyOOC6ic8Mk31qbdhQkPBvdxKeCbv5SarG0Izp9FAh7eX3d3DDzXgomu4CmF4x8m5tIMyMk8bc7hYZOAxdd5zJkrpVYmuWJ1L/Kc9wzvRnfBg5x4Sd3zGL7du3CCd3CXgmlwOGho5j4y4u2agkv16fwzPo0bIbcbalTY6jvgXHjLjx5RszkOFFoqCvRNJOTD3azDZ/tOYn2ujZ4YwI+vbUOs+0fw7zlGISaLSu2EWudqGI9uuonzvKeHX3Wep9yZI7rITybonhehiLgveHjeHfXEWaI/0SnIxNIBs6xSUk3DBs7uZdJ7EoMeGb4p00v4UrPF1X8vUjRw/5+YU28DK1dKWfS6fSyMokfkQvhcOlmYO8GsVhMWXTTgqQf5RKJj0QiZRcBpCcUCilXY9ESnFMCrbw0m81uVNY6PJ/D4WgVW1paZmlFIqvwozLwMb3P0c6y5VdLCxJpXZ4TpaUUeTbCtF1KJBJ95HCq+BcnO92K6FJOZgAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
