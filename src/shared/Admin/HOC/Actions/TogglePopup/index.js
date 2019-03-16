import React from "react";

const withPopUp = Component => {
  class WithPopUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        popups: {}
      };
      this.openPopUp = this.openPopUp.bind(this);
    }
    openPopUp(name) {
      let { popups } = this.state;
      if (popups[name]) {
        popups[name] = false;
        document.body.style.overflowY = "auto";
      } else {
        popups[name] = true;
        document.body.style.overflowY = "hidden";
      }
      this.setState({ popups });
    }
    render() {
      return (
        <Component
          {...this.props}
          openPopUp={this.openPopUp}
          popups={this.state.popups}
        />
      );
    }
  }
  WithPopUp.displayName = `WithPopUp(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithPopUp;
};

export default withPopUp;
