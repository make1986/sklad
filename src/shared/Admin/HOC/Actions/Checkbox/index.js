import React from "react";

const withCheckbox = Component => {
  class WithCheckbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.change = this.change.bind(this);
    }

    change() {
      this.props.handlerChange(this.props.name, !this.props.value);
    }

    render() {
      return <Component {...this.props} change={this.change} />;
    }
  }
  WithCheckbox.displayName = `WithCheckbox(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithCheckbox;
};

export default withCheckbox;
