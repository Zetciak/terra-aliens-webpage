//Imports
import { Typography, Button } from '@material-ui/core';
import Image from 'next/image';

//Images
import rightImage from '../../../public/images/firstSectionRightImage.png';

//CSS
import useStyles from './FirstSectionStyle';

//Script
function FirstSection() {
  //Style
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <div className={classes.leftSection}>
        <Typography className={classes.leftSectionTitle}>
          TerraAliens, a home for galaxy lovers
        </Typography>
        <Typography className={classes.leftSectionDesc}>
          The metacard will act as a mint pass. Holders will get first access to
          the many other nft projects that we will drop including a happy dad
          project and full send collabs with other cool nft projects.
        </Typography>
        <Button variant="contained" className={classes.leftSectionBtn}>
          <Typography>Get Started</Typography>
        </Button>
      </div>
      <div className={classes.rightSection}>
        <Image src={rightImage} alt="" />
      </div>
    </div>
  );
}

export default FirstSection;
