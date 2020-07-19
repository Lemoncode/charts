import {
  ChartInfoVm,
  createDefaultSampleChart,
  createSpainPopulationChart,
} from "../model";

export const mainChartList: ChartInfoVm[] = [
  createDefaultSampleChart(),
  createSpainPopulationChart(),
  {
    title: "España COVID",
    shortDescription: "Afectados por comunidades 03/2020",
    longDescription: "Afectados por comunidades 03/2020",
    thumbnailUrl: "static/images/espana_covid_marzo.png",
    chartPath: "espana-covid-marzo",
    sourceDescription: "Fuente de covid marzo",
    sourceUrl: "https://www.google.es", //Replace it
    tags: ["españa", "covid", "COVID-19"],
  },
];
