import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Chip,
  CardHeader,
  CardMedia,
} from "@material-ui/core";
import { ChartInfoVm } from "core/model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridCell: {
      // maxWidth: "18.75rem",
      // margin: "2rem",
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
    },
    tagElement: {
      marginRight: "0.3rem",
    },
    media: {
      height: 0,
      paddingTop: "100%", // 16:9
      marginTop: "30",
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
        <CardHeader title={chartInfo.title} />
        <CardMedia
          className={classes.media}
          image={chartInfo.thumbnailUrl}
          title={chartInfo.title}
        />
        <CardContent>
          <Typography variant="body2" component="p">
            {chartInfo.shortDescription}
          </Typography>
          <Typography variant="subtitle2" component="h1">
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
                  label={"#" + tag}
                  onClick={($event) => handleClick(tag)}
                  color="primary"
                />
              </li>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href={chartInfo.chartPath}>
              <a>
                <Typography variant="body1" gutterBottom>
                  Ir a gráfica
                </Typography>
              </a>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};
