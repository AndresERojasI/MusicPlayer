import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadArtists } from "../../actions/artist_actions";
import textFormat from "../../utils/formatText";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import styles from "./list.scss";

export class List extends Component {
  componentDidMount() {
    this.props.loadArtists();
  }

  renderList = artists =>
    artists.map(artist => (
      <Grid item xs={3} key={artist.id}>
        <Card className={styles.artist_list_item} >
          <Link to={`/artists/${artist.id}`} style={{ textDecoration: "none" }}>
            <CardActionArea>
              <CardMedia
                className={styles.artist_list_media}
                image={artist.image}
                title={artist.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {artist.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Genres:{" "}
                  {artist.genres.map(genre => textFormat(genre)).join(", ")}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Grid>
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
