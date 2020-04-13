//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';

//        -        -        -        C H A R A C T E R   E X P O R T        -        -        -
export default function Character ( { character: { name, age, race, gender, job, origin, height, description, picture } } ) {
     return (
          <>
               <h2>Meet { name } </h2>
               <img src={ picture } alt={ name } />
               <dl>
                    <dt>Game:</dt>
                    <dd>{ origin }</dd>

                    <dt>Race:</dt>
                    <dd>{ race }</dd>

                    <dt>Gender:</dt>
                    <dd>{ gender }</dd>

                    <dt>Age:</dt>
                    <dd>{ age }</dd>

                    <dt>Height:</dt>
                    <dd>{ height }</dd>

                    <dt>Job:</dt>
                    <dd>{ job }</dd>

                    <dt>Who is { name }:</dt>
                    <dd>{ description }</dd>
               </dl>
          </>
     ); // end of return
}; // end of Character export