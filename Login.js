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

export default function Login() {
  const paperStyle = {
    padding: 20,
    height: "87vh",
    width: 380,
    margin: "0 auto",
  };
  return (
    <>
      <NavigationBar />
      <CssBaseline />
      <Container component="main">
        <Paper variant="outlined" style={paperStyle}>
          <Grid item xs={12} sx={{ mb: 6 }}>
            <Typography
              component="h6"
              variant="h5"
              fontWeight="bold"
              sx={{ pb: 1.5 }}
              align="center"
            >
              Log In
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
                  id="password"
                  name="password"
                  label="Password"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ pb: 2 }}>Forgot Password?</Typography>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center", padding: "5px" }}>
                <Button variant="contained" size="large">
                  LOG IN
                </Button>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Typography sx={{ py: 2 }}>Don’t have an account?</Typography>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Card>
                  <CardActions>
                    <Link href="/registration" sx={{ textDecoration: "none" }}>
                      <Button
                        align="center"
                        sx={{
                          px: 2.2,
                          color: "#000000",
                          fontWeight: "bold",
                        }}
                      >
                        REGISTER
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
