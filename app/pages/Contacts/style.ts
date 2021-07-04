import styled from "styled-components";

export const ContactsWrapper = styled.section`
  max-width: 50%;
  width: 100%;
  margin: 30px auto 0;

  div {
    &:not(:last-child) {
      margin-bottom: 30px;
    }

    &.links a:not(:last-child) {
      margin-right: 15px;
    }
  }
`;
