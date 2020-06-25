import { geoPath } from "d3-geo";
import { scaleLinear } from "d3-scale";
import { select, selectAll } from "d3-selection";
import "d3-transition";
import styles from "./map.module.css";

import * as topojson from "topojson-client";
const spainjson = require("./spain.json");
const d3Composite = require("d3-composite-projections");
import { latLongCommunities } from "./communities";
import { stats } from "./stats";
import {
  svgDimensions,
  maxRelativeRadius,
  mapProjectionProps,
  minRadius,
  svgBackgroundColor,
} from "./espana-covid-marzo.config";

const getMaxAffected = () => {
  return stats.reduce((max, item) => (item.value > max ? item.value : max), 0);
};

const getAffectedRadiusScale = () => {
  return scaleLinear()
    .domain([0, getMaxAffected()])
    .range([0, svgDimensions.height / maxRelativeRadius]);
};

const calculateRadiusBasedOnAffectedCases = (
  comunidad: string,
  affectedRadiusScale: any
) => {
  const entry = stats.find((item) => item.name === comunidad);
  if (entry) {
    return affectedRadiusScale(entry.value) > minRadius
      ? affectedRadiusScale(entry.value)
      : minRadius;
  }
  return 0;
};

const getMapProjection = () => {
  return d3Composite
    .geoConicConformalSpain()
    .scale(mapProjectionProps.scale)
    .translate(mapProjectionProps.translation);
};

const setUpMap = () => {
  return select("svg")
    .attr("width", svgDimensions.width)
    .attr("height", svgDimensions.height)
    .attr("style", `background-color: ${svgBackgroundColor}`);
};

const drawPaths = (map, geojson, geoPathProjection) => {
  map
    .selectAll("path")
    .data(geojson["features"])
    .enter()
    .append("path")
    .attr("class", styles.country)
    .attr("d", geoPathProjection as any);
};

const drawCircles = (map, affectedRadiusScale, mapProjection) => {
  map
    .selectAll("circle")
    .data(latLongCommunities)
    .enter()
    .append("circle")
    .attr("class", styles["affected-marker"])
    .attr("r", (d) => 0)
    .attr("cx", (d) => mapProjection([d.long, d.lat])[0])
    .attr("cy", (d) => mapProjection([d.long, d.lat])[1])
    .transition()
    .attr("r", (d) =>
      calculateRadiusBasedOnAffectedCases(d.name, affectedRadiusScale)
    )
    .duration(2000);
};

export const createChart = (svg: SVGSVGElement) => {
  const affectedRadiusScale = getAffectedRadiusScale();
  const mapProjection = getMapProjection();

  //Set up the projection we are going to use
  const geoPathProjection = geoPath().projection(mapProjection);

  //Obtain the geojson data from our hardcoded topojson
  const geojson = topojson.feature(spainjson, spainjson.objects.ESP_adm1);

  //Set up the svg
  const map = setUpMap();

  //Draw the paths
  drawPaths(map, geojson, geoPathProjection);

  //Draw the circles
  drawCircles(map, affectedRadiusScale, mapProjection);
};
