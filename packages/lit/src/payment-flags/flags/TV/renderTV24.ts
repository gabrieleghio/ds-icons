import { html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import type { IconProps } from '../../../types';

export const renderTV24 = ({
  color = 'currentColor',
  className,
}: IconProps) =>
  html`<svg viewBox="0 0 34 24" width="34" height="24"
       fill="${color}" class="${className ?? ''}" aria-hidden="true" focusable="false">
    ${unsafeSVG(`<rect width="33.6" height="24" fill="url(#pattern0_2072_2400)"/>
<defs>
<pattern id="pattern0_2072_2400" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2072_2400" transform="scale(0.015873 0.0222222)"/>
</pattern>
<image id="image0_2072_2400" width="63" height="45" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAtCAYAAAAZQbNPAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ4SURBVHgB7Zo/axRBGMafnZtLYiy0EQQLQywkInhBQSyUi4KIYCEI4qXwrCzPfIIkn+AupVWS4jhIZWEliH+aFCpqJQY1sQlYaWGSvd3NTmY2t2F2cwl32ezuZWd+MMu8s+/N3jv77MswMwZalKuzJx06UIGLIjeLyB5fGFitXinN+w2GuJSrjSGb4A03hpBxGLCSdzE2N/FoxQt+fKaxrELgPtsDYI7SUrVelgO/f/Ui7hTOY7A/j8Nm3XKw+GMVCx+/I0kYY3CsJuyNNc8W8Troe5a7dPfBLDdPi8bxG6O4d+UC8jSHOMjnCIZPnfDqS3/+IikMw0COUq/uOo7fCMKvBd/p+sgwkuDWyFmkAe0/JptFIlvHZanzkQmU6endvcn3wwj/cB8tBvso0sAI/U8ChVE6+L31xzNkJCYnt0sPo2WvKnvLvl0G349O/KN+SoeMlr2qRMv2stRjlvTzy7d36k8/vTqwj4yWvap0nu2nprqbtIi5vfiNTIRPoxMZd+Ijo2WvKoHgxUrLDkKicmknefl+GOEf7qPdc1IkEPzrb7+RBIs/V9ELBBLey6+/vIWGa+fOxLLgIN64GGDxnF5gV4QLH5a8khbdTlSioBOeqqSzkrgP3Uo9ymeiZa8qscs+7uwdpU8te1WJXfZJZu9u0bJXlSM/yYmClr2qBIJnzEWWYaEVJxH8W99wmk1kmU0rEN9nAtd951u2uc4HwMycAkQ8trkBq3Uay2sDmaEUVs3GwGP/OJrnIDllES7+5Xrl4TyZm3jyb9PFmDiYBwUQgfN4b4p6YFumVG2UicEqfLemgGSJf+Oe8dzG8P4/zNoL/sJF0xa7ieMFClz5EAAAAABJRU5ErkJggg=="/>
</defs>`)}
  </svg>`;
