import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import {
    Auth,
    Home,
    Cart,
    Product,
    Products,
    Checkout,
    Account,
    Admin
} from 'pages';
import { isAppLoading } from 'duck';
import { Footer, Header } from 'layout';
import { Spinner } from 'blocks';
import { ScrollToTop } from 'elements';
import { PrivateRoute, CaptureNotFound /*RouteNotFound*/ } from 'components';

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
                        <CaptureNotFound>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/auth" component={Auth} />
                                <Route
                                    path={[
                                        '/pet-supplements/:pet/:category',
                                        '/pet-supplements/:pet'
                                    ]}
                                    exact
                                    component={Products}
                                />
                                <Route
                                    path="/products/:product"
                                    exact
                                    component={Product}
                                />
                                <Route exact path="/cart" component={Cart} />
                                <Route
                                    exact
                                    path="/checkout"
                                    component={Checkout}
                                />
                                <PrivateRoute
                                    path="/account"
                                    component={Account}
                                />
                                <PrivateRoute path="/admin" component={Admin} />
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
                                <div>Not Found</div>
                            </Switch>
                        </CaptureNotFound>
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
