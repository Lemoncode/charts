import * as React from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";

interface Props {
  title: string;
  description: string,
  url: string,
  thumbnailUrl: string
}

export const ChartCardComponent = (props: Props) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom>
            {props.title}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href={props.url}>
              <a>
                <Typography variant="body1" gutterBottom>
                  {props.description}
                </Typography>
              </a>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}