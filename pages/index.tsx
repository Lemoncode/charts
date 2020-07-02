import React from "react";
import { MainChartListContainer } from "pods/main-chart-list";
import { AppLayout, HeaderLayout, FooterLayout, MainLayout } from "layouts";
import { FooterComponent, HeaderComponent } from "components";
import { getAllCharts } from "core/api";

export default function Index() {
  const [chartsInfoCollection, setChartsInfoCollection] = React.useState(
    getAllCharts()
  );

  return (
    <AppLayout>
      <HeaderLayout>
        <HeaderComponent title="Página principal gráficas" />
      </HeaderLayout>
      <MainLayout>
        <MainChartListContainer chartsInfoCollection={chartsInfoCollection} />
      </MainLayout>
      <FooterLayout>
        <FooterComponent />
      </FooterLayout>
    </AppLayout>
  );
}
