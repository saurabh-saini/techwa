import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Stack } from "react-bootstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import usePagination from "@mui/material/usePagination";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./AdminDashboardHome.css";

export default function AdminDashboard() {
  const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const List = styled("ul")({
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  });

  const { items } = usePagination({
    count: 10,
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
  ];

  const rows = [
    createData(
      "1",
      "Fluck +91-9717440995 Daryaganj, Delhi-6, Gali no 59 ",
      "3210ABED",
      "Purchased On: 1 April 2022, 03:00 PM Started On: 1 April 2022, 07:5 PM",
      "Last Switched On:3 April 2022, 03:00 PM Switched Off: 3 April 2022, 06:00 PM",
      "2 Months left",
      "Switched On",
      "See more"
    ),
  ];

  function createData(
    SNO,
    Name,
    MoterId,
    Setup,
    RunTime,
    Warranty,
    Status,
    seemore
  ) {
    return { SNO, Name, MoterId, Setup, RunTime, Warranty, Status, seemore };
  }

  const item = {
    height: "90vh",
    backgroundColor: "black",

  };

  const item2 = {
    height: "90vh",
    backgroundColor: "#F4F4F4",
  };

  const item1 = {
    width: "190vh",
    height: "9vh",
    backgroundColor: "#F4F4F4",
    border: "1px solid #878787",
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container style={{ margin: "0", padding: "0" }}>
          <Navbar.Brand href="/" className="moter">
            TECHWAMOTOR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="justify-content-center">
              <Nav.Link href="/">
                Logged In as{" "}
                <span style={{ fontWeight: "bold", color: "#000000" }}>
                  Admin
                </span>
                <i class="fas fa-regular fa-power-off"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Box sx={{ backgroundColor: "#F4F4F4" }}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={6} md={1.8}>
            <Paper style={item} sx={{ pt: 10 }}>
              <Box
                sx={{
                  backgroundColor: "white",
                  color: "#000000",
                  px: 3,
                  py: 2,
                }}
              >
                Customer Logs
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={6} md={10.2}>
            <Grid container direction="row" sx={{ py: 1 }}>
              <Grid direction="column" item xs={6} md={2}>
                <Button
                  sx={{ backgroundColor: "#000000", color: "white", px: 4 }}
                >
                  Customers
                </Button>
              </Grid>
              <Grid direction="column" item xs={6} md={2} sx={{ py: 0.5 }}>
                <Button
                  sx={{
                    color: "#000000",
                    border: "1px solid #000000",
                    px: 4,
                  }}
                >
                  Lorem Ipsum
                </Button>
              </Grid>
            </Grid>

            <Box border="1px solid #A8A8A8" borderRadius="6px">
              <Paper style={item2}>
                <Grid container direction="row" sx={{backgroundColor:"white"}}>
                  <Grid direction="column" item xs={6} md={1}>
                    <Typography sx={{ px: 2, py: 2.5 }}>Search:</Typography>
                  </Grid>

                  <Grid direction="column" item xs={6} md={3} sx={{ py: 0.5 }}>
                    <Stack sx={{ width: 400 }}>
                      <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={top100Films.map((option) => option.title)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Search by Phone No, Name, Moter-id"
                            InputProps={{
                              ...params.InputProps,
                              type: "search",
                            }}
                          />
                        )}
                      />
                    </Stack>
                  </Grid>

                  <Grid direction="column" item xs={6} md={5.6}></Grid>

                  <Grid
                    direction="column"
                    item
                    xs={6}
                    md={1.2}
                    sx={{ py: 0.8 }}
                  >
                    <Button
                      sx={{
                        backgroundColor: "#000000",
                        color: "white",
                        py: 1.8,
                      }}
                    >
                      <i class="fa-solid fa-file-export"></i> Export
                    </Button>
                  </Grid>
                  <Grid
                    direction="column"
                    item
                    xs={6}
                    md={1.2}
                    sx={{ py: 0.8 }}
                  >
                    <Button
                      sx={{
                        color: "#000000",
                        border: "1px solid #000000",
                        py: 1.5,
                      }}
                    >
                      <i class="fa-thin fa-sliders-up"></i> Filter
                    </Button>
                  </Grid>
                </Grid>

                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={item1}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }} align="left">
                          S.NO
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="left">
                          Name
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="left">
                          Moter-Id
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="left">
                          Setup
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="left">
                          RunTime
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="left">
                          Warranty
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="left">
                          Status
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.SNO}
                          </TableCell>
                          <TableCell align="left">{row.Name}</TableCell>
                          <TableCell align="left">{row.MoterId}</TableCell>
                          <TableCell align="left">{row.Setup}</TableCell>
                          <TableCell align="left">{row.RunTime}</TableCell>
                          <TableCell align="left">{row.Warranty}</TableCell>
                          <TableCell align="left">{row.Status}</TableCell>
                          <TableCell align="left">{row.seemore}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Grid container direction="row" sx={{ mt: 27 }}>
                  <Grid direction="column" item xs={6} md={2}>
                    {/* <TablePagination
                  component="div"
                  count={100}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                /> */}
                  </Grid>
                  <Grid direction="column" item xs={6} md={5.6}></Grid>

                  <Grid
                    direction="column"
                    item
                    xs={6}
                    md={1.2}
                    sx={{ py: 0.8 }}
                  ></Grid>
                  <Grid
                    direction="column"
                    item
                    xs={6}
                    md={1.2}
                    sx={{ py: 0.8 }}
                  >
                    <nav>
                      <List>
                        {items.map(
                          ({ page, type, selected, ...item }, index) => {
                            let children = null;

                            if (
                              type === "start-ellipsis" ||
                              type === "end-ellipsis"
                            ) {
                              children = "…";
                            } else if (type === "page") {
                              children = (
                                <button
                                  type="button"
                                  style={{
                                    fontWeight: selected ? "bold" : undefined,
                                  }}
                                  {...item}
                                >
                                  {page}
                                </button>
                              );
                            } else {
                              children = (
                                <button type="button" {...item}>
                                  {type}
                                </button>
                              );
                            }

                            return <li key={index}>{children}</li>;
                          }
                        )}
                      </List>
                    </nav>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
