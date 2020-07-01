import * as React from "react";
import { ProvincePopulation } from "../spain-population-chart.vm";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      //minWidth: 325,
      maxHeight: 600,
    },
  })
);

interface Props {
  provincesPopulation: ProvincePopulation[];
}

export const TableComponent: React.FC<Props> = (props: Props) => {
  const { provincesPopulation } = props;
  const classes = useStyles(props);
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof ProvincePopulation>(
    "label"
  );

  const handleRequestSort = (property: keyof ProvincePopulation) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell
              key="province"
              sortDirection={orderBy === "province" ? order : false}
            >
              <TableSortLabel
                active={orderBy === "province"}
                direction={orderBy === "province" ? order : "asc"}
                onClick={($event) => handleRequestSort("label")}
              >
                Provincia
              </TableSortLabel>
            </TableCell>
            <TableCell
              key="population"
              align="right"
              sortDirection={orderBy === "population" ? order : false}
            >
              <TableSortLabel
                active={orderBy === "population"}
                direction={orderBy === "population" ? order : "asc"}
                onClick={($event) => handleRequestSort("population")}
              >
                Habitantes
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(provincesPopulation, getComparator(order, orderBy)).map(
            (province) => (
              <TableRow key={province.province}>
                <TableCell component="th" scope="row">
                  {province.province}
                </TableCell>
                <TableCell align="right">
                  {province.population.toLocaleString("es-ES")}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
