import * as d3 from "d3";
import * as topojson from "topojson-client";
const spainjson = require("./spain-province.json");
const d3Composite = require("d3-composite-projections");
import { ProvincePopulation } from "./spain-population-chart.vm";
import {
  svgDimensions,
  svgBackgroundColor,
  mapProjectionProps,
  messagesProps,
  rectangleProps,
  legendProps,
} from "./spain-population-chart.config";
import styles from "./map.module.css";

const maxPopulation = (provincesPopulation: ProvincePopulation[]): number => {
  return provincesPopulation.reduce(
    (max, item) => (item.population > max ? item.population : max),
    0
  );
};

const getProvincePopulation = (
  province: string,
  provincesPopulation: ProvincePopulation[]
): number => {
  const res = provincesPopulation.find((p) => p.province === province);
  if (res) return res.population;
  return 0;
};

const getColor = (
  d: any,
  provincesPopulation: ProvincePopulation[],
  colorScale: d3.ScaleSequential<string>
) => {
  const province = d.properties.NAME_2;
  const res = provincesPopulation.find((p) => p.province === province);
  if (!res) {
    console.log(d.properties.NAME_2);
    return "#ffffff";
  }
  return colorScale(res.population);
};

const generateColorScale = (provincesPopulation: ProvincePopulation[]) => {
  return d3
    .scaleSequential(d3.interpolateReds)
    .domain([0, maxPopulation(provincesPopulation)]);
};

const displayLegend = (
  svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
  posX: number,
  posY: number,
  province: string,
  population: number
) => {
  svg
    .append("rect")
    .attr("rx", rectangleProps.rx)
    .attr("ry", rectangleProps.ry)
    .attr("x", posX - legendProps.x_offset)
    .attr("y", posY - legendProps.y_offset)
    .attr(
      "width",
      province === "Santa Cruz de Tenerife"
        ? rectangleProps.sct_width
        : rectangleProps.width
    )
    .attr("height", rectangleProps.height)
    .attr("class", styles["messages-rectangle"]);

  svg
    .append("text")
    .attr("x", posX + messagesProps.x - legendProps.x_offset)
    .attr("y", posY + messagesProps.y_first - legendProps.y_offset)
    .attr("class", styles.messages)
    .text(`Provincia: ${province}`);

  svg
    .append("text")
    .attr("x", posX + messagesProps.x - legendProps.x_offset)
    .attr("y", posY + messagesProps.y_second - legendProps.y_offset)
    .attr("class", styles.messages)
    .text(`Habitantes: ${population}`);
};

const hideLegend = () => {
  d3.selectAll("rect").remove();
  d3.selectAll("text").remove();
};

export const createChart = (
  svgElement: SVGSVGElement,
  provincesPopulation: ProvincePopulation[]
) => {
  const colorScale = generateColorScale(provincesPopulation);

  const svg = d3
    .select("svg")
    .attr("width", svgDimensions.width)
    .attr("height", svgDimensions.height)
    .attr("style", `background-color: ${svgBackgroundColor}`);

  const aProjection = d3Composite
    .geoConicConformalSpain()
    .scale(mapProjectionProps.scale)
    .translate(mapProjectionProps.translation);

  const geoPath = d3.geoPath().projection(aProjection);
  const geojson = topojson.feature(spainjson, spainjson.objects.ESP_adm2);

  let province = "";
  let population = 0;
  svg
    .selectAll("path")
    .data(geojson["features"])
    .enter()
    .append("path")
    .attr("class", styles.province)
    .attr("d", geoPath as any)
    .style("fill", (d) => getColor(d, provincesPopulation, colorScale))
    .on("mousemove", function () {
      hideLegend();
      displayLegend(
        svg,
        d3.mouse(this)[0],
        d3.mouse(this)[1],
        province,
        population
      );
    })
    .on("mouseover", function (d, i) {
      d3.select(this).attr("class", styles["selected-province"]);
      province = (d as any).properties.NAME_2;
      population = getProvincePopulation(
        (d as any).properties.NAME_2,
        provincesPopulation
      );
    })
    .on("mouseout", function (d, i) {
      d3.select(this).attr("class", styles.province);
      hideLegend();
    });
};
