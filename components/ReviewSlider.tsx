"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

interface Review {
  id: number;
  name: string;
  review: string;
}

interface ReviewSliderProps {
  title?: string;
  reviews: Review[];
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({
  title = "Our Happy Customers",
  reviews,
}) => {
  const [current, setCurrent] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const nextSlide = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  
  const totalFrame = 5; // including partially visible edges

  const getFrameReviews = () => {
    if (isMobile) {
      return [reviews[current]]; // only one review on mobile
    }
    const arr: Review[] = [];
    for (let i = 0; i < totalFrame; i++) {
      arr.push(reviews[(current + i) % reviews.length]);
    }
    return arr;
  };

  const frameReviews = getFrameReviews();

  return (
    <Box
      sx={{        
        position: "relative",
        py: 6,
        overflow: "hidden",
        mx: 0,
      }}
    >
      {/* Title + Arrows */}
      <Box
        display="flex"
        mb={3}
        sx={{
          alignItems: "flex-end",
          justifyContent: "space-between",
          mx: { xs: 2, md: 11 },
          maxWidth: { xs: "auto", md: "1440px" },
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontSize: { xs: 32, md: 48 },
            fontWeight: 700,
            fontFamily: "Integral CF, sans-serif",
            fontDisplay: "swap",
            textTransform: "uppercase",
            mr: 2,
          }}
        >
          {title}
        </Typography>

        {/* Arrows */}
        <Box sx={{ flexShrink: 0, display: "flex", alignItems: "baseline" }}>
          <IconButton onClick={prevSlide} size="small">
            <ArrowBackIcon fontSize="small" sx={{ color: "text.primary" }} />
          </IconButton>
          <IconButton onClick={nextSlide} size="small">
            <ArrowForwardIcon fontSize="small" sx={{ color: "text.primary" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Slider */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: "12px", md: "14px" },
          position: "relative",
        }}
      >
        {frameReviews.map((review, index) => {
          let opacity = 1;
          let scale = 1;
          let filter = "none";

          // Apply blur only on desktop for left/right edges
          if (!isMobile && (index === 0 || index === frameReviews.length - 1)) {
            opacity = 0.9;
            scale = 1;
            filter = "blur(1.9px)";
          }

          return (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: opacity, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ flexShrink: 0 }}
            >
              <Card
                sx={{
                  width: { xs: "380px", md: "440px" },
                  height: { xs: "220px", md: "220px" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  opacity,
                  transform: `scale(${scale})`,
                  filter,
                  backgroundColor: "#fff",
                  boxShadow: 0,
                  border: 1,
                  borderColor: "#E1E1E1",
                  transition: "all 0.3s ease",
                  mx: isMobile ? "auto" : "unset",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    fontFamily: "Satoshi, sans-serif",
                    fontDisplay: "swap",
                  }}
                >
                  <Box>
                    <Typography variant="caption">                      
                      <Box
                        sx={{ display: "flex", width: 100, height: 16, textAlign: "left", my: 1, position: "relative" }}
                        >
                        <Image 
                          src={`/images/rating_star.png`}
                          alt={`Review Rating`}
                          fill                          
                        />
                      </Box>
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      fontSize="1.2rem"
                      sx={{ display: "flex", alignItems: "center", gap: "8px" }}
                    >
                      {review.name} <CheckCircleIcon sx={{ color: "#3B8004" }} />
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    mt={1}
                    sx={{
                      flexGrow: 1,
                      fontSize: "0.9rem",
                      color: "#666",
                    }}
                  >
                    “{review.review}”
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};

export default ReviewSlider;
