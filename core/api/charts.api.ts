import { ChartInfoVm } from "../model";
import { mainChartList } from "../data";

export const getAllCharts = (): ChartInfoVm[] => mainChartList;
export const getChartByPagePath = (pagePath: string): ChartInfoVm => {
  return mainChartList.find((x) => x.chartPath === pagePath);
};
