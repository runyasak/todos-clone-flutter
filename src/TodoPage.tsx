import React from 'react';
import { useFela } from 'react-fela';

const TodoPage: React.FC = () => {
  const { css } = useFela();

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
        <b className={css({ fontSize: '24px' })}>Todo</b>
      </div>
    </div>
  </div>;
};

export default TodoPage;