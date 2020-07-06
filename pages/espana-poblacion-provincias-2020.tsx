import * as React from "react";
import { SpainPopulationChartContainer } from "../pods/spain-population-chart";
import { ChartPageComponent } from "common-app/components";

export default function SpainCovidChart() {
  return (
    <ChartPageComponent chartPagePath="espana-poblacion-provincias-2020">
      <SpainPopulationChartContainer />
    </ChartPageComponent>
  );
}
