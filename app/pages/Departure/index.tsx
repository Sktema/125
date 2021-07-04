import * as React from "react";

import Link from "next/link";

import { Container } from "app/sc/Container";
import { DepartureWrapper } from "./style";

import { directions } from "./mock";

const DeparturePage: React.FC = () => {
  return (
    <Container>
      <DepartureWrapper>
        <h1>Задачи</h1>

        <div className="links">
          {directions.map(({ id, path, title, value }) => (
            <p key={id}>
              <Link href={`/departure/${path}`}>
                <a>
                  {title} - {value}
                </a>
              </Link>
            </p>
          ))}
        </div>
      </DepartureWrapper>
    </Container>
  );
};

export { DeparturePage };
