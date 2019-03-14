import React from "react";
import { Link } from "react-router-dom";

import withMany from "../../HOC/LoadPages/WithMany";
import { IMAGE_PREFIX } from "../../../../etc/config";

import ImageBlock from "../../Components/ImageBlock";
import AddButton from "../../Components/AddButton";

const brandsPage = ({ data, confirmToggle, deleteField }) => (
  <div className="page__container brands-page">
    <h2 className="title-page">Бренды</h2>
    {data.length > 0 ? (
      <div className="brands-page__list">
        {data.map(item => (
          <div className="item" key={item._id}>
            <ImageBlock
              src={`${IMAGE_PREFIX}/${item.image}`}
              classes="item__image"
            />
            <h3 className="item__name">{item.name}</h3>
            <div className="item__menu">
              <Link
                className="edit clickable"
                to={`/admin/edit-brand/${item._id}`}
              >
                Изменить
              </Link>
              <span
                onClick={() =>
                  confirmToggle({
                    open: true,
                    text: "Вы действительно хотите удалить этот бренд?",
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
      </div>
    ) : (
      ""
    )}
    <AddButton src="/admin/add-brand" />
  </div>
);

export default withMany(
  brandsPage,
  { get: "brands/get_by_params", delete: "brands/delete" },
  "Бренды"
);
