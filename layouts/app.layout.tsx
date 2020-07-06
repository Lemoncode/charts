import * as React from "react";
import { CssBaseline } from "@material-ui/core";
import { defaultStyle } from "core/themes/default.theme";

interface Props {
  children: any;
}

export const AppLayout = (props: Props) => {
  const classes = defaultStyle();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>{props.children}</div>
    </React.Fragment>
  );
};
