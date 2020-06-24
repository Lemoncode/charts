import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardActions, Button, makeStyles, Theme, createStyles, Typography, Chip } from "@material-ui/core";
import { ChartInfoVm } from "../../main-chart.vm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridCell: {
      // maxWidth: "18.75rem",
      // margin: "2rem",
    },
    chip: {
      marginRight: "0.3rem",
    },
  })
);

interface Props {
  chartInfo: ChartInfoVm;
}

export const ChartInfoCard = (props: Props) => {
  const classes = useStyles(props);
  const { chartInfo } = props;

  const handleClick = (tagname: string) => {
    console.log(`You clicked tag ${tagname}`);
  };

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
          <Typography variant="body2" component="p">
            <i>Source:</i>{" "}
            <a href={chartInfo.source} target="_blank">
              {chartInfo.source}
            </a>
          </Typography>
          <Typography variant="body2" component="p">
            <i>Tags:</i>{" "}
            {chartInfo.tags.map((value, index) => (
              <Chip
                className={classes.chip}
                key={index}
                label={value}
                onClick={($event) => handleClick(value)}
                variant="outlined"
              />
            ))}
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