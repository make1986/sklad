import React from "react";

const withColor = Component => {
  class WithColor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isColor:
          this.props.data.colors && this.props.data.colors.length > 0
            ? true
            : false
      };
      this.chooseColor = this.chooseColor.bind(this);
    }

    chooseColor(name, value) {
      this.setState({ isColor: value });
    }

    render() {
      const { isColor } = this.state;
      return (
        <Component
          {...this.props}
          chooseColor={this.chooseColor}
          isColor={isColor}
        />
      );
    }
  }
  WithColor.displayName = `WithColor(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithColor;
};

export default withColor;
