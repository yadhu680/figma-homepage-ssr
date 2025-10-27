// Server Component
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import Shimmer from "../components/Shimmer";

// Lazy-load below components
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: true,
});

const ProductGrid = dynamic(() => import("../components/ProductGrid"), {
  ssr: true,
});

const PromoBanner = dynamic(() => import("../components/PromoBanner"), {
  ssr: false,
  loading: () => <Shimmer height={120} />,
});

const CategoryWidget = dynamic(() => import("../components/CategoryWidget"), {
  ssr: false,
  loading: () => <Shimmer height={400} />,
});

const ReviewSlider = dynamic(() => import("../components/ReviewSlider"), {
  ssr: false,
  loading: () => <Shimmer height={320} />,
});

// --- Types ---
type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  originalPrice?: number;
  discount?: number;
  rating?: string;
};

async function fetchProducts(): Promise<{ newArrivals: Product[]; topSelling: Product[] }> {
  return {
    newArrivals: [
      { id: "p1", name: "T-shirt with Tape Details", price: 120, image: "/figma-homepage-ssr/images/p1.webp", rating: "4.5" },
      { id: "p2", name: "Skinny Fit Jeans", price: 240, originalPrice: 260, image: "/figma-homepage-ssr/images/p2.webp", discount: 20, rating: "3.5" },
      { id: "p3", name: "Checkered Shirt", price: 180, image: "/figma-homepage-ssr/images/p3.webp", rating: "4.5" },
      { id: "p4", name: "Sleeve Striped T-shirt", price: 130, originalPrice: 160, image: "/figma-homepage-ssr/images/p4.webp", discount: 30, rating: "4.5" },
    ],
    topSelling: [
      { id: "p5", name: "Vertical Striped Shirt", price: 212, originalPrice: 232, image: "/figma-homepage-ssr/images/p5.webp", discount: 20, rating: "5.0" },
      { id: "p6", name: "Courage Graphic T-shirt", price: 145, image: "/figma-homepage-ssr/images/p6.webp", rating: "4.0" },
      { id: "p7", name: "Loose Fit Bermuda Shorts", price: 80, image: "/figma-homepage-ssr/images/p7.webp", rating: "3.0" },
      { id: "p8", name: "Faded Skinny Jeans", price: 210, image: "/figma-homepage-ssr/images/p8.webp", rating: "4.5" },
    ],
  };
}

const reviews = [
  {
    id: 4,
    name: "Emily D.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 1,
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 3,
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    id: 5,
    name: "David P.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
];

// --- Page Component ---
export default async function Page() {
  const { newArrivals, topSelling } = await fetchProducts();

  return (
    <Box sx={{ width: "100%" }}>      
      <HeroSection />      
      <PromoBanner />
      <ProductGrid heading="New Arrivals" products={newArrivals} />
      <Box
        sx={{
          width: { xs: "92%", md: "1340px" },
          height: "1px",
          backgroundColor: "#E0E0E0",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          my: 2,
        }}
      />
      <ProductGrid heading="Top Selling" products={topSelling} />
      <CategoryWidget />
      <ReviewSlider title="Our Happy Customers" reviews={reviews} />
    </Box>
  );
}
