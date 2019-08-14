import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Spinner } from 'blocks';
import { _Base } from 'components';
import Media from './Media';
import Description from './Description';
import Tabs from './Tabs';
import { operations, selectors } from './duck';
import { NotFound } from 'pages';

const Container = styled.div`
    grid-column: center-start / center-end;

    margin: 8rem 0;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
    grid-column-gap: 5rem;
    grid-row-gap: 2.5rem;
    align-content: start;
    min-height: calc(100vh - 56rem);
`;

const mapStateToProps = state => ({
    product: selectors.getProduct(state),
    isLoading: selectors.isProductLoading(state)
});

const mapDispatchToProps = dispatch => ({
    fetchProduct(url) {
        return dispatch(operations.fetchProduct(url));
    },
    removeProduct() {
        return dispatch(operations.removeProduct());
    }
});

class Product extends _Base {
    componentDidMount() {
        const {
            match: { url },
            fetchProduct
        } = this.props;

        fetchProduct(url);
    }

    componentWillUnmount() {
        const { removeProduct } = this.props;

        removeProduct();
    }

    render() {
        const { product, isLoading } = this.props;

        if (!product && !isLoading) {
            return <NotFound />;
        }

        return (
            <Container>
                {!isLoading ? (
                    <>
                        <Media
                            main={product.media.url}
                            sub={product.description.media}
                        />
                        <Description
                            title={product.title}
                            price={product.price}
                            description={product.description.main}
                            ID={product._id}
                        />
                        {!!product.description.tabs.length && (
                            <Tabs tabs={product.description.tabs} />
                        )}
                    </>
                ) : (
                    <Spinner />
                )}
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
