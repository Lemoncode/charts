import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      gridArea: "footer",
      padding: "1rem",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
      textAlign: "center",
    }
  })
);

interface Props {
  children: any
}

export const FooterLayout = (props: Props) => {
  const classes = useStyles(props);

  return (
    <footer className={classes.footer}>
      {props.children}
    </footer>
  );
};