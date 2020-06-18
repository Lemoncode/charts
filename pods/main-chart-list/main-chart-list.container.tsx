import Typography from "@material-ui/core/Typography";
import { MainChartListComponent } from "./main-chart-list.component";
import React from "react";
import { ChartInfoVm } from "./main-chart.vm";

interface Props {
  chartsInfoCollection: ChartInfoVm[]
}

export const MainChartListContainer: React.FC<Props> = (props: Props) => {
  // This container will pass down the data to the MainChartListComponent
  // this component will iterate through the list and display a card per item
  const { chartsInfoCollection } = props;

  return (
    <>
      <MainChartListComponent chartsInfoCollection={chartsInfoCollection} />
    </>
  );
};
