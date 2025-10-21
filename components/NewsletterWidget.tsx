"use client";

import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function NewsletterWidget() {
  return (
    <Box
      sx={{
        backgroundColor: "text.primary",
        borderRadius: "16px",
        px: { xs: 3, md: 6 },
        py: { xs: 3, md: 5 },
        mx: { xs: 2, md: 11 },
        maxWidth: "1340px",        
        position: "relative"              
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Left column - Title */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Integral CF, sans-serif",
              textTransform: "uppercase",
              fontWeight: 700,
              textWrap: "wrap",
              width: { xs: "320px", md: "600px" },
              color: "#fff",
              fontSize: { xs: 30, md: 38 },              
              pr: { md: 3 },
            }}
          >
            Stay up to date about our latest offers
          </Typography>
        </Grid>

        {/* Right column - Email input & Button */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "stretch", md: "flex-end" },
            justifyContent: "center",
            gap: 2,            
            ml: { xs: 0, md: "auto" },
            width: { xs: "100%", md: "auto" }
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "column" },
              gap: { xs: 2, sm: 2 },
              width: { xs: "auto", md: "auto" },
              justifyContent: { xs: "left", md: "flex-end" },
            }}
          >
            <TextField
              placeholder="Enter your email address"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon sx={{ color: "#999" }} />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "#fff",
                  borderRadius: "62px",
                  height: 48,
                  minWidth: { xs: "100%", sm: 300 },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "text.primary",
                fontWeight: 600,
                borderRadius: "62px",
                textTransform: "none",
                px: 3,
                height: 48,
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Subscribe to Newsletter
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
