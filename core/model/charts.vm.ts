export interface ChartInfoVm {
  title: string;
  shortDescription: string;
  longDescription: string;
  thumbnailUrl: string; // url
  sourceDescription: string;
  sourceUrl: string;
  tags: string[];
  chartPath: string;
}

export const createDefaultSampleChart = (): ChartInfoVm => ({
  title: "Sample chart",
  shortDescription: "Sample description of this chart",
  longDescription: "Sample description of this chart but with more text",
  thumbnailUrl: "static/images/default_chart.png",
  chartPath: "/",
  sourceDescription: "Sample source description",
  sourceUrl: "#",
  tags: ["example"],
});
