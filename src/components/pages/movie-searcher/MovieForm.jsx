//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React, { Component } from 'react';

//        -        -        -        M A T E R I A L - U I   I M P O R T S        -        -        -
import { TextField, Button } from '@material-ui/core/';

//        -        -        -        C L A S S   F O R M        -        -        -
export default class Form extends Component {
     state = {
          searchField: {
               value: "",
               error: false
          }
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
          if (this.state.searchField.value !== "") {
               this.setState({
                    ...this.state,
                    searchField: {
                         ...this.state.searchField,
                         error: false
                    }
               });
               this.props.getMovies(this.state.searchField.value);
             } else {
               this.setState({
                 ...this.state,
                 searchField: {
                   ...this.state.searchField,
                   error: true
                 }
               });
             }
              }; // end of submitHandler

     render () {
          return (

               <form
                    action=""
                    onSubmit={ this.submitHandler }
               >

               <TextField 
                    id="movieTitle" 
                    label="Title"
                    value={ this.state.searchField.value }
                    onChange={ this.changeHandler }
                    className={ this.state.searchField.error ? "error" : "" } />

               <Button 
                    variant="contained"
                    type="submit"
               >
                    Give me the movies!
               </Button>

               </form>
          ); // end of return
     }; // end of render
}; // end of Form class