import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Chip,
  CardMedia,
} from "@material-ui/core";
import { ChartInfoVm } from "core/model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridCell: {
      // maxWidth: "18.75rem",
      // margin: "2rem",
    },
    headerTitle: {
      minHeight: "4.5rem",
    },
    headerSubtitle: {
      minHeight: "3.35rem",
      color: theme.palette.text.secondary,
    },
    media: {
      height: 0,
      paddingTop: "100%",
      marginTop: "30",
    },
    source: {
      minHeight: "3.9rem",
    },
    sourceLink: {
      marginLeft: "0.5rem",
    },
    tagList: {
      display: "flex",
      justifyContent: "left",
      flexWrap: "wrap",
      listStyle: "none",
      padding: theme.spacing(0.5),
      margin: 0,
      minHeight: "4.9rem",
    },
    tagElement: {
      marginTop: "0.2rem",
      marginRight: "0.2rem",
    },
    chip: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.background.default,
    },
    cardActions: {
      justifyContent: "center",
    },
    linkGoChart: {
      margin: "0.25rem",
      padding: "0.5rem",
      alignSelf: "center",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
      textDecoration: "none",
      borderRadius: "5px",
    },
  })
);

interface Props {
  chartInfo: ChartInfoVm;
}

export const ChartCardComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  const { chartInfo } = props;

  const handleClick = (tagname: string) => {
    /* TODO: When clicked a tag, it will redirect to a page
            which contains a list of charts with the same tag */
    console.log(`You clicked tag ${tagname}`);
  };

  return (
    <React.Fragment>
      <Card className={classes.gridCell}>
        <CardContent>
          <Typography variant="h5" className={classes.headerTitle}>
            <Link href={chartInfo.chartPath}>{chartInfo.title}</Link>
          </Typography>
          <Typography variant="body1" className={classes.headerSubtitle}>
            {chartInfo.shortDescription}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={chartInfo.thumbnailUrl}
          title={chartInfo.title}
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            component="h1"
            className={classes.source}
          >
            Fuente:
            <a
              className={classes.sourceLink}
              href={chartInfo.sourceUrl}
              target="_blank"
            >
              {chartInfo.sourceDescription}
            </a>
          </Typography>
          <ul className={classes.tagList}>
            {chartInfo.tags.map((tag: string, index: number) => (
              <li key={index} className={classes.tagElement}>
                <Chip
                  className={classes.chip}
                  label={"#" + tag}
                  onClick={($event) => handleClick(tag)}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
