export interface ChartInfoVm {
  title: string;
  shortDescription: string;
  longDescription: string;
  picture: string; // url
  source: string;
  tags: string[];
  chartPageRoute: string;
}

export const createDefaultSampleChart = (): ChartInfoVm => ({
  title: "Sample chart",
  shortDescription: "Sample short description of this chart",
  longDescription:
    "Sample long description of this chart. Sample long description of this chart. Sample long description of this chart.",
  picture: "static/images/default_chart.png",
  source: "https://www.google.es/", //default source
  tags: ["default-tag"],
  chartPageRoute: "espana-covid-marzo",
});

export const createSpainPopulationChart = (): ChartInfoVm => ({
  title: "España población por provincias",
  shortDescription: "Población por provincias españolas a 1 de enero de 2020",
  longDescription:
    "Cifras oficiales de población resultantes de la revisión del Padrón municipal español a 1 de enero de 2020." +
    "La intensidad del color rojo indica mayor número de habitantes en dicha provincia, siendo blanco el color" +
    "para las provincias con menos habitantes y el rojo oscuro el color para las provincias con más. Fuente: " +
    "Instituto Nacional de Estadística.",
  picture: "static/images/default_chart.png",
  source: "https://www.ine.es/jaxiT3/Tabla.htm?t=2852",
  tags: ["España", "población", "2020"],
  chartPageRoute: "espana-poblacion-provincias-2020",
});
