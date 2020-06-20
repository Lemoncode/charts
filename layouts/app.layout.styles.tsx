import { createMuiTheme, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2A272A",
    },
    secondary: {
      main: "#C4C4C4",
    },
    info: {
      main: "#ED5E93",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#F1F1F1",
    },
    text: {
      primary: "#2A272A",
      secondary: "#C4C4C4",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    fontSize: 16,
    h1: {
      fontSize: "2rem",
    },
  },
});

const defaultStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      margin: 0,
      padding: 0,
      width: `100vw`,
      maxWidth: `100%`,
      minHeight: `100vh`,
      display: "grid",
      gridTemplateColumns: "100%",
      gridTemplateRows: "auto 1fr auto",
      gridTemplateAreas: `'header' 'main' 'footer'`,
    }
  })
);

export default theme;
export {theme, defaultStyle};