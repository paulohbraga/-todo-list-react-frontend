import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

// component names must be Uppercase

export default class Todo extends Component {

    render(){
        return(
            <div>
                <PageHeader name="Tasks" small="Create"></PageHeader>
                <TodoForm></TodoForm>
                <TodoList></TodoList>
            </div>
        )
    }
}
