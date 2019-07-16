import styled from 'styled-components';

import Body from './Body';
import Badge from './Badge';
import CheckedIcon from './CheckedIcon';
import Edit from './Edit';
import EditIcon from './EditIcon';
import Line from './Line';
import Title from './Title';
import Summary from './Summary';

const WizardElement = styled.div`
    display: grid;
    grid-template-columns: 2.5rem 1fr;
    grid-gap: 1rem;
`;

WizardElement.Body = Body;
WizardElement.Badge = Badge;
WizardElement.CheckedIcon = CheckedIcon;
WizardElement.Edit = Edit;
WizardElement.EditIcon = EditIcon;
WizardElement.Line = Line;
WizardElement.Title = Title;
WizardElement.Summary = Summary;

export default WizardElement;
