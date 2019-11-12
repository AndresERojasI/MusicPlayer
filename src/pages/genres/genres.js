import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import List from "./list";
import Item from "./item";

export class index extends Component {
  render() {
    const { url } = this.props.match;

    return (
      <Switch>
        <Route path={`${url}`} component={List} exact />
        <Route path={`${url}/:id`} component={Item} exact />
      </Switch>
    );
  }
}

export default withRouter(index);
