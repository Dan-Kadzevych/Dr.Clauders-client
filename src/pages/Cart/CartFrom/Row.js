import styled from 'styled-components';

const Row = styled.div`
    display: grid;
    grid-template-columns: [start] 5.5rem [remove] 10rem [image] 1fr [title] 8rem [price] 12rem [quanity] 9rem [end];
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.1);

    line-height: 2.2rem;
    &:not(:last-child) {
        border-bottom: none;
    }

    & > * {
        padding: 1.2rem 0.9rem;
    }
`;

export default Row;
