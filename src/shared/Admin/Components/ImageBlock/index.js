import React from "react";

import LoadImage from "../../HOC/Actions/LoadImage";

import Preloader from "../Preloader";

const ImageBlock = ({ src, handlerLoad, load, classes }) => (
  <div className={`image-block ${classes}`}>
    <img src={src} onLoad={handlerLoad} />
    {!load ? <Preloader /> : ""}
  </div>
);

export default LoadImage(ImageBlock);
