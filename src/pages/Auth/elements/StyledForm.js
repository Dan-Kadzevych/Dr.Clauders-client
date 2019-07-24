import { Form } from 'redux-form';
import styled from 'styled-components';

import { color_grey_light } from 'styles/variables';

const StyledForm = styled(Form)`
    background-color: rgba(168, 168, 168, 0.2);
    padding: 3rem;
    border: 1px solid ${color_grey_light};
    margin: 3rem 0;
`;

export default StyledForm;
