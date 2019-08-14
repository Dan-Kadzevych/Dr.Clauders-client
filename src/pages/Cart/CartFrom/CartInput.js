import styled from 'styled-components';

import { Input } from 'components';

const CartInput = styled(Input)`
    && {
        display: block;
        width: 7rem;
        font-size: 1.9rem;
        line-height: 2.8rem;
        padding: 1.2rem 1.5rem;
        text-align: center;
        border: 1px solid #ccc;
        height: auto;

        :focus {
            outline: none;
        }
    }
`;

export default CartInput;
