import { ChartInfoVm } from "./main-chart.vm";
import { mainChartList } from "./main-chart-list.data";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

const ONE_SECOND: number = 1000;

export const getAllCharts = (): Promise<ChartInfoVm[]> =>
  of(mainChartList).pipe(delay(ONE_SECOND)).toPromise();
