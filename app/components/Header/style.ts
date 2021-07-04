import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;

  div,
  nav {
    box-sizing: border-box;
  }

  & div.upper {
    padding: 20px;
    display: flex;

    div.logo {
      width: 300px;
      height: 200px;
      padding: 20px;

      // temp
      p {
        font-size: 70px;
        font-weight: 900;
      }

      & img {
        width: 100%;
        object-fit: cover;
      }
    }

    div.title {
      width: 100%;
      height: 200px;
      padding: 20px;

      display: flex;
      flex-direction: column;
      align-content: space-between;

      font-size: 30px;
      line-height: 36px;
      font-weight: 700;

      h1,
      p {
        text-transform: uppercase;
      }

      p {
        margin-top: auto;
        text-align: right;
        color: red;
      }
    }
  }

  nav {
    padding: 20px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    & a {
      padding: 10px 15px;
      background-color: cornflowerblue;
      border: 1px solid #000;

      &.active,
      &.active.orange {
        background-color: green;
      }

      &.orange {
        background-color: orange;
      }

      &:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
`;
