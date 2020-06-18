import * as React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  title: string
}

export const HeaderComponent = (props: Props) => {

  return (
    <React.Fragment>
      <Typography variant="h1" component="h1">
        {props.title}
      </Typography>
    </React.Fragment>
  );
};
