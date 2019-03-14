import React from "react";

import { MultiBootloader } from "../../../api/load";

import Preloader from "../../../Components/Preloader";

const withMany = (Component, API_URL, title) => {
  class WithMany extends React.Component {
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
        data: data && data.data ? data.data : [],
        withData: data && data.data ? true : false
      };
      this.getData = this.getData.bind(this);
      this.deleteField = this.deleteField.bind(this);
    }
    componentDidMount() {
      window.scrollTo(0, 0);
      document.title = title;
      if (!this.state.withData) {
        this.getData();
      }
    }
    deleteField(id) {
      const handlerDelete = new MultiBootloader(API_URL.delete, id);
      handlerDelete.response().then(data => {
        if (data && data.ok) {
          this.getData();
          this.props.confirmToggle({ open: false });
        } else {
          this.props.addError(data.message);
        }
      });
    }
    getData() {
      const loader = new MultiBootloader(API_URL.get);
      loader
        .response()
        .then(data => {
          this.setState({
            data: data && data.data ? data.data : [],
            withData: data && data.data ? true : false
          });
        })
        .catch(err => {
          this.props.addError("Произошла ошибка на сервере. Попробуйте позже.");
        });
    }

    render() {
      const { data, withData } = this.state;
      return (
        <React.Fragment>
          {withData ? (
            <Component
              {...this.props}
              data={data}
              getData={this.getData}
              deleteField={this.deleteField}
            />
          ) : (
            <Preloader />
          )}
        </React.Fragment>
      );
    }
  }
  WithMany.displayName = `WithMany(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithMany;
};

export default withMany;
