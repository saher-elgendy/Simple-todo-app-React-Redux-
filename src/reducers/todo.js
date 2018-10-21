

const todos = (state = [], action) => {
  switch(action.type) {
  	case 'ADD_TODO':
  	  return [
        ...state,
        {
          task: action.todo,
          id: action.id,
          completed: false
        }
  	  ];

      case 'TOGGLE_TODO':
        return state.map(todo => {
          if(todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })

  	  default:
  	    return state; 	  
  }
}

export default todos;