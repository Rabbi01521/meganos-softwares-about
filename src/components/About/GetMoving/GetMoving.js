import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const GetMoving = () => {
  const useStyle = makeStyles({
    getMoving: {
      height: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(0deg, #EDEDED 0%, #D9B2FF 100%)",
      marginTop: "40px",
    },
  });

  const { getMoving } = useStyle();
  return (
    <Box className={getMoving}>
      <Typography
        variant="h2"
        sx={{ fontSize: "50px", fontWeight: 700, letterSpacing: ".2em" }}
      >
        Get Moving
      </Typography>
      <Button
        sx={{
          bgcolor: "rgba(36, 90, 229, 1)",
          height: "64px",
          width: "240px",
          margin: "10px -24px!important",
          borderRadius: "0!important",
          fontWeight: "600!important",
          fontSize: "16px!important",
          letterSpacing: ".1em!important",
        }}
        disableElevation
        variant="contained"
      >
        SHOP NOW
      </Button>
    </Box>
  );
};

export default GetMoving;
