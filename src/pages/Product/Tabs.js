import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {
    color_grey_light_2,
    color_grey_light_3,
    color_secondary,
    color_white
} from 'styles/variables';

const StyledCTabs = styled(Tabs)`
    grid-column: 1 / -1;
`;

const CTabList = styled(TabList)`
    display: flex;
    list-style-type: none;
    position: relative;
    padding-left: 1.5rem;
    overflow: hidden;
    margin-bottom: 2.5rem;
    ::before {
        content: '';
        position: absolute;
        width: 100%;
        border-bottom: 1px solid ${color_grey_light_3};
        bottom: 0;
        left: 0;
        z-index: 1;
    }
`;
const CustomTab = styled(Tab)`
    position: relative;
    font-weight: 700;
    padding: 0.8rem 3rem;
    cursor: pointer;
    background-color: ${color_grey_light_2};
    border-radius: 4px 4px 0 0;
    margin: 0 -5px;
    border: 1px solid ${color_grey_light_3};
    z-index: 0;

    ::before,
    ::after {
        content: '';
        border: 1px solid #d3ced2;
        position: absolute;
        bottom: -1px;
        width: 5px;
        height: 5px;
    }

    ::before {
        left: -5px;
        border-width: 0 1px 1px 0;
        box-shadow: 2px 2px 0 ${color_grey_light_2};
        border-bottom-right-radius: 4px;
    }

    ::after {
        right: -5px;
        border-width: 0 0 1px 1px;
        box-shadow: -2px 2px 0 ${color_grey_light_2};
        border-bottom-left-radius: 4px;
    }

    &.is-selected {
        z-index: 3;
        background-color: ${color_white};
        color: ${color_secondary};
        border-bottom-color: ${color_white};
        ::before {
            box-shadow: 2px 2px 0 ${color_white};
        }

        ::after {
            box-shadow: -2px 2px 0 ${color_white};
        }
    }

    :focus {
        outline: none;
    }
`;

const CTabPanel = styled(TabPanel)`
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`;
CustomTab.tabsRole = 'Tab';
CTabList.tabsRole = 'TabList';
CTabPanel.tabsRole = 'TabPanel';

const CTabs = ({ tabs }) => (
    <StyledCTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
    >
        <CTabList>
            {tabs.map(({ title }, i) => (
                <CustomTab key={i}>{title}</CustomTab>
            ))}
        </CTabList>

        {tabs.map(({ content }, i) => (
            <CTabPanel key={i}>{content}</CTabPanel>
        ))}
    </StyledCTabs>
);

export default CTabs;
