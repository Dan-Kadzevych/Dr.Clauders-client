import styled from 'styled-components';

import { MenuElement, TriggerBtn } from './index';
import { color_grey_dark_4 } from 'styles/variables';

const PopupMenu = styled.ul`
    list-style-type: none;
    background-color: #fff;
    border: 1px solid ${color_grey_dark_4};
    width: 150px;
    padding: 0.5rem 0;
`;

PopupMenu.Element = MenuElement;
PopupMenu.Trigger = TriggerBtn;

export default PopupMenu;
