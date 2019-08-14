import styled from 'styled-components';

const FormGroup = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;

    & > * {
        margin-top: 0 !important;
    }
`;

export default FormGroup;
