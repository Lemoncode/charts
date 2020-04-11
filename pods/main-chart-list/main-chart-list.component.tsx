import Link from "next/link";
import Typography from "@material-ui/core/Typography";

// TODO: Define interface props it should pass down the list
// of charts
export const MainChartListComponent: React.FC = () => {
  // TODO: use a map to iterate through each chart
  // TODO: Create a ChartInfo Card subcomponent
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Use a card here: Add the title + link, picture and description and chart
      </Typography>
      <Link href="/espana-covid-marzo">
        <a>
          <Typography variant="body1" gutterBottom>
            Covid España Marzo 2020
          </Typography>
        </a>
      </Link>
    </>
  );
};
