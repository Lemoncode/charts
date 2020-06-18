import { MainChartListContainer } from "../pods/main-chart-list";
import { AppLayout, HeaderLayout, FooterLayout, MainLayout } from "../layouts";
import { FooterComponent, HeaderComponent } from "../components";

export default function Index() {
  return (
    <AppLayout>
      <HeaderLayout>
        <HeaderComponent title="Página principal gráficas" />
      </HeaderLayout>
      <MainLayout>
        <MainChartListContainer />
      </MainLayout>
      <FooterLayout>
        <FooterComponent />
      </FooterLayout>
    </AppLayout>
  );
}
