import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import List from "./list";
import Item from "./item";

export class index extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

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
