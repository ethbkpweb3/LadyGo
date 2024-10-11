import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import eco from "../Images/eco.png";
import fig1 from "../Images/fig1.png";
import fig2 from "../Images/fig2.png";
import fig3 from "../Images/fig3.png";
import fig4 from "../Images/fig4.png";
import fig5 from "../Images/fig5.png";
import fig6 from "../Images/fig6.png";
import card1 from "../Images/card1.svg";
import card2 from "../Images/card2.svg";
import card3 from "../Images/card3.svg";
import card4 from "../Images/card4.svg";
import card5 from "../Images/card5.svg";
import card6 from "../Images/card6.svg";

export default function Ecosystem() {
  const matches = useMediaQuery("(max-width:950px)");

  const data = [
    {
      bg: card5,
      icon: <img src={fig5} width={matches ? "60%" : "60%"} alt="" />,
      title: "Rexas Token Builder",
      description:
        "Tokenize your real world assets effortlessly. Rexas Token Builder platform eliminates the complexity of blockchain coding, enabling users to launch tokens in minutes.",
    },
    {
      bg: card6,
      icon: <img src={fig6} width={matches ? "60%" : "60%"} alt="" />,
      title: "Rexas Launchpad",
      description:
        "Kickstart your token funding with Rexas Launchpad. This decentralized launchpad provides a secure and transparent environment for token sales on multiple blockchain networks.",
    },
    {
      bg: card4,
      icon: <img src={fig4} width={matches ? "60%" : "60%"} alt="" />,
      title: "Rexas GenAI",
      description:
        "Harness the power of AI with Rexas GenAI for generating unique, high-quality digital artworks. Ideal for artists and creators looking to venture into the NFT space.",
    },
    {
      bg: card3,
      icon: <img src={fig3} width={matches ? "60%" : "60%"} alt="" />,
      title: "Rexas DeFi",
      description:
        "Rexas DeFi offers a powerful decentralized solution for cryptocurrency trading, enabling users to effortlessly swap crypto across multiple networks.",
    },
    {
      bg: card2,
      icon: <img src={fig2} width={matches ? "60%" : "60%"} alt="" />,
      title: "Rexas Estate",
      description:
        "Invest in real estate with Rexas, co-own real world properties and earn passive income in stable coins.",
    },
    {
      bg: card1,
      icon: <img src={fig1} width={matches ? "60%" : "65%"} alt="" />,
      title: "Rexas Treasury",
      description:
        "Multi-chain yield optimizer that allows users to earn compound interest on their crypto deposits.",
    },
  ];
  return (
    <Box id="ecosystem" mt={matches ? 0 : -17}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={5}
          mt={matches && 5}
          display="flex"
          alignItems="center"
        >
          <Grid item xs={12} md={6} order={matches ? 1 : 2}>
            <Typography
              sx={{
                fontFamily: "accelerator",
                fontSize: matches ? "36px" : "66px",
                textAlign: matches ? "center" : "left",
              }}
            >
              <span
                style={{
                  background: "transparent",
                  backgroundImage:
                    "linear-gradient(91.5deg, #E8749E 28.38%, #F0B90B 82.14%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                REXAS ECOSYSTEM
              </span>{" "}
            </Typography>
            {matches && (
              <img
                src={eco}
                width="100%"
                // style={{ marginTop: "-100px" }}
                alt=""
              />
            )}
            <Typography
              mt={4}
              sx={{
                fontFamily: "Poppins",
                fontSize: matches ? "12px" : "22px",
                color: "#fff",
                textAlign: matches ? "center" : "left",
              }}
            >
              Explore the Rexas ecosystem, designed to streamline your journey
              into the world of blockchain and digital assets. Whether you're
              looking to invest in real estate, tokenize your assets, or engage
              in creative endeavors through NFTs, Rexas provides the tools you
              need. Benefit from a secure platform for trading and token
              funding, while maximizing your investments with advanced
              yield-optimizing strategies. Our seamless multi-chain technology
              ensures that your trading is efficient and your investments grow.
            </Typography>
          </Grid>
          {!matches && (
            <Grid item xs={12} md={6} order={!matches && 1}>
              <img src={eco} width="100%" alt="" />
            </Grid>
          )}
        </Grid>

        <Grid
          container
          spacing={5}
          mt={matches && 5}
          display="flex"
          justifyContent="center"
          position="relative"
          zIndex={1}
          px={{ xs: 0, sm: 0, md: 0, lg: 5, xl: 10 }}
        >
          {data.map(({ bg, icon, title, description }, index) => (
            <Grid
              item
              xs={10}
              md={4}
              key={index}
              width="100%"
              mt={matches && 2}
            >
              <Box
                sx={{
                  background: `url(${bg})`,
                  backgroundRepeat: "none",
                  backgroundSize: "cover",
                  height: matches ? "340px" : "500px",
                  border: "1px solid #FFFFFF33",
                  borderRadius: matches ? "13px" : "22px",
                  px: matches ? 2 : 5,
                  pt: matches ? 3 : 5,
                  pb: !matches && 5,
                }}
              >
                <Box display="flex" justifyContent="center">
                  {icon}
                </Box>
                <Typography
                  my={1}
                  pt={2}
                  mt={index === 5 ? -2 : 0}
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: matches ? "20px" : "28px  ",
                    textAlign: "center",
                    color: "#F8FAFC",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  mt={matches ? 0 : 2}
                  pb={matches && 2}
                  sx={{
                    fontWeight: 400,
                    fontFamily: "'Poppins'",
                    fontSize: matches ? "12px" : "16px",
                    color: "#F1F5F9",
                    textAlign: "center",
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
