//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import axios from 'axios';

//        -        -        -        L O C A L   I M P O R T S        -        -        -
import Character from './Character'

//        -        -        -        C L A S S   M O V I E I N F O        -        -        -
export default class CharacterInfo extends React.Component {
     constructor ( props ) {
          super( props );
          this.state = {
               character: {
                    loading: false,
                    error: false,
                    data: {}
               }
          };
     }; // end of constructor

     componentDidMount () {
          this.setState( {
               ...this.state,
               character: {
                    ...this.state.character,
                    loading: true
               }
          } );
          axios
               .get( `https://www.moogleapi.com/api/v1/characters/${ this.props.match.params.id }` )
               .then( results => {
                    this.setState( {
                         ...this.state,
                         character: {
                              ...this.state.character,
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
                    { this.state.character.loading && <p>Summonning { this.state.character.data.name }</p> }
                    <Character character={ this.state.character.data } />
               </>
          ); // end of return
     }; // end of render
}; // end of export