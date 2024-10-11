import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";
import { FaMedium } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { StyledText } from "../components/SmallComponents/AppComponents";

export default function Footer() {
  const matches = useMediaQuery("(max-width:950px)");

  return (
    <Box mt={10}>
      <Container maxWidth="xl">
        <Divider
          sx={{
            background:
              " linear-gradient(90deg, rgba(192, 204, 218, 0.1) 0%, rgba(192, 204, 218, 0.6) 50.38%, rgba(192, 204, 218, 0.1) 100%)",
            width: "100%",
            height: "2px",
          }}
        />

        <Grid container spacing={3} mt={5} display="flex" alignItems="center">
          <Grid item xs={12} md={12} display="flex" justifyContent={"center"}>
            <a
              href="https://x.com/rexas"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter
                style={{
                  color: "#F0B90B",
                  fontSize: "20px",
                  marginRight: "23px",
                }}
              />
            </a>
            <a
              href="https://t.me//rexas"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegramPlane
                style={{
                  color: "#F0B90B",
                  fontSize: "20px",
                  marginRight: "23px",
                }}
              />
            </a>
            <a
              href=" https://linktr.ee/rexasfinance"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <TbBrandLinktree
                style={{
                  color: "#F0B90B",
                  fontSize: "20px",
                  marginRight: "23px",
                }}
              />
            </a>
            <a
              href="https://medium.com/@rexasfinance"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <FaMedium
                style={{
                  color: "#F0B90B",
                  fontSize: "20px",
                }}
              />
            </a>
          </Grid>
          {!matches && (
            <Grid item xs={12} md={12} display="flex" justifyContent="center">
              <Link
                to="https://rexas.com/rexas-whitepaper.pdf"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <StyledText mr={4} style={{ fontSize: "14px" }}>
                  Whitepaper
                </StyledText>
              </Link>
              <Link
                to="https://rexas.com/win-500k/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <StyledText mr={4} style={{ fontSize: "14px" }}>
                  Win $333K
                </StyledText>
              </Link>
              <Link
                to="https://rexas.com/how-to-buy/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <StyledText mr={4} style={{ fontSize: "14px" }}>
                  How To Buy
                </StyledText>
              </Link>
              <Link
                to="https://rexas.com/contact-us/"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <StyledText mr={4} style={{ fontSize: "14px" }}>
                  Contact Us
                </StyledText>
              </Link>

              <Link
                to="https://rexas.com/privacy-policy"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <StyledText mr={4} style={{ fontSize: "14px" }}>
                  Privacy Policy{" "}
                </StyledText>
              </Link>
              <Link
                to="https://rexas.com/terms-and-conditions"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <StyledText mr={4} style={{ fontSize: "14px" }}>
                  Terms & Conditions{" "}
                </StyledText>
              </Link>
              <Link
                to="https://rexas.com/cookies"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <StyledText style={{ fontSize: "14px" }}>Cookies </StyledText>
              </Link>
            </Grid>
          )}
          {matches && (
            <Grid
              item
              xs={12}
              md={12}
              display="flex"
              flexDirection="Column"
              alignItems="center"
            >
              <Box display="flex" alignItems="center">
                <Link
                  to="https://rexas.com/win-500k/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={2} style={{ fontSize: "14px" }}>
                    Win $333K
                  </StyledText>
                </Link>
                <Link
                  to="https://rexas.com/how-to-buy/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={2} style={{ fontSize: "14px" }}>
                    How To Buy
                  </StyledText>
                </Link>
                <Link
                  to="https://rexas.com/contact-us/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText style={{ fontSize: "14px" }}>
                    Contact Us
                  </StyledText>
                </Link>
              </Box>
              <Box display="flex" alignItems="center" mt={2}>
                <Link
                  to="https://rexas.com/privacy-policy"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={2} style={{ fontSize: "14px" }}>
                    Privacy Policy{" "}
                  </StyledText>
                </Link>
                <Link
                  to="https://rexas.com/terms-and-conditions"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={2} style={{ fontSize: "14px" }}>
                    Terms & Conditions{" "}
                  </StyledText>
                </Link>
                <Link
                  to="https://rexas.com/cookies"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText style={{ fontSize: "14px" }}>Cookies </StyledText>
                </Link>
              </Box>
            </Grid>
          )}
        </Grid>
        <Typography
          py={3}
          sx={{
            fontFamily: "Poppins",
            fontSize: "13px",
            color: "#939397",
            textAlign: "center",
          }}
        >
          Disclaimer: Cryptocurrency may be unregulated in your jurisdiction.
          The value of cryptocurrencies may fluctuate <br />
          Profits may be subject to capital gains or other taxes applicable in
          your jurisdiction
        </Typography>
        <Typography
          pb={5}
          sx={{
            fontFamily: "Poppins",
            fontSize: "13px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          2024© Rexas Protocol | All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
