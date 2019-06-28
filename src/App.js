import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/home';
import Products from './pages/products';
import Product from './pages/product';
import { operations } from './duck';

import GlobalStyles from './styles/GlobalStyles';
import { gridTemplate } from 'styles/mixins';

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
    }
});

class App extends Component {
    componentDidMount() {
        this.props.fetchAppConfig();
    }

    render() {
        return (
            <Container>
                <GlobalStyles />
                <Router>
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
                            component={Product}
                        />
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
                </Router>
            </Container>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(App);
