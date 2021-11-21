import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={4}>
            <Typography sx={{ color: "white", margin: "10px 0" }} variant="h5">
              Contact
            </Typography>
            <Typography sx={{ color: "white" }} variant="body1">
              info@framefitness.com
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "white", margin: "20px 0" }}
            >
              Frame Innovative Technologies Corp. <br /> 265 S. Western Avenue{" "}
              <br /> P.O. Box #741940 <br /> Los Angeles, CA 90004-9998
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ aspectRatio: "1.5" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img src={logo} alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{ color: "white", marginTop: "210px" }}
                variant="body2"
              >
                Terms and Conditions
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="body2"
                style={{
                  listStyle: "none",
                  marginTop: "5px",
                  display: "inline-block",
                  marginLeft: "10px",
                }}
              >
                <Link
                  style={{ color: "white", display: "inline-block" }}
                  to="/"
                >
                  <FacebookIcon />
                </Link>
              </Typography>
              <Typography
                variant="body2"
                style={{
                  listStyle: "none",
                  marginTop: "5px",
                  display: "inline-block",
                  marginLeft: "10px",
                }}
              >
                <Link
                  style={{ color: "white", display: "inline-block" }}
                  to="/"
                >
                  <TwitterIcon />
                </Link>
              </Typography>
              <Typography
                variant="body2"
                style={{
                  listStyle: "none",
                  marginTop: "5px",
                  display: "inline-block",
                  marginLeft: "10px",
                }}
              >
                <Link
                  style={{ color: "white", display: "inline-block" }}
                  to="/"
                >
                  <InstagramIcon />
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography variant="body2" sx={{ color: "white" }}>
                ©Copyright 2021 Frame is patent pending
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
