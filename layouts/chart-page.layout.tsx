import * as React from "react";
import Link from "next/link";
import { makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import { ChartInfoVm } from "core";
import { AppLayout, HeaderLayout, FooterLayout, MainChartPageLayout } from ".";
import { HeaderComponent, FooterComponent } from "components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "0 auto",
      padding: 0,
      display: "grid",
      gridTemplateRows: "fit-content() auto",
      gridTemplateColumns: "fit-content() 2rem fit-content() min-content()",
      gridTemplateAreas: `
      "chart chartInfo"
      "source source"
      "description description"
      "tags tags"
      `,
      gridColumnGap: "0px",
      gridRowGap: "0px",
    },
    chartSection: {
      gridArea: "chart",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: "#FBFAF0",
    },
    chartInfoSection: {
      gridArea: "chartInfo",
      padding: "0.5rem 0.5rem 0 2rem",
    },
    chartInfoTitle: {},
    sourceSection: {
      gridArea: "source",
      padding: "0.5rem",
    },
    sourceLink: {
      marginLeft: "0.5rem",
    },
    descriptionSection: {
      gridArea: "description",
      padding: "1rem",
    },
    descriptionTitle: {
      marginBottom: "0.5rem",
    },
    descriptionParagraph: {
      padding: "1rem 0.5rem",
    },
    tagsSection: {
      gridArea: "tags",
      padding: "1rem",
    },
    tagList: {
      listStyleType: "none",
      margin: 0,
      padding: 0,
    },
    tagElement: {},
    linkBackMain: {
      margin: "1rem",
      padding: "0.5rem",
      alignSelf: "center",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
      textDecoration: "none",
      borderRadius: "5px",
    },
  })
);

interface Props {
  chart: ChartInfoVm;
  children: any;
}

export const ChartPageLayout: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  const { chart } = props;

  return (
    <AppLayout>
      <HeaderLayout>
        <HeaderComponent title={chart.title} />
      </HeaderLayout>
      <MainChartPageLayout>
        <div className={classes.root}>
          <section className={classes.chartSection}>{props.children}</section>
          <section className={classes.chartInfoSection}>
            {/* TODO: Add Markdown support for chart info */}
            <Typography variant="h6" component="h1">
              Título
            </Typography>
            <Typography variant="subtitle1" component="p">
              Datos sobre la gráfica
            </Typography>
          </section>
          <section className={classes.sourceSection}>
            <Typography variant="subtitle2" component="h1">
              Fuente:
              <a href={chart.sourceUrl} className={classes.sourceLink}>
                {chart.sourceDescription}
              </a>
            </Typography>
          </section>
          <section className={classes.descriptionSection}>
            <Typography
              variant="h4"
              component="h1"
              className={classes.descriptionTitle}
            >
              Descripción
            </Typography>
            {/* TODO: Add Markdown support for description */}
            <Typography
              variant="body1"
              component="p"
              className={classes.descriptionParagraph}
            >
              {chart.longDescription}
            </Typography>
          </section>
          <section className={classes.tagsSection}>
            <ul className={classes.tagList}>
              <li className={classes.tagElement}>#ejemplo</li>
              {/* TODO: When clicked a tag, it will redirect to a page
            which contains a list of charts with the same tag */}
              {chart.tags.map((tag: string) => {
                <li className={classes.tagElement}>#{tag}</li>;
              })}
            </ul>
          </section>
        </div>
        <Link href="/index">
          <a className={classes.linkBackMain}>Volver a página principal</a>
        </Link>
      </MainChartPageLayout>
      <FooterLayout>
        <FooterComponent />
      </FooterLayout>
    </AppLayout>
  );
};