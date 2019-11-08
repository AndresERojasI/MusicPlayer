import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import store from './store'
import App from './App'
import {AppContainer} from 'react-hot-loader'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

if (module.hot) {
    module.hot.accept('./App', () => {

        const NextApp = require('./App').default

        ReactDOM.render (<AppContainer>
            <NextApp/>
        </AppContainer>, document.getElementById('root'))

    })
}
