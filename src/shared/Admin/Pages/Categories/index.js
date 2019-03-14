import React from "react";
import { Link } from "react-router-dom";

import withMany from "../../HOC/LoadPages/WithMany";
import withDrag from "../../HOC/Actions/Draggable";

import AddButton from "../../Components/AddButton";

const categoriesPage = ({
  data,
  dragEnd,
  dragStart,
  drop,
  dropEnter,
  dropLeave,
  confirmToggle,
  deleteField
}) => (
  <div className="page__container categories-page">
    <h2 className="title-page">Все категории товаров</h2>
    <div className="categories-page__container">
      {data.map((item, idx) => (
        <React.Fragment key={item._id}>
          {idx === 0 ? (
            <div
              className="drop"
              idx={item.position}
              onDragOver={event => event.preventDefault()}
              onDrop={drop}
              onDragEnter={dropEnter}
              onDragLeave={dropLeave}
            />
          ) : (
            ""
          )}
          <div
            draggable="true"
            onDragStart={e => dragStart(e, data)}
            onDragEnd={dragEnd}
            className="drag"
            idx={item.position}
            id={`id${item._id}`}
          >
            <h3 draggable="false" className="drag__name">
              {item.name}
            </h3>
            <div draggable="false" className="drag__menu">
              <Link
                to={`/admin/edit-category/${item._id}`}
                className="clickable edit-button"
              >
                Изменить
              </Link>
              <span
                onClick={() =>
                  confirmToggle({
                    open: true,
                    text: "Вы действительно хотите удалить категорию?",
                    handler: deleteField,
                    data: item._id
                  })
                }
                className="clickable delete-button"
              >
                Удалить
              </span>
            </div>
          </div>
          <div
            className="drop"
            idx={
              idx < data.length - 1 ? data[idx + 1].position : item.position + 1
            }
            onDragOver={event => event.preventDefault()}
            onDrop={drop}
            onDragEnter={dropEnter}
            onDragLeave={dropLeave}
          />
        </React.Fragment>
      ))}
    </div>
    <AddButton src="/admin/add-category" />
  </div>
);

export default withMany(
  withDrag(categoriesPage),
  { get: "categories/get_by_params", delete: "categories/delete" },
  "Категории товаров"
);
