import React from "react";

import { API_PREFIX } from "../../../../etc/config";
import { upload_city_xls } from "../../api/upload";

const uploadWithProps = Component => {
  const LOAD_CONST = {
    INPUT: 0,
    LOADING: 1,
    SUCCESSFULLY: 2,
    UNSUCCESSFULLY: 3
  };
  class WithUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        onload: LOAD_CONST.INPUT
      };
      this.change = this.change.bind(this);
    }
    componentDidMount() {
      console.log(this.props.type);
    }

    change(event) {
      let file = event.target.files[0];
      let formData = new FormData();
      formData.append("file", file, file.name);
      this.setState({ onload: LOAD_CONST.LOADING });
      upload_city_xls(formData).then(res => {
        if (
          res &&
          res.status >= 200 &&
          res.status <= 300 &&
          res.data &&
          res.data.ok
        ) {
          this.setState({ onload: LOAD_CONST.SUCCESSFULLY });
        }
      });
    }

    render() {
      return (
        <Component
          change={this.change}
          constant={LOAD_CONST}
          state={this.state.onload}
          {...this.props}
        />
      );
    }
  }
  WithUpload.displayName = `WithUpload(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithUpload;
};

export default uploadWithProps;
