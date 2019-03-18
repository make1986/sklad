import React from "react";
import withForm from "../../HOC/LoadPages/WithForm";

import TextField from "../../Components/TextField";
import UploadBlock from "../../Components/UploadBlock";
import SaveButton from "../../Components/SaveButton";

const addAdsPage = ({ handlerChange, data, onSave, isEmpty }) => (
  <div className="page__container add-brand-page">
    <h2 className="title-page">Рекламный модуль</h2>
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
        type="input"
        placeholder="Ссылка"
        name="source"
        handlerChange={handlerChange}
        value={data.source}
        isEmpty={isEmpty.source ? true : false}
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
  addAdsPage,
  {
    set: "adsense/add",
    edit: "adsense/edit",
    redirect: "/admin/adsense",
    get: "adsense/get_by_id"
  },
  "Рекламный модуль",
  { name: true, source: true, image: true }
);
