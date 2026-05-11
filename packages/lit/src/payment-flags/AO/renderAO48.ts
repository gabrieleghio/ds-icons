import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../types';

export const renderAO48 = ({
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
<image id="image0_2055_4" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL9SURBVHgB7ZrLTxNRFMa/aUHG8prEoIQx0pj4XIgk6lJK4s5g4h+gsiFuTHDjwoXGx8KVRiMLE92IGxMXRIgbBRGXqMGVEUl4mNAQiKYolVJpr+fMMO00FizSO0xm+mtO577m9n7n3nvmkSpYYVDTtOVEqBNQIpSNwGso+KgI3D2RmH6cLSIG1fpwCsFBAYThcUjwZBCp1tbEzKQhvl/VJ/wg3MJwgBpvLnup6u124ZWKAhUB+niHNNkSBBZE2siz3mQidDFA+6DTalRFwkMeE86wnq1gbYqtTGkhw2GroMJzsnMJKTn6Ijk5b0uHbd5NvK53TUri/UpJvF9xlfhAdRpO4hrx5Q3L2Psiip135oy0E7hGfPjhrDHzNa2L2P10BrVtC5BNGRzk4MjXTPpT865MOkii4x8qoK3MOOf1G9+N9HxfFWThiplP/QwgenUbxk42IBkNZsrrL8WkbgFXBbzf0TJMdezIOIBXQMP1b5CF8krVhZWpU4JwA+q+pLHvLSY7tuPXexXFYE6kMmlXXucTo1sQ66vM5Ksji5CBa29yYr3ZQFd5JAEZOCqeg1ehAWxptNx2XgoycFQ8BzTtVBx15+f/2ZavABZBSXd+ji/7uQe1xluFPXQ3p7XFV21nF2x3RLERm2FXLkAkP0M8ugXRqP9d33LMrGd71yNtHNI6LtgBbJy217FTrLrbl6WNQVrH63bA2ADE2dPmSrDK2JoOSPt9aR0bxkJ42eZb2vkcwDY7nE0/65I6Pqmdiy8D2VldjwMsW+ucjZrUaN+0nx5VdTNNIkAOAO1lUDCDVm2W85HzjXr+Pvq7AdoKUuBX2QISOUMDp4AFrQb/zc0u04qN9Ov8kx7gKDmgt7+w9kPDwP3ubF6WcEb6zNs5RNvgHDni+Moy59UQ+wFMTQNvSfTzAfPIUAwwkCWccVS82yi9uvYrJfF+pSTer7D4N/AnIyx+CP7kHn9pZBOQ9OTkUhu3eyHsIweMY5U/XLaTjWzCgNIO2GuyazBXusEf8CzD1PrFbGcAAAAASUVORK5CYII="/>
</defs>`)}
  </svg>`;
