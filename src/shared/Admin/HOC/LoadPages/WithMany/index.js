import React from "react";

const withMany = Component => {
  class WithMany extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }
    componentDidMount() {}

    render() {
      return <Component {...this.props} />;
    }
  }
  WithMany.displayName = `WithMany(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithMany;
};

export default withMany;
