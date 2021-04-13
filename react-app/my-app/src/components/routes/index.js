import { useKeycloak } from '@react-keycloak/web';

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import FruitPage from '../fruit/FruitPage';
import { PrivateRoute } from '../misc/PrivateRoute';
import UserPage from '../user/UserPage';

export function AppRouter()  {
    const {initialized} = useKeycloak();
    if (!initialized) {
        return <h3>Loading</h3>;
    }
    return (<>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={FruitPage} />
                <PrivateRoute roles={['admin']} path="/protected" component={UserPage} />
            </Switch>
        </BrowserRouter>
    </>
    );

};