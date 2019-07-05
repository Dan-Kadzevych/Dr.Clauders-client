import { Component } from 'react';

import BindIt from 'utils/BindIt';

export default class _Base extends Component {
    constructor(props) {
        super(props);
        BindIt(this);
    }
}
