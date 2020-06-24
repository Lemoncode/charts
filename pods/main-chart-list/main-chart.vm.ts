export interface ChartInfoVm {
  title: string;
  description: string;
  picture: string; // url
  source: string;
  tags: string[];
  chartPageRoute: string;
}

export const createDefaultSampleChart = (): ChartInfoVm => ({
  title: "Sample chart",
  description: "Sample description of this chart",
  picture: "static/images/default_chart.png",
  source: "https://www.google.es/", //default source
  tags: ["default-tag"],
  chartPageRoute: "espana-covid-marzo",
});

export const createSpainPopulationChart = (): ChartInfoVm => ({
  title: "Spain population by provinces",
  description: "Spain population by provinces (data updated on 1st January 2020)",
  picture: "static/images/default_chart.png",
  source: "https://www.ine.es/jaxiT3/Tabla.htm?t=2852",
  tags: ["Spain", "population", "2020"],
  chartPageRoute: "spain-population-by-provinces",
});
