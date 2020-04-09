//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import Layout from './components/layout/Layout';

//        -        -        -        C L A S S   A P P        -        -        -
export default class App extends React.Component {
     constructor ( props ) {
          super( props );
          this.state = {
               characters: {
                    leading: false,
                    error: false,
                    data: []
               }
          };
     }; // end of constructor

     getCharacters = str => {
          this.setState( {
               ...this.state,
               characters: {
                    ...this.state.characters,
                    loading: true
               }
          } );
          axios
               .get( `https://www.moogleapi.com/api/v1/characters/search?origin=15` )
               .then( results => {
                    // console.log( results.data );
                    this.setState( {
                         ...this.state,
                         characters: {
                              loading: false,
                              data: [ ...results.data ]
                         }
                    } );
               } )
               .catch( error => {
                    console.log( error )
               } );
     }; // end of getCharacters

     render () {
          return (
               // <p onClick={ this.getCharacters }>Click me</p>
               <Layout></Layout>
          ) // end of return
     }; //end of render
};