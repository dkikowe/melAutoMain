import { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CatalogPage.css";

const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [modalImages, setModalImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  useEffect(() => {
    setIsLoading(true);
    fetch("https://melautobackend-production.up.railway.app/get")
      .then((response) => response.json())
      .then((data) => {
        console.log("Полученные данные:", data);
        setProducts(data["cars"]);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error))
      .finally(() => setIsLoading(false)); // Отключаем загрузку после получения данных
  }, []);

  const openModal = (images) => {
    console.log("Открытие модального окна с изображениями:", images);
    setModalImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
  };

  return (
    <>
      <div className="catalog">
        {isLoading ? (
          <p className="loading-text">Загрузка...</p> // Текст во время загрузки
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              product={product}
              openModal={() => openModal(product.imageUrls)}
            />
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>

            {/* Слайдер внутри модального окна */}
            <Swiper
              pagination={{ clickable: true }}
              navigation
              modules={[Pagination, Navigation]}
              className="swiper-container"
            >
              {modalImages.map((imgUrl, index) => (
                <SwiperSlide key={index}>
                  <img src={imgUrl} alt={`Фото ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogPage;
