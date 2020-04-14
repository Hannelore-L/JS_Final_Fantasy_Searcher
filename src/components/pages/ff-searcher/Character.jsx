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
export default function Character ( { character: { name, age, race, gender, job, origin, height, description, picture } } ) {
     const classes = useStyles();
     const [expanded, setExpanded] = React.useState(false);

     const handleChange = (panel) => (event, isExpanded) => {
          setExpanded(isExpanded ? panel : false);
     }; // end of handleChange

     return (
          <>
               <h2>Meet { name } </h2>
                    <img src={ picture } alt={ name } />

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
                                   Game
                              </Typography>
                                   <Typography className={classes.secondaryHeading}>
                                   Shows what game this character appears in
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { origin }
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
                                   Race
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   Shows what race this character is
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { race }
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
                                   Gender
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   Shows the gender this character is
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { gender }
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
                                   Age
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   Shows the age of this character
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { age }
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
                                   Height
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   Shows how tall this character is
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { height } cm
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
                                   Job
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   Shows the job this character has
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { job } 
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
                                   Who is { name }
                              </Typography>
                              <Typography className={classes.secondaryHeading}>
                                   Short description of the character
                              </Typography>
                         </ExpansionPanelSummary>
                         <ExpansionPanelDetails>
                              <Typography>
                                   { description } 
                              </Typography>
                         </ExpansionPanelDetails>
                    </ExpansionPanel>
          </>
     ); // end of return
}; // end of Character export