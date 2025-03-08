import { useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

// Функция для прокрутки к секции
const scrollToSection = (id) => {
  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 125; // Отступ для хедера
      const elementPosition =
        section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }, 300); // Небольшая задержка для корректного рендера
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (id) => {
    if (location.pathname === "/home") {
      scrollToSection(id);
    } else {
      navigate(`/home?scrollTo=${id}`);
    }
  };

  return (
    <header className="header bg-black text-white position-fixed top-0 start-0 w-100 shadow-sm d-flex align-items-center justify-content-between px-3">
      <NavLink to="/home">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>

      {/* Сендвич меню */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Навигация */}
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <a onClick={() => handleNavigation("about")} className="nav-item">
          О НАС
        </a>
        <a onClick={() => handleNavigation("services")} className="nav-item">
          УСЛУГИ
        </a>
        <a onClick={() => handleNavigation("feedback")} className="nav-item">
          ОТЗЫВЫ
        </a>
        <NavLink to="/catalog" className="nav-item">
          КАТАЛОГ
        </NavLink>
      </nav>

      {/* Телефон */}
      <div className="phone">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-phone"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <h5>+48509156405 </h5>
      </div>
    </header>
  );
}
