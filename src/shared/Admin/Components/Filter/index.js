import React from "react";

import TextField from "../TextField";
import Select from "../Select";

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
            ) : (
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
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default Filter;
