//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import { Link } from 'react-router-dom';

//        -        -        -        M A T E R I A L - U I   I M P O R T S        -        -        -
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';

//        -        -        -        L O C A L   I M P O R T S        -        -        -
import { slugify } from '../../../Helpers';

//        -        -        -        C H A R A C T E R S   E X P O R T        -        -        -
const Characters = function ( { characters } ) {
     if ( characters == undefined ) {
          console.log( characters );
          return <p>No characters found</p>;
     } else {
          return (
               <TableContainer component={Paper}>
                    <Table className="movieTable" aria-label="simple table">
                         <TableHead>
                              <TableRow>
                                   <TableCell>Game</TableCell>
                                   <TableCell align="right">Name</TableCell>
                                   <TableCell align="right">Image</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              { characters.map( character => (
                                   <TableRow key={character.id}>
                                        <TableCell component="th" scope="row">
                                             { character.origin }
                                        </TableCell>

                                        <TableCell align="right">
                                             <Link
                                                  to={ `/character/${ slugify( character.name ) }/${ slugify( character.origin ) }/${ character.id }` }
                                             >
                                                  { character.name }
                                             </Link>
                                        </TableCell>

                                        <TableCell align="right">
                                             <img src={ character.picture } alt="character image" />
                                        </TableCell>
                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
          ); // end of return
     }; // end of if else
}; // end of export Characters

export default Characters;
