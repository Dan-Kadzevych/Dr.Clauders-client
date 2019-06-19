import React from 'react';
import styled from 'styled-components';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/home';

import GlobalStyles from './styles/GlobalStyles';
import { gridTemplate } from 'styles/mixins';

const Container = styled.div`
    ${gridTemplate}
`;

function App() {
    return (
        <Container>
            <GlobalStyles />
            <Header />
            <Home />
            <Footer />
        </Container>
    );
}

export default App;
