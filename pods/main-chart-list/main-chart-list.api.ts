import { ChartInfoVm } from "./main-chart.vm";
import { mainChartList } from "./main-chart-list.data";

export const getAllCharts = (): ChartInfoVm[] => mainChartList;
