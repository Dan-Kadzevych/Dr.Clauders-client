import React from 'react';
import styled from 'styled-components';

import { _Base } from 'components';

const Container = styled.div`
    position: relative;
`;

const ChildrenContainer = styled.div`
    position: absolute;

    right: 0;
    top: 100%;
    z-index: 1000;
`;

class Popup extends _Base {
    state = {
        showChildren: false
    };

    showChildren() {
        this.setState({ showChildren: true }, () =>
            document.addEventListener('click', this.hideChildren)
        );
    }

    hideChildren(e) {
        if (
            this.childrenContainer &&
            !this.childrenContainer.contains(e.target)
        ) {
            this.setState({ showChildren: false }, () =>
                document.removeEventListener('click', this.hideChildren)
            );
        }
    }

    render() {
        const { trigger, render: View, className } = this.props;
        const { showChildren } = this.state;
        const Trigger = trigger;
        return (
            <Container className={className} onClick={e => e.stopPropagation()}>
                <Trigger onClick={this.showChildren} />
                {showChildren && (
                    <ChildrenContainer
                        ref={element => {
                            this.childrenContainer = element;
                        }}
                    >
                        <View close={this.hideChildren} />
                    </ChildrenContainer>
                )}
            </Container>
        );
    }
}

export default Popup;
