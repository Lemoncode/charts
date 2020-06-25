import * as React from "react";
import Link from "next/link";
import { EspanaCovidMarzoContainer } from "../pods/covid-spain-chart";
import * as d3 from "d3";
import { HeaderLayout, AppLayout, MainLayout, FooterLayout } from "../layouts";
import { HeaderComponent, FooterComponent } from "../components";
import { Typography } from "@material-ui/core";

export default function SpainCovidChart() {
  return (
    <AppLayout>
      <HeaderLayout>
        <HeaderComponent title="Covid Marzo 2020" />
      </HeaderLayout>
      <MainLayout>
        <p>
          Mapa de afectados por COVID en España por Comunidades en Marzo de 2020
        </p>
        <div>
          <EspanaCovidMarzoContainer />
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
