import React from "react";
import SeedDaap from "../../static/images/image-112.jpg";
import playt from "../../static/images/playt.png";
import playg from "../../static/images/playg.png";
import playr from "../../static/images/playr.png";
import cell1 from "../../static/images/cell1.png";
import cell2 from "../../static/images/cell2.png";
import cell3 from "../../static/images/cell3.png";
import cell4 from "../../static/images/cell4.png";
import cell5 from "../../static/images/cell4.png";
import cell6 from "../../static/images/cell4.png";
import Farm from "../../static/images/image-110.jpg";
import Marketplace from "../../static/images/image-111.jpg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const Title = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `22px`,
  lineHeight: `30px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#FFFFFF`,
});
const LuckyImage = styled("img")({
  width: "100%",
  height: "115px",
  objectFit: "cover",
});
const StatTitle = styled("h1")({
  fontFamily: `Maven Pro, sans-serif`,
  fontStyle: `normal`,
  fontWeight: `700`,
  fontSize: `22px`,
  lineHeight: `30px`,
  textAlign: "center",
  textTransform: "uppercase",
  color: `#c1d117`,
  paddingBottom: "18px",
  paddingBottom: "18px",
});
const Stake = () => {
  return (
    <Box
      sx={{
        paddingBottom: "40px",
      }}
    >
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {Landdata.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                sx={{
                  backgroundColor: "transparent",
                  borderRadius: "8px",
                  border: `3px solid ${item.color}`,
                  boxShadow: `0px 0px 16px ${item.color}`,
                  paddingTop: "20px",
                  paddingBottom: "14px",
                  paddingX: "10px",
                  overflowY: "auto",
                  height: "500px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignSelf: "center",
                      paddingRight: "14px",
                    }}
                  >
                    <Title>{item.title}</Title>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignSelf: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: item.color,
                        paddingX: "12px",
                        paddingY: "4px",
                        color: "#FFFFFF",
                        fontSize: "22px",
                        fontWeight: "700",
                        borderRadius: "5px",
                      }}
                    >
                      {item.quant}
                    </Box>
                  </Box>
                </Box>
                <Grid
                  container
                  rowSpacing={3}
                  columnSpacing={{ xs: 1, sm: 2, md: 1 }}
                >
                  {item.data.map((itm, index) => {
                    return (
                      <Grid item xs={6} key={index}>
                        <Box
                          sx={{
                            border: `2px solid ${item.color}`,
                            width: "100%",
                            height: "115px",
                            borderRadius: "8px",
                            overflow: "hidden",
                            marginBottom: "10px",
                          }}
                        >
                          <LuckyImage src={itm.picture} alt="" />
                        </Box>
                        <Box
                          sx={{
                            border: `2px solid ${item.color}`,
                            width: "100%",
                            borderRadius: "8px",
                            color: "#FFFFFF",
                            fontSize: "10px",
                            lineHeight: "15px",
                            fontWeight: "800",
                            paddingX: "5px",
                            paddingY: "5px",
                            height: "42px",
                            textAlign: "center",
                            overflow: "hidden",
                          }}
                        >
                          {itm.price}
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
          );
        })}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box>
              <Box
                sx={{
                  backgroundColor: "#10241b",
                  paddingX: "4px",
                  paddingY: "14px",
                  maxWidth: "280px",
                }}
              >
                <StatTitle>Crook Stats</StatTitle>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingBottom: "10px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#ffffff",
                        paddingX: "12px",
                        borderRight: "2px solid #c1d117",
                        textTransform: "uppercase",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      MINTED
                    </Box>
                    <Box
                      sx={{
                        color: "#ffffff",
                        paddingX: "12px",
                        textTransform: "uppercase",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      STAKED
                    </Box>
                  </Box>
                </Box>
                {statsData.map((item, index) => {
                  return (
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        paddingX: "6px",
                        marginY: "7px",
                      }}
                      key={index}
                    >
                      <Box>
                        <Box
                          sx={{
                            backgroundColor: "#c1d117",
                            color: "#0d1f19",
                            paddingY: "5px",
                            paddingX: "10px",
                            textTransform: "uppercase",
                            fontSize: "16px",
                            fontWeight: "700",
                            borderTopLeftRadius: "8px",
                            borderBottomLeftRadius: "8px",
                          }}
                        >
                          {item.title}
                          <br />
                          {item.subTitle}
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            backgroundColor: "#c1d117",
                            color: "#0d1f19",
                            paddingX: "7px",
                            paddingY: "7px",
                            textTransform: "uppercase",
                            fontSize: "14px",
                            fontWeight: "600",
                            textAlign: "center",
                            maxWidth: "100px",
                            minWidth: "80px",
                            "& > span": {
                              color: `#FFFFFF`,
                            },
                          }}
                        >
                          {item.minted}
                          <br />
                          <span>{item.mintedSlash}</span>
                        </Box>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            backgroundColor: "#c1d117",
                            color: "#fff",
                            minWidth: "80px",
                            maxWidth: "120px",
                            paddingX: "7px",
                            paddingY: "15px",
                            textTransform: "uppercase",
                            fontSize: "14px",
                            fontWeight: "600",
                            textAlign: "center",
                            borderTopRightRadius: "8px",
                            borderBottomRightRadius: "8px",
                          }}
                        >
                          {item.STAKED}
                        </Box>
                      </Box>
                    </Stack>
                  );
                })}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginY: "20px",
                  maxWidth: "200px",
                  marginX: "auto",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    <Button title="Claim $cGOLD" color="#c1d117" />
                  </Box>
                  <Box
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    <Button title="Harvest $DONUTZ" color="#00a65a" />
                  </Box>
                  <Box
                    sx={{
                      marginBottom: "20px",
                    }}
                  >
                    <Button title="UNSTAKE" color="#3c6f66" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Stake;

