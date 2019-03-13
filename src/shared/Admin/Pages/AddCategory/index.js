import React from "react";
import withForm from "../../HOC/LoadPages/WithForm";

import TextField from "../../Components/TextField";
import UploadBlock from "../../Components/UploadBlock";
import SaveButton from "../../Components/SaveButton";

const categoriesPage = ({ handlerChange, data, onSave, isEmpty }) => (
  <div className="page__container add-categories-page">
    <h2 className="title-page">Категория товаров</h2>
    <div className="form">
      <TextField
        type="input"
        placeholder="Имя"
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
        placeholder="Загрузить изображение"
        isEmpty={isEmpty.image ? true : false}
        value={data.image || ""}
      />
      <SaveButton name="Сохранить" submit={onSave} />
    </div>
  </div>
);

export default withForm(
  categoriesPage,
  {
    set: "categories/add",
    edit: "categories/edit",
    redirect: "/admin/categories",
    get: "categories/get_by_id"
  },
  "Категория",
  { name: true, description: true, image: false }
);
