import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";

const services = [
  {
    icon: "/icons/car.svg",
    title: "Подбор и покупка авто",
    text: "Поможем выбрать и проверить автомобиль в Европе перед покупкой.",
    details:
      "Наши специалисты тщательно проверяют автомобиль перед покупкой. Мы анализируем историю машины, техническое состояние и юридическую чистоту. Вы получите полный отчет и рекомендации перед приобретением.",
  },
  {
    icon: "/icons/square.svg",
    title: "Доставка в СНГ",
    text: "Организуем безопасную и быструю доставку автомобиля.",
    details:
      "Мы сотрудничаем с надежными транспортными компаниями, обеспечивая быструю и безопасную доставку в СНГ. Авто перевозятся в закрытых автовозах, что гарантирует защиту от внешних факторов.",
  },
  {
    icon: "/icons/documents.png",
    title: "Оформление документов",
    text: "Берём на себя оформление всех экспортных документов и страховки.",
    details:
      "Мы оформляем все необходимые документы для экспорта, включая страховку, сертификаты и таможенные декларации. Вам не придется беспокоиться о бюрократии — всё сделаем за вас!",
  },
  {
    icon: "/icons/garant.svg",
    title: "Таможенное оформление",
    text: "Проходим таможенные процедуры без задержек и лишних затрат.",
    details:
      "Мы имеем многолетний опыт работы с таможней и знаем, как минимизировать время и затраты на оформление. Ваш автомобиль будет растаможен в кратчайшие сроки.",
  },
  {
    icon: "/icons/zapchast.png",
    title: "Поставка запчастей",
    text: "Доставляем оригинальные и контрактные запчасти напрямую из Европы.",
    details:
      "Мы работаем напрямую с поставщиками запчастей из Европы. Вы получите оригинальные или контрактные детали по лучшей цене, с гарантией качества.",
  },
  {
    icon: "/icons/opacity.png",
    title: "Гарантия прозрачности",
    text: "Вы получаете фото, видео и полную информацию перед покупкой.",
    details:
      "Перед покупкой автомобиля вы получите детальные фото, видео и отчеты по техническому состоянию. Мы гарантируем полную прозрачность сделки.",
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
  cursor: pointer;
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

// Стили модального окна
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  background: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: #c82333;
  }
`;

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <ServicesContainer id="services">
      <Title>Наши услуги</Title>
      <Grid>
        {services.map((service, index) => (
          <ServiceCard key={index} onClick={() => setSelectedService(service)}>
            <Icon src={service.icon} alt="img" width="53" height="53" />
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceText>{service.text}</ServiceText>
          </ServiceCard>
        ))}
      </Grid>
      <TitleAppl>
        Хотите заказать наши услуги? Оставьте заявку, и мы поможем вам!
      </TitleAppl>

      {selectedService && (
        <ModalOverlay onClick={() => setSelectedService(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>{selectedService.title}</h2>
            <p>{selectedService.details}</p>
            <CloseButton onClick={() => setSelectedService(null)}>
              Закрыть
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </ServicesContainer>
  );
};

export default Services;
