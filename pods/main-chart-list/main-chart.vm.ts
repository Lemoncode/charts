export interface ChartInfoVm {
  title: string;
  description: string;
  picture: string; // url
  chartPageRoute: string;
}

export const createDefaultSampleChart = (): ChartInfoVm => ({
  title: "Sample chart",
  description: "Sample description of this chart",
  picture: "static/images/default_chart.png",
  chartPageRoute: "espana-covid-marzo",
});

export const createSpainPopulationChart = (): ChartInfoVm => ({
  title: "Spain population by provinces",
  description: "Spain population by provinces (data updated on 1st January 2020)",
  picture: "static/images/default_chart.png",
  chartPageRoute: "spain-population-by-provinces",
});
