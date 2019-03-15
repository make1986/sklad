import React from "react";
import { Link } from "react-router-dom";

import withMany from "../../HOC/LoadPages/WithMany";

import AddButton from "../../Components/AddButton";
import Filter from "../../Components/Filter";

const catalogPage = ({
  data,
  confirmToggle,
  deleteField,
  addError,
  changeSearch,
  changeParams,
  search,
  params
}) => (
  <div className="page__container catalog-page">
    <h2 className="title-page">Все товары</h2>
    <Filter
      controllers={[
        {
          type: "text",
          placeholder: "Введите название или штрихкод",
          name: "name&&barcode",
          handlerChange: changeSearch,
          value: search.value
        },
        {
          type: "select",
          placeholder: "Все категории",
          name: "category",
          handlerChange: changeParams,
          value:
            params.findIndex(x => x.key === "category") >= 0
              ? params[params.findIndex(x => x.key === "category")].value
              : "",
          chooseField: "name",
          apiUrl: "categories/get_by_params",
          addError: addError
        },
        {
          type: "text",
          placeholder: "Минимальный возраст",
          name: "minAge+gte",
          handlerChange: changeParams,
          value:
            params.findIndex(x => x.key === "minAge+gte") >= 0
              ? params[params.findIndex(x => x.key === "minAge+gte")].value
              : ""
        },
        {
          type: "text",
          placeholder: "Максимальный возраст",
          name: "maxAge+lte",
          handlerChange: changeParams,
          value:
            params.findIndex(x => x.key === "maxAge+lte") >= 0
              ? params[params.findIndex(x => x.key === "maxAge+lte")].value
              : ""
        }
      ]}
    />
    <div className="catalog-page__list">
      {data.length > 0 ? (
        <React.Fragment>
          {data.map(item => (
            <div key={item._id} className="item">
              <h4 className="name">{item.name}</h4>
              <div className="menu">
                <Link
                  className="edit clickable"
                  to={`/admin/edit-product/${item._id}`}
                >
                  Изменить
                </Link>
                <span
                  onClick={() =>
                    confirmToggle({
                      open: true,
                      text: "Вы действительно хотите удалить этот товар?",
                      handler: deleteField,
                      data: item._id
                    })
                  }
                  className="delete clickable"
                >
                  Удалить
                </span>
              </div>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <p>Не товаров</p>
      )}
    </div>
    <AddButton src="/admin/add-product" />
  </div>
);

export default withMany(
  catalogPage,
  { get: "products/get_by_params", delete: "products/delete" },
  "Каталог товаров"
);
