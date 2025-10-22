"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Fade,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Header() {
  const [condensed, setCondensed] = useState(false);
  const [showTopStrip, setShowTopStrip] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [topStripVisible, setTopStripVisible] = useState(true);

  const lastScrollY = useRef(0);
  const isSmall = useMediaQuery("(max-width:900px)");

  // Dropdown state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleShopClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleShopClose = () => setAnchorEl(null);

  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open: boolean) => () => setDrawerOpen(open);

  // Smooth scroll handler
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // If the top strip is closed by the user, stop changing condensed/showTopStrip.
          if (!topStripVisible) {
            // keep lastScrollY synced so future openings behave correctly
            lastScrollY.current = currentY;
            ticking = false;
            return;
          }

          const scrollingDown = currentY > lastScrollY.current;

          if (scrollingDown && currentY > 36) {
            setShowTopStrip(false);
            setCondensed(true);
          } else {
            setShowTopStrip(true);
            setCondensed(currentY > 36);
          }

          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [topStripVisible]);


  return (
    <>
      {/* ====== Top Strip ====== */}
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
          transform: showTopStrip ? "translateY(0)" : "translateY(-100%)",
          opacity: showTopStrip ? 1 : 0,
          height: topStripVisible ? 38 : 0,
          overflow: "hidden",
        }}
      >
        {topStripVisible && (
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
                textAlign: "center",
              }}
            >
              Sign up and get 20% off your first order.&nbsp;
              <Typography
                component="a"
                href="javascript: void(0)"
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

            {/* Close icon visible on desktop */}
            {!isSmall && (
              <IconButton
                onClick={() => {
                  setTopStripVisible(false);
                  setShowTopStrip(false);
                  setCondensed(false);
                  lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;
                }}
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
        )}
      </Box>

      {/* ====== AppBar ====== */}
      <AppBar
        position="sticky"
        color="transparent"
        elevation={condensed ? 2 : 0}
        sx={{
          backdropFilter: "blur(8px)",
          height: topStripVisible
          ? { xs: condensed ? 56 : 60, md: condensed ? 60 : 65 }
          : { xs: 64, md: 65 },          
          backgroundColor: "#fff",
          top: topStripVisible && showTopStrip ? 38 : 0,
          transition: "all 0.3s ease",
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
          {/* ===== Left Section ===== */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 8 },
              flex: { xs: "1 1 50%", md: "0 0 45%" },
            }}
          >
            {isSmall && (
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon color="primary" />
              </IconButton>
            )}
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Integral CF, sans-serif",
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
                  }}
                >
                  Shop
                  {anchorEl ? (
                    <KeyboardArrowUpIcon fontSize="small" />
                  ) : (
                    <KeyboardArrowDownIcon fontSize="small" />
                  )}
                </Typography>
                <Typography sx={{ cursor: "pointer" }}>On Sale</Typography>
                <Typography sx={{ cursor: "pointer" }}>New Arrivals</Typography>
                <Typography sx={{ cursor: "pointer" }}>Brands</Typography>
              </Box>
            )}
          </Box>

          {/* ===== Right Section ===== */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "flex-end",
              flex: { xs: "1 1 50%", md: "0 0 55%" },
            }}
          >
            {!isSmall && (
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
            )}

            {/* Mobile Search */}
            {isSmall && !showSearch && (
              <IconButton onClick={() => setShowSearch(true)}>
                <SearchIcon color="primary" />
              </IconButton>
            )}

            {isSmall && showSearch && (
              <Fade in={showSearch}>
                <Box
                  sx={{
                    position: "fixed",
                    top: topStripVisible && showTopStrip ? 38 : 0,
                    left: 0,
                    right: 0,
                    width: "100vw",
                    height: 55,
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
                    type="text"
                    placeholder="Search for products..."
                    autoFocus
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      width: "100%",
                      fontSize: 15,
                    }}
                  />
                  <IconButton onClick={() => setShowSearch(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Fade>
            )}

            <IconButton>
              <ShoppingCartOutlinedIcon color="primary" />
            </IconButton>
            <IconButton>
              <AccountCircleOutlinedIcon color="primary" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ===== Dropdown ===== */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleShopClose}
        disableScrollLock
        MenuListProps={{
          sx: { minWidth: 180, fontFamily: "Satoshi, sans-serif" },
        }}
      >
        <MenuItem onClick={handleShopClose}>Men</MenuItem>
        <MenuItem onClick={handleShopClose}>Women</MenuItem>
        <MenuItem onClick={handleShopClose}>Accessories</MenuItem>
      </Menu>

      {/* ===== Drawer ===== */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 260, p: 1 }}>
          <List>
            {/*<ListItem 
              button
              onClick={handleShopClick}
              sx={{ justifyContent: "space-between" }}
            >
              <ListItemText primary="Shop" />
              {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </ListItem> */}

            <ListItem disablePadding>
              <ListItemButton onClick={handleShopClick} sx={{ justifyContent: "space-between" }}>
                <ListItemText primary="Shop" />
                {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 1 }} />

            <ListItem disablePadding>              
                <ListItemText primary="On Sale" />                              
            </ListItem>
            <ListItem disablePadding>              
                <ListItemText primary="New Arrivals" />                              
            </ListItem>
            <ListItem disablePadding>              
                <ListItemText primary="Brands" />                              
            </ListItem>

            {/*<ListItem button>
              <ListItemText primary="On Sale" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="New Arrivals" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Brands" />
            </ListItem>*/}
            
          </List>
        </Box>
      </Drawer>
    </>
  );
}
