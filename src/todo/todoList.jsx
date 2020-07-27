import React from 'react'

import IconItem from '../todo/IconItem'

export default props => {

    const renderRows = () => {
        const list = props.list || []

        return list.map( todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconItem type='success' icon='check' onClick={ () => props.handleMarkAsDone(todo)} hide={todo.done}></IconItem>
                    <IconItem type='warning' icon='undo' onClick={ () => props.handleMarkAsPending(todo)} hide={!todo.done}></IconItem>
                    <IconItem type='danger' icon='trash-o' onClick={ () => props.handleRemove(todo)} hide={!todo.done}></IconItem>
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
