import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { MainChartListContainer, getAllCharts } from "../pods/main-chart-list";

const Index = props => {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Página principal gráficas
      </Typography>

      <MainChartListContainer charts={props.charts} />
    </div>
  );
}

Index.getInitialProps = async () => {
  const chartsCollection = await getAllCharts();
  console.log(`Data fetched:  ${chartsCollection.length} charts`)

  return {
    charts: chartsCollection
  };
}

export default Index;