import React from 'react'
import { TextField } from '@material-ui/core';
import { useFela } from 'react-fela';
import TitleBar from './TitleBar';

export interface TodoNewScreenProps {
  onClickSave?: () => void;
}

const TodoNewScreen: React.FC<TodoNewScreenProps> = ({
  onClickSave,
}) => {
  const { css } = useFela();

  return <>
    <TitleBar actionName="save" action={onClickSave}></TitleBar>
    <TextField
      className={css({ width: '100%', borderRadius: '16px' })}
      label="Topic"
      variant="outlined"
    />
    <TextField
      className={css({ marginTop: '16px !important', width: '100%' })}
      label="Todo..."
      variant="outlined"
      multiline
      rows={8}
    />
  </>
};

export default TodoNewScreen;