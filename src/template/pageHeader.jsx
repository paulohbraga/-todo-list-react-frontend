import React from 'react'

export default props => (
    <header className='page-header'>
        <h2>{props.name || "Put a name here" } <small> {props.small || "Put a small here"}</small></h2>
    </header>
)
