import React from "react";

import Upload from "../../Components/Upload";

class CdekPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="page__container cdek-page">
        <span>CDEK</span>
        <Upload name="Загрузить .xls" classes="upload-form" type="XLS" />
      </div>
    );
  }
}

export default CdekPage;
