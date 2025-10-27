"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useScrollCondense } from "./useScrollCondense";
import TopStrip from "./TopStrip";
import SearchBar from "./SearchBar";

const TOP_STRIP_HEIGHT = 38;

export default function HeaderClient() {
  const [topStripVisible, setTopStripVisible] = useState(true);
  const { condensed, showTopStrip, setShowTopStrip } = useScrollCondense(topStripVisible);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const isSmall = useMediaQuery("(max-width:900px)", { noSsr: true });  

  const handleShopClick = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget);
    const handleShopClose = () => setAnchorEl(null);

    return (
      <>
          <Box
          sx={{
              height: "0px",
              overflow: "hidden",
              transition: "height 0.3s ease",
          }}
          >
          <TopStrip 
              visible={topStripVisible}
              onClose={() => {
                  setShowTopStrip(false);
                  setTimeout(() => setTopStripVisible(false), 300);
              }}
              
              show={showTopStrip}
          />
          </Box>
        <AppBar
          position="sticky"
          color="transparent"
          elevation={condensed ? 2 : 0}
          sx={{
              backdropFilter: "blur(8px)",
              height: { xs: condensed ? 56 : 56, md: condensed ? 65 : 65 },
              backgroundColor: "#fff",
              top: 0,
              transition: "top 0.3s ease, height 0.3s ease, background-color 0.3s ease",
              zIndex: 1101,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: 1400,
              mx: "auto",
              width: "100%",
              px: 2,
            }}
          >
            {/* Left */}
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 8 } }}>
              {isSmall && (
                <IconButton aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
                  <MenuIcon color="primary" />
                </IconButton>
              )}
              <Typography
                variant="subtitle2"
                component="h4"
                sx={{
                  fontFamily: "Integral CF, sans-serif",
                  fontDisplay: "swap",
                  fontSize: { xs: "25.2px", md: "36px" },
                  fontWeight: 700,
                  color: "text.primary",
                }}
              >
                SHOP.CO
              </Typography>

              {!isSmall && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <Typography
                    onClick={handleShopClick}
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "Satoshi, sans-serif",
                      fontDisplay: "swap",
                    }}
                  >
                    Shop
                    {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </Typography>
                  <Typography sx={{ cursor: "pointer" }}>On Sale</Typography>
                  <Typography sx={{ cursor: "pointer" }}>New Arrivals</Typography>
                  <Typography sx={{ cursor: "pointer" }}>Brands</Typography>
                </Box>
              )}
            </Box>

            {/* Right */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <SearchBar
                showSearch={showSearch}
                onToggle={() => setShowSearch(!showSearch)}
                topOffset={0}
                isSmall={isSmall}
              />
              <IconButton aria-label="Cart">
                <ShoppingCartOutlinedIcon color="primary" />
              </IconButton>
              <IconButton aria-label="Account">
                <AccountCircleOutlinedIcon color="primary" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleShopClose}
          disableScrollLock
        >
          <MenuItem onClick={handleShopClose}>Men</MenuItem>
          <MenuItem onClick={handleShopClose}>Women</MenuItem>
          <MenuItem onClick={handleShopClose}>Accessories</MenuItem>
        </Menu>

        {/* Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 260, p: 1 }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={handleShopClick} sx={{ justifyContent: "space-between" }}>
                  <ListItemText primary="Shop" />
                  {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </ListItemButton>
              </ListItem>
              <Divider sx={{ my: 1 }} />
              {["On Sale", "New Arrivals", "Brands"].map((item) => (
                <ListItem key={item}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </>
    );
}
