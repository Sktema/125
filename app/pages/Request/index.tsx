import * as React from "react";

import { Container } from "app/sc/Container";
import { RequestWrapper } from "./style";
import { postData } from "../../services";

class RequestPage extends React.PureComponent<any, IState> {
  state: IState = {
    formFields: {
      name: "",
      phone: "",
      city: "",
      category: "",
      plot: "",
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

    const { category, plot } = this.state.formFields;
    const body = JSON.stringify({ type: category, description: plot });

    postData("http://my-diplom-api.nginx/create_event.php", {
      method: "POST",
      body,
    }).then((res) => {
      res.text.then((status) => {
        this.setState((prev) => ({
          ...prev,
          status,
        }));
      });
    });
  };

  render() {
    const {
      formFields: { name, phone, city, category, plot },
      status,
    } = this.state;

    return (
      <Container>
        <RequestWrapper>
          <form onSubmit={this.submitHandler}>
            <div className="field">
              <p>Ф.И.О.</p>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.changeHandler}
              />
            </div>
            <div className="field">
              <p>Телефон:</p>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={this.changeHandler}
              />
            </div>
            <div className="field">
              <p>Город</p>
              <input
                type="text"
                name="city"
                value={city}
                onChange={this.changeHandler}
              />
            </div>

            <div className="field">
              <p>Категория происшествия</p>
              <select
                name="category"
                value={category}
                onChange={this.changeHandler}
              >
                <option value="" />
                <option value="emergency">ЧС</option>
                <option value="fire">Пожары</option>
                <option value="search_and_rescue">Поиски</option>
                <option value="material_help">Гум Помощь</option>
                <option value="animals">Зоо</option>
                <option value="ecology">Эко</option>
              </select>
            </div>

            <div className="field">
              <p>Фабула происшествия</p>
              <textarea
                name="plot"
                value={plot}
                onChange={this.changeHandler}
              />
            </div>
            <div className="field">
              <p>Прикрепить файл</p>
              <input type="file" />
            </div>

            <button>Отправить</button>
            <p>{status}</p>
          </form>
        </RequestWrapper>
      </Container>
    );
  }
}

interface IState {
  formFields: {
    name: string;
    phone: string;
    city: string;
    category: string;
    plot: string;
  };
  status: string;
}

export { RequestPage };
