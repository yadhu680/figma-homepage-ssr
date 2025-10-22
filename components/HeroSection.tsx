"use client";

import { Box, Grid, Button, Typography } from "@mui/material";
import NextImage from "next/image";

export default function HeroSection() {

  const rect6MobileWidth = 390; 
  const rect6MobileHeight = 410;

  const vectorLeftWidth = 56; // Max desktop size
  const vectorLeftHeight = 56;
  
  const vectorRightWidth = 104; // Max desktop size
  const vectorRightHeight = 104;

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
        {/* Background Images - desktop */}
        <Box
            sx={{
                width: { xs: "390px", md: "100%" },
                height: { xs: "448px", md: "707px" },
                display: { xs: "none", md: "block" }, 
                objectFit: "cover",
                position: "relative",
            }}
        >
            <NextImage
                src="/images/hero.png"
                alt="hero image"
                priority
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
            />
        </Box>         

         {/* Rectangle 6 - mobile */}
        <Box
            sx={{
                width: { xs: "100%", md: "0" },
                height: { xs: "410px", md: "0" },
                display: { xs: "block", md: "none" }, 
                position: "relative",
            }}
        >
            <NextImage
                src="/images/Rectangle_6.png"
                alt="banner background image"
                width={rect6MobileWidth} 
                height={rect6MobileHeight}
                style={{
                  width: '100%', 
                  height: '100%',
                  objectFit: 'cover' 
                }}
            />
        </Box>          
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
                style={{ 
                    width: '100%', 
                    height: 'auto',
                    objectFit: "cover" 
                }}
            />
        </Box>
      
      <Box
        className="MuiBox-root-banner-container"
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
            fontSize: { xs: "36px", md: "64px" },           
            fontWeight: "700",
            fontStyle: "bold",
            color: "text.primary",
            lineHeight: { xs: "34px", md: "64px" },
            letterSpacing: "0%",
            verticalAlign: "middle"
          }}
        >
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </Typography>

        <Typography
          variant="body1"
          sx={{
            width: { xs: "358px", md: "545px" },
            height: { xs: "50px", md: "33px" },
            textAlign: "left",
            fontSize: { xs: "14px", md: "16px" }, 
            fontFamily: "Satoshi, sans-serif",               
            fontWeight: "400",
            fontStyle: "normal",
            color: "rgba(0, 0, 0, 0.6)",
            lineHeight: { xs: "20px", md: "22px" },
            letterSpacing: "0%",  
            mt: { xs: 3, md: 5 },     
          }}
        >
          Browse through our diverse range of meticulously crafted garments, designed to bring out your
          individuality and cater to your sense of style.
        </Typography>
        {/* Vector Image left */}
        <Box
            sx={{
                width: { xs: 44, md: 56 },
                height: { xs: 44, md: 56 },      
                position: "absolute",
                top: { xs: 520, md: 200 },
                right: { xs: 297, md: -260 },          
                zIndex: 1,
            }}
        >
            <NextImage
                src="/images/vector.png"
                alt="vector image"
                width={vectorLeftWidth} 
                height={vectorLeftHeight}
                style={{
                  width: '100%', 
                  height: '100%',
                  objectFit: 'contain'
                }}
            />
        </Box> 
        {/* Vector Image right */}
        <Box
            sx={{
                width: { xs: 76, md: 104 },
                height: { xs: 76, md: 104 },      
                position: "absolute",
                top: { xs: 425, md: -30 },
                right: { xs: 0, md: -850 },          
                zIndex: 1,
            }}
        >
            <NextImage
                src="/images/vector.png"
                alt="vector image"
                width={vectorRightWidth} 
                height={vectorRightHeight}
                style={{
                  width: '100%', 
                  height: '100%',
                  objectFit: 'contain'
                }}
            />
        </Box> 
        <Button
          sx={{
            backgroundColor: "text.primary",
            color: "#fff",
            borderRadius: "62px",
            height: "52px",
            padding: "16px 54px",
            gap: "12px",
            fontFamily: "Satoshi, sans-serif",
            width: { xs: "358px", md: "210px" },           
            textTransform: "capitalize",
            fontSize: "14px",
            mt: 4,
          }}
        >
          Shop Now
        </Button>

        {/* 3-Column Stats */}
        <Grid
            container
            spacing={{ xs: 4, md: 4 }}
            rowSpacing= {{xs: 2, md: 0}}
            sx={{
                mt: { xs: 3, md: 5 },
                justifyContent: { xs: "center", md: "flex-start" },
                width: { xs: "100%", md: "596px" },    
            }}
            >
            {[
                { value: "200+", label: "International Brands" },
                { value: "2,000+", label: "High-Quality Products" },
                { value: "30,000+", label: "Happy Customers" },
            ].map((item, index) => (
                <Grid
                key={index}                                
                size={{ xs: 6, md: 4 }}
                sx={{
                    borderRight: {
                    xs: index === 0 ? "1px solid #ccc" : "none",
                    md: index < 2 ? "1px solid #ccc" : "none",
                    },
                    pr: {
                    xs: index === 0 ? 3 : 0,
                    md: index < 2 ? 3 : 0,
                    },
                    textAlign: "left",
                    mb: { xs: 0, md: 0 },
                }}
                >
                <Typography
                    variant="h4"
                    sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: { xs: "24px", md: "32px" },
                    mb: 0,
                    }}
                >
                    {item.value}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                    fontFamily: "Satoshi, sans-serif",
                    fontSize: { xs: "13px", md: "15px" },
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