import React from "react";

import { FieldCreator } from "../../../api/add";
import { MultiBootloader } from "../../../api/load";

import Preloader from "../../../Components/Preloader";

const withForm = (Component, API_URLS, title, required) => {
  class WithForm extends React.Component {
    constructor(props) {
      super(props);
      let data;
      if (__isBrowser__) {
        data = window.__INITIAL_DATA__;
        delete window.__INITIAL_DATA__;
      } else if (props.staticContext && props.staticContext.data) {
        data = props.staticContext.data;
      }
      this.state = {
        data: data && data.data ? data.data : {},
        isEmpty: {},
        withData: data && data.data ? true : false
      };
      this.handlerChange = this.handlerChange.bind(this);
      this.onSave = this.onSave.bind(this);
    }
    componentDidMount() {
      window.scrollTo(0, 0);
      document.title = title;
      if (
        this.props.match &&
        this.props.match.params &&
        this.props.match.params.id &&
        !this.state.withData
      ) {
        const loader = new MultiBootloader(
          API_URLS.get,
          this.props.match.params.id
        );
        loader.response().then(data => {
          if (data && data.ok && data.data) {
            this.setState({ data: data.data, withData: true });
          } else {
            this.props.addError(
              "Ошибка сервера, попробуйте позже или обратитесь к разработчику!"
            );
          }
        });
      } else {
        this.setState({ withData: true });
      }
    }
    handlerChange(name, value) {
      let { data, isEmpty } = this.state;
      data[name] = value;
      if (isEmpty[name]) {
        isEmpty[name] = false;
      }
      this.setState({ data, isEmpty });
    }
    onSave() {
      const { data, isEmpty } = this.state;
      let err = [];
      for (const key in required) {
        if (required[key] && !data[key]) {
          err.push(key);
        }
      }
      if (err.length > 0) {
        err.map(key => {
          isEmpty[key] = true;
        });
        this.setState({ isEmpty });
      } else {
        let url;
        if (
          this.props.match &&
          this.props.match.params &&
          this.props.match.params.id
        ) {
          url = API_URLS.edit;
        } else {
          url = API_URLS.set;
        }
        const creator = new FieldCreator(url, data);
        creator.response().then(res => {
          if (res && res.ok) {
            window.location.replace(API_URLS.redirect);
          } else {
            this.props.addError(
              "Ошибка сервера, попробуйте позже или обратитесь к разработчику!"
            );
          }
        });
      }
    }

    render() {
      const { data, withData, isEmpty } = this.state;
      return (
        <React.Fragment>
          {withData ? (
            <Component
              handlerChange={this.handlerChange}
              {...this.props}
              data={data}
              onSave={this.onSave}
              isEmpty={isEmpty}
            />
          ) : (
            <Preloader />
          )}
        </React.Fragment>
      );
    }
  }
  WithForm.displayName = `WithForm(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithForm;
};

export default withForm;
