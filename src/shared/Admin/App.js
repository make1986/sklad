import React from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";

import P404 from "./Pages/404";
import Header from "./Components/Header";
import Confirm from "./Components/Confirm";
import Error from "./Components/Error";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "", confirm: { open: false } };
    this.addError = this.addError.bind(this);
    this.HeaderWithProps = this.HeaderWithProps.bind(this);
    this.confirmToggle = this.confirmToggle.bind(this);
  }
  addError(err) {
    this.setState({ error: err });
  }
  confirmToggle(obj) {
    if (!obj.open) {
      this.setState({ confirm: { open: false } });
      document.body.style.overflowY = "auto";
    } else {
      this.setState({
        confirm: {
          open: true,
          text: obj.text,
          handler: obj.handler,
          data: obj.data
        }
      });
      document.body.style.overflowY = "hidden";
    }
  }
  HeaderWithProps(props) {
    return <Header {...props} addError={this.addError} />;
  }
  render() {
    const { error, confirm } = this.state;
    return (
      <div className="page">
        <Route component={this.HeaderWithProps} />
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => (
                <C
                  {...props}
                  {...rest}
                  addError={this.addError}
                  confirmToggle={this.confirmToggle}
                />
              )}
            />
          ))}
          <Route render={props => <P404 {...props} />} />
        </Switch>
        {confirm.open ? (
          <Confirm
            text={confirm.text}
            handler={confirm.handler}
            data={confirm.data}
            close={this.confirmToggle}
          />
        ) : (
          ""
        )}
        {error ? <Error ok={this.addError} error={error} /> : ""}
      </div>
    );
  }
}
