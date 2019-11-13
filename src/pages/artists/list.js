import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadArtists } from "../../actions/artist_actions";
import Artist from '../../components/artist'
import Grid from "@material-ui/core/Grid";
import styles from "./styles.scss";

export class List extends Component {
  componentDidMount() {
    this.props.loadArtists();
  }

  renderList = artists => artists.map(artist => (
      <Artist artist={artist} key={artist.id}/>
    ));

  render() {
    const { list, loading } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }

    const loadArtists = this.renderList(list);
    return (
      <div className={styles.list}>
        <Grid container spacing={4}>
          {loadArtists}
        </Grid>
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool
};

List.defaultProps = {
  list: [],
  loading: false
};

const mapStateToProps = state => ({
  loading: state.artists.loading,
  list: state.artists.artistsList
});

const mapDispatchToProps = {
  loadArtists
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
