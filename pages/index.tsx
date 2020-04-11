import Link from "next/link";

export default function Index() {
  return (
    <div>
      <p>Página principal gráficas</p>
      <Link href="/españa-covid-marzo">
        <a>Covid España Marzo 2020</a>
      </Link>
    </div>
  );
}
