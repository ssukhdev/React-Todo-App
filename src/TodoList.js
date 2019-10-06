import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm  from './NewTodoForm'
import './TodoList.css'

export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {todos: []};
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.toggleTodo = this.toggleTodo.bind(this)
    }
    addTodo(newTodo){
        this.setState({todos: [...this.state.todos, newTodo]});
    }
    deleteTodo(id){
        this.setState({
            todos: this.state.todos.filter(task => task.id !== id)
        });
    }
    updateTodo(id, updatedTodo){
        let newTodoList = this.state.todos.map(t => {
            if(t.id === id){
                return {...t, todo: updatedTodo};
            }
            return t;
        });
        this.setState({todos: newTodoList});
    }
    toggleTodo(id){
        let todoList = this.state.todos.map(t => {
            if(t.id === id){
                return {...t, done: !t.done};
            }
            return t;
        });
        this.setState({todos: todoList});
    }
    renderTodo(){
        return(
            this.state.todos.map(task => 
                <Todo todo={task.todo}
                done={task.done} 
                key={task.id}
                id={task.id} 
                deleteTodo={this.deleteTodo}
                updateTodo={this.updateTodo}
                toggleTodo={this.toggleTodo}
                />
            )
        );
    }
    render(){
        return(
            <div className='TodoList'>
                <h1>Todo List<span>A Simple React Todo List App</span></h1>
                <NewTodoForm 
                    addTodo={this.addTodo}
                />
                <ul>{this.renderTodo()}</ul>
            </div>
        );
    }
    
}