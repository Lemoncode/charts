import * as React from "react";
import { Grid } from "@material-ui/core";

interface Props {
  children: any
}

export const ChartGridLayout = (props: Props) => {

  return (
    <Grid container>
      {props.children}
    </Grid>
  );
};