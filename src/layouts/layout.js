import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/home'
import GenresList from '../pages/genres/list'
import ArtistsList from '../pages/artists/list'
import Sidebar from '../components/sidebar'

const layout = props => {
    return (
        <section>
            <Sidebar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/genres" component={GenresList} />
                <Route path="/artists" component={ArtistsList} />
            </Switch>
        </section>
    )
}

export default layout
