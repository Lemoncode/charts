import * as React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      padding: `1.5rem`,
      textAlign: "center",
      backgroundColor: "black",
      color: "white",
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
