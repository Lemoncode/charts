import React from "react";
import { ProvincePopulation } from "./spain-population-chart.vm";
import { getProvincesPopulation } from "./spain-population-chart.api";
import { SpainPopulationChartComponent } from "./spain-population-chart.component";

interface Props { }

export const SpainPopulationChartContainer: React.FC<Props> = (props: Props) => {
  const [provincesPopulation, setProvincesPopulation] = React.useState<ProvincePopulation[]>(getProvincesPopulation());

  return(
    <SpainPopulationChartComponent provincesPopulation={provincesPopulation} />
  );
}