const Landdata = [
  {
    title: "Cro Crook NFTs",
    color: "#c1d117",
    quant: "3",
    data: [
      {
        picture: playt,
        price: "Cro Crook NFT",
      },
      {
        picture: Farm,
        price: "Cro Crook NFT",
      },
      {
        picture: Marketplace,
        price: "Cro Crook NFT",
      },
      {
        picture: "",
        price: "Cro Crook NFT",
      },
      {
        picture: "",
        price: "Cro Crook NFT",
      },
      {
        picture: "",
        price: "Cro Crook NFT",
      },
    ],
  },
  {
    title: "CroCells NFTs",
    color: "#00a65a",
    quant: "1",
    data: [
      {
        picture: cell1,
        price: "CroCells NFT",
      },
      {
        picture: cell2,
        price: "CroCells NFT",
      },
      {
        picture: cell3,
        price: "CroCells NFT",
      },
      {
        picture: cell4,
        price: "CroCells NFT",
      },
      {
        picture: cell5,
        price: "CroCells NFT",
      },
      {
        picture: cell6,
        price: "CroCells NFT",
      },
    ],
  },
  {
    title: "Cro Cop NFTs",
    color: "#3c6f66",
    quant: "2",
    data: [
      {
        picture: "",
        price: "Coming Soon",
      },
      {
        picture: "",
          price: "Coming Soon",
      },
      {
        picture: "",
        price: "Coming Soon",
      },
      {
        picture: "",
        price: "Coming Soon",
      },
      {
        picture: "",
        price: "Coming Soon",
      },
    ],
  },
];

const statsData = [
  {
    title: `Crook `,
    subTitle: "Stats",
    minted: "800",
    mintedSlash: "/1111",
    STAKED: "225",
  },
  {
    title: "Crook",
    subTitle: "Cells",
    minted: "100",
    mintedSlash: "/630",
    STAKED: "0",
  },
  {
    title: "Cro Cops",
    subTitle: "Stats",
    minted: "250,000 ",
    mintedSlash: "/300,000",
    STAKED: "0",
  },
];

const Button = ({ color, title }) => {
  return (
    <a
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "55px",
        color: "#fff",
        border: `3px solid ${color}`,
        boxShadow: `0px 0px 18px ${color}`,
        borderRadius: "6px",
        fontSize: "20px",
        cursor: "pointer",
        textTransform: "uppercase",
        fontWeight: "700",
        fontFamily: `Maven Pro, sans-serif`,
        textDecoration: "none",
      }}
    >
      {title}
    </a>
  );
};
