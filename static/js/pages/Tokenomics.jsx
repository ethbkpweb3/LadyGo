import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import token from "../Images/token.png";
import { IoCopyOutline } from "react-icons/io5";
import { ToastNotify } from "../components/SmallComponents/AppComponents";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { tokenAddress } from "../ConnectivityAssets/environment";

export default function Tokenomics() {
  const matches = useMediaQuery("(max-width:950px)");
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const showAlert = (message, severity = "success") => {
    setAlertState({
      open: true,
      message,
      severity,
    });
  };
  return (
    <>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Container maxWidth="xl" id="tokenomics">
        <Box px={!matches && 10}>
          <Typography
            mt={15}
            mb={3}
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
                  "linear-gradient(91.08deg, #E8749E 26.22%, #F0B90B 84.23%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              TOKENOMICS
            </span>{" "}
          </Typography>
          <Box
            mt={matches ? 2 : 4}
            display="flex"
            alignItems="center"
            sx={{
              border: "1px solid #F0B90B",
              borderRadius: matches ? "9px" : "29px",
              width: "100%",
              height: matches ? "43px" : "130px",
            }}
          >
            <Grid
              container
              spacing={matches ? 0 : 2}
              display="flex"
              alignItems="center"
            >
              <Grid
                item
                xs={4.4}
                md={4.4}
                borderRight={
                  matches ? "2px solid #F0B90B" : "6px solid #f0b90b"
                }
                height={matches ? "20px" : "80px"}
              >
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: matches ? "11px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Name: Rexas Finance
                </Typography>
              </Grid>
              <Grid
                item
                xs={3.2}
                md={3.2}
                borderRight={
                  matches ? "2px solid #F0B90B" : "6px solid #f0b90b"
                }
                height={matches ? "20px" : "80px"}
              >
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: matches ? "11px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Symbol: RXS
                </Typography>
              </Grid>

              <Grid item xs={4.4} md={4.4} height={matches ? "20px" : "80px"}>
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: matches ? "10px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Tokens: 1,000,000,000
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            mt={matches ? 2 : 4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            sx={{
              border: "1px solid #F0B90B",
              borderRadius: matches ? "9px" : "29px",
              width: "100%",
              height: matches ? "55px" : "130px",
            }}
          >
            <Typography
              display="flex"
              alignItems="center"
              sx={{
                fontFamily: "Space Grotesk",
                fontWeight: 700,
                fontSize: matches ? "11px" : "30px",
                color: "#FFFFFF",
                textAlign: "center",
              }}
            >
              Contract Address{" "}
              <span style={{ fontWeight: 400, marginLeft: "10px" }}>
                {" "}
                {tokenAddress.slice(0, 10) + "......" + tokenAddress.slice(-10)}
              </span>
              <CopyToClipboard
                text={"0x1232229292023873486573478030003C1d"}
                onCopy={() => showAlert("Contract Address Copied")}
              >
                <IoCopyOutline
                  style={{
                    color: "#fff",
                    fontSize: matches ? "15px" : "33px",
                    marginLeft: "10px",
                  }}
                />
              </CopyToClipboard>
            </Typography>
            <Typography
              mt={!matches && 1}
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: matches ? "8px" : "16px",
                color: "#F0B90B",
                textAlign: "center",
                px: matches ? 1 : 2,
              }}
            >
              Please note that you should not send any tokens to this address,
              as doing so may result in the permanent loss of the tokens.
            </Typography>
          </Box>
          <Box
            mt={matches ? 2 : 4}
            display="flex"
            alignItems="center"
            sx={{
              border: "1px solid #F0B90B",
              borderRadius: matches ? "9px" : "29px",
              width: "100%",
              height: matches ? "43px" : "130px",
            }}
          >
            <Grid
              container
              spacing={matches ? 0 : 2}
              display="flex"
              alignItems="center"
            >
              <Grid
                item
                xs={3}
                md={3}
                borderRight={
                  matches ? "2px solid #F0B90B" : "6px solid #f0b90b"
                }
                height={matches ? "20px" : "80px"}
              >
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: matches ? "11px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Marketing: 3%
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                md={3}
                borderRight={
                  matches ? "2px solid #F0B90B" : "6px solid #f0b90b"
                }
                height={matches ? "20px" : "80px"}
              >
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: matches ? "11px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Presale 42.5%
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                md={3}
                borderRight={
                  matches ? "2px solid #F0B90B" : "6px solid #f0b90b"
                }
                height={matches ? "20px" : "80px"}
              >
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: matches ? "11px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Liquidity: 15%
                </Typography>
              </Grid>
              <Grid item xs={3} md={3} height={matches ? "20px" : "80px"}>
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: matches ? "11px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Treasury: 10%
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            mt={matches ? 2 : 4}
            mb={2}
            display="flex"
            alignItems="center"
            sx={{
              border: "1px solid #F0B90B",
              borderRadius: matches ? "9px" : "29px",
              width: "100%",
              height: matches ? "43px" : "130px",
            }}
          >
            <Grid
              container
              spacing={matches ? 0 : 2}
              display="flex"
              alignItems="center"
            >
              <Grid
                item
                xs={2.4}
                md={2.4}
                borderRight={
                  matches ? "2px solid #F0B90B" : "6px solid #f0b90b"
                }
                height={matches ? "20px" : "80px"}
              >
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: matches ? "11px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Team: 3%
                </Typography>
              </Grid>
              <Grid
                item
                xs={2.8}
                md={2.8}
                borderRight={
                  matches ? "2px solid #F0B90B" : "6px solid #f0b90b"
                }
                height={matches ? "20px" : "80px"}
              >
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: matches ? "11px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Giveaway: 2%
                </Typography>
              </Grid>
              <Grid
                item
                xs={2.6}
                md={2.6}
                borderRight={
                  matches ? "2px solid #F0B90B" : "6px solid #f0b90b"
                }
                height={matches ? "20px" : "80px"}
              >
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: matches ? "11px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Partner: 2%
                </Typography>
              </Grid>
              <Grid item xs={4} md={4} height={matches ? "20px" : "80px"}>
                <Typography
                  sx={{
                    fontFamily: "Space Grotesk",
                    fontWeight: 700,
                    fontSize: matches ? "11px" : "30px",
                    color: "#FFFFFF",
                    textAlign: "center",
                  }}
                >
                  Staking Pool: 22.5%
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <img
            src={token}
            width="100%"
            // style={{ marginTop: !matches && "-50px" }}
            alt=""
          />
        </Box>
      </Container>
    </>
  );
}
