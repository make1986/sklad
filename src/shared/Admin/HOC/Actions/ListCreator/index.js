import React from "react";

const withListCreator = (Component, API_URLS, title) => {
  class WithListCreator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: this.props.value || []
      };
      this.add = this.add.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.change = this.change.bind(this);
    }

    add() {
      let { data } = this.state;
      if (this.props.type === "string") {
        data.push("");
      } else {
        data.push({ key: "", value: "" });
      }
      this.setState({ data }, () => {
        this.props.handlerChange(this.props.name, this.state.data);
      });
    }

    deleteItem(idx) {
      let { data } = this.state;
      data.splice(idx, 1);
      this.setState({ data }, () => {
        this.props.handlerChange(this.props.name, this.state.data);
      });
    }

    change(name, value) {
      let { data } = this.state;
      if (this.props.type === "string") {
        data[name] = value;
      } else {
        const res = name.split("=");
        const idx = res[0];
        const key = res[1];
        data[idx][key] = value;
      }
      this.setState({ data }, () => {
        this.props.handlerChange(this.props.name, this.state.data);
      });
    }

    render() {
      const { data } = this.state;
      return (
        <Component
          {...this.props}
          data={data}
          deleteItem={this.deleteItem}
          add={this.add}
          change={this.change}
        />
      );
    }
  }
  WithListCreator.displayName = `WithListCreator(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithListCreator;
};

export default withListCreator;
