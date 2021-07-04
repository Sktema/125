import * as React from "react";

import { Container } from "app/sc/Container";
import { EnterWrapper } from "./style";
import { postData } from "../../services";
import Link from "next/link";
import { setAuth } from "store/authReducer";
import { connect } from "react-redux";

class SignInPage extends React.PureComponent<IProps, IState> {
  state: IState = {
    formFields: {
      login: "",
      password: "",
    },
    status: "",
  };

  changeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    this.setState((prev) => {
      return {
        ...prev,
        formFields: {
          ...prev.formFields,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { login, password } = this.state.formFields;
    const body = JSON.stringify({
      login,
      password,
    });

    postData("http://my-diplom-api.nginx/login.php", {
      method: "POST",
      body,
    }).then((res) => {
      res.text
        .then((status) => {
          this.setState((prev) => ({
            ...prev,
            status,
          }));
        })
        .then(() => {
          if (this.state.status === "Успешно") {
            this.props.setAuth(true);
          }
        });
    });
  };

  render() {
    const {
      formFields: { login, password },
      status,
    } = this.state;

    return (
      <Container>
        <EnterWrapper>
          <form onSubmit={this.submitHandler}>
            <div className="field">
              <p>Логин</p>
              <input
                type="text"
                name="login"
                value={login}
                onChange={this.changeHandler}
              />
            </div>

            <div className="field">
              <p>Пароль</p>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.changeHandler}
              />
            </div>

            <div>
              <button type="submit">
                Войти
              </button>
              <span> или </span>
              <Link href="/enter/sign-up">Зарегистрироваться</Link>
            </div>
            <p>{status}</p>
          </form>
        </EnterWrapper>
      </Container>
    );
  }
}

interface IState {
  formFields: {
    login: string;
    password: string;
  };
  status: string;
}

interface IProps {
  setAuth: any;
}

const mapDispatchToProps = {
  setAuth,
};

export default connect(null, mapDispatchToProps)(SignInPage);
