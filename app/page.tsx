// Server Component
import Box from "@mui/material/Box";
import PromoBanner from "../components/PromoBanner";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import CategoryWidget from "../components/CategoryWidget";
import ReviewSlider from "../components/ReviewSlider";

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
      { id: "p1", name: "T-shirt with Tape Details", price: 120, originalPrice: 120, image: "/images/p1.png", discount: 0, rating: "4.5" },
      { id: "p2", name: "Skinny Fit Jeans", price: 240, originalPrice: 260, image: "/images/p2.png", discount: -20, rating: "3.5" },
      { id: "p3", name: "Checkered Shirt", price: 180, originalPrice: 180, image: "/images/p3.png", discount: 0, rating: "4.5" },
      { id: "p4", name: "Sleeve Striped T-shirt", price: 130, originalPrice: 160, image: "/images/p4.png", discount: -30, rating: "4.5" },
    ],
    topSelling: [
      { id: "p5", name: "Vertical Striped Shirt", price: 212, originalPrice: 232, image: "/images/p5.png", discount: -20, rating: "5.0" },
      { id: "p6", name: "Courage Graphic T-shirt", price: 145, originalPrice: 145, image: "/images/p6.png", discount: 0, rating: "4.0" },
      { id: "p7", name: "Loose Fit Bermuda Shorts", price: 80, originalPrice: 80, image: "/images/p7.png", discount: 0, rating: "3.0" },
      { id: "p8", name: "Faded Skinny Jeans", price: 210, originalPrice: 210, image: "/images/p8.png", discount: 0, rating: "4.5" },
    ],
  };
}

export default async function Page() {
  const { newArrivals, topSelling } = await fetchProducts();

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
      review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      id: 3,
      name: "James L.",
      review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
   
    {
      id: 5,
      name: "David P.",
      review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
  ];

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <HeroSection />
      <PromoBanner />

      {/* Reusable product grid sections */}
      <ProductGrid heading="New Arrivals" products={newArrivals} />
      <Box
        sx={{
          width: { xs: "358px", md: "1340px" },
          height: "1px",
          backgroundColor: "#E0E0E0",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          my: 2
        }}
      />
      <ProductGrid heading="Top Selling" products={topSelling} />

      <CategoryWidget />
      
      <ReviewSlider title="Our Happy Customers" reviews={reviews} />      

    </Box>
  );
}
