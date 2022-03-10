import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  // "&:nth-of-type(1)": {
  //   width: "fit-content",
  // },
  [`&.${tableCellClasses.body}`]:
    theme === "dark"
      ? {
          color: "white",
          padding: 5,
        }
      : {
          color: "black",
          padding: 5,
        },
  [`&.${tableCellClasses.head}`]:
    theme === "dark"
      ? {
          color: "white",
          border: 0,
        }
      : {
          color: "black",
          border: 0,
        },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)":
    theme === "dark"
      ? {
          backgroundColor: "#1F1F1F",
        }
      : { backgroundColor: "#FFFFFF" },
  "&:nth-of-type(even)":
    theme === "dark"
      ? {
          backgroundColor: "#010023",
        }
      : { backgroundColor: "#F3F3F3" },
  // "& th": {
  //   backgroundColor: "#010023",
  // },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "& td, & th": {
    border: 0,
  },
}));

const headerColumn = [
  { id: "trans-number", label: "#", Width: 10 },
  { id: "coin-name", label: "Name", minWidth: 10 },
  {
    id: "date-purchase",
    label: "Date Purchase",
    minWidth: 10,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "coin-quantity",
    label: "Amount",
    minWidth: 10,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "coin-price",
    label: "Price",
    minWidth: 0,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "trans-charge",
    label: "Charge",
    minWidth: 0,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "total-price",
    label: "Total",
    minWidth: 0,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  transactionNumber,
  coinName,
  datePurchase,
  coinQuantity,
  coinPrice,
  transactionCharge,
  totalPrice
) {
  return {
    transactionNumber,
    coinName,
    datePurchase,
    coinQuantity,
    coinPrice,
    transactionCharge,
    totalPrice,
  };
}

const rows = [
  createData(1, 159, 6.0, 24, 4.0, 2, 2),
  createData(2, 237, 9.0, 37, 4.3, 2, 2),
  createData(3, 262, 16.0, 24, 6.0, 2, 2),
  createData(4, 305, 3.7, 67, 4.3, 2, 2),
  createData(5, 356, 16.0, 49, 3.9, 2, 2),
  createData(6, 159, 6.0, 24, 4.0, 2, 2),
  createData(7, 237, 9.0, 37, 4.3, 2, 2),
  createData(8, 262, 16.0, 24, 6.0, 2, 2),
  createData(9, 305, 3.7, 67, 4.3, 2, 2),
  createData(10, 356, 16.0, 49, 3.9, 2, 2),
];

export default function CustomizedTables(props) {
  const { theme, setTheme } = props;

  // const [theme, setTheme] = React.useState("dark");

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 1,
          scrollbarWidth: "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome */,
          },
          "@media (max-width: 768px)": {
            maxHeight: "150px",
          },
        }}
      >
        <Table
          stickyHeader
          sx={{
            width: "100%",
            "& .MuiTableCell-root": {
              fontSize: 12,
              border: 0,
            },
            "@media (max-width: 410px)": {
              "& .MuiTableCell-root": {
                fontSize: 10,
                p: 0.3,
              },
            },
          }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              {headerColumn.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={
                    theme === "dark"
                      ? {
                          backgroundColor: "#010023",
                          color: "white",
                          fontWeight: "bold",
                          padding: 0.5,
                          pl: 1.5,
                          // width: 0,
                        }
                      : {
                          backgroundColor: "#F3F3F3",
                          color: "black",
                          fontWeight: "bold",
                          padding: 0.5,
                          pl: 1.5,
                          // width: 0,
                        }
                  }
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name} theme={theme} setTheme={setTheme}>
                <StyledTableCell
                  className="table-cell"
                  align="left"
                  theme={theme}
                  setTheme={setTheme}
                >
                  {row.transactionNumber}
                </StyledTableCell>
                <StyledTableCell
                  className="table-cell"
                  align="left"
                  theme={theme}
                  setTheme={setTheme}
                >
                  {row.coinName}
                </StyledTableCell>
                <StyledTableCell
                  className="table-cell"
                  sx={{ width: "fit-content" }}
                  align="left"
                  theme={theme}
                  setTheme={setTheme}
                >
                  {row.datePurchase}
                </StyledTableCell>
                <StyledTableCell
                  className="table-cell"
                  align="left"
                  theme={theme}
                  setTheme={setTheme}
                >
                  {row.coinQuantity}
                </StyledTableCell>
                <StyledTableCell
                  className="table-cell"
                  align="left"
                  theme={theme}
                  setTheme={setTheme}
                >
                  {row.coinPrice}
                </StyledTableCell>
                <StyledTableCell
                  className="table-cell"
                  align="left"
                  theme={theme}
                  setTheme={setTheme}
                >
                  {row.transactionCharge}
                </StyledTableCell>
                <StyledTableCell
                  className="table-cell"
                  align="left"
                  theme={theme}
                  setTheme={setTheme}
                >
                  {row.totalPrice}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
