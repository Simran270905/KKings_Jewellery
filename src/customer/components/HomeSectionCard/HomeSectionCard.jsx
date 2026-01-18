import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div
      className="
        group cursor-pointer
        w-full max-w-[15rem]
        rounded-2xl overflow-hidden

        bg-gradient-to-b
        from-[#ffffff]
        via-[#fffaf3]
        to-[#fdf2e6]

        shadow-sm hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative w-full h-[17rem] overflow-hidden bg-[#fffaf3]">
        
        {/* 🔥 BADGES */}
        {product.isBestSeller && (
          <span
            className="
              absolute top-3 left-3 z-20
              rounded-full
              bg-gradient-to-r from-[#d4af37] to-[#b8860b]
              px-3 py-1
              text-[10px] font-semibold tracking-wide text-white
              shadow-md
            "
          >
            BEST SELLER
          </span>
        )}

        {product.isOnSale && (
          <span
            className="
              absolute top-3 right-3 z-20
              rounded-full
              bg-[#b91c1c]
              px-3 py-1
              text-[10px] font-semibold tracking-wide text-white
              shadow-md
            "
          >
            ON SALE
          </span>
        )}

        <img
          src={product.image}
          alt={product.title}
          className="
            w-full h-full object-cover object-top
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Soft warm glow */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#f3e6cf]/30
            via-transparent
            to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        />
      </div>

      {/* Content */}
      <div className="px-4 pt-4 pb-5 text-center space-y-1">
        <h3 className="text-base font-semibold tracking-wide text-[#3b1d1d]">
          {product.brand}
        </h3>

        <p className="text-sm text-[#5c3a2e] line-clamp-2">
          {product.title}
        </p>

        <div className="flex items-center justify-center gap-2 pt-2">
          <span className="text-[#b91c1c] font-semibold text-base">
            {product.selling_price}
          </span>
          <span className="text-[#9c7c4a] line-through text-sm">
            {product.price}
          </span>
        </div>

        <p className="text-green-700 text-xs font-medium pt-1">
          {product.disscount}
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
