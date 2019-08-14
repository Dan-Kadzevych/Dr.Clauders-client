import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import styled, { css } from 'styled-components';

import { ButtonAlt, H5 } from 'elements';
import { Input, Textarea } from 'components';
import { required } from 'utils/redux/validationRules';
import { toRgba } from 'utils/utils';
import {
    color_grey_light,
    color_white,
    color_primary,
    color_secondary
} from 'styles/variables';
import { ReactComponent as Plus } from 'images/icons/plus.svg';
import { ReactComponent as Close } from 'images/icons/close-button.svg';

const TabsHeader = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
`;

const TabsElement = styled.li`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${color_grey_light};
    padding: 1rem;
    background-color: rgba(${toRgba(color_grey_light)} 0.6);
`;

const TabsElementHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TabsList = styled.ul`
    margin-top: 1rem;
    list-style-type: none;
    overflow-y: scroll;
    max-height: 30rem;
    border: 1px solid ${color_grey_light};
`;

const IconStyles = css`
    fill: ${color_white};
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const IconPlus = styled(Plus)`
    ${IconStyles};
    height: 90%;
    width: 90%;
`;

const IconClose = styled(Close)`
    ${IconStyles};
    height: 50%;
    width: 50%;
    fill: ${color_primary};
`;

const PlusBtn = styled(ButtonAlt)`
    && {
        height: 3rem;
        width: 3rem;
        padding: 0.1rem;
        border-radius: 50%;
        position: relative;
    }
`;

const CloseBtn = styled(PlusBtn)`
    && {
        background-color: transparent;

        :hover {
            ${IconClose} {
                fill: ${color_secondary};
            }
        }
    }
`;

class Tabs extends PureComponent {
    componentDidUpdate({ fields: prevFields }) {
        if (this.props.fields.length > prevFields.length) {
            this.scrollToBottom();
        }
    }

    scrollToBottom() {
        this.tabsList.scrollTop = this.tabsList.scrollHeight;
    }

    render() {
        const {
            fields,
            meta: { error, submitFailed }
        } = this.props;

        return (
            <>
                <TabsHeader>
                    <H5 className="m-n">Табы</H5>{' '}
                    <PlusBtn
                        className="ml-sm-s"
                        type="button"
                        onClick={() => fields.push({})}
                    >
                        <IconPlus />
                    </PlusBtn>
                </TabsHeader>
                {!!fields.length && (
                    <TabsList
                        ref={el => {
                            this.tabsList = el;
                        }}
                    >
                        {submitFailed && error && <span>{error}</span>}
                        {fields.map((tab, index) => (
                            <TabsElement key={index}>
                                <TabsElementHeader>
                                    <h4>#{index + 1}</h4>
                                    <CloseBtn
                                        type="button"
                                        onClick={() => fields.remove(index)}
                                    >
                                        <IconClose />
                                    </CloseBtn>
                                </TabsElementHeader>
                                <div>
                                    <Field
                                        name={`${tab}.title`}
                                        type="text"
                                        component={Input}
                                        label="Название"
                                        small
                                        validate={[required]}
                                    />
                                    <Field
                                        type="textarea"
                                        name={`${tab}.content`}
                                        label="Описание"
                                        small
                                        rows="3"
                                        component={Textarea}
                                        validate={[required]}
                                    />
                                </div>
                            </TabsElement>
                        ))}
                    </TabsList>
                )}
            </>
        );
    }
}

export default Tabs;
