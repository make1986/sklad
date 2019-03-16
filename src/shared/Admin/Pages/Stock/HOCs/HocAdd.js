import React from "react";

import { MultiBootloader } from "../../../api/load";
import { FieldCreator } from "../../../api/add";

const withAddInStock = Component => {
  class WithAddInStock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { barcode: "", data: {}, isLoad: false, count: 0 };
      this.change = this.change.bind(this);
      this.edit = this.edit.bind(this);
      this.save = this.save.bind(this);
    }
    change(name, barcode) {
      this.setState({ barcode });
      if (barcode) {
        const load = new MultiBootloader(
          "products/get_one",
          `barcode=${barcode}`
        );
        load.response().then(data => {
          if (data && data.ok) {
            this.setState({ isLoad: true, data: data.data });
          } else {
            this.props.addError("Ошибка сервера, попробуйте позже!");
          }
        });
      } else {
        this.setState({ isLoad: false });
      }
    }
    edit(name, count) {
      this.setState({ count });
    }
    save() {
      const { data, count } = this.state;
      data.qt += Number(count);
      const editer = new FieldCreator("products/edit", data);
      editer.response().then(res => {
        if (res && res.ok) {
          this.props.callback();
          this.props.close();
        } else {
          this.props.addError("Ошибка сервера, попробуйте позже!");
        }
      });
    }

    render() {
      const { barcode, data, isLoad, count } = this.state;
      return (
        <Component
          {...this.props}
          barcode={barcode}
          change={this.change}
          data={data}
          isLoad={isLoad}
          count={count}
          edit={this.edit}
          save={this.save}
        />
      );
    }
  }
  WithAddInStock.displayName = `WithAddInStock(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithAddInStock;
};

export default withAddInStock;
