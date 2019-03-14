import React from "react";

import WithSelect from "../../HOC/Actions/Select";

const Select = ({
  options,
  value,
  placeholder,
  opened,
  listToggle,
  getNameByValue,
  onSelect,
  isEmpty
}) => (
  <div
    onClick={listToggle}
    className={
      isEmpty && !opened ? "select empty" : opened ? "select active" : "select"
    }
  >
    <span className="select__selected">
      {value ? getNameByValue(value) : placeholder}
    </span>
    {opened ? (
      <div className="select__options">
        {options.length > 0 ? (
          <React.Fragment>
            {value ? (
              <span onClick={() => onSelect("")} className="item" value="">
                Выбрать пустоту
              </span>
            ) : (
              ""
            )}
            {options.map(item => (
              <React.Fragment key={item.value}>
                {value !== item.value ? (
                  <span
                    onClick={() => onSelect(item.value)}
                    className="item"
                    value={item.value}
                  >
                    {item.name}
                  </span>
                ) : (
                  ""
                )}
              </React.Fragment>
            ))}
          </React.Fragment>
        ) : (
          <span className="item disable">Выбирать не из чего</span>
        )}
      </div>
    ) : (
      ""
    )}
  </div>
);

export default WithSelect(Select);
