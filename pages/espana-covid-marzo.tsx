import * as React from "react";
import * as d3 from "d3";
import Link from "next/link";
import { HeaderLayout, AppLayout, MainLayout, FooterLayout } from "../layouts";
import { HeaderComponent, FooterComponent } from "../components";
import { Typography } from "@material-ui/core";

export default function SpainCovidChart() {
  const refSvgDomNode = React.useRef<SVGSVGElement>(null);

  // This could be moved outside the component
  // is just pure d3js
  // we could move it spain-covid-chart.d3.tsx
  // By using this approach we isolate the d3 chart creation
  const createChart = (svg: SVGSVGElement) => {
    d3.select(svg).append("circle").attr("r", 20).attr("cx", 20).attr("cy", 20);
  };

  React.useEffect(() => {
    createChart(refSvgDomNode.current);
  }, []);

  return (
    <AppLayout>
      <HeaderLayout>
        <HeaderComponent title="Covid Marzo 2020"/>
      </HeaderLayout>
      <MainLayout>
        <svg
          ref={(node) => (refSvgDomNode.current = node)}
          width="500"
          height="500"
        ></svg>
        <Typography variant="body1" component="p" gutterBottom>
          Add here the description and chart
        </Typography>
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
