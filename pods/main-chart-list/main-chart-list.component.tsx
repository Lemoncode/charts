import { ChartInfoVm } from "./main-chart.vm";
import { ChartInfoCard } from "./components";
import React from "react";

// TODO: Define interface props it should pass down the list
// of charts
interface Props {
  charts: ChartInfoVm[],
}

export const MainChartListComponent: React.FC<Props> = (props: Props) => {
  const { charts } = props;
  return (
    <>
      {
        charts.map((chart, index) =>
          <ChartInfoCard chart={chart} key={index} />
        )
      }
    </>
  );
};
