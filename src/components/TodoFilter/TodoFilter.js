import React from 'react';
import './TodoFilter.scss';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/todos/todos-actions';
import { getFilter } from 'redux/todos/todos-selectors';

const TodoFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <div className="TodoFilter">
      <p className="TodoFilter__label">Фильтр по содержимому</p>
      <input
        type="text"
        className="TodoFilter__input"
        value={filter}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default TodoFilter;

// const mapStateToProps = state => ({
//   value: state.todos.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
