//Imports
import Image from 'next/image';

//Images
import art1 from '../../../public/images/art1.png';
import art2 from '../../../public/images/art2.png';
import test from '../../../public/images/test.png';

//CSS
import useStyles from './artsStyle';

//Script
function Arts() {
  //Style
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <Image src={test} alt="" />
    </div>
  );
}

export default Arts;
