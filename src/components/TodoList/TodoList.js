import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import Todo from '../Todo';
import { deleteTodo, toggleCompleted } from 'redux/todos/todos-actions';
import { getVisibleTodos } from 'redux/todos/todos-selectors';
import './TodoList.scss';

const TodoList = () => {
  // const todos = useSelector(state => state.todos.items);
  const todos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();

  const onToggleCompletedTodo = id => dispatch(toggleCompleted(id));
  const onDeleteTodo = id => dispatch(deleteTodo(id));

  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompletedTodo(id)}
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

// const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
//   <ul className="TodoList">
//     {todos.map(({ id, text, completed }) => (
//       <li
//         key={id}
//         className={classNames('TodoList__item', {
//           'TodoList__item--completed': completed,
//         })}
//       >
//         <Todo
//           text={text}
//           completed={completed}
//           onToggleCompleted={() => onToggleCompleted(id)}
//           onDelete={() => onDeleteTodo(id)}
//         />
//       </li>
//     ))}
//   </ul>
// );

// const getVisibleTodos = (allTodos, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allTodos.filter(({ text }) =>
//     text.toLowerCase().includes(normalizedFilter),
//   );
// };

// // const mapStateToProps = state => ({
// //   todos: state.todos.items
// // })

// const mapStateToProps = ({ todos: { items, filter } }) => ({
//   todos: getVisibleTodos(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteTodo: id => dispatch(deleteTodo(id)),
//   onToggleCompleted: id => dispatch(toggleCompleted(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
