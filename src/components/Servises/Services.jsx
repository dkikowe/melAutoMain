import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";

const services = [
  {
    icon: "/icons/car.svg",
    title: "Подбор и покупка авто",
    text: "Поможем выбрать и проверить автомобиль в Европе перед покупкой.",
  },
  {
    icon: "/icons/square.svg",
    title: "Доставка в СНГ",
    text: "Организуем безопасную и быструю доставку автомобиля.",
  },
  {
    icon: "/icons/documents.png",
    title: "Оформление документов",
    text: "Берём на себя оформление всех экспортных документов и страховки.",
  },
  {
    icon: "/icons/garant.svg",
    title: "Таможенное оформление",
    text: "Проходим таможенные процедуры без задержек и лишних затрат.",
  },
  {
    icon: "/icons/zapchast.png",
    title: "Поставка запчастей",
    text: "Доставляем оригинальные и контрактные запчасти напрямую из Европы.",
  },
  {
    icon: "/icons/opacity.png",
    title: "Гарантия прозрачности",
    text: "Вы получаете фото, видео и полную информацию перед покупкой.",
  },
];

const ServicesContainer = styled.div`
  max-width: 1100px;
  margin: 80px auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
`;

const TitleAppl = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-top: 50px;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.img`
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

const ServiceText = styled.p`
  font-size: 16px;
  color: #555;
`;

const Services = () => {
  return (
    <ServicesContainer id="services">
      <Title>Наши услуги</Title>
      <Grid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <Icon src={service.icon} alt="img" width="53" height="53" />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceText>{service.text}</ServiceText>
          </ServiceCard>
        ))}
      </Grid>
      <TitleAppl>
        Хотите заказать наши услуги? Оставьте заявку, и мы поможем вам!
      </TitleAppl>
    </ServicesContainer>
  );
};

export default Services;
