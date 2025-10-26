"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const repoName = "/figma-homepage-ssr/";
const BRANDS = [
  { name: "Versace", logo: `${repoName}images/promos/versace.webp`, maxWidth: 167, maxHeight: 34 },
  { name: "Zara", logo: `${repoName}images/promos/zara.webp`, maxWidth: 91, maxHeight: 38 },
  { name: "Gucci", logo: `${repoName}images/promos/gucci.webp`, maxWidth: 156, maxHeight: 36 },
  { name: "Prada", logo: `${repoName}images/promos/prada.webp`, maxWidth: 194, maxHeight: 32 },
  { name: "Calvin Klein", logo: `${repoName}images/promos/calvin.webp`, maxWidth: 207, maxHeight: 34 },
];

const MAX_IMAGE_WIDTH = Math.max(...BRANDS.map(b => b.maxWidth));
const MAX_IMAGE_HEIGHT = Math.max(...BRANDS.map(b => b.maxHeight));

export default function PromoBanner() {
  return (
    <Box
      component="section"      
      aria-label="Featured Brands Banner"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, md: 11.5},
        background: "#000",
        height: { xs: '146px', md: '122px'},
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1440,
          mx: "auto",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 17.5 }}
          justifyContent={{ xs: "space-evenly", md: "space-between" }}
          alignItems="center"
        >
          {BRANDS.map((brand) => (
            <Grid              
              key={brand.name}              
              size={{ xs: 4, sm: 4, md: 2.4 }}
              sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <Box 
                sx={{                    
                    maxWidth: { xs: '127px', md: `${brand.maxWidth}px` },
                    maxHeight: { xs: '33px', md: `${brand.maxHeight}px` },                                        
                    width: '100%', 
                    height: { xs: '34px', md: '38px' }, 
                    position: "relative",
                  }}
                >
                <Image 
                  src={brand.logo}
                  alt={`${brand.name} logo`}                  
                  width={MAX_IMAGE_WIDTH} 
                  height={MAX_IMAGE_HEIGHT}                  
                  sizes="(max-width: 600px) 33vw, (max-width: 900px) 20vw, 15vw"                                    
                  style={{ 
                    objectFit: "contain",                   
                    width: "100%", 
                    height: "100%"
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}