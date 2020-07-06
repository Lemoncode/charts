import React from "react";
import { ProvincePopulation } from "./spain-population-chart.vm";
import { createChart } from "./spain-population-chart.d3js";

interface Props {
  provincesPopulation: ProvincePopulation[];
}

export const SpainPopulationChartComponent: React.FC<Props> = (
  props: Props
) => {
  const { provincesPopulation } = props;
  const refSvgDomNode = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    createChart(refSvgDomNode.current, provincesPopulation);
  }, []);
  //Will return the svg node
  return <svg ref={(node) => (refSvgDomNode.current = node)}></svg>;
};
