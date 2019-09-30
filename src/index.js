import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home, About, Events, ColorApp, Contact, Whoops404 } from './MenuComponents/Items';
import './stylesheets/page.css';
import { Details } from './containers/Details';

const store = configureStore();

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Redirect from="/history" to="/about/history" />
                <Redirect from="/services" to="/about/services" />
                <Redirect from="/location" to="/about/location" />
                <Route path="/events" component={Events} />
                <Route path="/colorapp/:id" component={Details} />
                <Route path="/colorapp" component={ColorApp} />
                <Route path="/contact" component={Contact} />
                {/* Определяем 404 старницу для несуществущих маршрутов */}
                <Route component={Whoops404} />
            </Switch>
        </div>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
)