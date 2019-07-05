import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import Header from './layout/Header';
import Footer from './layout/Footer';
import { Home, Cart, Product, Products } from 'pages';

import { operations } from 'duck';
import { initCart } from 'pages/Cart/duck/operations';

import GlobalStyles from './styles/GlobalStyles';
import { gridTemplate } from 'styles/mixins';

import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
    ${gridTemplate}
`;

const PageContainer = styled.div`
    grid-column: full-start / full-end;
    background-color: orangered;
    color: #fff;
    text-align: center;
    padding: 20rem;
`;

const mapDispatchToProps = dispatch => ({
    fetchAppConfig() {
        return dispatch(operations.fetchAppConfig());
    },
    initCart() {
        return dispatch(initCart());
    }
});

class App extends Component {
    componentDidMount() {
        this.props.fetchAppConfig();
        this.props.initCart();
    }

    render() {
        return (
            <Container>
                <GlobalStyles />
                <ConnectedRouter history={this.props.history}>
                    <ToastContainer />
                    <Route component={Header} />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route
                            path={[
                                '/pet-supplements/:pet/:category',
                                '/pet-supplements/:pet'
                            ]}
                            exact
                            component={Products}
                        />
                        <Route
                            path="/shop/:pet/:category/:productName"
                            exact
                            component={Product}
                        />
                        <Route exact path="/cart" component={Cart} />
                        <Route
                            path="/about-us"
                            exact
                            component={() => (
                                <PageContainer>About Us</PageContainer>
                            )}
                        />
                        <Route
                            path="/contact-us"
                            exact
                            component={() => (
                                <PageContainer>Contact</PageContainer>
                            )}
                        />
                    </Switch>
                    <Footer />
                </ConnectedRouter>
            </Container>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(App);
