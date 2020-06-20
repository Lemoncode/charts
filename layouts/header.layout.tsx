import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      gridArea: "header",
      textAlign: "center",
      padding: "1rem",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
    },
  })
);

interface Props {
  children: any;
}

export const HeaderLayout = (props: Props) => {
  const classes = useStyles(props);

  return (
    <header className={classes.header}>
      {props.children}
    </header>
  );
};
