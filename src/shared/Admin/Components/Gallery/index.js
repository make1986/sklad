import React from "react";

import WithGallery from "../../HOC/Actions/Gallery";
import { IMAGE_PREFIX } from "../../../../etc/config";
import Image from "../../Components/ImageBlock";

const Gallery = ({
  files,
  deleteFile,
  uploadFiles,
  name,
  load,
  placeholder
}) => (
  <React.Fragment>
    <h3 className="sub-title">{placeholder}</h3>
    <div className="gallery">
      {files.map((file, idx) => (
        <div className="gallery__item" key={idx}>
          {file ? (
            <React.Fragment>
              <Image src={`${IMAGE_PREFIX}/${file}`} classes="image" />
              <div onClick={() => deleteFile(idx)} className="close clickable">
                ×
              </div>
            </React.Fragment>
          ) : (
            <div
              style={{
                width: `${load[idx]}%`,
                display: load[idx] < 100 ? "block" : "none"
              }}
              className="loading"
            />
          )}
        </div>
      ))}
      <input
        multiple="multiple"
        onChange={uploadFiles}
        type="file"
        name={name}
        id={name}
      />
      <label className="clickable" htmlFor={name}>
        +
      </label>
    </div>
  </React.Fragment>
);

export default WithGallery(Gallery);
