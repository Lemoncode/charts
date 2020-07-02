import { ChartInfoVm, createDefaultSampleChart } from "../model";

export const mainChartList: ChartInfoVm[] = [
  createDefaultSampleChart(),
  createDefaultSampleChart(),
  {
    title: "España COVID",
    shortDescription: "Afectados por comunidades 03/2020",
    longDescription: "Afectados por comunidades 03/2020",
    thumbnailUrl: "static/images/espana_covid_marzo.png",
    chartPath: "espana-covid-marzo",
    sourceDescription: "Fuente de covid marzo",
    sourceUrl: "#",
    tags: ["covid"],
  },
];
