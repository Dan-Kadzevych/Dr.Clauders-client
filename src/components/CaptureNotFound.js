import React from 'react';
import { withRouter } from 'react-router-dom';
import NoMatch from 'pages/NoMatch';

const CaptureRouteNotFound = ({ children, location }) =>
    location && location.state && location.state.notFoundError ? (
        <NoMatch />
    ) : (
        children
    );

export default withRouter(CaptureRouteNotFound);
