import React from 'react';
import { connect } from 'react-redux';

import { _Base } from 'elements';

class CheckoutCart extends _Base {
    render() {
        return <div>Cart</div>;
    }
}

export default connect(
    null,
    null
)(CheckoutCart);
