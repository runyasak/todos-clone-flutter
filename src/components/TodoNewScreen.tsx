import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import { useFela } from 'react-fela';
import TitleBar from './TitleBar';
import type { Todo } from '../models/Todo';

export interface TodoNewScreenProps {
  onClickSave?: (value: Todo) => void;
}

const TodoNewScreen: React.FC<TodoNewScreenProps> = ({
  onClickSave = () => {},
}) => {
  const { css } = useFela();
  const [topic, setTopic] = useState('');
  const [msg, setMsg] = useState('');

  const handleChangeTopic = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => setTopic(event.target.value);

  const handleChangeMsg = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => setMsg(event.target.value);

  const handleSave = () => onClickSave({
    topic,
    msg,
    complete: false,
  });

  return <>
    <TitleBar
      actionName="save"
      action={handleSave}
    />
    <TextField
      className={css({ width: '100%', borderRadius: '16px' })}
      label="Topic"
      variant="outlined"
      value={topic}
      onChange={handleChangeTopic}
    />
    <TextField
      className={css({ marginTop: '16px !important', width: '100%' })}
      label="Todo..."
      variant="outlined"
      multiline
      rows={8}
      value={msg}
      onChange={handleChangeMsg}
    />
  </>
};

export default TodoNewScreen;