import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { MainChartListContainer } from "../pods/main-chart-list";

export default function Index() {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Página principal gráficas
      </Typography>

      <MainChartListContainer />
    </div>
  );
}
