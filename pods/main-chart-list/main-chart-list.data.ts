import { ChartInfoVm, createDefaultSampleChart } from "./main-chart.vm";

export const mainChartList: ChartInfoVm[] = [
  createDefaultSampleChart(),
  createDefaultSampleChart(),
  {
    title: "España COVID",
    description: "Afectados por comunidades 03/2020",
    picture: "static/images/espana_covid_marzo.png",
    chartPageRoute: "espana-covid-marzo",
  },
];
