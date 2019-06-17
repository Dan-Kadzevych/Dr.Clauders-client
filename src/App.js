import React from 'react';
import styled from 'styled-components';

import Header from './layout/Header';

import GlobalStyles from './styles/GlobalStyles';

const Container = styled.div`
    display: grid;

    grid-template-columns:
        [full-start] minmax(6rem, 1fr) [center-start] repeat(
            8,
            [col-start] minmax(min-content, 14rem) [col-end]
        )
        [center-end]
        minmax(6rem, 1fr) [full-end];
`;

function App() {
    return (
        <Container>
            <GlobalStyles />
            <Header />
        </Container>
    );
}

export default App;
