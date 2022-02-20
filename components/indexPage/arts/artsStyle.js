import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    marginTop: '100px',
    width: '1294px',
    margin: '0 auto',
  },

  mobileDiv: {
    display: 'none',
  },

  oneSection: {
    width: '202px',
    height: '256px',
  },

  lastSection: {
    width: '5px',
    height: '256px',
  },

  artDiv: {
    width: '202px',
    height: '202px',
  },

  artGradient1: {
    width: '202px',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 32, 0.6) 0%, rgba(202, 172, 254, 0.25) 100%)',
  },

  artGradient2: {
    width: '202px',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 32, 0.5) 0%, rgba(254, 229, 66, 0.25) 100%)',
  },

  artGradient3: {
    width: '202px',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 32, 0.5) 0%, rgba(254, 203, 243, 0.25) 100%)',
  },

  artGradient4: {
    width: '202px',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 32, 0.5) 0%, rgba(108, 193, 255, 0.25) 100%)',
  },

  artGradient5: {
    width: '202px',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 33, 0.5) 0%, rgba(240, 198, 144, 0.25) 100%)',
  },

  artGradient6: {
    width: '202px',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 32, 0.5) 0%, rgba(96, 230, 238, 0.25) 100%)',
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
      marginTop: '100px',
    },
  },

  //450px
  ['@media (max-width: 450px)']: {
    normalDiv: {
      display: 'none',
    },

    mobileDiv: {
      display: 'block',
    },
  },
});

export default useStyles;
