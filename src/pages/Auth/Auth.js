import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { H1 } from 'elements';
import { getIsAuthorized } from 'pages/Account/duck/selectors';
import { operations, selectors } from './duck';
import { SignInForm, SignUpForm } from './index';

const Container = styled.div`
    grid-column: center-start / center-end;
    margin-bottom: 8.5rem;
    margin-top: 4rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5rem;
    align-items: start;
`;

const Header = styled.header`
    text-align: center;
    grid-column: 1 / -1;
    margin: 1rem 0;
`;

const Title = styled(H1)`
    font-weight: 300;
`;

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
    isSignInLoading: selectors.signInLoadingSelector(state),
    isSignUpLoading: selectors.signUpLoadingSelector(state)
});

const mapDispatchToProps = dispatch => ({
    signUp(user) {
        return dispatch(operations.signUp(user));
    },
    signIn(credentials) {
        return dispatch(operations.signIn(credentials));
    }
});

const Auth = ({
    match,
    logout,
    location: { state },
    isAuthorized,
    signUp,
    signIn,
    isSignInLoading,
    isSignUpLoading
}) => {
    if (isAuthorized) {
        const { from } = state || { from: { pathname: '/' } };

        return <Redirect to={from} />;
    }

    return (
        <Container>
            <Header>
                <Title>Sign In</Title>
            </Header>
            <SignInForm onSubmit={signIn} isLoading={isSignInLoading} />
            <SignUpForm onSubmit={signUp} isLoading={isSignUpLoading} />
        </Container>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);
