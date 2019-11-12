import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadArtists } from "../../actions/artist_actions";
import textFormat from "../../utils/formatText";

export class List extends Component {
  componentDidMount() {
    this.props.loadArtists();
  }

  renderList = artists =>
    artists.map(artist => {
      return <div key={artist.id}>{textFormat(artist.name)}</div>;
    });

  render() {
    const { list, loading } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }

    const loadArtists = this.renderList(list);
    return <div>{loadArtists}</div>;
  }
}

List.propTypes = {
  list: PropTypes.array
};

List.defaultProps = {
  list: []
};

const mapStateToProps = state => ({
  loading: state.artists.loading,
  list: state.artists.artistsList
});

const mapDispatchToProps = {
  loadArtists
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
