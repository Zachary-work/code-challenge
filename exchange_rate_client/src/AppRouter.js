import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ExchangeRatePage from './pages/ExchangeRate';

class AppRouter extends React.Component{

    render(){
        return (
            <Route>
                <Switch>
                    <Route path='/exchange_rate/' component={ExchangeRatePage}/>
                </Switch>
            </Route>
        );
    }

}

export default AppRouter;