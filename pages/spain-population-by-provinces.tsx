  
import * as React from "react";
import Link from "next/link";
import { SpainPopulationChartContainer } from "../pods/spain-population-chart";
import { HeaderLayout, AppLayout, MainLayout, FooterLayout } from "../layouts";
import { HeaderComponent, FooterComponent } from "../components";

export default function SpainCovidChart() {
  return (
    <AppLayout>
      <HeaderLayout>
        <HeaderComponent title="Spain population by provinces 2020" />
      </HeaderLayout>
      <MainLayout>
        <p>
          Spain population by provinces (data updated on 1st January 2020)
        </p>
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