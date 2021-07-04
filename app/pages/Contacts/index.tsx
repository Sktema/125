import * as React from "react";

import { Container } from "app/sc/Container";
import { ContactsWrapper } from "./style";

const ContactsPage: React.FC = () => {
  return (
    <Container>
      <ContactsWrapper>
        <div>
          <h3>Руководитель отряда</h3>
          <p>Скорохватов Артем Сергеевич</p>
          <a href="tel:79999999999">тел: +7 (999) 999 99-99</a>
        </div>

        <div>
          <h3>Руководитель отряда</h3>
          <p>Вейс Елена Михайловна</p>
          <a href="tel:79999999999">тел: +7 (999) 777 77-77</a>
        </div>

        <div className="links">
          <h3>Мы в:</h3>
          <a href="vk.com">VK</a>
          <a href="instagram.com">Instagram</a>
          <a href="facebook.com">Facebook</a>
        </div>

        <div>
          <a href="https://do.gosuslugi.ru/">Оставить жалобу</a>
        </div>
      </ContactsWrapper>
    </Container>
  );
};

export { ContactsPage };
