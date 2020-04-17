import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { MainChartListContainer } from "../pods/main-chart-list";
import { BodyLayout, HeaderLayout, FooterLayout, MainLayout } from "../layouts";
import { FooterComponent, HeaderComponent } from "../components";

export default function Index() {
  return (
    <BodyLayout>
      <HeaderLayout>
        <HeaderComponent />
        <Typography variant="h2" component="h2" gutterBottom>
          Página principal gráficas
        </Typography>
      </HeaderLayout>

      <MainLayout>
        <MainChartListContainer />
      </MainLayout>

      <FooterLayout>
        <FooterComponent />
      </FooterLayout>
    </BodyLayout>
  );
}
