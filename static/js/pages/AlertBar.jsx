import { Box, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

export default function AlertBar() {
  return (
    <>
      <Box
        py={1}
        sx={{
          background: "rgb(255,145,28,0.5)",
        }}
      >
        <Marquee
          speed={50}
          pauseOnClick={true}
          pauseOnHover={true}
          gradient={false}
        >
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "400",
              color: "#fff",
            }}
          >
            <span
              style={{
                fontWeight: "700",
              }}
            >
              Please Note:
            </span>{" "}
            REXAS Team will never send you messages on any social networks,
            Please verify our social links via our website: Rexas.com | Never
            Share Your Seed Phrase or Private Key with anyone.
          </Typography>
        </Marquee>
      </Box>
    </>
  );
}
