//        -        -        -        R E A C T ' S   I M P O R T S        -        -        -
import React from 'react';

//        -        -        -        M A T E R I A L - U I   I M P O R T S        -        -        -
import { makeStyles, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography  } from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
     root: {
       width: '100%',
     },
     heading: {
       fontSize: theme.typography.pxToRem(15),
       flexBasis: '33.33%',
       flexShrink: 0,
     },
     secondaryHeading: {
       fontSize: theme.typography.pxToRem(15),
       color: theme.palette.text.secondary,
     },
   }));

//        -        -        -        C H A R A C T E R   E X P O R T        -        -        -
export default function Movie ( { movie: { Title, Poster, Plot, Released, Runtime, Genre, Director, Writer, Actors, Type } } ) {
     const classes = useStyles();
     const [expanded, setExpanded] = React.useState(false);

     const handleChange = (panel) => (event, isExpanded) => {
          setExpanded(isExpanded ? panel : false);
     }; // end of handleChange

     return (
          <>
               <h2> { Title } </h2>
                    <img src={ Poster } alt={ Poster } />
                    <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                         <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                         >
                              <Typography 
                                   className={classes.heading}
                                   variant="button"
                              >
                                   Plot
                              </Typography>
                                   <Typography className={classes.secondaryHeading}>
                                        A short summary of the {Type} 
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { Plot }
                              </Typography>
                         </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                         <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel2bh-content"
                              id="panel2bh-header"
                         >
                              <Typography 
                                   className={classes.heading}
                                   variant="button"
                              >
                                   Released
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   The date of release
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { Released }
                              </Typography>
                         </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                         <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel3bh-content"
                              id="panel3bh-header"
                         >
                              <Typography 
                                   className={classes.heading}
                                   variant="button"
                              >
                                   Runtime
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   The length of the {Type} 
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { Runtime }
                              </Typography>
                         </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                         <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel4bh-content"
                              id="panel4bh-header"
                         >
                              <Typography 
                                   className={classes.heading}
                                   variant="button"
                              >
                                   Genre
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   The genre of the {Type} 
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { Genre }
                              </Typography>
                         </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                         <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel5bh-content"
                              id="panel5bh-header"
                         >
                              <Typography 
                                   className={classes.heading}
                                   variant="button"
                              >
                                   Director
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   Who directed this {Type} 
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { Director } 
                              </Typography>
                         </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                         <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel6bh-content"
                              id="panel6bh-header"
                         >
                              <Typography 
                                   className={classes.heading}
                                   variant="button"
                              >
                                   Writer
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   Who wrote the {Type} 
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { Writer } 
                              </Typography>
                         </ExpansionPanelDetails>
                    </ExpansionPanel>

                    <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                         <ExpansionPanelSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel7bh-content"
                              id="panel7bh-header"
                         >
                              <Typography 
                                   className={classes.heading}
                                   variant="button"
                              >
                                   Actors
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   A short list of the main actors
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { Actors } 
                              </Typography>
                         </ExpansionPanelDetails>
                    </ExpansionPanel>
          </>
     ); // end of return
}; // end of Movie export