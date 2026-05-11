import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { IconProps } from '../../../types';

export const renderVA16 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 18 16" width="18" height="16"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeHTML(`<rect width="17.0667" height="16" fill="url(#pattern0_2072_2446)"/>
<defs>
<pattern id="pattern0_2072_2446" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2446" transform="scale(0.0208333 0.0222222)"/>
</pattern>
<image id="image0_2072_2446" width="48" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAtCAYAAADoSujCAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKPSURBVHgB7ZrPaxNBFMe/s4ZYsontzW5ETMCzNGAPnmz+DKEHe/XSgn+AzdVT/A/06tWDR1M8CHpIEPRUaFDcBIq1Jml+lJh13raznQ0k2YUtbwP7gWTnvYThfWfem8zuROCSozrWVsbYdYAtXLyi4Y6NqHAcp2EYRtWyrDfKJ+it9QkFJ4UPsllA1EQoQKMphChLIU1XgP0FR7iO4InrEUA0R6NRKdX6jKeOFnzOBMyMnBoD0WBZiAKZPuj3++h0OspVSKfTe4YjsKs8t3JANhth8BEiUwamacr4srrvMYW6oRyZFcQeEqGx5RvrOI78NHIV8ttYchIB3CQCuImFgH/npzh8X3avYYmFgHa9gl675l7Dwi7g+NsrHH+vXrTllewwsAo47zXRbuz7fGSTPyhsAmblfdh6YBNA+T5rpN2ZCVgPKTDQarXQTm0DD7aRz+fljvtqy/3j4w5ODl+79XAjvYb10ou5fbHMAO3tFbZtu4IIFbyHcBb2xTIDNOqECpxE/P26h6H91vsOjfz6xv7CvlgEELoI8bOC4Z933mdBgydYl1ESYf5+CUML3rz/PHDwBKsAyvnhr6u0WR1topN54qVWENgETBcsBb86eui29cJeBIuAecErgopgEZDO3fPaVLB68Ppvgr7czoJlFdKLlNonB888W61O0+1ZsC2j81aaIIErlv6OTMjnol6iWbcRPXcX53FY9OJO7om5SQRwkwjgJhHAjU+AM0HsmUz8QZKAmjJ6fcSewWCgmw1DjvqBsnpnwFk/njNBW+tut6ufUtIhX1XQCf3NMepYwnNiuWstGsUSTsUYZXJgeXBP6qnhFrH1SKrZRFE+R9qRZgPxpSZTqUIn9PQ3A3L8B92aATQZgu08AAAAAElFTkSuQmCC"/>
</defs>`)}
  </svg>`;
