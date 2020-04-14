import Typography from "@material-ui/core/Typography";
import { MainChartListContainer, getAllCharts } from "../pods/main-chart-list";
import React from "react";

export default function Index() {
  const [chartsInfoCollection, setChartsInfoCollection] = React.useState(getAllCharts());

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Página principal gráficas
      </Typography>

      <MainChartListContainer chartsInfoCollection={chartsInfoCollection} />
    </div>
  );
}
