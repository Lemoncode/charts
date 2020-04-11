import Typography from "@material-ui/core/Typography";
import { MainChartListComponent } from "./main-chart-list.component";

export const MainChartListContainer: React.FC = () => {
  // TODO : read a list of charts (title + description + thumbnail)
  // from main-chart-list.data.ts (first you will need to create that data)
  // For the pictures (statis resources) you will need to place them under
  // the root public/static folder, check this: https://stackoverflow.com/questions/49435368/nextjs-unable-to-load-images-from-static-folder

  // This container will pass down the data to the MainChartListComponent
  // this component will iterate through the list and display a card per item
  return (
    <>
      <MainChartListComponent />
    </>
  );
};
