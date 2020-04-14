//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';

//        -        -        -        M A T E R I A L - U I   I M P O R T S        -        -        -
import { AppBar, Toolbar, Typography } from '@material-ui/core/';

//        -        -        -        H E A D E R   E X P O R T        -        -        -
export default props => {
     return(
          <AppBar position="static">  
               <Toolbar>
                    <Typography variant="h3" >
                         Searcher App
                    </Typography>
               </Toolbar>
          </AppBar>
     );
};