import Typography from "@material-ui/core/Typography";
import { MainChartListComponent } from "./main-chart-list.component";
import React from "react";
import { ChartInfoVm } from "./main-chart.vm";

interface Props {
  charts: ChartInfoVm[]
}

export const MainChartListContainer: React.FC<Props> = (props: Props) => {
  // This container will pass down the data to the MainChartListComponent
  // this component will iterate through the list and display a card per item
  const { charts } = props;

  return (
    <>
      <MainChartListComponent charts={charts} />
    </>
  );
};
