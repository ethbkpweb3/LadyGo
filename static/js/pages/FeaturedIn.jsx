import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import part1 from "../Images/part1.png";
import part2 from "../Images/part2.png";
import part3 from "../Images/part3.png";
import part4 from "../Images/part4.png";
import part5 from "../Images/part5.png";
import part6 from "../Images/part6.png";
import part7 from "../Images/part7.png";
import part8 from "../Images/part8.png";
import part9 from "../Images/part9.png";
import part10 from "../Images/part10.png";
import part11 from "../Images/part11.png";
import part12 from "../Images/part12.png";
import part13 from "../Images/part13.png";
import part14 from "../Images/part14.png";
import part15 from "../Images/part15.png";
import part16 from "../Images/part16.png";

export default function FeaturedIn() {
  const matches = useMediaQuery("(max-width:950px)");

  return (
    <>
      <Box py={matches ? 2 : 4} mt={6} position="relative" zIndex={1}>
        <Typography
          mb={2}
          sx={{
            fontFamily: "'Poppins'",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "26px",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Featured In
        </Typography>
        <Box mt={matches ? 5 : 8} position="relative" zIndex={1}>
          <Marquee
            speed={50}
            pauseOnClick={true}
            pauseOnHover={true}
            gradient={false}
          >
            <Box style={{ display: "flex", alignItems: "center" }}>
              <img
                src={part1}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "30px" : "55px" }}
                alt=""
              />
              <img
                src={part2}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part3}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part4}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part5}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part6}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part7}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part8}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part9}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part10}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part11}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part12}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part13}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part14}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part15}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
              <img
                src={part16}
                width={matches ? "120px" : "200px"}
                style={{ marginRight: matches ? "70px" : "85px" }}
                alt=""
              />
            </Box>
          </Marquee>
        </Box>
      </Box>
    </>
  );
}
