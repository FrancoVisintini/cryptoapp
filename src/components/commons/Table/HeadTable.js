import BasicSwitch from '../BasicSwitch';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function HeadTable({columns, idSwitch}){
    return(

        <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.id===idSwitch ? 
                  <div>
                    {column.label}
                    <BasicSwitch/>
                  </div>
                   : column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
    )

}