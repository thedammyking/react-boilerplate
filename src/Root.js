import React from 'react'
import App from './containers/App'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './components/styled'
import 'normalize.css'

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <React.Fragment>
                <GlobalStyle />
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    </Provider>
)

export default Root
