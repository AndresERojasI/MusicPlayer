import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

export class item extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  render() {
    const { match } = this.props;
    return <div>item {match.params.id}</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(item));
