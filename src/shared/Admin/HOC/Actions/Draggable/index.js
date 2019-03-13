import React from "react";

import { FieldCreator } from "../../../api/add";

const withDrag = Component => {
  class WithDrag extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        draggable: -1,
        data: []
      };
      this.dragStart = this.dragStart.bind(this);
      this.dragEnd = this.dragEnd.bind(this);
      this.dropEnter = this.dropEnter.bind(this);
      this.dropLeave = this.dropLeave.bind(this);
      this.drop = this.drop.bind(this);
      this.editPosition = this.editPosition.bind(this);
    }
    dragStart(e, data) {
      e.dataTransfer.setData("text/html", e.target.id);
      let idx = e.target.attributes.idx.value;
      this.setState({ draggable: idx, data });
    }
    dragEnd(e) {
      this.setState({ draggable: -1, data: [] });
    }

    dropEnter(event) {
      let idx = event.target.attributes.idx.value;
      event.target.style.height = "60px";
      event.target.style.border = "2px dashed grey";
    }
    dropLeave(event) {
      event.target.style.height = "10px";
      event.target.style.border = "none";
    }
    drop(event) {
      let idx = event.target.attributes.idx.value;
      let { draggable } = this.state;
      this.editPosition(draggable, idx);
      event.target.style.height = "10px";
      event.target.style.border = "none";
    }

    editPosition(prew, next) {
      let { data } = this.state;
      prew = Number(prew);
      next = Number(next);
      let tmp = data[prew];
      if (prew + 1 !== next && prew !== next) {
        data.splice(prew, 1);
        data.splice(next, 0, tmp);

        let editable = [];
        data.map((item, idx) => {
          editable.push({ id: item._id, data: { position: idx } });
        });
        const editer = new FieldCreator("categories/position", editable);
        editer
          .response()
          .then(res => {
            if (res && res.ok) {
              this.props.getData();
            } else {
              this.props.addError(
                "Произошла ошибка на сервере. Попробуйте позже."
              );
            }
          })
          .catch(err => {
            this.props.addError(
              "Произошла ошибка на сервере. Попробуйте позже."
            );
          });
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          dragStart={this.dragStart}
          dragEnd={this.dragEnd}
          dropEnter={this.dropEnter}
          dropLeave={this.dropLeave}
          drop={this.drop}
        />
      );
    }
  }
  WithDrag.displayName = `WithDrag(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithDrag;
};

export default withDrag;
