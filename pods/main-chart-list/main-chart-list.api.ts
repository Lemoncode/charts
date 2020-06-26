import { ChartInfoVm } from "./main-chart.vm";
import { mainChartList } from "./main-chart-list.data";

export const getAllCharts = (): ChartInfoVm[] => mainChartList;

export const getChartByRoute = (route: string): ChartInfoVm => {
  return mainChartList.find((chart) => chart.chartPageRoute === route);
};

export const getChartsByTag = (tag: string): ChartInfoVm[] => {
  return mainChartList.filter((chart) => chart.tags.includes(tag));
};
