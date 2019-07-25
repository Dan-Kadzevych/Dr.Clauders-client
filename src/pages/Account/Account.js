import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { RouteNotFound } from 'components';
import { H1, ButtonAlt, PageHeader } from 'elements';
import { operations } from './duck';

const Container = styled.div`
    grid-column: center-start / center-end;
    margin-bottom: 8.5rem;
    margin-top: 4rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5rem;
    align-items: start;
`;

const Title = styled(H1)`
    font-weight: 300;
`;

const mapDispatchToProps = dispatch => ({
    logout() {
        return dispatch(operations.logout());
    }
});

const Account = ({ match, logout }) => {
    return (
        <Container>
            <PageHeader>
                <Title>Account</Title>
            </PageHeader>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>
                    <ButtonAlt onClick={logout}>Logout</ButtonAlt>
                </li>
            </ul>
            <Switch>
                <Route
                    exact
                    path={`${match.path}`}
                    component={() => <div>Main</div>}
                />
                <Route
                    exact
                    path={`${match.path}/orders`}
                    component={() => <div>'orders'</div>}
                />
                <Route
                    exact
                    path={`${match.path}/discount`}
                    component={() => <div>'orders'</div>}
                />
                <RouteNotFound />
            </Switch>
        </Container>
    );
};

export default connect(
    null,
    mapDispatchToProps
)(Account);
