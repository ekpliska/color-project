import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/index';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home, About, Events, Products, Contact, Whoops404 } from './MenuComponents/Items';


const store = configureStore();

ReactDOM.render(
    <HashRouter>
        <div className="mainMenu">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/events" component={Events} />
                <Route path="/products" component={Products} />
                <Route path="/contact" component={Contact} />
                {/* Определяем 404 старницу для несуществущих маршрутов */}
                <Route component={Whoops404} />
            </Switch>
        </div>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('root')
)