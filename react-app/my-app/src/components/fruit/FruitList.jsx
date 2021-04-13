import React from 'react'
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export function FruitList(props) {
    console.log("props furit list" + props)
    return <>  
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table" data-testid={`table`}>
                <TableHead>
                    <TableRow>
                        <TableCell >Id</TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell >Price</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((data) => (
                        <TableRow key={data.id}>
                            <TableCell> {data.id} </TableCell>
                            <TableCell align="left">{data.name}</TableCell>
                            <TableCell align="left">{data.price}</TableCell>
                            <TableCell align="left">
                                <Button variant="contained" color="secondary" >X</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </>
}

export default FruitList
