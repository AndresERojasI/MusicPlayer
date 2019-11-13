import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { findArtist } from "../../actions/artist_actions";
import textFormat from "../../utils/formatText";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import PlayIcon from "@material-ui/icons/PlayArrowOutlined";
import Fab from "@material-ui/core/Fab";
import styles from "./styles.scss";

export class item extends Component {
  componentDidMount(prevProps, prevState) {
    const {
      match: { params }
    } = this.props;
    this.props.findArtist(params.id);
  }

  handleGenreClick = genre => {
    this.props.history.push(`/genres/${genre}`);
  };

  renderArtist = artist => (
    <Grid item key={artist.id} xs={5}>
      <Card className={styles.artist_list_item}>
        <CardActionArea className={styles.card_link}>
          <CardHeader
            title={
              <Typography variant="h5" gutterBottom>
                {artist.name}
              </Typography>
            }
            avatar={
              <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="play on spotify"
                href={artist.spotify_url}
              >
                <PlayIcon />
                See on Spotify
              </Fab>
            }
            subheader={`Popularity: ${artist.popularity}`}
          />
          <CardMedia
            className={styles.artist_list_media}
            image={artist.image}
            title={artist.name}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="span">
              Genres:&nbsp;
              {artist.genres.map(genre => (
                <Chip
                  label={textFormat(genre)}
                  onClick={this.handleGenreClick}
                  key={genre}
                />
              ))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );

  render() {
    const { artist, loading } = this.props;

    if (loading === true) {
      return <div>Loading...</div>;
    }

    const artistComponent = this.renderArtist(artist);
    return (
      <div className={styles.list}>
        <Grid container spacing={4}>
          {artistComponent}
        </Grid>
      </div>
    );
  }
}

item.propTypes = {
  artist: PropTypes.object,
  loading: PropTypes.bool
};

item.defaultProps = {
  artist: {},
  loading: true
};

const mapStateToProps = state => ({
  loading: state.artists.loading,
  artist: state.artists.artist
});

const mapDispatchToProps = {
  findArtist
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(item));
