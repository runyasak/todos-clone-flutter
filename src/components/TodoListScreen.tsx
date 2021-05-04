import React from 'react';
import { useFela } from 'react-fela';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import TitleBar from './TitleBar';

export interface TodoListScreenProps {
  onClickNew?: () => void;
}

const TodoListScreen: React.FC<TodoListScreenProps> = ({
  onClickNew,
}) => {
  const { css } = useFela();

  return <>
    <TitleBar actionName="new" action={onClickNew}></TitleBar>
    <List>
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <PanoramaFishEyeIcon
            className={css({ color: purple[200], cursor: 'pointer' })}
          />
        </ListItemIcon>
        <ListItemText
          primary="อ่านหนังสือหลังตื่นนอน"
          secondary="อ่านเล่ม ทำยังไงให้สาธิดีขึ้น"
        />
      </ListItem>
    </List>
  </>
}

export default TodoListScreen;