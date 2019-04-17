import React from "react";

import withFreeBlock from "../HOCs/withFreeBlock";
import config from "../../../../../etc/config";
import ImageRegular from "../../../Components/SVG/ImageRegular";
import LinkSolid from "../../../Components/SVG/LinkSolid";
import FontSolid from "../../../Components/SVG/FontSolid";
import CogsSolid from "../../../Components/SVG/CogsSolid";

const freeBlock = ({ body, defaultHeight }) => (
  <div
    className="free-block"
    style={{
      background: `${
        body.background
          ? body.background.type === "img"
            ? `${config.IMAGES_PREFIX}/${
                body.background.img
              }} 50% 50%/cover no-repeat`
            : body.background.color
          : "#777"
      }`,
      width: `${body.classes === "default" ? "50%" : "0px"}`,
      height: `${defaultHeight}`
    }}
  >
    <div className="free-block__container">
      <p className="text">{body.text ? body.text : "Какой-то текст..."}</p>
      <span className="button">
        {body.button ? body.button.text : "Кнопка"}
      </span>
      <div className="menu">
        <span className="menu__item clickable">
          <ImageRegular />
        </span>
        <span className="menu__item clickable">
          <FontSolid />
        </span>
        <span className="menu__item clickable">
          <LinkSolid />
        </span>
        <span className="menu__item clickable">
          <CogsSolid />
        </span>
      </div>
    </div>
  </div>
);

export default withFreeBlock(freeBlock);
