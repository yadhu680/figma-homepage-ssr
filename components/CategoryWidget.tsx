"use client";

import { Box, Grid, Typography, Card, CardMedia, useMediaQuery, useTheme } from "@mui/material";

export default function CategoryWidget() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const imagePath = "/images/categories/";
    const categories = [
    { title: "Casual", Deskimage: `${imagePath}casual_desk.png`, Mobimage: `${imagePath}casual_mob.png`, width: 280 },
    { title: "Formal", Deskimage: `${imagePath}formal_desk.png`, Mobimage: `${imagePath}formal_mob.png`, width: 500 },
    { title: "Party", Deskimage: `${imagePath}party_desk.png`, Mobimage: `${imagePath}party_mob.png`, width: 500 },
    { title: "Gym", Deskimage: `${imagePath}gym_desk.png`, Mobimage: `${imagePath}gym_mob.png`, width: 280 },
    ];

    return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        maxWidth: "1340px",        
        borderRadius: "16px",
        px: { xs: 2, md: 0 },
        pt: { xs: 2, md: 3 },
        pb: { xs: 2, md: 8 },
        mt: 6,
        mx: { xs: 2, md: "auto" },
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontFamily: "Integral CF, sans-serif",
          fontSize: { xs: 32, md: 48 },
          fontWeight: 700,
          mt: 3,
          mb: 5,
          textTransform: "uppercase",
          width: "100%",
          textAlign: "center",
          mx: "auto"
        }}
      >
        Browse By Dress Style
      </Typography>

      {/* Category Grid */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: { xs: 360, md: 1200 },
          mx: "auto",
        }}
      >
        {/* First Row */}
        <Grid
          container                    
          size={{ xs: 12 }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {categories.slice(0, 2).map((cat) => (
            <Grid              
              key={cat.title}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: 300, md: cat.width },
              }}
            >
              <Card
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: 0,
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >                
                <CardMedia
                component="img"
                image={isMobile ? cat.Mobimage : cat.Deskimage}
                alt={cat.title}
                loading="lazy"
                sx={{
                  width: { xs: 300, md: cat.width },
                  height: 180,
                  objectFit: "cover",
                }}
              />

              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Second Row */}
        <Grid
          container                    
          size={{ xs: 12 }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {categories.slice(2).map((cat) => (
            <Grid              
              key={cat.title}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: 300, md: cat.width},
              }}
            >
              <Card
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: 0,
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <CardMedia
                    component="img"
                    image={isMobile ? cat.Mobimage : cat.Deskimage}
                    alt={cat.title}
                    loading="lazy"
                    sx={{
                      width: { xs: 300, md: cat.width },
                      height: 180,
                      objectFit: "cover",
                    }}
                />                
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
