import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardActions, Button, makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import { ChartInfoVm } from "../../main-chart.vm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridCell: {
      // maxWidth: "18.75rem",
      // margin: "2rem",
    },
  })
);

interface Props {
  chartInfo: ChartInfoVm
}

export const ChartInfoCard = (props: Props) => {
  const classes = useStyles(props);
  const { chartInfo } = props;

  return (
    <React.Fragment>
      <Card className={classes.gridCell}>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            {chartInfo.title}
          </Typography>
          <Typography variant="body2" component="p">
            {chartInfo.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href={chartInfo.chartPageRoute}>
              <a>
                <Typography variant="body1" gutterBottom>
                  Ir a gráfica
                </Typography>
              </a>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}