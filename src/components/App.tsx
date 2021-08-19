import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@stores/rootStore';
import { useStyles } from '@styles/main';
import { Container } from '@material-ui/core';
import { TableComponent } from '@components/TableComponent/TableComponent';

export const App = observer(() => {
  const { tableStore } = useStore();
  const classes = useStyles();
  return (
    <Container className={classes.app}>
      <TableComponent 
        data={tableStore.data} 
        operationFunc={tableStore.operationFunc}
      />
    </Container>      
  );
});
