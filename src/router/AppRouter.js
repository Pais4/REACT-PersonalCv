import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Components from 'views/Components/Components';
import ProfilePage from 'views/ProfilePage/ProfilePage';

export const AppRouter = () => {
    return (
        <Router >
            <Switch>
                <Route exact path="/test" component={Components} />
                <Route exact path="/" component={ProfilePage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
