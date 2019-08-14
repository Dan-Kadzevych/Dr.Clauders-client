import React from 'react';
import styled from 'styled-components';

import { Icon } from 'components';
import { color_primary, color_secondary } from 'styles/variables';

const StyledNotification = styled.div`
    padding: 0 1rem;
`;

const CheckedIcon = styled(Icon)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
    position: relative;
    top: 2px;
`;

const Undo = styled.span`
    color: ${color_secondary};
    :hover {
        color: ${color_primary};
    }
`;

const Notification = ({ handleUndo, text }) => (
    <StyledNotification>
        <CheckedIcon icon="checked" />
        {text} {handleUndo && <Undo onClick={handleUndo}>Undo?</Undo>}
    </StyledNotification>
);

export default Notification;
