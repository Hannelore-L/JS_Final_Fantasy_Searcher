//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


//        -        -        -        L O C A L   I M P O R T S        -        -        -
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

//        -        -        -        L A Y O U T   E X P O R T        -        -        -
export default props => {
     return (
          <>
               <Router>
                    <div className="App">
                         <Header />
                         <Main />
                         { props.children }
                         <Footer />
                    </div> {/* end of App */ }
               </Router>
          </>
     );
}; // end of layout export