import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    marginTop: '100px',
    width: '1294px',
    margin: '0 auto',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    mainDiv: {
      marginTop: '100px',
      margin: '0 auto',
      marginLeft: '66px',
      marginRight: '65px',
    },
  },

  //1439px
  ['@media (max-width: 1439px)']: {
    mainDiv: {
      width: '90%',
      margin: '0 auto',
    },
  },
});

export default useStyles;
