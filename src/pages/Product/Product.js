import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Media from './Media';
import Description from './Description';
import Tabs from './Tabs';
import { operations, selectors } from './duck';

const Loading = styled.div`
    grid-column: full-start / full-end;
    width: 100%;
    height: calc(100vh - 10rem);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    grid-column: center-start / center-end;

    margin: 8rem 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
    grid-column-gap: 5rem;
    grid-row-gap: 2.5rem;
    align-content: start;
    min-height: calc(100vh - 24rem);
`;

const mapStateToProps = state => ({
    product: selectors.getProduct(state)
});

const mapDispatchToProps = dispatch => ({
    fetchProduct(slug) {
        return dispatch(operations.fetchProduct(slug));
    }
});

class Product extends Component {
    componentDidMount() {
        const {
            match: { url }
        } = this.props;
        this.props.fetchProduct(url);
    }

    render() {
        const { product } = this.props;
        if (!product) {
            return <Loading>No Product</Loading>;
        }
        const {
            media: { url: imageUrl },
            description: { media, main, tabs },
            price,
            title,
            _id: ID
        } = product;

        return (
            <Container>
                <Media main={imageUrl} sub={media} />
                <Description
                    title={title}
                    price={price}
                    description={main}
                    ID={ID}
                />
                <Tabs tabs={tabs} />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
