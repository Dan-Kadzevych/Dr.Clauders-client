import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/home';

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

function App() {
    return (
        <Container>
            <GlobalStyles />
            <Router>
                <Header />
                <Route path="/" exact component={Home} />
                <Route
                    path="/dog-supplements"
                    exact
                    component={() => <PageContainer>Dog</PageContainer>}
                />
                <Route
                    path="/cat-supplements"
                    exact
                    component={() => <PageContainer>Cat</PageContainer>}
                />
                <Route
                    path="/about-us"
                    exact
                    component={() => <PageContainer>About Us</PageContainer>}
                />
                <Route
                    path="/contact-us"
                    exact
                    component={() => <PageContainer>Contact</PageContainer>}
                />
                <Footer />
            </Router>
        </Container>
    );
}

export default App;
