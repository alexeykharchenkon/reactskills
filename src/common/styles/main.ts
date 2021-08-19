import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    app: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: '#cbc26d',
        height: '100vh',
        width: '100%',
        padding: '5px'
    },
    form: {
        display: 'flex',
        background: '#fff59d',
        margin: '5px',
        border: '1px solid #ff7961',
        borderRadius: '5%',
    },
    table_component: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '5px',
        padding: '5px',
        background: '#fff59d',
        border: '1px solid #ff7961',
        borderRadius: '5%',
    },
    table_component_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    table_component_buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    table_component_table: {
        border: '1px solid #f44336',
        marginBottom: '10px',
    },
  });