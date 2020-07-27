import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

// component names must be Uppercase

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {


    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.addHandle = this.addHandle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone =  this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({ description: '', list: resp.data }));
        console.log(this.state);
    }

    handleChange(e) {
        this.setState({ description: e.target.value })
    }

    addHandle() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh());
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh());
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then(resr => this.refresh())
    }
    
    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(resr => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Create"></PageHeader>
                <TodoForm addHandle={this.addHandle}
                    description={this.state.description}
                    handleChange={this.handleChange}>
                </TodoForm>
                <TodoList list={this.state.list} handleRemove={this.handleRemove} handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending}></TodoList>
            </div>
        )
    }
}
