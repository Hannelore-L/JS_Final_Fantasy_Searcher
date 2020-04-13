//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import { Link } from 'react-router-dom';

//        -        -        -        M A I N   E X P O R T        -        -        -
export default props => (
     <nav>
          <ul>
               <li>
                    <Link to="/">Home</Link>
               </li>

               <li>
                    <Link to="/about">About</Link>
               </li>

               <li>
                    <Link to="/finalfantasy">Final Fantasy Character Searcher</Link>
               </li>

               <li>
                    <Link to="/moviemagic">Movie Searcher</Link>
               </li>
          </ul>
     </nav>
);