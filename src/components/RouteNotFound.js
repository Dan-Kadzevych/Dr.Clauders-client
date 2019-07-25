import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

const RouteNotFound = ({ location }) => (
    <Redirect
        to={{
            pathname: location && location.pathname,
            state: { notFoundError: true }
        }}
    />
);

export default withRouter(RouteNotFound);
