import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {task: this.props.todo, editing: false}
        this.handleDelete = this.handleDelete.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleDelete(){
        this.props.deleteTodo(this.props.id)
    }
    toggleForm(){
        this.setState({editing: !this.state.editing});
    }
    handleUpdate(e){
        e.preventDefault();
        //take new task data and pass it on to parent
        this.props.updateTodo(this.props.id, this.state.task);
        this.toggleForm();
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    handleToggle(e){
        e.preventDefault();
        this.props.toggleTodo(this.props.id);
    }
    render(){
        let result;
        if (this.state.editing){
            result = (
                <div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                        <input
                            name='task'
                            type='text'
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        }else {
            result = (
                <div className="Todo">
                    <li className={this.props.done ? 'Todo-task done': 'Todo-task'} 
                    onClick={this.handleToggle}>{this.props.todo}</li>
                    <div className='Todo-buttons'>
                        <button onClick={this.toggleForm}><i class="fas fa-pencil-alt"></i></button>
                        <button onClick={this.handleDelete}><i class="fas fa-trash-alt"></i></button>
                    </div>
                    
                </div>
            );
        }
        return result;
    }
}