import { Button } from '@material-ui/core';
import React from 'react';
import { useFela } from 'react-fela';

export interface TitleBarProps {
  actionName?: string;
  action?: () => void;
}

const TitleBar: React.FC<TitleBarProps> = ({ actionName, action }) => {
  const { css } = useFela();

  return <div className={css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  })}>
    <b className={css({ fontSize: '24px' })}>Todo</b>
    <Button onClick={action}>
      <u className={css({ fontSize: '16px', textTransform: 'initial' })}>
        {actionName}
      </u>
    </Button>
  </div>
  
}

export default TitleBar;