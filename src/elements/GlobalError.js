import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { color_grey_light_4, color_red } from 'styles/variables';

const GlobalError = styled(ReactMarkdown)`
    border-top: 3px solid ${color_red};
    color: ${color_red};
    padding: 1rem 2rem;
    background-color: ${color_grey_light_4};
    margin-bottom: 1.5rem;
    font-weight: 300;
`;

export default GlobalError;
