import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/home'
import Sidebar from '../components/sidebar'

const layout = props => {
    return (
        <section>
            <Sidebar />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </section>
    )
}

export default layout
