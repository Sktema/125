import styled from "styled-components";

export const DepartureWrapper = styled.section`
  max-width: 50%;
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    margin-bottom: 20px;
  }

  div.links {
    p {
      font-size: 16px;
      line-height: 22px;
      font-weight: 700;
      color: blue;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;
