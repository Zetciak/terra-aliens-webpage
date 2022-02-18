//Imports
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import Image from 'next/image';

//Icons
import ArrowIcon from '@material-ui/icons/ArrowForwardIos';

//Images
//import closedMark from '../../../public/images/closedMark.png';
//import openMark from '../../../public/images/openMark.png';

//CSS
import useStyles from './faqStyle';

const StyledAccordion = withStyles({
  root: {
    background: 'url(https://i.imgur.com/0v7YU1P.png)',
    transition: 'all .5s',
    minHeight: '94px',
    borderBottom: '1px solid #A799FD',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    opacity: '1',

    '&$expanded': {
      margin: '0px',
      background: 'url(https://i.imgur.com/BBWl5CD.png)',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
      minHeight: '135px',
      opacity: '1',

      '&:hover': {
        opacity: '0.95',
      },

      //460px
      ['@media (max-width: 460px)']: {
        minHeight: '115px',
      },
    },

    //460px
    ['@media (max-width: 460px)']: {
      minHeight: '74px',
    },

    '&:hover': {
      opacity: '0.8',
    },
  },

  expanded: {},
})(Accordion);

//Script
function Faq() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      id: 'faq1',
      title: 'What is Terra Aliens?',
      desc: 'Lorem ipsum costam asdasunijdnisadnisda ndasondoasmimodas moidasomiadsmodamos',
    },
    {
      id: 'faq2',
      title: 'How can I buy a Terra Alien?',
      desc: 'Lorem ipsum costam asdasunijdnisadnisda ndasondoasmimodas moidasomiadsmodamos',
    },
    {
      id: 'faq3',
      title: 'What is the Treasury?',
      desc: 'Lorem ipsum costam asdasunijdnisadnisda ndasondoasmimodas moidasomiadsmodamos',
    },
    {
      id: 'faq4',
      title: 'What rights do I have to my Terra Alien?',
      desc: 'Lorem ipsum costam asdasunijdnisadnisda ndasondoasmimodas moidasomiadsmodamos',
    },
  ];

  //Style
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <div className={classes.mainTitle}>
        <Typography className={classes.mainTitleTypography}>FAQ</Typography>
      </div>
      {data.map((accordion) => {
        const { id, title, desc } = accordion;
        return (
          <StyledAccordion
            expanded={expanded === id}
            key={id}
            onChange={handleChange(id)}
            square
          >
            <AccordionSummary
            /*expandIcon={
                expanded ? (
                  <div className={classes.rightCornerIcon}>
                    <Image src={openMark} alt="X" />
                  </div>
                ) : (
                  <div className={classes.rightCornerIcon}>
                    <Image src={closedMark} alt="+" />
                  </div>
                )
              }*/
            >
              <Typography className={classes.title}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.desc}>{desc}</Typography>
            </AccordionDetails>
          </StyledAccordion>
        );
      })}
    </div>
  );
}

export default Faq;
