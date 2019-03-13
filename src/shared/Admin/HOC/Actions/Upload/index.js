import React from "react";
import { API_PREFIX } from "../../../../../etc/config";

import openSocket from "socket.io-client";
const socket = openSocket(API_PREFIX);

import ss from "socket.io-stream";

const withLoader = (Component, API_URLS, title) => {
  class WithLoader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        load: false,
        percent: 0,
        filename: this.props.value,
        fieldName: ""
      };
      this.socketConnect = this.socketConnect.bind(this);
      this.uploadFile = this.uploadFile.bind(this);
      this.loadSuccessful = this.loadSuccessful.bind(this);
      this.deleteFile = this.deleteFile.bind(this);
    }
    componentDidMount() {
      this.socketConnect();
      this.loadSuccessful();
    }
    componentWillUnmount() {
      socket.off("load_successful", response => {
        if (response) {
          this.setState({ load: false, percent: 0, filename: response }, () => {
            const { fieldName, filename } = this.state;
            this.props.handlerChange(fieldName, filename);
          });
        }
      });
    }
    socketConnect() {
      socket.on("connect", () => {
        console.log("client");
      });
    }
    loadSuccessful() {
      socket.on("load_successful", response => {
        if (response) {
          this.setState({ load: false, percent: 0, filename: response }, () => {
            const { fieldName, filename } = this.state;
            this.props.handlerChange(fieldName, filename);
          });
        }
      });
    }
    deleteFile(e) {
      const { filename } = this.state;
      this.setState({ filename: "" }, () => {
        socket.emit("delete_file", filename);
        this.props.handlerChange(this.state.fieldName, this.state.filename);
      });
    }
    uploadFile(e) {
      const { name } = e.target;
      this.setState({ fieldName: name });
      const file = e.target.files[0];
      const filename = file.name;
      const filesize = file.size;
      const enc = e.target.encoding;
      const stream = ss.createStream();

      ss(socket).emit("upload_img", stream, {
        data: file,
        size: filesize,
        name: filename,
        enc: enc
      });
      const blobStream = ss.createBlobReadStream(file);
      let size = 0;
      blobStream.on("data", chunk => {
        size += chunk.length;
        let percent = Math.floor((size / file.size) * 100);
        this.setState({ load: true, percent });
      });
      blobStream.pipe(stream);
    }

    render() {
      const { load, percent, filename } = this.state;
      return (
        <Component
          uploadFile={this.uploadFile}
          {...this.props}
          load={load}
          percent={percent}
          filename={filename}
          deleteFile={this.deleteFile}
        />
      );
    }
  }
  WithLoader.displayName = `WithLoader(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithLoader;
};

export default withLoader;
