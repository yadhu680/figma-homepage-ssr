//import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function PromoBanner() {

  const brands = [
    { name: "Versace", logo: "/images/promos/versace.png", width: {xs: "116.74px", md: "166.48px"}, height: {xs: "23.25px", md: "33.16px"} },
    { name: "Zara", logo: "/images/promos/zara.png", width: {xs: "63.81px", md: "91px"}, height: {xs: "26.65px", md: "38px"} },
    { name: "Gucci", logo: "/images/promos/gucci.png", width: {xs: "109.39px", md: "156px"}, height: {xs: "25.24px", md: "36px"} },
    { name: "Prada", logo: "/images/promos/prada.png", width: {xs: "127px", md: "194px"}, height: {xs: "21px", md: "32px"} },
    { name: "Calvin Klein", logo: "/images/promos/calvin.png", width: {xs: "127px", md: "206.79px"}, height: {xs: "21px", md: "33.35px"} },
  ];

  return (
    <Box
      component="section"
      role="promo-banner"
      aria-labelledby="promo banner"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pl: { xs: 0, md: 5 },
        pr: { xs: 0, md: 10 },
        background: "#000",
        height: { xs: '146px', md: '122px'}
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1440,
          mx: "auto", // center the content
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          justifyContent={{ xs: "space-evenly", md: "space-between" }}
          alignItems="center"
        >
          {brands.map((brand, index) => (
            <Grid              
              key={index}              
              size={{ xs: 4, md: 2.4, sm: 4 }}
              sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <Box
                component="img"
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                sx={{
                  maxHeight: { xs: 60, md: 80 },
                  width: { xs: brand.width.xs, md: brand.width.md },
                  height: { xs: brand.height.xs, md: brand.height.md },
                  objectFit: "contain",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
