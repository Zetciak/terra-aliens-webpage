//Imports
import { Typography } from '@material-ui/core';
import Image from 'next/image';

//Images
import traitsList from '../../../public/images/traitsList.png';

//CSS
import useStyles from './traitsStyle';

//Script
function Traits() {
  //Style
  const classes = useStyles();

  return (
    <div className={classes.mainDiv} id="traitsScroll">
      <div className={classes.topSection}>
        <Typography className={classes.topSectionTitle}>Our Traits</Typography>
        <div className={classes.traitsList}>
          <ul>
            <li>Eyes</li>
            <li>Face</li>
            <li>Hair</li>
            <li>Hat</li>
            <li>Accessory</li>
            <li>Body</li>
          </ul>
        </div>
      </div>
      <div className={classes.bottomSection}>
        <Image src={traitsList} alt="" />
      </div>
    </div>
  );
}

export default Traits;
