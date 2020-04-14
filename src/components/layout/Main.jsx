//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import { Link } from 'react-router-dom';

//        -        -        -        M A T E R I A L - U I   I M P O R T S        -        -        -
import { Typography } from '@material-ui/core/';

//        -        -        -        M A I N   E X P O R T        -        -        -
export default props => (
     <nav>
          <Typography className="mainNav">
               {/* <Link 
                    to="/"
               >
                    Home
               </Link>

               <Link 
                    to="/about"
               >
                    About
               </Link>
 */}
               <Link 
                    to="/finalfantasy"
               >
                    Final Fantasy Character Searcher
               </Link>

               <Link 
                    to="/moviemagic"
               >
                    Movie Searcher
               </Link>
          </Typography>
     </nav>
);