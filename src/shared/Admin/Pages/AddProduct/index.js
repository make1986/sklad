import React from "react";
import withForm from "../../HOC/LoadPages/WithForm";

import TextField from "../../Components/TextField";
import UploadBlock from "../../Components/UploadBlock";
import Gallery from "../../Components/Gallery";
import SaveButton from "../../Components/SaveButton";
import Select from "../../Components/Select";
import ListCreator from "../../Components/ListCreator";

const productPage = ({ handlerChange, data, onSave, isEmpty, addError }) => (
  <div className="page__container add-categories-page">
    <h2 className="title-page">Товар</h2>
    <div className="form">
      <TextField
        type="input"
        placeholder="Название"
        name="name"
        handlerChange={handlerChange}
        value={data.name}
        isEmpty={isEmpty.name ? true : false}
      />
      <Select
        value={data.category}
        name="category"
        handlerChange={handlerChange}
        isEmpty={isEmpty.category ? true : false}
        chooseField="name"
        apiUrl="categories/get_by_params"
        placeholder="Выбрать категорию"
        addError={addError}
      />
      <Select
        value={data.skills}
        name="skills"
        handlerChange={handlerChange}
        isEmpty={isEmpty.skills ? true : false}
        chooseField="name"
        apiUrl="skills/get_by_params"
        placeholder="Выбрать навык"
        addError={addError}
      />
      <Select
        value={data.brand}
        name="brand"
        handlerChange={handlerChange}
        isEmpty={isEmpty.brand ? true : false}
        chooseField="name"
        apiUrl="brands/get_by_params"
        placeholder="Выбрать бренд"
        addError={addError}
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

      <TextField
        type="input"
        placeholder="Вес товара в упаковке"
        name="weight"
        handlerChange={handlerChange}
        value={data.weight}
        isEmpty={isEmpty.weight ? true : false}
      />
      <h3 className="sub-title ">Возраст</h3>
      <div className="colums-2">
        <TextField
          type="input"
          placeholder="От"
          name="minAge"
          handlerChange={handlerChange}
          value={data.minAge}
          isEmpty={isEmpty.minAge ? true : false}
        />
        <TextField
          type="input"
          placeholder="До"
          name="maxAge"
          handlerChange={handlerChange}
          value={data.maxAge}
          isEmpty={isEmpty.maxAge ? true : false}
        />
      </div>

      <UploadBlock
        handlerChange={handlerChange}
        name="image"
        placeholder="Главное изображение"
        isEmpty={isEmpty.image ? true : false}
        value={data.image || ""}
      />
      <Gallery
        handlerChange={handlerChange}
        value={data.gallery}
        name="gallery"
        placeholder="Галерея"
      />
      <TextField
        type="input"
        placeholder="ID youtube"
        name="youtube"
        handlerChange={handlerChange}
        value={data.youtube}
        isEmpty={isEmpty.youtube ? true : false}
      />
      <ListCreator
        name="tags"
        placeholder="Теги"
        type="string"
        handlerChange={handlerChange}
        value={data.tags}
      />
      <ListCreator
        name="features"
        placeholder="Дополнительно"
        type="pair"
        handlerChange={handlerChange}
        value={data.features}
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
    gallery: false,
    category: true,
    brand: true,
    minAge: true,
    maxAge: true,
    weight: true,
    youtube: false
  }
);
