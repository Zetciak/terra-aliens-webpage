//Imports
import { Typography, Button } from '@material-ui/core';
import Image from 'next/image';

//CSS
import useStyles from './utilitiesStyle';

//Script
function Utilities() {
  //Style
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <Typography className={classes.mainTitle}>Aliens Utilities</Typography>
      <div className={classes.blockList}>
        <div className={classes.oneBlock}>
          <Button variant="contained" className={classes.oneBlockBtn}>
            <Typography>Whitelist mint</Typography>
          </Button>
          <Typography className={classes.oneBlockDesc}>
            The metacard will act as a mint pass holders will get first access
            to the many other nft projects that we will drop including a happy
            dad project and full send collabs with other cool nft projects.
          </Typography>
        </div>
        <div className={classes.oneBlock}>
          <Button variant="contained" className={classes.oneBlockBtn}>
            <Typography>Events</Typography>
          </Button>
          <Typography className={classes.oneBlockDesc}>
            The metacard will act as a mint pass holders will get first access
            to the many other nft projects that we will drop including a happy
            dad project and full send collabs with other cool nft projects.
          </Typography>
        </div>
        <div className={classes.oneBlock}>
          <Button variant="contained" className={classes.oneBlockBtn}>
            <Typography>Giveaways</Typography>
          </Button>
          <Typography className={classes.oneBlockDesc}>
            The metacard will act as a mint pass holders will get first access
            to the many other nft projects that we will drop including a happy
            dad project and full send collabs with other cool nft projects.
          </Typography>
        </div>
        <div className={classes.oneBlock2}>
          <Button variant="contained" className={classes.oneBlockBtn}>
            <Typography>Merch</Typography>
          </Button>
          <Typography className={classes.oneBlockDesc}>
            The metacard will act as a mint pass holders will get first access
            to the many other nft projects that we will drop including a happy
            dad project and full send collabs with other cool nft projects.
          </Typography>
        </div>
        <div className={classes.oneBlock2}>
          <Button variant="contained" className={classes.oneBlockBtn}>
            <Typography>Merch</Typography>
          </Button>
          <Typography className={classes.oneBlockDesc}>
            The metacard will act as a mint pass holders will get first access
            to the many other nft projects that we will drop including a happy
            dad project and full send collabs with other cool nft projects.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
