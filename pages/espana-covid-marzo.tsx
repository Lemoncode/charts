import * as React from "react";
import { EspanaCovidMarzoContainer } from "../pods/covid-spain-chart";
import { ChartPageComponent } from "../components";

interface Props {
  chartPagePath: string;
}

export default function SpainCovidChart(props: Props) {
  // const { chartPagePath } = props;

  return (
    <ChartPageComponent chartPagePath="espana-covid-marzo">
      <EspanaCovidMarzoContainer />
    </ChartPageComponent>
  );
}
