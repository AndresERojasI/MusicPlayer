import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Genres from "../pages/genres/genres";
import Artists from "../pages/artists/artists";
import Sidebar from "../components/sidebar";
import styles from "./layout.scss";

// Material Components
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const layout = props => {
  return (
    <section className={styles.main}>
      <CssBaseline />
      <div className={styles.drawer}>
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: styles.drawerPaper
          }}
        >
          <Typography variant="h4" align="center">
            Rose Global
          </Typography>
          <Divider />
          <Sidebar />
        </Drawer>
      </div>
      <section className={styles.content}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/genres" component={Genres} />
          <Route path="/artists" component={Artists} />
        </Switch>
      </section>
    </section>
  );
};

export default layout;
