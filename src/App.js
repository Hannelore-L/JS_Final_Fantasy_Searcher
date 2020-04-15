//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

//        -        -        -        L O C A L   I M P O R T S        -        -        -
import "./styles.css";
// import { Home, About } from './components/pages';
// import { Characters, CharacterInfo, CharacterForm, CharacterLoading } from './components/pages/ff-searcher';
// import { Movies, MovieInfo, MovieForm, MovieLoading } from './components/pages/movie-searcher'
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Characters from './components/pages/ff-searcher/Characters';
import CharacterInfo from './components/pages/ff-searcher/CharacterInfo';
import CharacterForm from './components/pages/ff-searcher/CharacterForm';
import CharacterLoading from './components/pages/ff-searcher/CharacterLoading';
import Movies from './components/pages/movie-searcher/Movies';
import MovieInfo from './components/pages/movie-searcher/MovieInfo';
import MovieForm from './components/pages/movie-searcher/MovieForm';
import MovieLoading from './components/pages/movie-searcher/MovieLoading';

//        -        -        -        C L A S S   A P P        -        -        -
export default class App extends React.Component {
     state = {
          characters: {
               loading: false,
               error: false,
               data: []
          },
          movies: {
               loading: false,
               error: false,
               data: []
          }
     }; // end of state

     getCharacters = str => {
          this.setState( {
               ...this.state,
               characters: {
                    ...this.state.characters,
                    loading: true
               }
          } );
          axios
               .get( `https://www.moogleapi.com/api/v1/characters/search?origin=${ str }` )
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

     getMovies = str => {
          this.setState( {
               ...this.state,
               movies: {
                    ...this.state.movies,
                    loading: true
               }
          } );
          axios
               .get( `${process.env.REACT_APP_ENDPOINTMOVIES}&s=${ str }` )
               .then( results => {
                    // console.log( results.data );
                    this.setState( {
                         ...this.state,
                         movies: {
                              loading: false,
                              data: [ ...results.data.Search ]
                         }
                    } );
               } )
               .catch( error => {
                    console.log( error )
               } );
     }; // end of getMovies

     render () {
          return (
               // <p onClick={ this.getCharacters }>Click me</p>
               <Layout>
                    <Switch>
                         <Route
                              exact path="/"
                              component={ Home }
                         />

                         <Route
                              path="/about"
                              component={ About }
                         />

                         <Route
                              exact path="/finalfantasy"
                              render={ () => (
                                   <>
                                        <h2>Write the game's number in numerals</h2>
                                        <CharacterForm getCharacters={ this.getCharacters } />
                                        { this.state.characters.loading && <CharacterLoading /> }
                                        { this.state.characters.data.length !== 0 && (
                                             <Characters characters={ this.state.characters.data } />
                                        ) }
                                   </>
                              ) }
                         />

                         <Route
                              exact path="/moviemagic"
                              render={ () => (
                                   <>
                                        <h2>Enter a movie title</h2>
                                        <MovieForm getMovies={ this.getMovies } />
                                        { this.state.movies.loading && <MovieLoading /> }
                                        { this.state.movies.data.length !== 0 && (
                                             <Movies movies={ this.state.movies.data } />
                                        ) }
                                   </>
                              ) }
                         />

                         <Route
                              path="/character/:name/:origin/:id"
                              component={ CharacterInfo }
                         />

                         <Route
                              path="/movie/:title/:id"
                              component={ MovieInfo }
                         />
                    </Switch>
               </Layout>
          ); // end of return
     }; //end of render
}; // end of App class