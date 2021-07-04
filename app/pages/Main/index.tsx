import * as React from "react";

import { Container } from "app/sc/Container";
import { MainWrapper, EventItem, NewsItem } from "./style";

const MainPage: React.FC = () => {
  return (
    <Container>
      <MainWrapper>
        <aside>
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </aside>

        <section className="content">
          <NewsItem />
          <NewsItem />
        </section>

        <aside>
          <EventItem />
          <EventItem />
          <EventItem />
          <EventItem />
        </aside>
      </MainWrapper>
    </Container>
  );
};

export { MainPage };
