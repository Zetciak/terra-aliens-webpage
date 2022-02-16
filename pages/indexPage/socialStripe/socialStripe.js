//Imports
import { Typography, Button } from '@material-ui/core';
import Image from 'next/image';

//Images
//import rightImage from '../../../public/images/firstSectionRightImage.png';

//CSS
import useStyles from './SocialStripeStyle';

//Script
function SocialStripe() {
  //Style
  const classes = useStyles();

  return <div className={classes.mainDiv}></div>;
}

export default SocialStripe;
