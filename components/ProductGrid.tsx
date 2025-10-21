"use client";
import { Box, Grid, Typography, Button } from "@mui/material";
import ProductCard from "./ProductCard";

type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  originalPrice?: number;
  discount?: number;
  rating?: string;
};

interface ProductGridProps {
  heading: string;
  products: Product[];
}

export default function ProductGrid({ heading, products }: ProductGridProps) {
  return (
    <Box component="section" sx={{ mt: 6, width: "100%", textAlign: "center", mb: 8 }} 
        aria-labelledby={heading.toLowerCase().replace(/\s+/g, "-")}>

      <Typography
        variant="h5"
        component="h2"
        id={heading.toLowerCase().replace(/\s+/g, "-")}
        sx={{
          mb: 4,
          fontSize: { xs: 32, md: 48 },
          fontWeight: 700,
          fontFamily: "Integral CF, sans-serif",
          textTransform: "uppercase",          
        }}
      >
        {heading}
      </Typography>

      <Box
        sx={{
          width: "100%",          
          px: { xs: 1.8, md: 11 },
          mb: 4,
          maxWidth: 1440,
          overflowX: { xs: "auto", md: "visible" },
        }}
      >
        <Grid 
            container 
            spacing={{ xs: 1.2, md: 6.8 }}  
            sx={{
                width: "max-content",
                flexWrap: { xs: "nowrap", md: "wrap" }, // no wrap on mobile
            }}          
            >
            {products.map((p) => (
                <Grid item key={p.id} xs={6} sm={6} md={3}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
                >                
                    <ProductCard {...p} />                
                </Grid>
            ))}
        </Grid>
        <Button
            variant="outlined"
            sx={{
                mt: { xs: 1, md: 5 },
                px: "56px",
                py: "14px",                
                width: { xs: "100%", md: "218px" },
                height: { xs: "46px", md: "52px" },  
                borderRadius: "62px",
                borderWidth: "1px",
                borderColor: "#0000001A",
                color: "text.primary",
                fontSize: { xs: 14, md: 16 },
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "Satoshi, sans-serif",
                textTransform: "none",            
                transition: "all 0.3s ease",            
                "&:hover": {
                backgroundColor: "text.primary",
                color: "#fff",
                borderColor: "text.primary",
                },
            }}
        >
        View All
        </Button>
      </Box>
    </Box>
  );
}
