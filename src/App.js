import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import { Home, Cart, Product, Products, NoMatch } from 'pages';
import { isAppLoading } from 'duck';
import { Footer, Header } from 'layout';
import { Spinner } from 'blocks';
import { ScrollToTop } from 'elements';

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

const mapStateToProps = state => ({
    isLoading: isAppLoading(state)
});

class App extends Component {
    render() {
        return !this.props.isLoading ? (
            <Container>
                <GlobalStyles />
                <ConnectedRouter history={this.props.history}>
                    <ScrollToTop>
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
                            <Route component={NoMatch} />
                        </Switch>
                        <Footer />
                    </ScrollToTop>
                </ConnectedRouter>
            </Container>
        ) : (
            <Spinner />
        );
    }
}

export default connect(mapStateToProps)(App);
