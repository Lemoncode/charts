import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      gridArea: "main",
      padding: "2rem",
      width: "100%",
      maxWidth: "80rem",
    },
  })
);

interface Props {
  children: any;
}

export const MainLayout = (props: Props) => {
  const classes = useStyles(props);

  return <main className={classes.main}>{props.children}</main>;
};
