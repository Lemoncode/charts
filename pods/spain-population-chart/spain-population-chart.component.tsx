import React from "react";
import { ProvincePopulation } from "./spain-population-chart.vm";
import { createChart } from "./spain-population-chart.d3js";
import { TableComponent } from "./components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: "flex",
      padding: theme.spacing(0.5),
      margin: 0,
    },
    svg: {
      marginRight: theme.spacing(3),
    },
  })
);

interface Props {
  provincesPopulation: ProvincePopulation[];
}

export const SpainPopulationChartComponent: React.FC<Props> = (
  props: Props
) => {
  const { provincesPopulation } = props;
  const refSvgDomNode = React.useRef<SVGSVGElement>(null);
  const classes = useStyles(props);

  React.useEffect(() => {
    createChart(refSvgDomNode.current, provincesPopulation);
  }, []);
  //Will return the svg node
  return (
    <div className={classes.content}>
      <div className={classes.svg}>
        <svg ref={(node) => (refSvgDomNode.current = node)}></svg>
      </div>
      <TableComponent provincesPopulation={provincesPopulation} />
    </div>
  );
};
