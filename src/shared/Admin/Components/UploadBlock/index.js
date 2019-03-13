import React from "react";

import Upload from "../../HOC/Actions/Upload";
import { IMAGE_PREFIX } from "../../../../etc/config";

import Image from "../../Components/ImageBlock";

const UploadBlock = ({
  name,
  placeholder,
  uploadFile,
  load,
  percent,
  filename,
  deleteFile,
  isEmpty
}) => (
  <div className="upload-block">
    {filename ? (
      <div className="upload-block__img">
        <Image src={`${IMAGE_PREFIX}/${filename}`} classes="image" />
        <div onClick={deleteFile} className="close clickable">
          ×
        </div>
      </div>
    ) : (
      <React.Fragment>
        {load ? (
          <div className="progress-block">
            <div className="progress-block__line">
              <div className="progress" style={{ width: `${percent}%` }} />
            </div>
            <span>{percent}%</span>
          </div>
        ) : (
          <React.Fragment>
            <input onChange={uploadFile} type="file" name={name} id={name} />
            <label
              className={isEmpty ? "empty clickable" : "clickable"}
              htmlFor={name}
            >
              {placeholder}
            </label>
          </React.Fragment>
        )}
      </React.Fragment>
    )}
  </div>
);

export default Upload(UploadBlock);
