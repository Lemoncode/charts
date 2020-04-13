import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { ChartInfoVm } from '../../main-chart.vm';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Link from "next/link";

interface Props {
  chart: ChartInfoVm
}

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const ChartInfoCard = (props: Props) => {
  const classes = useStyles();
  const { chart } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={chart.picture}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {chart.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {chart.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={chart.chartPageRoute}>
          <Button size="small" color="primary">
            View chart
        </Button>
        </Link>
      </CardActions>
    </Card>
  )
}