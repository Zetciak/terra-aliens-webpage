import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    margin: '0 auto',
    marginTop: '80px',
    height: '155px',
    background: 'url(../../../asset/images/socialStripe.png)',
    width: '100%',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1150px
  ['@media (max-width: 1150px)']: {
    mainDiv: {
      marginTop: '380px',
      backgroundSize: '100% 80px',
    },
  },

  //550px
  ['@media (max-width: 550px)']: {
    mainDiv: {
      marginTop: '-120px',
    },
  },
});

export default useStyles;
