import React from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { Icon, ButtonAlt } from 'elements';
import { color_primary, color_secondary } from 'styles/variables';

const CloseIcon = styled(Icon)`
    fill: ${color_secondary};
    height: 1rem;
    width: 1rem;
    display: block;
    transition: all 0.2s ease;
`;

const StyledCloseButton = styled(ButtonAlt)`
    && {
        background-color: transparent;
        padding: 0;
        :hover {
            background-color: transparent;
            ${CloseIcon} {
                fill: ${color_primary};
            }
        }
    }
`;

const CloseButton = ({ YouCanPassAnyProps, closeToast }) => (
    <StyledCloseButton onClick={closeToast}>
        <CloseIcon icon="close-button" />
    </StyledCloseButton>
);

export default (body, options) => {
    toast.success(body, {
        className: 'toast-success',
        progressClassName: 'toast-progress-success',
        closeButton: <CloseButton />,
        ...options
    });
};
