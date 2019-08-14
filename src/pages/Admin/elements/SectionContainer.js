import styled from 'styled-components';

const Container = styled.div`
    grid-column: center-start / center-end;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    align-content: start;

    :not(:first-child) {
        margin-top: 3rem;
    }
`;

export default Container;
