import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./AdminDashboardMoter.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function AdminDashboardMoter() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 200, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 100, pv: 2400, amt: 2400 },
    { name: "Page D", uv: 300, pv: 2400, amt: 2400 },
    { name: "Page E", uv: 600, pv: 2400, amt: 2400 },
  ];

  const item = {
    height: "90vh",
    backgroundColor: "black",
  };

  const item2 = {
    height: "200vh",
    backgroundColor: "white",
    border: "1px solid #A8A8A8",
  };

  const item1 = {
    width: "190vh",
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
                Logged In as
                <span style={{ fontWeight: "bold", color: "#000000" }}>
                  Admin
                </span>
                <i class="fas fa-regular fa-power-off"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Box sx={{ backgroundColor: "rgb(197, 197, 197)" }}>
        <Grid container direction="row" spacing={2}>
          {/* start customer logs */}
          <Grid item xs={2} sm={1} md={1.8}>
            <Paper style={item} sx={{ pt: 10 }}>
              <Box
                direction="column"
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
          {/* end customer logs */}

          <Grid item xs={6} md={10.2}>
            {/* start Back to customer dashboard */}
            <Grid container direction="row">
              <Grid direction="column" item xs={6} md={10}>
                <Typography sx={{ px: 2, py: 2 }}>
                  <i
                    style={{ paddingRight: "12px" }}
                    class="fa-solid fa-arrow-left"
                  ></i>
                  Back to customer dashboard
                </Typography>
              </Grid>

              <Grid direction="column" item xs={6} md={2} sx={{ py: 0.5 }}>
                <Button
                  sx={{
                    backgroundColor: "#000000",
                    color: "white",
                    py: 1.5,
                    px: 3,
                  }}
                >
                  Stop Motor
                </Button>
              </Grid>
            </Grid>
            {/* end Back to customer dashboard */}

            <Box border="1px solid #A8A8A8" borderRadius="6px">
              <Paper style={item2}>
                {/* start Fluck  */}

                <Grid
                  container
                  direction="row"
                  sx={{ backgroundColor: "white" }}
                >
                  <Paper style={item1}>
                    <Grid container direction="row" sx={{ py: 0.5 }}>
                      <Grid direction="column" item xs={6} md={10}>
                        <Typography
                          sx={{
                            px: 2,
                            py: 1,
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                        >
                          Fluck
                        </Typography>
                      </Grid>

                      <Grid
                        direction="column"
                        item
                        xs={6}
                        md={2}
                        sx={{ py: 0.2 }}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#000000",
                            color: "white",
                            py: 1.8,
                            px: 5.5,
                          }}
                        >
                          export
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>

                {/* end Fluck  */}

                <br />
                <br />

                {/* start Personal Details  Status */}

                <Grid container direction="row" spacing={1} sx={{ py: 0.5 }}>
                  <Grid direction="column" item xs={2.5} md={5}>
                    <Typography
                      sx={{
                        px: 2,
                        py: 1,
                        fontSize: "20px",
                      }}
                    >
                      Personal Details
                    </Typography>
                    <Box
                      sx={{
                        border: "2px solid rgb(165, 165, 165)",
                        backgroundColor: "rgb(197, 197, 197)",
                        height: "185px",
                        px: 2,
                        py: 2,
                      }}
                    >
                      <Grid display="flex">
                        <Grid direction="column" item xs={6} md={2}>
                          <h6>Name </h6>
                          <Typography>Fluck</Typography>
                        </Grid>
                        <Grid direction="column" item xs={6} md={4}>
                          <h6>Phone No </h6>
                          <Typography>+91-9717440995 </Typography>
                        </Grid>
                        <Grid direction="column" item xs={6} md={6}>
                          <h6>Email Id </h6>
                          <Typography>Fluck23@techwamotor.com</Typography>
                        </Grid>
                      </Grid>
                      <Grid display="flex" sx={{ pt: 3 }}>
                        <Grid direction="column" item xs={6} md={2}>
                          <h6>Name </h6>
                          <Typography>Fluck</Typography>
                        </Grid>
                        <Grid direction="column" item xs={6} md={4}>
                          <h6>Phone No </h6>
                          <Typography>+91-9717440995 </Typography>
                        </Grid>
                        <Grid direction="column" item xs={6} md={6}>
                          <h6>Email Id </h6>
                          <Typography>Fluck23@techwamotor.com</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  {/* end Personal Details */}

                  {/* start Purchase Details */}
                  <Grid direction="column" item xs={1.5} md={3}>
                    <Typography
                      sx={{
                        px: 2,
                        py: 1,
                        fontSize: "20px",
                      }}
                    >
                      Purchase Details
                    </Typography>
                    <Box
                      sx={{
                        border: "2px solid rgb(165, 165, 165)",
                        backgroundColor: "rgb(197, 197, 197)",
                        height: "185px",
                        px: 1,
                      }}
                    >
                      <Grid display="flex" sx={{ pt: 2 }}>
                        <Grid direction="column" item xs={6} md={4.5}>
                          <h6>Motor-id </h6>
                          <Typography>3210ABED</Typography>
                        </Grid>
                        <Grid direction="column" item xs={6} md={7.5}>
                          <h6>Purchased On </h6>
                          <Typography>1 April 2022, 03:00 PM </Typography>
                        </Grid>
                      </Grid>

                      <Grid display="flex" sx={{ pt: 2 }}>
                        <Grid direction="column" item xs={6} md={4.5}>
                          <h6></h6>
                          <Typography></Typography>
                        </Grid>
                        <Grid direction="column" item xs={6} md={7.5}>
                          <h6>Started On </h6>
                          <Typography>1 April 2022, 03:00 PM </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  {/* end Purchase Details */}

                  <Grid direction="column" item xs={2} md={4}>
                    <Typography
                      sx={{
                        px: 2,
                        py: 1,
                        fontSize: "20px",
                      }}
                    >
                      Status
                    </Typography>
                    <Box
                      sx={{
                        border: "2px solid rgb(165, 165, 165)",
                        backgroundColor: "rgb(197, 197, 197)",
                        height: "185px",
                        px: 2,
                        py: 2,
                      }}
                    >
                      <Grid display="flex" sx={{ pt: 0.2 }}>
                        <Grid direction="column" item xs={6} md={6}>
                          <h6>Current Status</h6>
                          <Typography>Running</Typography>
                        </Grid>
                        <Grid direction="column" item xs={6} md={6}>
                          <h6></h6>
                          <Typography></Typography>
                        </Grid>
                      </Grid>
                      <Grid display="flex" sx={{ pt: 2 }}>
                        <Grid direction="column" item xs={6} md={6}>
                          <h6>Last Switched On: </h6>
                          <Typography>3 April 2022, 03:00 PM</Typography>
                        </Grid>
                        <Grid direction="column" item xs={6} md={6}>
                          <h6>Last Switched Off: </h6>
                          <Typography>3 April 2022, 06:00 PM </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
                {/* end Personal Details Purchase Details Status */}
                <hr />

                <Grid container direction="row">
                  <Grid direction="column" item xs={6} md={9} sx={{ pt: 2 }}>
                    <Typography
                      sx={{
                        px: 1,
                        fontSize: "20px",
                      }}
                    >
                      MOTOR REPORT
                    </Typography>
                  </Grid>

                  <Grid direction="column" item xs={6} md={2} sx={{ pb: 2 }}>
                    <Box sx={{ minWidth: 80 }}>
                      <FormControl fullWidth>
                        <InputLabel
                          id="demo-simple-select-label"
                          sx={{ color: "black" }}
                        >
                          4 APRIL 2022
                        </InputLabel>
                        <Select
                          sx={{ border: "1.5px solid black" }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  direction="column"
                  item
                  xs={6}
                  md={11}
                  sx={{ border: "1.5px solid black", height: "70vh" }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      py: 4,
                      backgroundColor: "white",
                    }}
                  >
                    <Box sx={{ backgroundColor: "", py: 2 }}>
                      TOTAL TIME MOTOR RUN : 06 Hrs
                    </Box>
                    
                      <ResponsiveContainer
                        id="grphc"
                        width={"90%"}
                        height={300}
                      >
                        <BarChart data={data}>
                          <XAxis dataKey="name" stroke="#8884d8" />
                          <YAxis />
                          <Tooltip
                            wrapperStyle={{
                              width: 100,
                              backgroundColor: "#ccc",
                            }}
                          />
                          <Legend
                            width={100}
                            wrapperStyle={{
                              top: 40,
                              right: 20,
                              backgroundColor: "#f5f5f5",
                              border: "1px solid #d5d5d5",
                              borderRadius: 3,
                              lineHeight: "40px",
                            }}
                          />
                          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                          <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                        </BarChart>
                      </ResponsiveContainer>
                    
                  </Box>
                </Grid>

                <Grid container direction="row">
                  <Typography
                    sx={{
                      py: 2,
                      px: 1,
                      fontSize: "20px",
                    }}
                  >
                    Comment
                  </Typography>
                </Grid>
                <Grid
                  direction="column"
                  item
                  xs={6}
                  md={6}
                  sx={{
                    border: "1.5px solid black",
                    borderRadius: "8px",
                    height: "15vh",
                  }}
                ></Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
