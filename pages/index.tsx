import React from "react";
import { MainChartListContainer, getAllCharts } from "../pods/main-chart-list";
import { AppLayout, HeaderLayout, FooterLayout, MainLayout } from "../layouts";
import { FooterComponent, HeaderComponent } from "../components";

export default function Index() {
  const [chartsInfoCollection, setChartsInfoCollection] = React.useState(getAllCharts());

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
