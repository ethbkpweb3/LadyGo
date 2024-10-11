import React, { useContext } from "react";
import {
  Container,
  Hidden,
  useMediaQuery,
  SwipeableDrawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

// import { AppContext } from "../utils";
import { StyledText } from "./SmallComponents/AppComponents";
import { ExampleButton } from "./SmallComponents/StyledWalletButton";
import logorx from "../Images/logorx.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { AppContext } from "../utils";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#1B1C22 !important",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

const mobileDataarr = [
  {
    name: "Ecosystem",
    link: "/#ecosystem",
  },
  {
    name: "Tokenomics",
    link: "/#tokenomics",
  },
  {
    name: "Win $333K",
    link: "https://rexas.com/win-500k/",
  },
  {
    name: "Whitepaper",
    link: "https://rexas.com/rexas-whitepaper.pdf",
  },
  {
    name: "How To Buy",
    link: "https://rexas.com/how-to-buy/",
  },
  {
    name: "Contact Us",
    link: "https://rexas.com/contact-us/",
  },
];
export default function Header() {
  // const { account, connect, disconnect } = useContext(AppContext);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const matches = useMediaQuery("(max-width:950px)");
  const { account } = useContext(AppContext);
  const { open } = useWeb3Modal();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" justifyContent="center" alignItems="center" my={5}>
        <Link to="/" style={{ textDecoration: "none" }}>
          {/* <Box component="img" src={logorx} width="72px" alt="" /> */}

          <Typography
            sx={{
              fontWeight: "400",
              fontSize: matches ? "16px" : "20px",
              color: "#fff",
              fontFamily: "accelerator",
            }}
          >
            REXAS FINANCE
          </Typography>
        </Link>
      </Box>
      <List>
        {mobileDataarr.map(({ name, link }, index) => (
          <ListItem
            button
            style={{
              justifyContent: "center",
            }}
            key={index}
          >
            <HashLink
              smooth
              to={link}
              target={index > 1 ? "_blank" : "_self"}
              style={{ textDecoration: "none" }}
            >
              <ListItemText
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                  ".MuiTypography-root": {
                    fontSize: "16px",
                    fontFamily: "Helvetica Neue",
                    fontWeight: "300",
                  },
                }}
              >
                {name}
              </ListItemText>
            </HashLink>
          </ListItem>
        ))}
      </List>
      <Box mt={3} display="flex" justifyContent="center">
        <ExampleButton />
      </Box>
    </div>
  );
  return (
    <>
      <Box
        sx={{
          background: "transparent",
        }}
        height="90px"
        width="100%"
        position="relative"
        zIndex={1}
        py={1.5}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={!matches && 2}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: matches ? "16px" : "20px",
                  color: "#fff",
                  fontFamily: "accelerator",
                }}
              >
                REXAS FINANCE
              </Typography>
              {/* <Box component="img" src={logorx} width="72px" alt="" /> */}
            </Link>
            <Box
              display="flex"
              justifyContent={matches ? "end" : "space-between"}
              alignItems="center"
            >
              <Hidden mdDown>
                <HashLink
                  smooth
                  to="/#ecosystem"
                  style={{ textDecoration: "none" }}
                >
                  <StyledText mr={4}>Ecosystem</StyledText>
                </HashLink>
                <HashLink
                  smooth
                  to="/#tokenomics"
                  style={{ textDecoration: "none" }}
                >
                  <StyledText mr={4}>Tokenomics</StyledText>
                </HashLink>

                <Link
                  to="https://rexas.com/rexas-whitepaper.pdf"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={4}>Whitepaper</StyledText>
                </Link>
                <Link
                  to="https://rexas.com/win-500k/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={4}>Win $333K</StyledText>
                </Link>
                <Link
                  to="https://rexas.com/how-to-buy/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText mr={4}>How To Buy</StyledText>
                </Link>
                <Link
                  to="https://rexas.com/contact-us/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <StyledText>Contact Us</StyledText>
                </Link>
              </Hidden>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "30px",
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      ></MenuIcon>
                    </Button>
                    <Paper>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
            <Hidden mdDown>
              <div className="cardBox" onClick={async () => await open()}>
                <div className="card-animation">
                  <div className="card-content">
                    <h2
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        fontFamily: "Poppins",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {account
                        ? account.slice(0, 4) + "..." + account.slice(-4)
                        : "Connect Wallet"}
                    </h2>
                  </div>
                </div>
              </div>
            </Hidden>
          </Box>
        </Container>
      </Box>
    </>
  );
}
