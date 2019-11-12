import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadGenres } from "../../actions/genres_actions";
import textFormat from "../../utils/formatText";

export class List extends Component {
  componentDidMount() {
    this.props.loadGenres();
  }

  renderList = genres =>
    genres.map(genre => {
      return <div key={genre}>{textFormat(genre)}</div>;
    });

  render() {
    const { list, loading } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }

    const genresList = this.renderList(list);
    return <div>{genresList}</div>;
  }
}

List.propTypes = {
  list: PropTypes.array
};

List.defaultProps = {
  list: []
};

const mapStateToProps = state => ({
  loading: state.genres.loading,
  list: state.genres.genreList
});

const mapDispatchToProps = {
  loadGenres
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
