import React from "react";

import withUpload from "../../HOC/Upload";
import Preloader from "../Preloader";

const Upload = ({ name, type, state, constant, change }) => (
  <div className="upload-block">
    {state == constant.INPUT ? (
      <React.Fragment>
        <input onChange={change} type="file" name="file" id="_upload" />
        <label htmlFor="_upload">{name}</label>
      </React.Fragment>
    ) : state == constant.LOADING ? (
      <Preloader />
    ) : (
      ""
    )}
  </div>
);

export default withUpload(Upload);
