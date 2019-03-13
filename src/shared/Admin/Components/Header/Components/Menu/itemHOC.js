import React from "react";

const withMenuButton = Component => {
  class WithMenuButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        active: false,
        menuDown: false
      };
    }

    render() {
      const { menuDown, active } = this.state;
      return <Component {...this.props} menuDown={menuDown} active={active} />;
    }
  }
  WithMenuButton.displayName = `WithMenuButton(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithMenuButton;
};

export default withMenuButton;
