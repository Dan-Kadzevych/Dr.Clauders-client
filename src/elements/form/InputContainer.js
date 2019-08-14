import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    :not(:first-child) {
        margin-top: 1rem;
    }
`;

export default InputContainer;
