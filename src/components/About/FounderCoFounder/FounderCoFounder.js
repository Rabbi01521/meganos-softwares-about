import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, useTheme } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import founderAndCoFounder from "../../../images/founder coFounder.png";

const FounderCoFounder = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    position: {
      [theme.breakpoints.up("md")]: {
        marginLeft: "-225px!important",
        marginTop: "-170px!important",
      },
    },
    main: {
      position: "relative",
    },

    icons: {
      position: "fixed",
      top: "60%",
      left: "-39px",
      transform: "translateY(-80%)",
      zIndex: "1000",
      backgroundColor: "white",
      padding: "0 10px",
    },
    frame: {
      position: "fixed",
      height: "100px",
      width: "48px",
      top: "40%",
      right: "0px",
      transform: "translateY(-20%)",
      zIndex: "1000",
      backgroundColor: "white",
      writingMode: "vertical-rl",
    },
    frame2: {
      position: "fixed",
      height: "222px",
      width: "48px",
      top: "26%",
      right: "0px",
      transform: "translateY(90%)",
      zIndex: "1000",
      writingMode: "vertical-rl",
      backgroundColor: "#DFFF61",
    },
  });
  const { position, icons, main, frame, frame2 } = useStyle();
  return (
    <div className={main}>
      <Grid
        container
        alignItems="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} md={8}>
          <Box sx={{ aspectRatio: "1.5" }}>
            <img
              src={founderAndCoFounder}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
            <Container>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6} md={6}>
                  <Box>
                    <Typography variant="h6">
                      Mark Mastrov <br /> Investor, Board of Director
                    </Typography>
                    <Typography variant="body2">
                      Mark Mastrov is an American businessman who was born in
                      Oakland, CA. In addition to serving on the board and
                      investing in Frame, he is the founder and former CEO of
                      24-Hour Fitness as well as many other fitness ventures
                      worldwide. Mastrov is also a member of the Sacramento
                      Kings ownership group.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Box>
                    <Typography variant="h6">
                      Michael Bruno <br /> Investor
                    </Typography>
                    <Typography variant="body2">
                      Michael Bruno is the owner and CEO of Core Health and
                      Fitness. Core Health & Fitness is the world’s largest
                      privately-held marketer and distributor of commercial
                      fitness solutions to health clubs, community recreational
                      centers, hotels, government, educational facilities and
                      more.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ aspectRatio: "1.5" }}>
            <Paper sx={{ p: 5, width: 1 }} className={position}>
              <Box>
                <Typography variant="h4">
                  Melissa Bentivoglio <br /> CEO & Co-Founder
                </Typography>
                <Typography variant="body1">
                  Melissa Bentivoglio is a classically trained ballet dancer and
                  a renowned pilates and fitness instructor. Melissa credits her
                  dedication to pilates as having changed her life after years
                  of elite level performance. In 2018, she designed her own
                  proprietary reformer for use in her own studio. By launching
                  Frame, she hopes to make pilates more widely available and
                  accessible, so that everyone has a chance to improve their
                  quality of life.
                </Typography>
              </Box>
              <Box>
                <Typography variant="h4">
                  Lee Belzberg <br /> Co-Founder
                </Typography>
                <Typography varinat="body1">
                  Following in the footsteps of his family, Lee Belzberg
                  continues the Belzberg legacy with Frame. He seeks to combine
                  his deep expertise of wealth management, real-estate banking,
                  and private equity with his passion for health and wellness.
                  Lee is excited to venture into new frontiers and take his
                  strategic vision and entrepreneurial spirit to the
                  digital-fitness startup space.
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      {/* sticky Social icon */}
      <div className={icons}>
        <ul>
          <li style={{ listStyle: "none", marginTop: "5px" }}>
            <Link style={{ color: "black" }} to="/">
              <FacebookIcon />
            </Link>
          </li>
          <li style={{ listStyle: "none", marginTop: "5px" }}>
            <Link style={{ color: "black" }} to="/">
              <TwitterIcon />
            </Link>
          </li>
          <li style={{ listStyle: "none", marginTop: "5px" }}>
            <Link style={{ color: "black" }} to="/">
              <InstagramIcon />
            </Link>
          </li>
        </ul>
      </div>
      {/* Frame sticky */}
      <div className={frame}>
        <ul>
          <li style={{ listStyle: "none", marginTop: "-6px" }}>
            <Typography sx={{ marginTop: "5px" }}>FRAME</Typography>
          </li>
        </ul>
      </div>
      {/* Frame sticky */}
      <div className={frame2}>
        <ul>
          <li style={{ listStyle: "none", marginTop: "5px" }}>
            <Typography>MADE FOR MOTION</Typography>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FounderCoFounder;
