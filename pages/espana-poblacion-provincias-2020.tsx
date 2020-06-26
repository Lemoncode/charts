import * as React from "react";
import Link from "next/link";
import { SpainPopulationChartContainer } from "../pods/spain-population-chart";
import { HeaderLayout, AppLayout, MainLayout, FooterLayout } from "../layouts";
import { HeaderComponent, FooterComponent } from "../components";
import {
  ChartInfoVm,
  createSpainPopulationChart,
} from "../pods/main-chart-list/main-chart.vm";
import { ChartInfoComponent } from "../common-app";

export default function SpainCovidChart() {
  const [chartInfo, setChartInfo] = React.useState<ChartInfoVm>(
    createSpainPopulationChart()
  );

  return (
    <AppLayout>
      <HeaderLayout>
        <HeaderComponent title={chartInfo.title} />
      </HeaderLayout>
      <MainLayout>
        <ChartInfoComponent
          description={chartInfo.longDescription}
          source={chartInfo.source}
          tags={chartInfo.tags}
        />
        <div>
          <SpainPopulationChartContainer />
        </div>
        <Link href="/index">
          <a>Volver a página principal</a>
        </Link>
      </MainLayout>
      <FooterLayout>
        <FooterComponent />
      </FooterLayout>
    </AppLayout>
  );
}
