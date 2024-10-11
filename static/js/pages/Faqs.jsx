import React from "react";
import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

export default function Faqs() {
  const matches = useMediaQuery("(max-width:950px)");
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faq = [
    {
      id: 1,
      question: "What is REXAS?",
      answer:
        "REXAS is a blockchain platform designed to facilitate the tokenization of real-world assets. Our ecosystem offers tools to tokenize, invest, and manage assets such as real estate, precious metals, and other valuable commodities, leveraging blockchain technology for transparency and efficiency",
    },
    {
      id: 2,
      question: "What types of assets can I tokenize with REXAS?",
      answer:
        "REXAS supports the tokenization of a wide variety of assets, including but not limited to real estate, art, gold, and corporate bonds. Our platform provides the flexibility to bring almost any valuable asset onto the blockchain.",
    },
    {
      id: 3,
      question: "How can I start investing with REXAS?",
      answer: (
        <>
          To begin investing with REXAS, Head over to rexas.com{" "}
          <a
            href="https://rexas.com "
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
            rel="noreferrer"
          >
            https://rexas.com
          </a>{" "}
          Click Connect Wallet and connect using your DeFi Web3 wallet, we
          recommend using MetaMask & Trust Wallet, Make sure you are connected
          on Ethereum Chain (ERC20) and have enough ETH on ethereum network.
          Select from ETH, USDT, USDC, Input amount you want to purchase with
          and click on Buy Now. Complete the transaction in your wallet. For
          detailed guide on How To Buy REXAS - Click Here.{" "}
          <a
            href="https://rexas.com/how-to-buy/ "
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
            rel="noreferrer"
          >
            https://rexas.com/how-to-buy/
          </a>
        </>
      ),
    },
    {
      id: 4,
      question: "What is RXS Token?",
      answer:
        "RXS is the symbol of REXAS token. RXS token is used for governance of the Rexas Protocol and Ecosystem.",
    },
    {
      id: 5,
      question: "How will I receive RXS Tokens?",
      answer:
        "REXAS (RXS) tokens are transferred to your wallet in real time, to see the amount of tokens in your wallet please add RXS as custom token in your wallet.",
    },
    {
      id: 6,
      question: "How can I contact Rexas team?",
      answer: (
        <>
          You can contact us using our contact us form:{" "}
          <a
            href="https://rexas.com/contact-us/ "
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
            rel="noreferrer"
          >
            https://rexas.com/contact-us/
          </a>{" "}
          Or buy emailing us at:{" "}
          <a
            href="mailto: support@rexas.com"
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
            rel="noreferrer"
          >
            {" "}
            support@rexas.com
          </a>
        </>
      ),
    },
    {
      id: 7,
      question: "Where can I sell my RXS tokens?",
      answer:
        "Since we are currently on presale, you cannot sell or transfer your tokens. Once Rexas goes live, users will be able to freely trade it on Uniswap.",
    },
    {
      id: 8,
      question: "My wallet is Hacked, What should I do?",
      answer:
        "Unfortunately, there is nothing we can do on our end in this situation. Never Share Your Seed Phrase or Private Key: Under no circumstances should you share your Seed Phrase or Private Key with anyone. These are sensitive and should be kept secure.",
    },
  ];
  return (
    <>
      <Box id="faqs">
        <Container maxWidth="lg">
          <Typography
            position="relative"
            zIndex={1}
            mt={2}
            sx={{
              fontFamily: "accelerator",
              fontWeight: 700,
              fontSize: matches ? "24px" : "32px",
              textAlign: "center",
            }}
          >
            FAQs
          </Typography>

          <Box sx={{ width: "100%", pb: 10 }} position="relative" zIndex={1}>
            {faq.map((faq, i) => {
              const { id, question, answer } = faq;
              return (
                <Box key={i} mt={5} sx={{ width: "100%" }}>
                  <Accordion
                    expanded={expanded === `{panel${id}}`}
                    onChange={handleChange(`{panel${id}}`)}
                    style={{
                      borderBottom: "1px solid #bdbdcb",
                      background: "transparent",
                      width: "100%",
                      boxShadow: "none",
                      borderRadius: "none",
                      m: "auto",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === `{panel${id}}` ? (
                          <Remove
                            style={{
                              color: "#fff",
                              fontSize: "30px",
                            }}
                          />
                        ) : (
                          <Add
                            style={{
                              color: "#fff",
                              fontSize: "30px",
                            }}
                          />
                        )
                      }
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Box
                        px={2}
                        py={1}
                        fontSize={matches ? "17px" : " 30px"}
                        textAlign="left"
                        fontFamily="Poppins"
                        fontWeight="500"
                        color="#fff"
                      >
                        {question}
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box
                        pl={2}
                        pb={3}
                        fontSize={matches ? "12px" : "20px"}
                        textAlign="left"
                        fontFamily="Poppins"
                        fontWeight="400"
                        color="#97979A"
                      >
                        {answer}
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
}
