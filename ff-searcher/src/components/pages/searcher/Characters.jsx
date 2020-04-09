//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import { Link } from 'react-router-dom';

//        -        -        -        L O C A L   I M P O R T S        -        -        -
import { slugify } from '../../../Helpers';

//        -        -        -        C H A R A C T E R S   E X P O R T        -        -        -
const Characters = function ( { characters } ) {
     if ( characters == undefined ) {
          console.log( characters );
          return <p>No characters found</p>;
     } else {
          console.log( characters );
          return (
               <table>
                    <caption>They have arrived!</caption>
                    <thead>
                         <tr>
                              <th>Game</th>
                              <th>Name</th>
                              <th>Image</th>
                         </tr>
                    </thead>
                    <tbody>
                         { characters.map( character => (
                              <tr key={ character.id }>
                                   <td>{ character.origin }</td>
                                   <td>{ character.name }</td>
                                   <td>
                                        <img src={ character.picture } alt="character image" />
                                   </td>
                              </tr>
                         ) ) }
                    </tbody>
               </table>
          ); // end of return
     }; // end of if else
}; // end of export Characters

export default Characters;