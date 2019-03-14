import React from "react";
import withForm from "../../HOC/LoadPages/WithForm";

import TextField from "../../Components/TextField";
import UploadBlock from "../../Components/UploadBlock";
import SaveButton from "../../Components/SaveButton";

const addBrandPage = ({ handlerChange, data, onSave, isEmpty }) => (
  <div className="page__container add-brand-page">
    <h2 className="title-page">Бренд</h2>
    <div className="form">
      <TextField
        type="input"
        placeholder="Название"
        name="name"
        handlerChange={handlerChange}
        value={data.name}
        isEmpty={isEmpty.name ? true : false}
      />
      <TextField
        type="textarea"
        placeholder="Описание"
        name="description"
        handlerChange={handlerChange}
        value={data.description}
        isEmpty={isEmpty.description ? true : false}
      />
      <UploadBlock
        handlerChange={handlerChange}
        name="image"
        placeholder="Загрузить логотип"
        isEmpty={isEmpty.image ? true : false}
        value={data.image || ""}
      />
      <SaveButton name="Сохранить" submit={onSave} />
    </div>
  </div>
);

export default withForm(
  addBrandPage,
  {
    set: "brands/add",
    edit: "brands/edit",
    redirect: "/admin/brands",
    get: "brands/get_by_id"
  },
  "Бренд",
  { name: true, description: false, image: true }
);
