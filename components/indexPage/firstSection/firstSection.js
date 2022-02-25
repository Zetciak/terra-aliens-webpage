//Imports
import { Typography, Button } from '@material-ui/core';
import Image from 'next/image';

//Images
import rightImage from '../../../public/images/firstSectionRightImage.png';

//CSS
import useStyles from './firstSectionStyle';

//Script
function FirstSection() {
  //Style
  const classes = useStyles();

  return (
    <div className={classes.mainDiv} id="aboutUsScroll">
      <div className={classes.leftSection}>
        <Typography className={classes.leftSectionTitle}>
          Join the Invaders before the raid begins
        </Typography>
        <Typography className={classes.leftSectionDesc}>
          Terra Aliens is a collection of NFTs built on the Terra blockchain. We
          are building a Web3 Brand and partnering with the best in the
          business. Holder utility will be unlike anything you have never seen
          before. Now you can become a part of it.
        </Typography>
        <Button
          variant="contained"
          className={classes.leftSectionBtn}
          href="https://discord.gg/terraaliens"
          target="_blank"
        >
          <Typography>Join us!</Typography>
        </Button>
      </div>
      <div className={classes.rightSection}>
        <Image src={rightImage} alt="" />
      </div>
    </div>
  );
}

export default FirstSection;
