import * as React from "react";

import Link from "next/link";

import { Container } from "app/sc/Container";

const Directions: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      {data.map(({ id, path, title }) => (
        <p key={id}>
          <Link href={path}>
            <a>{title}</a>
          </Link>
        </p>
      ))}
    </Container>
  );
};

interface IProps {
  data: {
    id: number;
    path: string;
    title: string;
  }[];
}

export { Directions };
