import React from 'react';
import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
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

        <List>
          <ListItem>
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
      </div>
    </div>
  </div>;
};

export default TodoPage;