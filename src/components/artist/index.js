import React from "react";
import PropTypes from "prop-types";
import PlayIcon from "@material-ui/icons/PlayArrowOutlined";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  CardHeader,
  Typography,
  Grid,
  Fab
} from "@material-ui/core";
import textFormat from "../../utils/formatText";
import { withRouter } from "react-router";
import styles from "./styles.scss";

const index = ({ artist, history }) => {
  return (
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
                  onClick={() => history.push(`/genres/${genre}`)}
                  key={genre}
                />
              ))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

index.propTypes = {
  artist: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    popularity: PropTypes.string,
    image: PropTypes.string,
    genre: PropTypes.array
  })
};

export default withRouter(index);
