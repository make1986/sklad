import React from "react";

const withAccess = Component => {
  class WithAccess extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.changeAccess = this.changeAccess.bind(this);
    }

    changeAccess(name, value) {
      let access = this.props.data.access ? this.props.data.access : {};
      if (value) {
        access[name] = value;
      } else {
        delete access[name];
      }

      this.props.handlerChange("access", access);
    }

    render() {
      return <Component {...this.props} changeAccess={this.changeAccess} />;
    }
  }
  WithAccess.displayName = `WithAccess(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithAccess;
};

export default withAccess;
