import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class RecordTable extends Component {
    constructor(props) {
        super(props);
        this.people = [
            {
                name: "Veronica Mize",
                dob: "11/29/2011"
            }, {
                name: "Cecilia Olsson",
                dob: "09/16/1992"
            }, {
                name: "Peter Parker",
                dob: "01/16/1992"
            }, {
                name: "Jimmy Shergil",
                dob: "12/12/2001"
            }, {
                name: "Alexander Alfred",
                dob: "02/09/1891"
            }, {
                name: "Janice Shroyer",
                dob: "12/01/1982"
            }, {
                name: "Ralph White",
                dob: "11/30/2011"
            }, {
                name: "Deborah T. Decker",
                dob: "10/31/1999"
            }
        ];
    }

    comparePeople(filterType, a, b) {
        if(filterType === 'name') {
            // Sort By Name
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if(nameA < nameB) return -1;
            if(nameA > nameB) return 1;
            return 0
        }
        else if(filterType === 'age') {
            // Sort By Age
            const aComps = a.dob.split("/");
            const bComps = b.dob.split("/");
            const aDate = new Date(aComps[2], aComps[1], aComps[0]);
            const bDate = new Date(bComps[2], bComps[1], bComps[0]);
            return aDate.getTime() - bDate.getTime();
        }
    }

    render() {
        const people = this.people.slice();
        people.sort((a, b) => {
            return this.comparePeople(this.props.filterType, a, b);
        });
        const rows = people.map((person) =>
            (
                <TableRow key={person.name}>
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.dob}</TableCell>
                </TableRow>
            )
        )
        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default RecordTable;
