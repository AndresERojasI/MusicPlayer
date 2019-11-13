import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadGenres } from "../../actions/genres_actions";
import textFormat from "../../utils/formatText";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import styles from "./lists.scss";

export class List extends Component {
  componentDidMount() {
    this.props.loadGenres();
  }

  renderList = genres =>
    genres.map(genre => (
      <Grid item xs={3} key={genre}>
        <Card className={styles.artist_list_item}>
          <CardActionArea>
            <CardContent>
              <Link to={`/genres/${genre.trim()}`}>
                <Typography gutterBottom variant="h5" component="h2">
                  {textFormat(genre)}
                </Typography>
              </Link>
              <Typography variant="body2" color="textSecondary" component="p">
                <Link to={`/genres/${genre.trim()}`}>Play Random Song</Link>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));

  render() {
    const { list, loading } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }

    const genresList = this.renderList(list);
    return (
      <div className={styles.list}>
        <Grid container spacing={4}>
          {genresList}
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
  loading: state.genres.loading,
  list: state.genres.genreList
});

const mapDispatchToProps = {
  loadGenres
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
