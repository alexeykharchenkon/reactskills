import { Container, Typography, Popover } from '@material-ui/core';
import { useStyles } from '@styles/main';

interface FormProps {
    open: boolean;
    handleClose: any;
    anchorEl: any;
}

export const FormComponent = ({ open, handleClose, anchorEl } : FormProps) => {
    const classes = useStyles();
    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >      
        <Container className={classes.form}>
            <Typography variant="h5" align="center">Form</Typography>
        </Container>
      </Popover>    
    );
}