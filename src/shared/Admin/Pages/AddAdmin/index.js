import React from "react";
import withForm from "../../HOC/LoadPages/WithForm";
import withAccess from "./HOCs/withAccess";

import TextField from "../../Components/TextField";
import UploadBlock from "../../Components/UploadBlock";
import SaveButton from "../../Components/SaveButton";
import Checkbox from "../../Components/Checkbox";

const addAdminPage = ({
  handlerChange,
  data,
  onSave,
  isEmpty,
  changeAccess
}) => (
  <div className="page__container add-brand-page">
    <h2 className="title-page">Администратор</h2>
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
        type="input"
        placeholder="Email"
        name="email"
        handlerChange={handlerChange}
        value={data.email}
        isEmpty={isEmpty.email ? true : false}
      />
      <h3 className="sub-title">Доступ администратора</h3>
      <Checkbox
        name="category"
        placeholder="Управление категориями"
        handlerChange={changeAccess}
        value={
          data.access && data.access.category ? data.access.category : false
        }
      />
      <Checkbox
        name="skills"
        placeholder="Управление навыками"
        handlerChange={changeAccess}
        value={data.access && data.access.skills ? data.access.skills : false}
      />
      <Checkbox
        name="brand"
        placeholder="Управление брендами"
        handlerChange={changeAccess}
        value={data.access && data.access.brand ? data.access.brand : false}
      />
      <Checkbox
        name="product"
        placeholder="Управление товарами"
        handlerChange={changeAccess}
        value={data.access && data.access.product ? data.access.product : false}
      />
      <Checkbox
        name="stock"
        placeholder="Управление складом"
        handlerChange={changeAccess}
        value={data.access && data.access.stock ? data.access.stock : false}
      />
      <Checkbox
        name="order"
        placeholder="Управление заказами"
        handlerChange={changeAccess}
        value={data.access && data.access.order ? data.access.order : false}
      />
      <Checkbox
        name="client"
        placeholder="Управление клиентами"
        handlerChange={changeAccess}
        value={data.access && data.access.client ? data.access.client : false}
      />
      <Checkbox
        name="adsense"
        placeholder="Управление рекламой"
        handlerChange={changeAccess}
        value={data.access && data.access.adsense ? data.access.adsense : false}
      />
      <Checkbox
        name="payment"
        placeholder="Управление оплатой"
        handlerChange={changeAccess}
        value={data.access && data.access.payment ? data.access.payment : false}
      />
      <Checkbox
        name="delivery"
        placeholder="Управление доставкой"
        handlerChange={changeAccess}
        value={
          data.access && data.access.delivery ? data.access.delivery : false
        }
      />
      <Checkbox
        name="content"
        placeholder="Управление контентом"
        handlerChange={changeAccess}
        value={data.access && data.access.content ? data.access.content : false}
      />
      <Checkbox
        name="statistic"
        placeholder="Просмотр статистики"
        handlerChange={changeAccess}
        value={
          data.access && data.access.statistic ? data.access.statistic : false
        }
      />
      <SaveButton name="Сохранить" submit={onSave} />
    </div>
  </div>
);

export default withForm(
  withAccess(addAdminPage),
  {
    set: "admins/add",
    edit: "admins/edit",
    redirect: "/admin/admins",
    get: "admins/get_by_id"
  },
  "Администратор",
  { name: true, email: true }
);
