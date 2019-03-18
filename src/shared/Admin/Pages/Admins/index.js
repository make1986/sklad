import React from "react";
import { Link } from "react-router-dom";

import withMany from "../../HOC/LoadPages/WithMany";
import { IMAGE_PREFIX } from "../../../../etc/config";

import ImageBlock from "../../Components/ImageBlock";
import AddButton from "../../Components/AddButton";

const adminsPage = ({ data, confirmToggle, deleteField }) => (
  <div className="page__container brands-page">
    <h2 className="title-page">Администраторы</h2>
    {data.length > 0 ? (
      <div className="brands-page__list">
        {data.map(item => (
          <div className="item" key={item._id}>
            <h3 className="item__name">
              {item.name}
              {`<${item.email}>`}
            </h3>
            <div className="item__menu">
              <Link
                className="edit clickable"
                to={`/admin/edit-admin/${item._id}`}
              >
                Изменить
              </Link>
              <span
                onClick={() =>
                  confirmToggle({
                    open: true,
                    text: "Вы действительно хотите удалить пользователя?",
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
    <AddButton src="/admin/add-admin" />
  </div>
);

export default withMany(
  adminsPage,
  { get: "admins/get_by_params", delete: "admins/delete" },
  "Администраторы"
);
