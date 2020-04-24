import * as React from "react";
import Link from "next/link";
import { EspanaCovidMarzoContainer } from "../pods/covid-spain-chart";

export default function SpainCovidChart() {
  return (
    <div>
      <p>Mapa de afectados por COVID en España por Comunidades en Marzo de 2020 </p>
      <div>
      <EspanaCovidMarzoContainer/>
      </div>
      <Link href="/index">
        <a>Volver a página principal</a>
      </Link>
    </div>
  );
}
