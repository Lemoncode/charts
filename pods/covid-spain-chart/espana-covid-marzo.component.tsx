import * as React from "react";
import { createChart } from "./espana-covid-marzo.d3js"

interface Props {
}

export const EspanaCovidMarzoComponent: React.FC<Props> = (props: Props) => {
  const refSvgDomNode = React.useRef<SVGSVGElement>(null);
  React.useEffect(() => {
    createChart(refSvgDomNode.current);
  }, []);
  //Will return the svg node
  return (
    <svg ref={(node) => (refSvgDomNode.current = node)}> 
    </svg>
  );
};
