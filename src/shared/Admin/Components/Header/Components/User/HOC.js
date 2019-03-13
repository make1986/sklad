import React from "react";

const withUser = Component => {
  class WithUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Root"
      };
      this.logout = this.logout.bind(this);
    }

    logout() {
      console.log("logout");
    }

    render() {
      const { name } = this.state;
      return <Component {...this.props} name={name} logout={this.logout} />;
    }
  }
  WithUser.displayName = `WithUser(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithUser;
};

export default withUser;
