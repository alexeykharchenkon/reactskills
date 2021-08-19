import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Item } from '@models/types';
import { useStyles } from '@styles/main';
import { useState } from 'react';
import { FormComponent } from '@components/FormComponent/FormComponent';

interface TableProps {
    data: Item[];
    operationFunc: any;
}

export const TableComponent = ({ data, operationFunc } : TableProps) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {setAnchorEl(e.currentTarget)}
    const handleClose = () => { setAnchorEl(null) }

    return (
        <div className={classes.table_component}>
            <FormComponent 
                open={Boolean(anchorEl)}
                handleClose={handleClose}
                anchorEl={anchorEl}    
            />
            <Container className={classes.table_component_container}>
                <Typography variant="h4" align="center">
                    Table
                </Typography>
                <div className={classes.table_component_buttons}>
                    <IconButton onClick={handleClick} >
                    Add Item <AddIcon/>
                    </IconButton>
                </div>
                <Table className={classes.table_component_table}>
                    <TableHead>
                        <TableRow >
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Text</TableCell>
                            <TableCell align="left">Done</TableCell>
                        </TableRow>
                        </TableHead>
                    <TableBody>
                        {data?.map(item => (
                            <TableRow key={item.id}>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.text}</TableCell>
                            <TableCell>
                                <Checkbox
                                    checked={item.isChecked}
                                />
                            </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </div>
    );
}