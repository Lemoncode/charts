import { ChartInfoVm } from "./main-chart.vm";
import { ChartInfoCard } from "./components";
import React from "react";
import { GridLayout } from "../../layouts";

// TODO: Define interface props it should pass down the list
// of charts
interface Props {
  chartsInfoCollection: ChartInfoVm[],
}

export const MainChartListComponent: React.FC<Props> = (props: Props) => {
  const { chartsInfoCollection } = props;
  return (
    <GridLayout>
      {
        chartsInfoCollection.map((chartInfo, index) =>
          <ChartInfoCard chartInfo={chartInfo} key={index} />
        )
      }
    </GridLayout>
  );
};
