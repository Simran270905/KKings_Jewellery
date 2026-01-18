import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { chains } from "../../data/chains";
import { bracelets } from "../../data/bracelet";

const HomeSectionCarousel = ({ sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 2 },
    640: { items: 3 },
    1024: { items: 4 },
  };

  // Decide dataset
  const baseProducts =
    sectionName?.toLowerCase() === "bracelets"
      ? bracelets.slice(0, 10)
      : chains.slice(0, 10);

  // 🔥 Add badges to some products
  const products = baseProducts.map((product, index) => ({
    ...product,
    isBestSeller: index === 1 || index === 4,
    isOnSale: index === 2 || index === 6,
  }));

  const items = products.map((item, index) => (
    <div key={index} className="px-3 lg:px-4">
      <HomeSectionCard product={item} />
    </div>
  ));

  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-14 py-12 lg:py-16
      bg-gradient-to-b from-[#ffffff] via-[#fffaf3] to-[#fdf6ec]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f3e6cf]/20 via-transparent to-[#f3e6cf]/20" />

      {/* Heading */}
      <div className="relative mb-8 lg:mb-12">
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-wide text-[#ae0b0b]">
          {sectionName}
        </h2>
        <span className="mt-3 block h-[3px] w-16 rounded-full bg-gradient-to-r from-[#b91c1c] to-[#d4af37]" />
      </div>

      {/* Carousel */}
      <div className="relative">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={(e) => setActiveIndex(e.item)}
          stagePadding={{ paddingLeft: 16, paddingRight: 16 }}
        />

        {/* Next */}
        <Button
          onClick={() => carouselRef.current?.slideNext()}
          sx={{
            position: "absolute",
            top: "50%",
            right: "-2.5rem",
            transform: "translateY(-50%)",
            minWidth: 48,
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: "rgba(255,250,240,0.95)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 12px 28px rgba(180,140,90,0.25)",
            color: "#7a2e2e",
            "&:hover": { backgroundColor: "#b91c1c", color: "#fff" },
          }}
        >
          <KeyboardArrowRightIcon />
        </Button>

        {/* Prev */}
        <Button
          onClick={() => carouselRef.current?.slidePrev()}
          sx={{
            position: "absolute",
            top: "50%",
            left: "-2.5rem",
            transform: "translateY(-50%)",
            minWidth: 48,
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: "rgba(255,250,240,0.95)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 12px 28px rgba(180,140,90,0.25)",
            color: "#7a2e2e",
            "&:hover": { backgroundColor: "#b91c1c", color: "#fff" },
          }}
        >
          <KeyboardArrowLeftIcon />
        </Button>
      </div>
    </section>
  );
};

export default HomeSectionCarousel;
