import {
  ChartInfoVm,
  createDefaultSampleChart,
  createSpainPopulationChart,
} from "./main-chart.vm";

export const mainChartList: ChartInfoVm[] = [
  createDefaultSampleChart(),
  createSpainPopulationChart(),
  {
    title: "España COVID",
    description: "Afectados por comunidades 03/2020",
    picture: "static/images/espana_covid_marzo.png",
    source: "https://www.ine.es/jaxiT3/Tabla.htm?t=2852", //CHANGE IT: the same as Spain population
    tags: ["COVID", "COVID-19", "coronavirus", "Spain"],
    chartPageRoute: "espana-covid-marzo",
  },
];
