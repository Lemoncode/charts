import { ChartCardComponent } from "../../components/chartCard.component";
import { ChartGridLayout } from "../../layouts/chartGrid.layout";
import { Grid } from "@material-ui/core";

// TODO: Define interface props it should pass down the list
// of charts

interface ChartEntity {
  id: number,
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
}

export const MainChartListComponent: React.FC = () => {
  // mockup data
  const chartsInfo: ChartEntity[] = [
    {
      id: 0,
      title:
        "Use a card here: Add the title + link, picture and description and chart",
      description: "Covid España Marzo 2020",
      url: "/espana-covid-marzo",
      thumbnailUrl: "",
    },
  ];

  // TODO: use a map to iterate through each chart
  // TODO: Create a ChartInfo Card subcomponent
  return (
    <>
      <ChartGridLayout>
        {chartsInfo.map((chart: ChartEntity) => (
          <Grid item key={chart.id}>
            <ChartCardComponent
              title={chart.title}
              description={chart.description}
              url={chart.url}
              thumbnailUrl={chart.thumbnailUrl}
            />
          </Grid>
        ))}
      </ChartGridLayout>
    </>
  );
};
