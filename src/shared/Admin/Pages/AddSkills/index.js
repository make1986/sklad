import React from "react";
import withForm from "../../HOC/LoadPages/WithForm";

import TextField from "../../Components/TextField";
import UploadBlock from "../../Components/UploadBlock";
import SaveButton from "../../Components/SaveButton";

const addSkillsPage = ({ handlerChange, data, onSave, isEmpty }) => (
  <div className="page__container add-categories-page">
    <h2 className="title-page">Навык</h2>
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
        placeholder="Загрузить изображение"
        isEmpty={isEmpty.image ? true : false}
        value={data.image || ""}
      />
      <SaveButton name="Сохранить" submit={onSave} />
    </div>
  </div>
);

export default withForm(
  addSkillsPage,
  {
    set: "skills/add",
    edit: "skills/edit",
    redirect: "/admin/skills",
    get: "skills/get_by_id"
  },
  "Навык",
  { name: true, description: false, image: false }
);
