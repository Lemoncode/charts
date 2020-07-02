import * as React from "react";
import { ChartInfoVm, createDefaultSampleChart } from "core/model";
import { getChartByPagePath } from "core";
import { ChartPageLayout } from "layouts";

interface Props {
  chartPagePath: string;
  children: any;
}

export const ChartPageComponent: React.FC<Props> = (props: Props) => {
  const { chartPagePath } = props;
  const [chart, setChart] = React.useState<ChartInfoVm>(
    createDefaultSampleChart
  );
  React.useEffect(() => {
    setChart(getChartByPagePath(chartPagePath));
  }, []);

  return <ChartPageLayout chart={chart}>{props.children}</ChartPageLayout>;
};
