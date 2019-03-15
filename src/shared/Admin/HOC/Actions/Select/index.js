import React from "react";

import { MultiBootloader } from "../../../api/load";

const withSelect = Component => {
  class WithSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        options: [],
        opened: false,
        isData: false
      };
      this.getData = this.getData.bind(this);
      this.listToggle = this.listToggle.bind(this);
      this.getNameByValue = this.getNameByValue.bind(this);
      this.onSelect = this.onSelect.bind(this);
    }
    componentDidMount() {
      this.getData();
    }
    getData() {
      const { apiUrl, chooseField } = this.props;
      const loader = new MultiBootloader(apiUrl);
      loader
        .response()
        .then(data => {
          if (data && data.ok && data.data) {
            if (data.data.length > 0) {
              let options = [];
              data.data.map(item => {
                options.push({ value: item._id, name: item[chooseField] });
              });
              this.setState({ options, isData: true });
            }
          } else {
            this.props.addError(
              "Произошла ошибка на сервере. Попробуйте позже."
            );
          }
        })
        .catch(err => {
          this.props.addError("Произошла ошибка на сервере. Попробуйте позже.");
        });
    }

    listToggle() {
      this.setState({ opened: !this.state.opened });
    }

    getNameByValue(value) {
      const { options } = this.state;
      const idx = options.findIndex(x => x.value === value);
      return options[idx].name;
    }

    onSelect(value) {
      this.props.handlerChange(this.props.name, value);
    }

    render() {
      const { options, opened, isData } = this.state;
      return (
        <React.Fragment>
          {isData ? (
            <Component
              {...this.props}
              options={options}
              listToggle={this.listToggle}
              opened={opened}
              getNameByValue={this.getNameByValue}
              onSelect={this.onSelect}
            />
          ) : (
            ""
          )}
        </React.Fragment>
      );
    }
  }
  WithSelect.displayName = `WithSelect(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithSelect;
};

export default withSelect;
