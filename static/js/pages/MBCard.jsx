import React from "react";
import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import ewallet1 from "../Images/ewallet1.png";
import ewallet from "../Images/ewallet.svg";

const data = [
  {
    title: "Diverse Asset Range:",
    description: "Seamlessly invest in a wide range of Real World Assets.",
  },
  {
    title: "Fractional Ownership:",
    description:
      " Participate in fractional ownership, making previously inaccessible investment opportunities available to all.",
  },
  {
    title: "Democratize Investment:",
    description:
      " Our platform democratizes access, offering a simple, secure, and transparent way to diversify your portfolio.",
  },
  {
    title: "Accessible Real Estate Investment:",
    description: "Invest in real estate without the high entry costs.",
  },
  {
    title: "Diverse Opportunities:",
    description:
      "Own a piece of precious metals or thriving businesses with just a few clicks.",
  },
  {
    title: "Global Market Access:",
    description:
      "Rexas brings the potential of the global market directly to your fingertips.",
  },
];
export default function MBCard() {
  const matches = useMediaQuery("(max-width:950px)");
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={5} display="flex" alignItems="center">
          <Grid item xs={12} md={6} order={matches ? 2 : 1}>
            <Typography
              mb={4}
              sx={{
                fontFamily: "accelerator",
                fontSize: matches ? "20px" : "38px",
                textAlign: matches ? "center" : "left",
              }}
            >
              <span
                style={{
                  background: "transparent",
                  backgroundImage:
                    "linear-gradient(90deg, #E8749E 0%, #F0B90B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Unlock
              </span>{" "}
              the World of Asset Investment with Ease and Flexibility
            </Typography>
            {data.map(({ title, description }, index) => {
              return (
                <Typography
                  key={index}
                  px={matches ? 2 : 4}
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: matches ? "12px" : "17px",
                    color: "#FFFFFF",
                    fontWeight: "400",
                  }}
                >
                  <span
                    style={{
                      color: " #F0B90B",
                    }}
                  >
                    {title}
                  </span>{" "}
                  {description}
                </Typography>
              );
            })}

            {/* <Box
              display="flex"
              mt={4}
              justifyContent={matches ? "center" : "left"}
            >
              <StyledBtn width="260px">Buy $lorem</StyledBtn>
            </Box> */}
          </Grid>
          <Grid item xs={12} md={6} order={matches ? 1 : 2}>
            <img src={ewallet1} width="100%" alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
