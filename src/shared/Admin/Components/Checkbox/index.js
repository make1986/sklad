import React from "react";

import WithCheckbox from "../../HOC/Actions/Checkbox";

const Checkbox = ({ name, value, placeholder, change }) => (
  <div onClick={change} className="checkbox">
    <span className="checkbox__label">{placeholder}</span>
    <div className={value ? "checkbox__groove active" : "checkbox__groove"}>
      <div className={value ? "touching active" : "touching"} />
    </div>
  </div>
);

export default WithCheckbox(Checkbox);
