import React from "react";

import HocAdd from "../HOCs/HocAdd";
import TextField from "../../../Components/TextField";
const Add = ({ barcode, change, data, isLoad, count, edit, save }) => (
  <div className="add-stock">
    <h3 className="sub-title">Пополнение склада</h3>
    <TextField
      type="input"
      placeholder="Введите штрихкод"
      name="barcode"
      handlerChange={change}
      value={barcode}
      isEmpty={false}
    />
    {isLoad ? (
      <React.Fragment>
        {data && data._id ? (
          <div className="product-block">
            <p className="message">{data.name}</p>
            <p className="message count">{data.qt} шт.</p>
            <TextField
              type="input"
              placeholder="Введите количество прихода"
              name="count"
              handlerChange={edit}
              value={count}
              isEmpty={false}
            />
            <span onClick={save} className="save clickable">
              Сохранить
            </span>
          </div>
        ) : (
          <p className="message null-obj">Нет товаров с таким штрих-кодом</p>
        )}
      </React.Fragment>
    ) : (
      ""
    )}
  </div>
);

export default HocAdd(Add);
