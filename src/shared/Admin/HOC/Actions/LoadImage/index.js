import React from "react";

const withImage = (Component, API_URLS, title) => {
  class WithImage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        load: false
      };
      this.handlerLoad = this.handlerLoad.bind(this);
    }

    handlerLoad() {
      this.setState({ load: true });
    }

    render() {
      const { load } = this.state;
      return (
        <Component {...this.props} load={load} handlerLoad={this.handlerLoad} />
      );
    }
  }
  WithImage.displayName = `WithImage(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithImage;
};

export default withImage;
