"use client";
//import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type Props = {
  id: string;
  name: string;
  price: number;
  image?: string;
  originalPrice?: number;
  discount?: number;
  rating?: string;
};

export default function ProductCard({ id, name, price, image, originalPrice, discount, rating }: Props) {
  return (
    <Card role="article" aria-labelledby={`product-${id}-title`} tabIndex={0}
      sx={{ 
        backgroundColor: "#FFFFFF", 
        boxShadow: 0, 
        width: "100%" 
      }}>

      <CardMedia component="img"
        sx={{ 
          width: { xs: "100%", md: "100%" }, 
          height: { xs: 200, md: 298 }, 
          objectFit: "cover", 
          borderRadius: 2,
          
        }}
        image={image} alt={name} loading="lazy"
      />

      <CardContent sx={{ px: 0, pt: 1.5, pb: 0 }}>
        <Typography id={`product-${id}-title`} variant="subtitle1"
        sx={{ 
          fontWeight: 700, 
          fontSize: { xs: 16, md: 20 }, 
          fontStyle: "bold", 
          lineHeight: "100%", 
          textAlign: "left" 
        }}
        >{name}</Typography>
        
        <Box
          component="img"
          src={`/images/rating_${rating}.png`}
          alt={`Rating ${rating}`}
          loading="lazy"
          sx={{ display: "flex", width: 110, height: "auto", textAlign: "left", my: 1 }}
        /> 

        <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mt: 0.5, 
              gap: 1 
            }}>
          <Typography variant="body2" sx={{ fontWeight: 600, fontSize: { xs: 16, md: 20 } }}>
            ${price?.toFixed(2)}
          </Typography>
          
          {originalPrice !== undefined && discount !== undefined && discount < 0 && (
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: 14, md: 20 },
                color: "#BBB",
                textDecoration: "line-through",
              }}
            >
              ${originalPrice.toFixed(2)}
            </Typography>
          )}
          
          {discount !== undefined && discount < 0 && (
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                width: 42,
                height: 20,
                fontSize: { xs: 11, md: 11 },
                color: "#FF3333",
                padding: "2px 3px",
                backgroundColor: "#FFEAEA",
                borderRadius: "62px",
                textAlign: "center",
              }}
            >
              {discount}%
            </Typography>
          )}

        </Box>

      </CardContent>
    </Card>
  );
}
