import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Product.css";

const Product = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="swiper-container"
        >
          {product.imageUrls?.map((imgObj, index) => {
            const imageUrl = typeof imgObj === "string" ? imgObj : imgObj.url;
            return (
              <SwiperSlide key={index}>
                <img
                  src={imageUrl}
                  alt={`${product.brand} ${product.model} ${index + 1}`}
                  className="product-image"
                  onClick={() => openModal(index)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="product-info">
        <p className="product-price">{product.price.toLocaleString()} $</p>
        <p className="product-name">
          {product.brand.toUpperCase()} {product.model.toUpperCase()}{" "}
          {product.year}
        </p>
        <p className="product-description">
          Пробег {product.mileage} · {product.fuelType} ·{" "}
          {product.condition === "new" ? "НОВЫЙ" : "Б/У"}
        </p>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <Swiper
              initialSlide={currentIndex}
              navigation
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              className="swiper-modal"
            >
              {product.imageUrls?.map((imgObj, index) => {
                const imageUrl =
                  typeof imgObj === "string" ? imgObj : imgObj.url;
                return (
                  <SwiperSlide key={index}>
                    <img src={imageUrl} alt={`Product ${index + 1}`} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
