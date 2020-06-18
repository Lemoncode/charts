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
