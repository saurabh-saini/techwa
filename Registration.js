import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Link } from "@mui/material";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

export default function Registration() {
  const paperStyle = {
    padding: 20,
    height: "122vh",
    width: 400,
    margin: "0 auto",
  };
  return (
    <>
      <NavigationBar />
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" style={paperStyle}>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Typography
              component="h6"
              variant="h5"
              fontWeight="bold"
              sx={{ pb: 1.5 }}
              align="center"
            >
              Create An Account
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
              Welcome to Techwamotors!
            </Typography>
          </Grid>
          <React.Fragment>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="Username"
                  name="Username"
                  label="Username"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="mailid"
                  name="mailid"
                  label="Mail Id"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="phonenumber"
                  name="phonenumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="password"
                  name="password"
                  label="Password"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center", padding: "5px" }}>
                <Button variant="contained" size="large">
                  REGISTER
                </Button>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Typography sx={{ py: 2 }}>Already a member?</Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Card>
                  <CardActions>
                    <Link href="/login" sx={{ textDecoration: "none" }}>
                      <Button
                        align="center"
                        sx={{
                          px: 4,
                          color: "#000000",
                          fontWeight: "bold",
                        }}
                      >
                        LOG IN
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
      </Container>
    </>
  );
}
