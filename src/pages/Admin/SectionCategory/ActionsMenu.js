import React from 'react';
import styled from 'styled-components';

import { Popup } from 'components';
import { PopupMenu } from '../blocks';

const StyledPopup = styled(Popup)`
    grid-column: -1;
    align-self: stretch;
`;

export const StyledTrigger = styled(PopupMenu.Trigger)`
    visibility: hidden;
`;

const ActionsMenu = ({ handleEdit, handleRemove }) => (
    <StyledPopup
        trigger={props => <StyledTrigger {...props} />}
        render={({ close }) => (
            <PopupMenu>
                <PopupMenu.Element
                    handleClick={handleEdit}
                    icon="edit"
                    text="Редактировать"
                />
                <PopupMenu.Element
                    handleClick={e => {
                        handleRemove(e);
                        close(e);
                    }}
                    icon="close-button"
                    text="Удалить"
                />
            </PopupMenu>
        )}
    />
);

export default ActionsMenu;
