import * as React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      backgroundColor: "black",
      color: "white",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    link: {
      color: "grey",
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