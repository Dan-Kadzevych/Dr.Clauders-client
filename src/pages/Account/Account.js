import React from 'react';
import styled from 'styled-components';

import { H1, H2 } from 'elements';
import { RegistrationForm } from './index';

import { color_grey_light } from 'styles/variables';

const Container = styled.div`
    grid-column: center-start / center-end;
    margin-bottom: 8.5rem;
    margin-top: 4rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5rem;
    align-items: start;
`;

const Header = styled.header`
    text-align: center;
    grid-column: 1 / -1;
    margin: 1rem 0;
`;

const Title = styled(H1)`
    font-weight: 300;
`;

const FormTitle = styled(H2)`
    font-size: 2.6rem;
`;

const StyledForm = styled.div`
    background-color: rgba(168, 168, 168, 0.2);
    padding: 3rem;
    border: 1px solid ${color_grey_light};
    margin: 3rem 0;
    border-radius: 5px;
`;

const Account = () => (
    <Container>
        <Header>
            <Title>Account</Title>
        </Header>
        <div>
            <FormTitle>Login</FormTitle>
            <StyledForm></StyledForm>
        </div>

        <div>
            <FormTitle>Register</FormTitle>
            <RegistrationForm />
        </div>
    </Container>
);

export default Account;
