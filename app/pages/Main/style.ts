import styled from "styled-components";

export const MainWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  aside,
  section.content {
    padding: 10px;
    box-sizing: border-box;
  }

  aside {
    width: 200px;
  }

  section.content {
    width: 100%;
  }
`;

export const EventItem = styled.div`
  width: 100%;

  height: 115px;
  background-color: gray;
  border: 1px solid #000;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const NewsItem = styled.div`
  width: 100%;

  height: 450px;
  background-color: gray;
  border: 1px solid #000;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
