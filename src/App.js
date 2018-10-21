import React, { Component } from 'react';
import {connect} from 'react-redux';
import FilterLink from './FilterLink';
import './App.css';

class App extends Component {

  filterTodos(filter) {
    const {todos } = this.props;

    switch(filter) {
      case'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'SHOW_REMAINING':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
 
  render() {
    const { todos, addTodo, toggleToDo, setFilter, visibilityFilter } = this.props;
    const remainingTodos = todos.filter(todo => !todo.completed);
    const showingTodos = this.filterTodos(visibilityFilter);
    
    return(
      <div className="app">
        <div className="header">
          <h1>TODO APP</h1>
        </div>
        <div className="input">
          <input 
            type="text"
            className="add-input"
            ref={node => {this.input = node}}
          />
          <button 
            className="btn"
            onClick={() => {
              if(this.input.value) {
                addTodo(this.input.value); 
              }

              this.input.value = '';
          }}>   
          ADD
          </button>      
        </div>
        <div className="result">
          <div className="status-msg">
            <p>{remainingTodos.length} tasks remaining out of {todos.length}</p>
          </div>
          <ul className="todo-list">
            {showingTodos.map((todo, i) => (
              <li 
                key={i}
                onClick={() => {toggleToDo(i)}}        
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
              >
              {todo.task}
              </li>
            ))}
          </ul>
        </div>

        <FilterLink 
          child="ShowAll"  
          setFilter={setFilter} 
          filter={'SHOW_ALL'}
        />
        {' '}
        <FilterLink 
          child="ShowCompleted" 
          setFilter={setFilter}
          filter={'SHOW_COMPLETED'}
        />
        {' '}
        <FilterLink 
          child="ShowRemaining" 
          setFilter={setFilter}
          filter={'SHOW_REMAINING'}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter
  }
}

let id = 0;
const mapDispatchToProps= (dispatch) => {
  return {
    addTodo: (todo) => dispatch({
      type: 'ADD_TODO',
      id: id++,
      todo
    }),

    toggleToDo: (id) => dispatch({
      type: 'TOGGLE_TODO',
      id
    }),

    setFilter: (filter) => dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    })
   
  }

  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);