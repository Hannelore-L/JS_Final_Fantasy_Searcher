//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React, { Component } from 'react';

//        -        -        -        M A T E R I A L - U I   I M P O R T S        -        -        -
import { TextField, Button } from '@material-ui/core/';

//        -        -        -        C L A S S   F O R M        -        -        -
export default class Form extends Component {
     constructor ( props ) {
          super( props );
          this.state = {
               searchField: {
                    value: "",
                    error: false
               }
          };
     }; // end of constructor

     changeHandler = e => {
          this.setState( {
               ...this.state,
               searchField: {
                    ...this.state.searchField,
                    value: e.target.value,
                    error: false
               }
          } );
     }; // end of changeHandler

     submitHandler = e => {
          e.preventDefault();
          if ( this.state.searchField.value == "11"
               || this.state.searchField.value == "14"
               || parseInt( this.state.searchField.value ) > 15 ) {
               this.setState( {
                    ...this.state,
                    searchField: {
                         ...this.state.searchField,
                         error: true
                    }
               } );
          } else {
               this.setState( {
                    ...this.state,
                    searchField: {
                         ...this.state.searchField,
                         error: false
                    }
               } );
               switch ( this.state.searchField.value ) {
                    case "1":
                         this.props.getCharacters( "01" )
                         break;
                    case "2":
                         this.props.getCharacters( "02" )
                         break;
                    case "3":
                         this.props.getCharacters( "03" )
                         break;
                    case "4":
                         this.props.getCharacters( "04" )
                         break;
                    case "5":
                         this.props.getCharacters( "05" )
                         break;
                    case "6":
                         this.props.getCharacters( "06" )
                         break;
                    case "7":
                         this.props.getCharacters( "07" )
                         break;
                    case "8":
                         this.props.getCharacters( "08" )
                         break;
                    case "9":
                         this.props.getCharacters( "09" )
                         break;
                    default:
                         this.props.getCharacters( this.state.searchField.value )
               }; // end of switch
          }; // end of if else
     }; // end of submitHandler

     render () {
          return (
               <form
                    action=""
                    onSubmit={ this.submitHandler }
               >

               <TextField
                    id="gameNr"
                    label="Number"
                    value={ this.state.searchField.value }
                    onChange={ this.changeHandler }
                    className={ this.state.searchField.error ? "error" : "" }
               />

               <Button
                    variant="contained"
                    type="submit"
               >
                    Summon the characters!
               </Button>
               </form>
          ); // end of return
     }; // end of render
}; // end of Form class