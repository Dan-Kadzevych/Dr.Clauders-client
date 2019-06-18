import styled from 'styled-components';

import Icon from './Icon';
import Text from './Text';
import Title from './Title';

const Category = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    grid-row-gap: 1.5rem;
    grid-column-gap: 2.5rem;
    margin: auto;
`;

Category.Icon = Icon;
Category.Text = Text;
Category.Title = Title;

export default Category;
