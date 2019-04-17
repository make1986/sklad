import React from "react";

import TextField from "../TextField";
import Select from "../Select";
import Checkbox from "../Checkbox";

const checkboxChange = (key, value, handlerChange) => {
  if (value) {
    handlerChange(key, "0");
  } else {
    handlerChange(key, false);
  }
};

const Filter = ({ controllers, addError }) => (
  <div className="filter">
    <div className="filter__container">
      {controllers.map((ctrl, idx) => (
        <React.Fragment key={idx}>
          <div className={`col-${ctrl.columns}`}>
            {ctrl.type === "text" ? (
              <TextField
                type="input"
                placeholder={ctrl.placeholder}
                name={ctrl.name}
                handlerChange={ctrl.handlerChange}
                value={ctrl.value}
                isEmpty={false}
              />
            ) : ctrl.type === "select" ? (
              <Select
                value={ctrl.value}
                name={ctrl.name}
                handlerChange={ctrl.handlerChange}
                isEmpty={false}
                chooseField={ctrl.chooseField}
                apiUrl={ctrl.apiUrl}
                placeholder={ctrl.placeholder}
                addError={addError}
              />
            ) : (
              <Checkbox
                name={ctrl.name}
                placeholder={ctrl.placeholder}
                handlerChange={(key, value) =>
                  checkboxChange(key, value, ctrl.handlerChange)
                }
                value={ctrl.value}
              />
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default Filter;
