import React from "react";

import withTextFields from "../../HOC/Actions/InputText";

const TextField = ({
  type,
  placeholder,
  name,
  changeMiddleware,
  value,
  length,
  handlerFocus,
  handlerBlur,
  focus,
  isEmpty
}) => (
  <div className="text-field">
    {type === "input" ? (
      <input
        className={isEmpty ? "input empty" : "input"}
        id={name}
        value={value || ""}
        onChange={changeMiddleware}
        type="text"
        name={name}
        onFocus={handlerFocus}
        onBlur={handlerBlur}
        autoComplete="off"
      />
    ) : (
      <React.Fragment>
        <textarea
          className={isEmpty ? "input empty" : "input"}
          id={name}
          value={value}
          onChange={changeMiddleware}
          name={name}
          onFocus={handlerFocus}
          onBlur={handlerBlur}
          autoComplete="off"
        />
        <span className="text-field__count">{length}</span>
      </React.Fragment>
    )}
    <label
      className={focus ? "text-field__label active" : "text-field__label"}
      htmlFor={name}
    >
      {placeholder}
    </label>
  </div>
);

export default withTextFields(TextField);
