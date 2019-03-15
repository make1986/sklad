import React from "react";

import { MultiBootloader } from "../../../api/load";

import Preloader from "../../../Components/Preloader";

const withMany = (Component, API_URL, title) => {
  class WithMany extends React.Component {
    constructor(props) {
      super(props);
      let data;
      if (__isBrowser__) {
        data = window.__INITIAL_DATA__;
        delete window.__INITIAL_DATA__;
      } else if (props.staticContext && props.staticContext.data) {
        data = props.staticContext.data;
      }
      this.state = {
        data: data && data.data ? data.data : [],
        withData: data && data.data ? true : false,
        search: { key: "", value: "" },
        params: [],
        count: data && data.count ? data.count : 0,
        moreLoading: false,
        page: 1
      };
      this.getData = this.getData.bind(this);
      this.deleteField = this.deleteField.bind(this);
      this.changeSearch = this.changeSearch.bind(this);
      this.changeParams = this.changeParams.bind(this);
      this.loadMore = this.loadMore.bind(this);
    }
    componentDidMount() {
      window.scrollTo(0, 0);
      document.title = title;
      if (!this.state.withData) {
        this.getData();
      }
    }
    deleteField(id) {
      const handlerDelete = new MultiBootloader(API_URL.delete, id);
      handlerDelete.response().then(data => {
        if (data && data.ok) {
          this.getData();
          this.props.confirmToggle({ open: false });
        } else {
          this.props.addError(data.message);
        }
      });
    }
    changeSearch(key, value) {
      if (value) {
        this.setState({ search: { key, value }, page: 1 }, () => {
          this.getData();
        });
      } else {
        this.setState({ search: { key: "", value: "" }, page: 1 }, () => {
          this.getData();
        });
      }
    }
    changeParams(key, value) {
      let { params } = this.state;
      const idx = params.findIndex(x => x.key === key);
      if (value) {
        if (idx >= 0) {
          params[idx].value = value;
        } else {
          params.push({ key, value });
        }
      } else {
        if (idx >= 0) {
          params.splice(idx, 1);
        }
      }
      this.setState({ params, page: 1 }, () => {
        this.getData();
      });
    }
    paramsInLine(params) {
      let str = "";
      let key;
      let value;
      params.map((p, idx) => {
        if (p.key.indexOf("+gte") >= 0) {
          key = p.key.substring(0, p.key.indexOf("+gte"));
          value = `+gte${p.value}`;
        } else if (p.key.indexOf("+lte") >= 0) {
          key = p.key.substring(0, p.key.indexOf("+lte"));
          value = `+lte${p.value}`;
        } else {
          key = p.key;
          value = p.value;
        }
        str = `${str}${idx > 0 ? `&&${key}=${value}` : `${key}=${value}`}`;
      });
      return str;
    }
    searchInLine(param) {
      let { key, value } = param;
      const keys = key.split("&&");
      let search = "";
      if (value) {
        keys.map((item, idx) => {
          search = `${search}${
            idx > 0 ? `||${item}=${value}` : `${item}=${value}`
          }`;
        });
      }
      return search;
    }
    loadMore() {
      this.setState({ moreLoading: true });
      let { search, params, page } = this.state;
      page++;
      let getParam = `${
        this.paramsInLine(params) ? this.paramsInLine(params) : undefined
      }/${search.key ? this.searchInLine(search) : undefined}/${page}`;
      const loader = new MultiBootloader(API_URL.get, getParam);
      loader
        .response()
        .then(data => {
          this.setState({
            data:
              data && data.data
                ? [...this.state.data, ...data.data]
                : this.state.data,
            moreLoading: false,
            page
          });
        })
        .catch(err => {
          this.props.addError("Произошла ошибка на сервере. Попробуйте позже.");
        });
    }
    getData() {
      const { search, params, page } = this.state;
      let getParam = "";
      if (search.key || params.length > 0) {
        getParam = `${
          this.paramsInLine(params) ? this.paramsInLine(params) : undefined
        }/${search.key ? this.searchInLine(search) : undefined}/${page}`;
      }
      const loader = new MultiBootloader(API_URL.get, getParam);
      loader
        .response()
        .then(data => {
          this.setState({
            data: data && data.data ? data.data : [],
            withData: data && data.data ? true : false,
            count: data && data.count ? data.count : 0
          });
        })
        .catch(err => {
          this.props.addError("Произошла ошибка на сервере. Попробуйте позже.");
        });
    }

    render() {
      const { data, withData, search, params, count, moreLoading } = this.state;
      return (
        <React.Fragment>
          {withData ? (
            <Component
              {...this.props}
              data={data}
              getData={this.getData}
              deleteField={this.deleteField}
              changeSearch={this.changeSearch}
              changeParams={this.changeParams}
              search={search}
              params={params}
              count={count}
              moreLoading={moreLoading}
              loadMore={this.loadMore}
            />
          ) : (
            <Preloader />
          )}
        </React.Fragment>
      );
    }
  }
  WithMany.displayName = `WithMany(${Component.displayName ||
    Component.name ||
    "Component"})`;
  return WithMany;
};

export default withMany;
