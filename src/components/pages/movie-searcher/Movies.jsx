//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import { Link } from 'react-router-dom';

//        -        -        -        M A T E R I A L - U I   I M P O R T S        -        -        -
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core/';

//        -        -        -        L O C A L   I M P O R T S        -        -        -
import { slugify } from '../../../Helpers';

//        -        -        -        M O V I E S   E X P O R T        -        -        -
const Movies = function ( { movies } ) {
          return (
               <TableContainer component={Paper}>
                    <Table className="movieTable" aria-label="simple table">
                         <TableHead>
                              <TableRow>
                                   <TableCell>Image</TableCell>
                                   <TableCell align="right">Title</TableCell>
                                   <TableCell align="right">Type</TableCell>
                                   <TableCell align="right">Year</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              { movies.map( movie => (
                                   <TableRow key={movie.imdbID}>
                                        <TableCell component="th" scope="row">
                                             {movie.Poster !== "N/A" && (
                                                  <img src={movie.Poster} alt="movieposter" />
                                             )}
                                             {movie.Poster === "N/A" && <p>No movie poster available</p>}
                                        </TableCell>

                                        <TableCell align="right">
                                             <Link
                                                  to={ `/movie/${ slugify( movie.Title ) }/${ movie.imdbID }` }
                                             >
                                                  { movie.Title } </Link>
                                        </TableCell>

                                        <TableCell align="right">{ movie.Type }</TableCell>
                                        <TableCell align="right">{movie.Year}</TableCell>
                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
               </TableContainer>
          ); // end of return
}; // end of export Movies

export default Movies;