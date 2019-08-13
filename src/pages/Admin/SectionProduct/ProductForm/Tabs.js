import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

import { ButtonAlt, H5 } from 'elements';
import { Input, Textarea } from 'components';
import { required } from 'utils/redux/validationRules';
import { toRgba } from 'utils/utils';
import { color_grey_light } from 'styles/variables';

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

const Tabs = ({ fields, meta: { error, submitFailed } }) => (
    <>
        <TabsHeader>
            <H5 className="m-n">Табы</H5>{' '}
            <ButtonAlt
                className="ml-sm-s"
                type="button"
                onClick={() => fields.push({})}
            >
                Плюс +
            </ButtonAlt>
        </TabsHeader>
        {!!fields.length && (
            <TabsList>
                {submitFailed && error && <span>{error}</span>}
                {fields.map((tab, index) => (
                    <TabsElement key={index}>
                        <TabsElementHeader>
                            <h4>#{index + 1}</h4>
                            <ButtonAlt
                                type="button"
                                onClick={() => fields.remove(index)}
                            >
                                X
                            </ButtonAlt>
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

export default Tabs;
