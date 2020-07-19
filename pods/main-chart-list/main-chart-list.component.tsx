import React from "react";
import { Grid, makeStyles, Theme, createStyles } from "@material-ui/core";
import { ChartCardComponent } from "common-app/components/charts/chart-card.component";
import { ChartInfoVm } from "core/model/charts.vm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      flexGrow: 1,
    },
    gridElement: {
      minWidth: "20rem",
    },
  })
);

interface Props {
  chartsInfoCollection: ChartInfoVm[];
}

export const MainChartListComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  const { chartsInfoCollection } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.grid}>
        {chartsInfoCollection.map((chartInfo: ChartInfoVm, index) => (
          <Grid item key={index} xs className={classes.gridElement}>
            <ChartCardComponent chartInfo={chartInfo} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
