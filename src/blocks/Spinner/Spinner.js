import React from 'react';
import styled from 'styled-components';
import { BounceLoader } from 'react-spinners';

import { toRgba } from 'utils/utils';
import { color_white, color_secondary } from 'styles/variables';

const StyledSpinner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ background }) => background};
    z-index: 1000;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Spinner = ({ background = `rgba${toRgba(color_white)} 0.7` }) => (
    <StyledSpinner background={background}>
        <BounceLoader
            sizeUnit={'px'}
            size={40}
            color={color_secondary}
            loading={true}
        />
    </StyledSpinner>
);

export default Spinner;
