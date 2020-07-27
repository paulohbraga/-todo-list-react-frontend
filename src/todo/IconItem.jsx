import React from 'react';
import If from '../template/If';

const IconItem = props => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.type}
            onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </If>
)

export default IconItem;
