import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import styled, { css } from 'styled-components';

import { _Base, ButtonAlt } from 'elements';
import { getIsFormValid } from '../duck/selectros';
import { color_primary } from 'styles/variables';

const SubmitBtn = styled(ButtonAlt)`
    ${({ disabled }) =>
        disabled
            ? css`
                  opacity: 0.5;
                  cursor: initial;

                  :hover {
                      opacity: 0.1;
                      background-color: ${color_primary};
                  }
              `
            : ''}
`;

const mapStateToProps = state => ({
    isValid: getIsFormValid(state)
});

const mapDispatchToProps = dispatch => ({
    submitCheckout() {
        return dispatch(submit('checkout'));
    }
});

class CartSummary extends _Base {
    render() {
        const { isValid } = this.props;

        return (
            <div>
                <SubmitBtn
                    onClick={this.props.submitCheckout}
                    disabled={!isValid}
                >
                    Submit
                </SubmitBtn>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartSummary);
