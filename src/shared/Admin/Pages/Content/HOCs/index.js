import React from "react";

import { MultiBootloader } from "../../../api/load";

import Preloader from "../../../Components/Preloader";

const withContent = (Component, API_URL, title) => {
  class WithContent extends React.Component {
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
        data: data && data.data && data.data.body ? data.data.body : [],
        withData: data && data.data ? true : false
      };
      this.getData = this.getData.bind(this);
      this.addBlock = this.addBlock.bind(this);
    }
    componentDidMount() {
      window.scrollTo(0, 0);
      document.title = title;
      if (!this.state.withData) {
        this.getData();
      }
    }
    getData() {
      const loader = new MultiBootloader(API_URL.get);
      loader
        .response()
        .then(data => {
          this.setState({
            data: data && data.data && data.data.body ? data.data.body : [],
            withData: true
          });
        })
        .catch(err => {
          this.props.addError("Произошла ошибка на сервере. Попробуйте позже.");
        });
    }

    addBlock(type) {
      let { data } = this.state;
      data.push({ type, classes: "default" });
      this.setState({ data });
    }

    render() {
      const { data, withData } = this.state;
      return (
        <React.Fragment>
          {withData ? (
            <Component {...this.props} addBlock={this.addBlock} data={data} />
          ) : (
            <Preloader />
          )}
        </React.Fragment>
      );
    }
  }
  WithContent.displayName = `WithContent(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithContent;
};

export default withContent;
