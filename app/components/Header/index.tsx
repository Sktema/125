import * as React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { Container } from "app/sc/Container";
import { HeaderWrapper } from "./style";

import { navLinks } from "./mock";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Header: React.FC = () => {
  const router = useRouter();
  const isAuth = useSelector((state: RootState) => state.authReducer.isAuth);

  return (
    <Container>
      <HeaderWrapper>
        <div className="upper">
          <div className="logo">
            <p>ДСО</p>
          </div>

          <div className="title">
            <h1>
              автономная некоммерческая организация добровольческий спасательный
              отряд 111.62
            </h1>
            <p>
              <a href="tel:+79249911162">ТЕЛ: 8-924-99-111-62</a>
            </p>
          </div>
        </div>

        <nav>
          {navLinks.map(({ id, title, path }) => {
            const classList: string[] = [];

            if (id === 3 && isAuth) return;

            if (id === 6) {
              if (!isAuth) return;

              classList.push("orange");
            }

            if (router.pathname.split("/")[1] === path.split("/")[1]) {
              classList.push("active");
            }

            return (
              <Link href={path} key={id}>
                <a className={classList.join(" ")}>{title}</a>
              </Link>
            );
          })}
        </nav>
      </HeaderWrapper>
    </Container>
  );
};

export { Header };
