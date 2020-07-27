import React from 'react'

import IconItem from '../todo/IconItem'

export default props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map( todo => (
            <tr key={todo._id}>
                <td>{todo.description}</td>
                <td>
                    <IconItem type='danger' icon='trash-o' onClick={ () => props.handleRemove(todo)}></IconItem>
                </td>
            </tr>
        ))

    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>

        </table>
    )
}
