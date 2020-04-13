export interface ChartInfoVm {
  title: string;
  description: string;
  picture: string; // url
  chartPageRoute: string;
}

export const createEmptyChart = (): ChartInfoVm => ({
  title: "",
  description: "",
  picture: "",
  chartPageRoute: "",
});
