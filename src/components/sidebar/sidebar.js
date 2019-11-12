import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import styles from "./styles.scss";

const sidebar = () => {
  return (
    <Grid item xs={12}>
      <Link to="/genres" className={styles.menu_button}>
        <Button variant="outlined" size="large" className={styles.menu_button}>
          Genres
        </Button>
      </Link>
      <Grid item xs={12} />
      <Link to="/artists" className={styles.menu_button}>
        <Button variant="outlined" size="large" className={styles.menu_button}>
          Artists
        </Button>
      </Link>
    </Grid>
  );
};

export default sidebar;
