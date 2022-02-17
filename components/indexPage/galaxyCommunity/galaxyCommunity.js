//Imports
import { Typography, Button } from '@material-ui/core';
import Image from 'next/image';

//Images
import bottomImage from '../../../public/images/bottomImage.png';
import discord from '../../../public/images/stripeDiscord.svg';
import twitter from '../../../public/images/stripeTwitter.svg';
import instagram from '../../../public/images/stripeInstagram.svg';

//CSS
import useStyles from './galaxyCommunityStyle';

//Script
function GalaxyCommunity() {
  //Style
  const classes = useStyles();

  return (
    <div className={classes.outsideDiv}>
      <div className={classes.centerDiv}>
        <div className={classes.bottomImgDiv}>
          <Image src={bottomImage} alt="" />
        </div>
        <div className={classes.socialsDiv}>
          <Typography className={classes.socialsTitle}>
            Check our galaxy community
          </Typography>
          <Button variant="contained" className={classes.rightSectionBtn}>
            <div className={classes.rightSectionBtnIconDc}>
              <Image src={discord} alt="" />
            </div>
            <Typography>Discord</Typography>
          </Button>
          <Button variant="contained" className={classes.rightSectionBtn}>
            <div className={classes.rightSectionBtnIconTwt}>
              <Image src={twitter} alt="" />
            </div>
            <Typography className={classes.twitterUpper}>Twitter</Typography>
          </Button>
          <Button variant="contained" className={classes.rightSectionBtn}>
            <div className={classes.rightSectionBtnIconIns}>
              <Image src={instagram} alt="" />
            </div>
            <Typography className={classes.instaUpper}>Instagram</Typography>
          </Button>
        </div>
      </div>
      <div className={classes.mainDiv}></div>
    </div>
  );
}

export default GalaxyCommunity;
