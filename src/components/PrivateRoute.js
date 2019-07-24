import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { getIsAuthorized } from 'pages/Account/duck/selectors';

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state)
});

const PrivateRoute = ({
    component: Component,
    isAuthorized,
    match,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthorized ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/auth',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};

export default connect(mapStateToProps)(PrivateRoute);
