import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ChartInfoVm } from '../../main-chart.vm';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from "next/link";

interface Props {
  chartInfo: ChartInfoVm
}

export const ChartInfoCard = (props: Props) => {
  const { chartInfo } = props;

  return (
    <>
      <Card className="card-width">
        <CardActionArea>
          <ChartInfo chartInfo={chartInfo} />
        </CardActionArea>
      </Card>
      <style jsx global>
        {`
          .card-width{
            max-width: 18.75rem;
            margin: 2rem;
          }
      `}
      </style>
    </>
  )
}

const ChartInfo = (props: Props) => {
  const { chartInfo } = props;

  return (
    <>
      <Link href={chartInfo.chartPageRoute}>
        <CardContent>
          <CardMedia
            component="img"
            alt={chartInfo.title}
            image={chartInfo.picture}
            title={chartInfo.title}
          />
          <Typography gutterBottom variant="h5" component="h2">
            {chartInfo.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {chartInfo.description}
          </Typography>
        </CardContent>
      </Link>
    </>
  );
}