import * as React from "react";
import { Typography, makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footerLink: {
      color: theme.palette.secondary.main,
    },
  })
);

interface Props {}

export const FooterComponent = (props: Props) => {
  const classes = useStyles(props);

  return (
    <Typography variant="subtitle1" component="p">
      &copy; 2020. Developed with React.
    </Typography>
  );
};
