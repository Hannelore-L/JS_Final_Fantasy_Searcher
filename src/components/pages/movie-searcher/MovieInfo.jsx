//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import axios from 'axios';

//        -        -        -        L O C A L   I M P O R T S        -        -        -
import Movie from './Movie'

//        -        -        -        C L A S S   M O V I E I N F O        -        -        -
export default class MovieInfo extends React.Component {
     state = {
          movie: {
               loading: false,
               error: false,
               data: {}
          }
     }; // end of state

     componentDidMount () {
          this.setState( {
               ...this.state,
               movie: {
                    ...this.state.movie,
                    loading: true
               }
          } );
          axios
               .get( `${process.env.REACT_APP_ENDPOINTMOVIES}&i=${ this.props.match.params.id }` )
               .then( results => {
                    console.log(results)
                    this.setState( {
                         ...this.state,
                         movie: {
                              ...this.state.movie,
                              loading: false,
                              data: { ...results.data }
                         }
                    } );
               } )
               .catch( error => {
                    console.log( error );
               } );
     } // end of componentDidMount

     render () {
          return (
               <>
                    { this.state.movie.loading && <p>Fetching { this.state.movie.data.Title }</p> }
                    <Movie movie={ this.state.movie.data } />
               </>
          ); // end of return
     }; // end of render
}; // end of export