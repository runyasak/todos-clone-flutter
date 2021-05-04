import React, { useState } from 'react';
import { useFela } from 'react-fela';
import TodoListScreen from '../components/TodoListScreen';

const TodoPage: React.FC = () => {
  const { css } = useFela();
  const [isNewTodoMode, setIsNewTodoMode] = useState(false);

  const handleClickNew = () => setIsNewTodoMode(true);

  const renderScreenMode = isNewTodoMode
    ? <h1>Hello new todo!</h1>
    : <TodoListScreen onClickNew={handleClickNew} />;

  return <div className={css({ backgroundColor: '#B296AC' })}>
    <div className={css({
      maxWidth: '414px',
      margin: 'auto',
    })}>
      <img
        className={css({
          width: '100%',
          objectFit: 'cover',
        })}
        src="/cover.png"
        alt="Cover Todo"
      />
      <div className={css({
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        padding: '24px',
        backgroundColor: 'white',
        position: 'relative',
        marginTop: '-32px',
        height: 'calc(100vh - 433px)',
      })}>
        {renderScreenMode}
      </div>
    </div>
  </div>;
};

export default TodoPage;