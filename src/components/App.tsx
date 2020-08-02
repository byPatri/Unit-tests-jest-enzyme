import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from '../routes';
import Main from './Main';

import { StoreProvider } from '../providers/StoreProviders';

const AppWrapper = () => (
    <StoreProvider>
        <Router>
            <div>
                <Switch>
                    {
                        ROUTES.map(({ name, Component }) => (
                            <Route key={name} path={`/${name}`}>
                                <Component />
                            </Route>
                        ))
                    }
                    <Route path='/'>
                        <Main />
                    </Route>
                </Switch>
            </div>
        </Router>
    </StoreProvider>
);

export default AppWrapper;
