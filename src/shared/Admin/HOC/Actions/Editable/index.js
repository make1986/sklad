import React from "react";

const withEditableData = Component => {
  class WithEditableData extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.editData = this.editData.bind(this);
    }
    editData(name, value) {
      console.log(name, value);
    }

    render() {
      return <Component {...this.props} editData={this.editData} />;
    }
  }
  WithEditableData.displayName = `WithEditableData(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithEditableData;
};

export default withEditableData;
