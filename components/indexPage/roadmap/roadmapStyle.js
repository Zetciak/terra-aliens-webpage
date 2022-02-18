import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    marginTop: '100px',
    width: '100%',
  },

  titleDiv: {
    width: '1294px',
    margin: '0 auto',
    marginTop: '75px',
    marginBottom: '30px',
  },

  imageDiv: {
    width: '1440px',
    margin: '0 auto',
  },

  titleTypography: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '150%',
    color: '#ffffff',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    titleDiv: {
      marginLeft: '66px',
      marginRight: '65px',
      marginTop: '75px',
    },

    imageDiv: {
      width: '100%',
    },
  },

  //1439px
  ['@media (max-width: 1439px)']: {
    titleDiv: {
      width: '90%',
      margin: '0 auto',
      marginTop: '75px',
    },
  },

  //1155px
  ['@media (max-width: 1155px)']: {
    titleTypography: {
      fontSize: '38px',
    },
  },

  //855px
  ['@media (max-width: 855px)']: {
    titleTypography: {
      fontSize: '32px',
    },
  },

  //690px
  ['@media (max-width: 690px)']: {
    titleTypography: {
      fontSize: '25px',
    },
  },

  //440px
  ['@media (max-width: 440px)']: {
    titleTypography: {
      fontSize: '20px',
    },
  },
});

export default useStyles;
