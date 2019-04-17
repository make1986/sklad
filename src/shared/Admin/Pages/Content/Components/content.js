import React from "react";

import FreeBlock from "./freeBlock";

const Content = ({ data }) => (
  <div className="content-body">
    {data.map((item, idx) => (
      <div className="content-body__item" key={idx}>
        {item.type === "free_block" ? <FreeBlock body={item} /> : ""}
      </div>
    ))}
  </div>
);

export default Content;
