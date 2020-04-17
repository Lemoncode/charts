import * as React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      color: "grey",
    },
  })
);

interface Props {}

export const FooterComponent = (props: Props) => {
  const classes = useStyles(props);

  return (
    <Typography variant="subtitle1" component="p">
      	&copy; 2020. Developed with React
    </Typography>
  );
};
