import React from "react";

import WithListCreator from "../../HOC/Actions/ListCreator";

import TextField from "../TextField";

const ListCreator = ({
  type,
  name,
  data,
  placeholder,
  add,
  deleteItem,
  change
}) => (
  <div className="list-creator">
    <h3 className="sub-title">{placeholder}:</h3>
    {data && data.length > 0 ? (
      <div className="list-creator__list">
        {data.map((item, idx) => (
          <React.Fragment key={idx}>
            {type === "string" ? (
              <div className="string">
                <TextField
                  type="input"
                  placeholder={`${idx + 1}`}
                  name={idx}
                  handlerChange={change}
                  value={data[idx]}
                  isEmpty={false}
                />
                <span
                  onClick={() => deleteItem(idx)}
                  className="delete clickable"
                >
                  ×
                </span>
              </div>
            ) : (
              <div className="pair">
                <TextField
                  type="input"
                  placeholder="Ключ"
                  name={`${idx}=key`}
                  handlerChange={change}
                  value={data[idx].key}
                  isEmpty={false}
                />
                <TextField
                  type="input"
                  placeholder="Значение"
                  name={`${idx}=value`}
                  handlerChange={change}
                  value={data[idx].value}
                  isEmpty={false}
                />
                <span
                  onClick={() => deleteItem(idx)}
                  className="delete clickable"
                >
                  ×
                </span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    ) : (
      ""
    )}
    <span onClick={add} className="list-creator__add clickable">
      +
    </span>
  </div>
);

export default WithListCreator(ListCreator);
