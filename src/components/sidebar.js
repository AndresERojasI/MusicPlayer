import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <section>
      <Typography>
        <Link to="/genres">Genres</Link>
        <br />
        <Link to="/artists">Artists</Link>
      </Typography>
    </section>
  );
};

export default sidebar;
