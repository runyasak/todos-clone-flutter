import React from 'react';
import { useFela } from 'react-fela';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { CheckCircleOutlineRounded } from '@material-ui/icons';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import TitleBar from './TitleBar';
import type { Todo } from '../models/Todo';

export interface TodoListScreenProps {
  todos?: Todo[],
  onClickNew?: () => void;
}

const TodoListScreen: React.FC<TodoListScreenProps> = ({
  todos = [],
  onClickNew,
}) => {
  const { css } = useFela();

  const renderCompleteIcon = (complete: boolean) => complete
    ? <CheckCircleOutlineRounded
        className={css({
          color: green[500],
          cursor: 'pointer'
        })}
      />
    : <PanoramaFishEyeIcon
        className={css({
          color: purple[200],
          cursor: 'pointer'
        })}
      />

  const renderListItem = todos.map((todo, index) => (
    <ListItem
      key={index}
      alignItems="flex-start"
    >
      <ListItemIcon>
        {renderCompleteIcon}
      </ListItemIcon>
      <ListItemText
        primary={todo.topic}
        secondary={todo.msg}
      />
    </ListItem>
  ));

  return <>
    <TitleBar actionName="new" action={onClickNew}></TitleBar>
    <List>
      {renderListItem}
    </List>
  </>
}

export default TodoListScreen;