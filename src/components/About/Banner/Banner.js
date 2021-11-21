import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import React from "react";

const Banner = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    banner: {
      height: "70vh",
    },
    info: {
      height: "290px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    // mobileDevice: {
    //   [theme.breakpoints.down("md")]: {

    //   },
    // },
  });
  const { banner, info, mobileDevice } = useStyle();
  return (
    <>
      <Container>
        <Box className={banner}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                className={mobileDevice}
                sx={{ textAlign: "center", fontSize: "40px", fontWeight: 700 }}
                variant="h3"
              >
                Our Story
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className={info} variant="body1">
                Melissa Bentivoglio and Lee Belzberg have paired together their
                extensive backgrounds of elite fitness instruction and
                entrepreneurship to bring you Frame—a groundbreaking approach to
                pilates disrupting the traditional at-home fitness market.{" "}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Banner;
