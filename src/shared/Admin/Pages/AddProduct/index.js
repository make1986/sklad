import React from "react";
import withForm from "../../HOC/LoadPages/WithForm";

import TextField from "../../Components/TextField";
import UploadBlock from "../../Components/UploadBlock";
import Gallery from "../../Components/Gallery";
import SaveButton from "../../Components/SaveButton";

const productPage = ({ handlerChange, data, onSave, isEmpty }) => (
  <div className="page__container add-categories-page">
    <h2 className="title-page">Товар</h2>
    <div className="form">
      <Gallery
        handlerChange={handlerChange}
        value={data.gallery}
        name="gallery"
        placeholder="Галерея"
      />
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
      <TextField
        type="input"
        placeholder="Артикул"
        name="article"
        handlerChange={handlerChange}
        value={data.article}
        isEmpty={isEmpty.article ? true : false}
      />
      <TextField
        type="input"
        placeholder="Штрихкод"
        name="barcode"
        handlerChange={handlerChange}
        value={data.barcode}
        isEmpty={isEmpty.barcode ? true : false}
      />
      <UploadBlock
        handlerChange={handlerChange}
        name="image"
        placeholder="Главное изображение"
        isEmpty={isEmpty.image ? true : false}
        value={data.image || ""}
      />

      <SaveButton name="Сохранить" submit={onSave} />
    </div>
  </div>
);

export default withForm(
  productPage,
  {
    set: "products/add",
    edit: "products/edit",
    redirect: "/admin/catalog",
    get: "products/get_by_id"
  },
  "Товар",
  {
    name: true,
    description: true,
    image: true,
    article: true,
    barcode: true,
    gallery: false
  }
);
