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
  sourceUrl: "https://www.google.es",
  tags: ["example"],
});

export const createSpainPopulationChart = (): ChartInfoVm => ({
  title: "España población por provincias",
  shortDescription: "Población por provincias españolas a 1 de enero de 2020",
  longDescription:
    "Cifras oficiales de población resultantes de la revisión del Padrón municipal español a 1 de enero de 2020." +
    "La intensidad del color rojo indica mayor número de habitantes en dicha provincia, siendo blanco el color" +
    "para las provincias con menos habitantes y el rojo oscuro el color para las provincias con más.",
  thumbnailUrl: "static/images/esp_pob_prov_2020.png",
  chartPath: "espana-poblacion-provincias-2020",
  sourceDescription: "Instituto Nacional de Estadística",
  sourceUrl: "https://www.ine.es/jaxiT3/Tabla.htm?t=2852",
  tags: ["España", "población", "2020"],
});
