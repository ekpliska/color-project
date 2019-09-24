import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home, About, Events, ColorApp, Contact, Whoops404 } from './MenuComponents/Items';
// import './stylesheets/page.css';

const store = configureStore();

ReactDOM.render(
    <HashRouter>
        <div className="mainMenu">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Redirect from="/history" to="/about/history" />
                <Redirect from="/services" to="/about/services" />
                <Redirect from="/location" to="/about/location" />
                <Route path="/events" component={Events} />
                <Route path="/colorapp" component={ColorApp} />
                <Route path="/contact" component={Contact} />
                {/* Определяем 404 старницу для несуществущих маршрутов */}
                <Route component={Whoops404} />
            </Switch>
        </div>
        {/* <Provider store={store}>
            <App />
        </Provider> */}
    </HashRouter>,
    document.getElementById('root')
)