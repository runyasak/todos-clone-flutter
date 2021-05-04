import React from 'react';
import { Button } from '@material-ui/core';
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
        <div className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        })}>
          <b className={css({ fontSize: '24px' })}>Todo</b>
          <Button>
            <u className={css({ fontSize: '16px', textTransform: 'initial' })}>new</u>
          </Button>
        </div>
      </div>
    </div>
  </div>;
};

export default TodoPage;