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
    backgroundSize: 'cover',
    opacity: '1',

    '&$expanded': {
      margin: '0px',
      background: 'url(https://i.imgur.com/BBWl5CD.png)',
      backgroundSize: 'cover',
      minHeight: '0px',
      paddingBottom: '10px',
      opacity: '1',

      '&:hover': {
        opacity: '0.95',
      },
    },

    //460px
    ['@media (max-width: 460px)']: {
      minHeight: '85px',
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
      id: 'faq11',
      title: 'What is Terra Aliens?',
      desc: 'Terra Aliens are a collection of unique NFTs built on the Terra blockchain with a strong focus on utility and partnerships.',
    },
    {
      id: 'faq22',
      title: 'When is mint and what is the price?',
      desc: 'That is yet to be revealed. Test Public',
    },
    {
      id: 'faq33',
      title: 'How to contact the team?',
      desc: 'You can always chat with us at our Discord server! \nAlso, you can find us on Twitter @TerraAliensNFT',
    },
    {
      id: 'faq44',
      title: 'How is the rarity of my NFT determined?',
      desc: 'The rarity will be determined by the combination of traits your Alien has. The utility might differ depending on the traits as well.',
    },
    {
      id: 'faq55',
      title: 'Will there be more than one collection?',
      desc: 'Yes! More details on that will be revealed at the right time…',
    },
    {
      id: 'faq66',
      title: 'How to get a WL spot?',
      desc: 'Check #how-to-get-whitelisted channel at our Discord.',
    },
  ];

  //Style
  const classes = useStyles();

  return (
    <div className={classes.mainDiv} id="faqScroll">
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
              className={classes.panelSummary}
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
