import styled from "styled-components";

export const EnterWrapper = styled.section`
  width: 100%;

  form {
    max-width: 80%;
    width: 100%;
    margin: 0 auto;
    padding: 20px;

    border: 2px solid #000;
    box-sizing: border-box;

    div.field {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      p {
        max-width: 36%;
        width: 100%;
        min-height: 40px;

        padding: 10px 15px;

        background-color: plum;
        border: 1px solid #000;

        font-size: 16px;
        line-height: 22px;
        font-weight: 700;
        text-align: center;

        box-sizing: border-box;
      }

      input,
      select,
      textarea {
        max-width: 60%;
        width: 100%;
      }

      input,
      select {
        height: 40px;
      }

      textarea {
        height: 200px;
        resize: none;
      }
    }
  }
`;
