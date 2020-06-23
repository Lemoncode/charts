import * as d3 from "d3";
import * as topojson from "topojson-client";
const spainjson = require("./spain-province.json");
const d3Composite = require("d3-composite-projections");
import { ProvincePopulation } from "./spain-population-chart.vm";
import {
  svgDimensions,
  svgBackgroundColor,
  mapProjectionProps,
  provinceStyle,
  selectedProvinceStyle,
  messagesStyle,
  rectangleProps
} from "./spain-population-chart.config";

const maxPopulation = (provincesPopulation: ProvincePopulation[]): number => {
  return provincesPopulation.reduce(
    (max, item) => (item.population > max ? item.population : max),
    0
  );
}

const getProvincePopulation = (province: string, provincesPopulation: ProvincePopulation[]): number => {
  const res = provincesPopulation.find((p) => p.provinceName === province);
  if(res) return res.population;
  return 0;
}

const getColor = (d: any, provincesPopulation: ProvincePopulation[], colorScale: d3.ScaleSequential<string>) => {
  const province = d.properties.NAME_2;
  const res = provincesPopulation.find((p) => p.provinceName === province);
  if(!res) {console.log(d.properties.NAME_2); return "#ffffff";}
  return colorScale(res.population);
};

const generateColorScale = (provincesPopulation: ProvincePopulation[]) => {
  return d3.scaleSequential(d3.interpolateReds)
    .domain([0, maxPopulation(provincesPopulation)]);
};

export const createChart = (svgElement: SVGSVGElement, provincesPopulation: ProvincePopulation[]) => {
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
    .attr("stroke", provinceStyle.stroke)
    .attr("stroke-width", provinceStyle.strokeWidth)
    .attr("fill", provinceStyle.fill)
    .attr("d", geoPath as any)
    .style("fill", d => getColor(d, provincesPopulation, colorScale))
    .on("mouseover", function(d, i) {
      d3.select(this).attr("stroke", selectedProvinceStyle.stroke);
      d3.select(this).attr("stroke-width", selectedProvinceStyle.strokeWidth);
      d3.select(this).attr("fill", selectedProvinceStyle.fill);
      svg
        .append("text")
        .attr("x", messagesStyle.x)
        .attr("y", messagesStyle.y_first)
        .attr("font-size", messagesStyle.fontSize)
        .attr("font-weight", messagesStyle.fontWeight)
        .text(`Province: ${(d as any).properties.NAME_2}`);
        
      svg
        .append("text")
        .attr("x", messagesStyle.x)
        .attr("y", messagesStyle.y_second)
        .attr("font-size", messagesStyle.fontSize)
        .attr("font-weight", messagesStyle.fontWeight)
        .text(`Population: ${getProvincePopulation((d as any).properties.NAME_2, provincesPopulation)}`);
    })
    .on("mouseout", function(d, i) {
      d3.select(this).attr("stroke", provinceStyle.stroke);
      d3.select(this).attr("stroke-width", provinceStyle.strokeWidth);
      d3.select(this).attr("fill", provinceStyle.fill);
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
    .attr("stroke", rectangleProps.stroke)
    .attr('fill', rectangleProps.fill);
}
