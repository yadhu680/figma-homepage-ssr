"use client";

import { Box, Grid, Typography, Link, Container } from "@mui/material";
import NewsletterWidget from "../components/NewsletterWidget";
import Image from "next/image";

// --- Data Structure for Footer Links ---
const footerLinks = [
    { 
        title: "COMPANY", 
        links: ["About", "Features", "Works", "Career"] 
    },
    { 
        title: "HELP", 
        links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"] 
    },
    { 
        title: "FAQ", 
        links: ["Account", "Manage Deliveries", "Orders", "Payments"] 
    },
    { 
        title: "RESOURCES", 
        links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"] 
    },
];

export default function FooterWidget() {
    const NEGATIVE_MARGIN_Y_MD = -100;
    const NEGATIVE_MARGIN_Y_XS = -120;
        
    const OVERLAP_MARGIN_XS = NEGATIVE_MARGIN_Y_XS / 8;
    const OVERLAP_MARGIN_MD = NEGATIVE_MARGIN_Y_MD / 8;
    
    return (
        <>
            {/* The NewsletterWidget will be the top element */}
            <NewsletterWidget />
                        
            <Box 
                sx={{ 
                    width: "100%",                   
                    backgroundColor: "#F0F0F0",                    
                    mt: { xs: OVERLAP_MARGIN_XS, md: OVERLAP_MARGIN_MD },                                        
                    pt: { 
                        xs: Math.abs(OVERLAP_MARGIN_XS) + 4,
                        md: Math.abs(OVERLAP_MARGIN_MD) + 5
                    },                                         
                    pb: { xs: 4, md: 8 }, 
                }}
            >
                <Container 
                    sx={{                         
                        display: "flex",
                        flexDirection: "column",                                                
                        mx: { xs: 0, md: 11 },     
                        maxWidth: { xs: "auto", md: "1340px" },  
                        px: { xs: 2, md: 0 }                                       
                    }}
                >                    
                    <Grid container spacing={{ xs: 2, md: 2 }}>                                                                                               
                        <Grid size={{ xs: 12 }} sx={{ width: { xs: "100%", md: "30%" } }}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle2" component="h4"
                                sx={{
                                  fontWeight: "bold",
                                  fontFamily: "Integral CF, sans-serif",
                                  fontDisplay: "swap",
                                  fontSize: "30px"
                                }}
                                 >
                                    SHOP.CO
                                </Typography>
                                <Typography variant="body2" mt={1} 
                                sx={{ 
                                  width: { xs: "95%", md: "64%" }, 
                                  color: "#727272",
                                  fontSize: "0.9rem"
                                }}
                                >
                                    We have clothes that suits your style and which you're proud to wear.
                                    From women to men.
                                </Typography>
                            </Box>
                            
                            {/* Social Icons */}                            
                            <Image 
                                src={`/figma-homepage-ssr/images/social.webp`}
                                alt={`Social Icons`}
                                width={148}
                                height={29}           
                                style={{ objectFit: "contain" }}
                            />
                            
                        </Grid>
                        
                        {footerLinks.map((col, index) => (
                            <Grid                                  
                                key={col.title}
                                size={{ xs: (index === 0 || index === 1) ? 6 : 6, md: 2 }}                                
                                sx={{
                                  width: { xs: "47%", md: "16%"}
                                }}
                            >
                                <Typography variant="subtitle1" fontWeight="500" color="text.primary" mb={2.5}>
                                    {col.title}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5}}>
                                    {col.links.map((linkText) => (
                                        <Link 
                                            href="#"
                                            key={linkText} 
                                            variant="body2" 
                                            color="#2B2B2B"
                                            fontSize="1rem" 
                                            onClick={(e) => e.preventDefault()}
                                            sx={{ 
                                                textDecoration: 'none', 
                                                '&:hover': { textDecoration: 'underline' } 
                                            }}
                                        >
                                            {linkText}
                                        </Link>
                                    ))}
                                </Box>
                            </Grid>
                        ))}
                        
                    </Grid>
                    
                    {/* --- SEPARATOR --- */}
                    <Box sx={{ borderTop: 1, borderColor: '#ccc', mt: { xs: 4, md: 6 }, pt: { xs: 3, md: 2 } }} />
                    
                    <Grid 
                        container 
                        alignItems="center"     
                        spacing={2}
                        sx={{
                          justifyContent: {xs: "center", md: "space-between" }
                        }}
                    >                        
                        {/* Copyright */}
                        <Grid                                                            
                            size={{ xs: 12, md: 6 }}                     
                            sx={{                                
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-start' },
                            }}
                        >
                            <Typography 
                                variant="body2" 
                                color="#727272"                                
                            >
                                Shop.co &copy; 2000-2023. All Rights Reserved.
                            </Typography>
                        </Grid>

                        {/* Payment Icons */}                                                   
                        <Image 
                            src={`/figma-homepage-ssr/images/payments.webp`}
                            alt={`Payment Cards`}
                            width={257}
                            height={42}           
                            style={{ objectFit: "contain" }}
                        />                    
                    </Grid>
                </Container>
            </Box>
        </>
    );
}