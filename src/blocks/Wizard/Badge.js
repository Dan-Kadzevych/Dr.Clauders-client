import styled from 'styled-components';
import { color_primary, color_white } from 'styles/variables';

const Badge = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${color_primary};
    height: 2.5rem;
    width: 2.5rem;
    align-self: center;
    color: ${color_white};
    padding: 5px;
`;

export default Badge;
