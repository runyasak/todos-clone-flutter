import React, { useState } from 'react';
import { ChevronLeft } from '@material-ui/icons';
import { useFela } from 'react-fela';
import TodoListScreen from '../components/TodoListScreen';
import TodoNewScreen from '../components/TodoNewScreen';
import type { Todo } from '../models/Todo';
import { completeTodo, getTodos } from '../services/MockTodo';

const TodoPage: React.FC = () => {
  const { css } = useFela();
  const [isNewTodoMode, setIsNewTodoMode] = useState(false);
  const [todos, setTodos] = useState<Todo[]>(getTodos());

  const handleClickNew = () => setIsNewTodoMode(true);

  const handleClickBack = () => setIsNewTodoMode(false);

  const handleCompleteTodo = (index: number) => {
    completeTodo(index);
    setTodos(() => [...getTodos()]);
  }

  const renderBackButton = isNewTodoMode && <ChevronLeft
    className={css({
      color: 'white',
      position: 'absolute',
      top: '38px',
      left: '16px',
      cursor: 'pointer',
    })}
    onClick={handleClickBack}
  />;

  const renderScreenMode = isNewTodoMode
    ? <TodoNewScreen />
    : <TodoListScreen
        todos={todos}
        onClickNew={handleClickNew}
        onClickComplete={handleCompleteTodo}
      />;

  return <div className={css({ backgroundColor: '#B296AC' })}>
    <div className={css({
      maxWidth: '414px',
      margin: 'auto',
      position: 'relative',
    })}>
      <img
        className={css({
          width: '100%',
          objectFit: 'cover',
        })}
        src="/cover.png"
        alt="Cover Todo"
      />

      {renderBackButton}

      <div className={css({
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        padding: '24px',
        backgroundColor: 'white',
        position: 'relative',
        marginTop: '-32px',
        height: 'calc(100vh - 436px)',
      })}>
        {renderScreenMode}
      </div>
    </div>
  </div>;
};

export default TodoPage;