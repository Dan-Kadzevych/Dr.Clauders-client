import styled from 'styled-components';
import Select from 'react-select';

import { font_quaternary } from 'styles/variables';
import { borderError } from 'styles/mixins';

const StyledSelect = styled(Select)`
    & .Select {
        &__control {
            line-height: 2.8rem;

            ${font_quaternary};
            font-size: 1.5rem;
            padding: ${({ small }) =>
                small ? '0.6rem 0.8rem' : '1.2rem 1.5rem'};
            border: 1px solid rgba(0, 0, 0, 0.13);
            ${borderError};

            :hover {
                border: 1px solid rgba(0, 0, 0, 0.13);
                ${borderError};
            }

            &--is-focused {
                outline: none;
                border-color: rgba(0, 0, 0, 0.13) !important;
                box-shadow: none;
            }
            border-radius: 0;
        }

        &__value-container {
            padding: 0;
            line-height: 2rem;
        }
        &__input {
            input {
                ${font_quaternary};
            }
        }

        &__indicator-separator {
            display: none;
        }
        &__clear-indicator {
            display: none;
        }

        &__menu {
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
            border-radius: 0;

            ${font_quaternary};
        }
        &__option {
            padding: 5px 8px;
            cursor: pointer;
            &--is-focused,
            &--is-selected {
                background-color: #f5fafd;
                color: #495c68;
            }
        }
    }
`;

export default StyledSelect;
