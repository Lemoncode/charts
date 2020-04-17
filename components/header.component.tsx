import * as React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontSize: `1.2rem`,
    },
  })
);

interface Props {}

export const HeaderComponent = (props: Props) => {
  const classes = useStyles(props);

  return (
    <Typography
      variant="h1"
      component="h1"
      className={classes.title}
      gutterBottom
    >
      Nombre página de estadísticas
    </Typography>
  );
};
