"use client";

import React from "react";
import { Box, Fade, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface SearchBarProps {
  showSearch: boolean;
  onToggle: () => void;
  topOffset: number;
  isSmall: boolean;
}

function SearchBar({
  showSearch,
  onToggle,
  topOffset,
  isSmall,
}: SearchBarProps) {
  if (!isSmall) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          borderRadius: "30px",
          px: 2,
          py: 0.5,
          width: 600,
          height: "40px",
        }}
      >
        <SearchIcon sx={{ color: "#555", fontSize: 20, mr: 1 }} />
        <input
          aria-label="Search products"
          type="text"
          placeholder="Search for products..."
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            width: "100%",
            fontFamily: "Satoshi, sans-serif",            
            fontSize: 14,
          }}
        />
      </Box>
    );
  }

  return showSearch ? (
    <Fade in={showSearch}>
      <Box
        sx={{
          position: "fixed",
          top: topOffset,
          left: 0,
          right: 0,
          width: "100vw",
          height: 58,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          px: 2,
          zIndex: 1500,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <SearchIcon sx={{ color: "#555", fontSize: 22, mr: 1 }} />
        <input
          autoFocus
          aria-label="Search products"
          type="text"
          placeholder="Search for products..."
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            width: "100%",
            fontSize: 15,
          }}
        />
        <IconButton aria-label="Close search" onClick={onToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Fade>
  ) : (
    <IconButton aria-label="Open search" onClick={onToggle}>
      <SearchIcon color="primary" />
    </IconButton>
  );
}

export default React.memo(SearchBar);