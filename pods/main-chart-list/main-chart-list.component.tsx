import React from "react";
import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import { ChartInfoCard } from "./components/chart-info-card/chart-info-card";
import { ChartInfoVm } from "./main-chart.vm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      flexGrow: 1,
    }
  })
);

interface Props {
  chartsInfoCollection: ChartInfoVm[],
}

export const MainChartListComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  const { chartsInfoCollection } = props;
  return (
    <>
      <Grid container spacing={3} className={classes.grid}>
        {chartsInfoCollection.map((chartInfo: ChartInfoVm, index) => (
          <Grid item key={index} xs>
            <ChartInfoCard chartInfo={chartInfo} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
