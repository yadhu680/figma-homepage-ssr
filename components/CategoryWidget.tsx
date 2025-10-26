"use client";

import { Box, Grid, Typography, Card, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const imagePath = "/figma-homepage-ssr/images/categories/";
const categories = [        
    { title: "Casual", Deskimage: `${imagePath}casual_desk.webp`, Mobimage: `${imagePath}casual_mob.webp`, mdWidth: 3 },
    { title: "Formal", Deskimage: `${imagePath}formal_desk.webp`, Mobimage: `${imagePath}formal_mob.webp`, mdWidth: 5 },
    { title: "Party", Deskimage: `${imagePath}party_desk.webp`, Mobimage: `${imagePath}party_mob.webp`, mdWidth: 5 },
    { title: "Gym", Deskimage: `${imagePath}gym_desk.webp`, Mobimage: `${imagePath}gym_mob.webp`, mdWidth: 3 },
];

const MAX_WIDTH = 500; 
const MAX_HEIGHT = 240; 

export default function CategoryWidget() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    

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
                    width: { xs: "90%", md: "100%" },
                    textAlign: "center",
                    mx: "auto"
                }}
            >
                Browse By Dress Style
            </Typography>

            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{
                    maxWidth: { xs: 360, md: 1340 },
                    mx: "auto",
                    px: { xs: 0, md: 0 }
                }}
            >
                {categories.map((cat) => (
                    <Grid
                        size={{ xs: 12, md: cat.mdWidth }}
                        key={cat.title}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Card
                            sx={{
                                width: "100%",
                                borderRadius: "16px",
                                overflow: "hidden",
                                boxShadow: 0,
                                position: "relative",
                                cursor: "pointer",
                                transition: "transform 0.3s ease",
                                "&:hover": { transform: "scale(1.02)" },
                            }}
                        >      
                        <Box
                            sx={{
                                width: "100%",
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: "12px",
                            }}
                            >
                            <Image
                                src={isMobile ? cat.Mobimage : cat.Deskimage}
                                alt={cat.title}
                                width={0}
                                height={0}
                                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                                quality={80}
                                priority={false}
                                style={{
                                width: "100%",
                                height: "auto", // ✅ preserves natural aspect ratio
                                objectFit: "cover",
                                display: "block",
                                }}
                            />
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}