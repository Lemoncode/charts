import Link from "next/link";

export default function Index() {
  return (
    <div>
      <p>Página principal gráficas</p>
      <Link href="/spain-covid-chart">
        <a>Covid España Marzo 2020</a>
      </Link>
    </div>
  );
}
