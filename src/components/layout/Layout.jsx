//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//        -        -        -        M A T E R I A L - U I   I M P O R T S        -        -        -
import Container from '@material-ui/core/Container';

//        -        -        -        L O C A L   I M P O R T S        -        -        -
import Header from './Header';
import Main from './Main';

//        -        -        -        L A Y O U T   E X P O R T        -        -        -
export default props => {
     return (
          <>
               <Router>
                    <div className="App">
                         <Header />
                         <Container maxWidth="md">
                              <Main />
                              { props.children }
                         </Container>
                    </div> {/* end of App */ }
               </Router>
          </>
     );
}; // end of layout export