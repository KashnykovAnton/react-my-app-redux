import React, { useState } from 'react';
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/todos/todos-actions';
import './TodoEditor.scss';

function TodoEditor({ onSave }) {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (message === '') {
      return alert('Please enter something!');
    }

    dispatch(addTodo(message));
    onSave();
    setMessage('');
  };

  return (
    <form className="TodoEditor" onSubmit={handleSubmit}>
      <textarea
        className="TodoEditor__textarea"
        value={message}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="TodoEditor__button">
        Save
      </button>
    </form>
  );
}

export default TodoEditor;

// class TodoEditor extends Component {
//   state = {
//     message: '',
//   };

//   handleChange = e => {
//     this.setState({ message: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.message);
//     this.props.onSave();

//     this.setState({ message: '' });
//   };

//   render() {
//     return (
//       <form className="TodoEditor" onSubmit={this.handleSubmit}>
//         <textarea
//           className="TodoEditor__textarea"
//           value={this.state.message}
//           onChange={this.handleChange}
//         ></textarea>
//         <button type="submit" className="TodoEditor__button">
//           Сохранить
//         </button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   onSubmit: text => dispatch(addTodo(text)),
// });

// export default connect(null, mapDispatchToProps)(TodoEditor);
