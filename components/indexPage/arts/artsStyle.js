import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    marginTop: '100px',
    width: '1294px',
    margin: '0 auto',
  },

  mainTitle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '150%',
    color: '#ffffff',
    marginBottom: '30px',
  },

  mobileDiv: {
    display: 'none',
  },

  lastSection: {
    width: '5px',
    height: '256px',
  },

  artDiv: {
    width: '100%',
    height: '100%',
  },

  artGradient1: {
    width: '100%',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 32, 0.5) 0%, rgba(199, 180, 234, 0.25) 100%)',
  },

  artGradient2: {
    width: '100%',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 32, 0.5) 0%, rgba(238, 223, 121, 0.25) 100%)',
  },

  artGradient3: {
    width: '100%',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 32, 0.5) 0%, rgba(146, 229, 234, 0.25) 100%)',
  },

  artGradient4: {
    width: '100%',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 32, 0.5) 0%, rgba(129, 208, 242, 0.25) 100%)',
  },

  artGradient5: {
    width: '100%',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 33, 0.5) 0%, rgba(235, 207, 173, 0.25) 100%)',
  },

  artGradient6: {
    width: '100%',
    height: '54px',
    background:
      'linear-gradient(180deg, rgba(18, 6, 32, 0.5) 0%, rgba(241, 202, 224, 0.25) 100%)',
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

  //1155px
  ['@media (max-width: 1155px)']: {
    mainTitle: {
      fontSize: '38px',
    },
  },

  //855px
  ['@media (max-width: 855px)']: {
    mainTitle: {
      fontSize: '32px',
    },
  },

  //690px
  ['@media (max-width: 690px)']: {
    mainTitle: {
      fontSize: '25px',
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

    mainTitle: {
      width: '100%',
      textAlign: 'center',
    },
  },

  //440px
  ['@media (max-width: 440px)']: {
    mainTitle: {
      fontSize: '20px',
    },
  },
});

export default useStyles;
