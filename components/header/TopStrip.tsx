"use client";

import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";

interface TopStripProps {
  visible: boolean;
  onClose: () => void;
  show: boolean;
}

function TopStrip({ visible, onClose, show }: TopStripProps) {  
  const isSmall = useMediaQuery("(max-width:900px)", { noSsr: true });

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        top: 0,
        backgroundColor: "text.primary",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1100,
        px: 2,
        transition: "transform 0.4s ease, opacity 0.4s ease",
        transform: show ? "translateY(0)" : "translateY(-100%)",
        opacity: show ? 1 : 0,
        height: visible ? 38 : 0,
        overflow: "hidden",        
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          mx: "auto",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: 12, md: 14 },
            fontFamily: "Satoshi, sans-serif",
            fontDisplay: "swap",
            textAlign: "center",
          }}
        >
          Sign up and get 20% off your first order.&nbsp;
          <Typography
            component="a"
            href="#signup"
            sx={{
              color: "#fff",
              textDecoration: "underline",
              fontSize: { xs: 12, md: 14 },
              fontWeight: 500,
              cursor: "pointer",
              "&:hover": { color: "#ccc" },
            }}
          >
            Signup Now
          </Typography>
        </Typography>

        {!isSmall && (
          <IconButton
            aria-label="Close top strip"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 28,
              color: "#fff",
              p: 0.5,
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}

export default React.memo(TopStrip);