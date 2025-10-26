"use client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

type Props = {
  id: string;
  name: string;
  price: number;
  image?: string;
  originalPrice?: number;
  discount?: number;
  rating?: string;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
  originalPrice,
  discount,
  rating,
}: Props) {
  const hasDiscount = typeof discount === "number" && discount > 0;
  const isImageAvailable = typeof image === "string" && image.length > 0;
  const ratingImagePath = rating ? `/figma-homepage-ssr/images/rating_${rating}.png` : "";

  return (
    <Card
      role="article"
      aria-labelledby={`product-${id}-title`}
      tabIndex={0}
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: 0,
        width: "100%",
        transition: "transform 0.25s ease-out",
        "&:hover": {
          cursor: "pointer",
          transform: "scale(1.01)",
        },
      }}
    >
      {/* --- Product Image --- */}
      <Box
        sx={{         
          borderRadius: 2,
          overflow: "hidden",          
          width: "100%",
          backgroundColor: "#f8f8f8",
        }}
      >
        {isImageAvailable ? (
            <Image
            src={image}
            alt={name}
            width={400} 
            height={400}
            style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "block",
            }}
            quality={80}
            loading="lazy"
            sizes="(max-width: 600px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
        ) : (
            <Box
            sx={{
                position: "relative",
                paddingTop: "100%",
                backgroundColor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            >
            <Typography variant="caption" color="text.secondary">
                No Image
            </Typography>
            </Box>
        )}
      </Box>

      {/* --- Card Content (Name, Rating, Price) --- */}
      <CardContent sx={{ px: 0, pt: 1.5, pb: 0 }}>
        {/* Product Name */}
        <Typography
          id={`product-${id}-title`}
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: { xs: 16, md: 20 },
            lineHeight: "1.2em",
            textAlign: "left",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Typography>

        {/* Rating */}
        {rating && (
          <Box sx={{ display: "flex", textAlign: "left", my: 1 }}>
            <Image
              src={ratingImagePath}
              alt={`Rating ${rating}`}
              width={110}
              height={16}
              style={{ objectFit: "contain" }}
            />
          </Box>
        )}

        {/* Price and Discount */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 0.5,
            gap: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: { xs: 16, md: 20 },
              color: hasDiscount ? "#FF3333" : "text.primary",
            }}
          >
            ${price?.toFixed(2)}
          </Typography>

          {hasDiscount && originalPrice !== undefined && (
            <>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 14, md: 16 },
                  color: "#BBB",
                  textDecoration: "line-through",
                }}
              >
                ${originalPrice.toFixed(2)}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: 11, md: 12 },
                  color: "#FF3333",
                  padding: "3px 6px",
                  backgroundColor: "#FFEAEA",
                  borderRadius: "62px",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                -{discount}%
              </Typography>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
