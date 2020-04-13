//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';

//        -        -        -        C H A R A C T E R   E X P O R T        -        -        -
export default function Movie ( { movie: { Title, Poster, Plot, Released, Runtime, Genre, Director, Writer, Actors } } ) {
     return (
          <>
               <h2> { Title } </h2>
               <img src={ Poster } alt={ Poster } />
               <dl>
                    <dt>Plot:</dt>
                    <dd>{ Plot }</dd>

                    <dt>Released:</dt>
                    <dd>{ Released }</dd>

                    <dt>Runtime:</dt>
                    <dd>{ Runtime }</dd>

                    <dt>Genre:</dt>
                    <dd>{ Genre }</dd>

                    <dt>Director:</dt>
                    <dd>{ Director }</dd>

                    <dt>Writer:</dt>
                    <dd>{ Writer }</dd>

                    <dt>Actors:</dt>
                    <dd>{ Actors }</dd>
               </dl>
          </>
     ); // end of return
}; // end of Movie export