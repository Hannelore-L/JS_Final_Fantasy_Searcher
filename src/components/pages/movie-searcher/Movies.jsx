//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import { Link } from 'react-router-dom';

//        -        -        -        L O C A L   I M P O R T S        -        -        -
import { slugify } from '../../../Helpers';

//        -        -        -        M O V I E S   E X P O R T        -        -        -
const Movies = function ( { movies } ) {
          console.log( movies );
          return (
               <table>
                    <caption>Search results:</caption>
                    <thead>
                         <tr>
                              <th>Image</th>
                              <th>Title</th>
                              <th>Type</th>
                              <th>Year</th>
                         </tr>
                    </thead>
                    <tbody>
                         { movies.map( movie => (
                              <tr key={ movie.imdbID }>
                                   <td>
                                        <img src={ movie.Poster } alt="movie poster" />
                                   </td>

                                   <td>
                                        <Link
                                             to={ `/movie/${ slugify( movie.Title ) }/${ movie.imdbID }` }
                                        > { movie.Title } </Link>
                                   </td>

                                   <td>{ movie.Type }</td>

                                   <td>{ movie.Year }</td>
                              </tr>
                         ) ) }
                    </tbody>
               </table>
          ); // end of return
}; // end of export Movies

export default Movies;
