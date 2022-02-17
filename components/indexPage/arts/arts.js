//Imports
import Image from 'next/image';

//Images
import artsImg from '../../../public/images/test.png';

//CSS
import useStyles from './artsStyle';

//Script
function Arts() {
  //Style
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <Image src={artsImg} alt="" />
    </div>
  );
}

export default Arts;
