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
  const res = provincesPopulation.find((p) => p.provinceName === province);
  if (res) return res.population;
  return 0;
};

const getColor = (
  d: any,
  provincesPopulation: ProvincePopulation[],
  colorScale: d3.ScaleSequential<string>
) => {
  const province = d.properties.NAME_2;
  const res = provincesPopulation.find((p) => p.provinceName === province);
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

  svg
    .selectAll("path")
    .data(geojson["features"])
    .enter()
    .append("path")
    .attr("class", styles.province)
    .attr("d", geoPath as any)
    .style("fill", (d) => getColor(d, provincesPopulation, colorScale))
    .on("mouseover", function (d, i) {
      d3.select(this).attr("class", styles["selected-province"]);
      svg
        .append("text")
        .attr("x", messagesProps.x)
        .attr("y", messagesProps.y_first)
        .attr("class", styles.messages)
        .text(`Provincia: ${(d as any).properties.NAME_2}`);

      svg
        .append("text")
        .attr("x", messagesProps.x)
        .attr("y", messagesProps.y_second)
        .attr("class", styles.messages)
        .text(
          `Población: ${getProvincePopulation(
            (d as any).properties.NAME_2,
            provincesPopulation
          )}`
        );
    })
    .on("mouseout", function (d, i) {
      d3.select(this).attr("class", styles.province);
      d3.select("svg text").remove();
      d3.select("svg text").remove();
    });

  svg
    .append("rect")
    .attr("rx", rectangleProps.rx)
    .attr("ry", rectangleProps.ry)
    .attr("x", rectangleProps.x)
    .attr("y", rectangleProps.y)
    .attr("width", rectangleProps.width)
    .attr("height", rectangleProps.height)
    .attr("class", styles["messages-rectangle"]);
};
