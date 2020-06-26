import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tags: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      marginRight: "0.3rem",
    },
  })
);

interface Props {
  description: string;
  source: string;
  tags: string[];
}

export const ChartInfoComponent = (props: Props) => {
  const { description, source, tags } = props;
  const classes = useStyles(props);

  const handleClick = (tagname: string) => {
    console.log(`You clicked tag ${tagname}`);
  };

  return (
    <>
      <Typography variant="body2" component="p">
        {description}
      </Typography>
      <Typography variant="body2" component="p">
        <i>Enlace a la fuente:</i>{" "}
        <a href={source} target="_blank">
          {source}
        </a>
      </Typography>
      <ul className={classes.tags}>
        {tags.map((value, index) => (
          <li key={index}>
            <Chip
              className={classes.chip}
              label={value}
              onClick={($event) => handleClick(value)}
              variant="outlined"
            />
          </li>
        ))}
      </ul>
    </>
  );
};
