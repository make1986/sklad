import React from "react";
import { API_PREFIX } from "../../../../../etc/config";

import openSocket from "socket.io-client";
const socket = openSocket(API_PREFIX);

import ss from "socket.io-stream";

const withLoaderArr = (Component, API_URLS, title) => {
  class WithLoaderArr extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        load: [],
        fieldName: "",
        files: this.props.value || [],
        fieldName: ""
      };
      this.socketConnect = this.socketConnect.bind(this);
      this.uploadFiles = this.uploadFiles.bind(this);
      this.deleteFile = this.deleteFile.bind(this);
      this.loadSuccessful = this.loadSuccessful.bind(this);
    }
    componentDidMount() {
      this.socketConnect();
      this.loadSuccessful();
      if (this.props.value && this.props.value.length > 0) {
        let load = [];
        this.props.value.map(item => {
          load.push(100);
        });
        this.setState({ load });
      }
    }
    componentWillUnmount() {
      socket.off("load_successful", response => {
        if (response) {
          let { files } = this.state;
          const { filename, idx } = response;
          files[idx] = filename;
          this.setState({ files }, () => {
            const { fieldName, files } = this.state;
            this.props.handlerChange(fieldName, files);
          });
        }
      });
    }

    loadSuccessful() {
      socket.on("load_successful", response => {
        if (response) {
          let { files } = this.state;
          const { filename, idx } = response;
          files[idx] = filename;
          this.setState({ files }, () => {
            const { fieldName, files } = this.state;
            this.props.handlerChange(fieldName, files);
          });
        }
      });
    }

    socketConnect() {
      socket.on("connect", () => {
        console.log("client");
      });
    }
    deleteFile(idx) {
      const { files } = this.state;
      const file = files[idx];
      files.splice(idx, 1);
      this.setState({ files }, () => {
        socket.emit("delete_file", file);
        this.props.handlerChange(this.state.fieldName, this.state.files);
      });
    }
    uploadFiles(e) {
      const { files, name } = e.target;
      this.setState({ fieldName: name });
      const { load } = this.state;
      let order = load.length;
      let allFiles = this.state.files;

      for (let i = 0; i < files.length; i++) {
        load[order + i] = 0;
        allFiles[order + i] = "";
        this.setState({ files: allFiles });
        const file = files[i];
        const filename = file.name;
        const filesize = file.size;
        const enc = e.target.encoding;
        const stream = ss.createStream();
        ss(socket).emit("upload_img", stream, {
          data: file,
          size: filesize,
          name: filename,
          enc: enc,
          idx: order + i
        });
        const blobStream = ss.createBlobReadStream(file);
        let size = 0;
        blobStream.on("data", chunk => {
          size += chunk.length;
          let percent = Math.floor((size / file.size) * 100);
          load[order + i] = percent;
          this.setState({ load });
          // console.log(this.state.load);
        });
        blobStream.pipe(stream);
      }
    }

    render() {
      const { load, files } = this.state;
      return (
        <Component
          uploadFiles={this.uploadFiles}
          {...this.props}
          load={load}
          deleteFile={this.deleteFile}
          files={files}
        />
      );
    }
  }
  WithLoaderArr.displayName = `WithLoaderArr(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithLoaderArr;
};

export default withLoaderArr;
