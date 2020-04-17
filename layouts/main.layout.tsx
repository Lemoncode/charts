import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      backgroundColor: "white",
      color: "black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignContent: "stretch",
      flexGrow: 1
    }
  })
);

interface Props {
  children: any
}

export const MainLayout = (props: Props) => {
  const classes = useStyles(props);

  return (
    <main className={classes.main}>
      {props.children}
    </main>
  );
};