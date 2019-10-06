import React, { Component } from 'react'
import uuid from 'uuid/v4'
import './NewTodoForm.css'

export default class NewTodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {todo: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo({...this.state, id: uuid(), done: false});
        this.setState({todo: ''});
    }
    render(){
        return(
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor="todo">New Todo</label>
                <input
                    id="todo"
                    name="todo"
                    type="text"
                    value={this.state.todo}
                    onChange={this.handleChange}
                    required
                />
                <button>ADD TODO</button>
            </form>
        );
    }
}