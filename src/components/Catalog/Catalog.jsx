import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Catalog.module.sass";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Загружаем реальные машины
  useEffect(() => {
    fetch("https://melautobackend-production.up.railway.app/get")
      .then((response) => response.json())
      .then((data) => setProducts(data.cars || []))
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  // Берём только первые 5 машин
  const firstFive = products.slice(0, 5);

  // Настройки слайдера
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024, // Планшеты
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Телефоны
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Переход на страницу "Посмотреть все"
  const handleNavigate = () => {
    navigate("/catalog");
  };

  return (
    <div className={s.miniCatalog}>
      <div className={s.titles}>
        <h2 className={s.catalogTitle}>Каталог автомобилей</h2>
        <h2 onClick={handleNavigate} className={s.lookForAll}>
          Посмотреть все {">"}
        </h2>
      </div>

      <Slider {...settings}>
        {firstFive.map((product) => (
          <div key={product._id} className={s.miniCard}>
            {/* Фото (если нет - заглушка) */}
            <img
              src={product.imageUrls?.[0]?.url || "/placeholder.jpg"}
              alt={`${product.brand} ${product.model}`}
              className={s.miniImage}
            />

            {/* Название */}
            <p className={s.miniName}>
              {product.brand?.toUpperCase()} {product.model?.toUpperCase()}{" "}
              {product.year}
            </p>
            {/* Цена */}
            <p className={s.miniPrice}>{product.price?.toLocaleString()} $</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Catalog;
