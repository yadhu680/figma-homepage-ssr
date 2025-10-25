"use client";

import { Box, Grid, Button, Typography } from "@mui/material";
import NextImage from "next/image";
import { memo } from "react";

// Constants outside component to prevent reallocation on render
const HERO_STATS = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

const VECTOR_LEFT = { width: 56, height: 56 };
const VECTOR_RIGHT = { width: 104, height: 104 };
const RECT6_MOBILE = { width: 390, height: 410 };

function HeroSection() {
  return (
    <Box
      component="section"
      aria-labelledby="hero-title"
      sx={{
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        mb: 0,
        mx: "calc(50% - 50vw)",
      }}
    >
      {/* Background Image - Desktop */}
      <Box
        sx={{
          width: { xs: "390px", md: "100%" },
          height: { xs: "448px", md: "707px" },
          display: { xs: "none", md: "block" },
          position: "relative",
        }}
      >
        <NextImage
          src="/images/hero.png"
          alt="hero image"
          fill
          priority
          quality={80}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>

      {/* Rectangle 6 - Mobile */}
      <Box
  sx={{
    width: { xs: "100%", md: "0" },
    display: { xs: "block", md: "none" },
    position: "relative",
    overflow: "hidden",
    // ✅ maintain the image’s intrinsic aspect ratio (height / width * 100)
    aspectRatio: "390 / 380", // or use paddingBottom: '105%'
  }}
>
  <NextImage
    src="/images/Rectangle_6.png"
    alt="banner background image"
    fill
    quality={75}
    loading="lazy"
    sizes="100vw"
    style={{
      objectFit: "cover",
    }}
  />
</Box>

      {/* Rectangle 2 - Mobile */}
      <Box
        sx={{
          width: { xs: "100%" },
          height: { xs: "495px" },
          display: { xs: "block", md: "none" },
          position: "relative",
        }}
      >
        <NextImage
          src="/images/Rectangle_2.png"
          alt="mobile banner image"
          width={390}
          height={300}
          quality={75}
          loading="lazy"
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Box>

      {/* Banner Content */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "3%", md: "15%" },
          left: { xs: "50%", md: "6%" },
          transform: { xs: "translateX(-50%)", md: "none" },
          color: "#fff",
          textAlign: { xs: "center", md: "left" },
          maxWidth: { xs: "90%", md: "500px" },
        }}
      >
        <Typography
          variant="h3"
          id="hero-title"
          sx={{
            width: { xs: "315px", md: "577px" },
            height: { xs: "93px", md: "173px" },
            textAlign: "left",
            fontFamily: "Integral CF, sans-serif",
            fontDisplay: "swap",
            fontSize: { xs: "36px", md: "64px" },
            fontWeight: 700,
            color: "text.primary",
            lineHeight: { xs: "34px", md: "64px" },
          }}
        >
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </Typography>

        <Typography
          variant="body1"
          sx={{
            width: { xs: "358px", md: "545px" },
            textAlign: "left",
            fontSize: { xs: "14px", md: "16px" },
            fontFamily: "Satoshi, sans-serif",
            fontDisplay: "swap",
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.6)",
            lineHeight: { xs: "20px", md: "22px" },
            mt: { xs: 3, md: 5 },
          }}
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </Typography>

        {/* Vector Image Left */}
        <Box
          sx={{
            width: { xs: 44, md: VECTOR_LEFT.width },
            height: { xs: 44, md: VECTOR_LEFT.height },
            position: "absolute",
            top: { xs: 540, md: 200 },
            right: { xs: 312, md: -260 },
            zIndex: 1,
          }}
        >
          <NextImage
            src="/images/vector.png"
            alt="vector left"
            width={VECTOR_LEFT.width}
            height={VECTOR_LEFT.height}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>

        {/* Vector Image Right */}
        <Box
          sx={{
            width: { xs: 76, md: VECTOR_RIGHT.width },
            height: { xs: 76, md: VECTOR_RIGHT.height },
            position: "absolute",
            top: { xs: 440, md: -15 },
            right: { xs: 0, md: -850 },
            zIndex: 1,
          }}
        >
          <NextImage
            src="/images/vector.png"
            alt="vector right"
            width={VECTOR_RIGHT.width}
            height={VECTOR_RIGHT.height}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>

        <Button
          sx={{
            backgroundColor: "text.primary",
            color: "#fff",
            borderRadius: "62px",
            height: "52px",
            padding: "16px 54px",
            fontFamily: "Satoshi, sans-serif",
            fontDisplay: "swap",
            width: { xs: "358px", md: "210px" },
            textTransform: "capitalize",
            fontSize: "14px",
            mt: 4,
          }}
        >
          Shop Now
        </Button>

        {/* Stats Section */}
        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          rowSpacing={{ xs: 2, md: 0 }}
          sx={{
            mt: { xs: 3, md: 5 },
            justifyContent: "center",
            width: { xs: "100%", md: "600px" },
          }}
        >
          {HERO_STATS.map((item, index) => (
            <Grid
              key={item.value}
              size={{ xs: 6, md: 4 }}
              sx={{
                borderRight: {
                  xs: index === 0 ? "1px solid #ccc" : "none",
                  md: index < 2 ? "1px solid #ccc" : "none",
                },
                pr: {
                  xs: index === 0 ? 3 : 0,
                  md: index < 2 ? 4 : 0,
                },
                textAlign: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                  fontFamily: "Satoshi, sans-serif",
                  fontDisplay: "swap",
                  fontSize: { xs: "24px", md: "32px" },
                  lineHeight: { xs: "1.2", md: "1.2" },
                }}
              >
                {item.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "Satoshi, sans-serif",
                  fontDisplay: "swap",
                  fontSize: { xs: "13px", md: "15px" },
                  lineHeight: { xs: "1.4", md: "1.4" },
                  color: "#999",
                }}
              >
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default memo(HeroSection);
