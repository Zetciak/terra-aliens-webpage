import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    width: '100%',
    height: '509px',
    marginTop: '146px',
    position: 'relative',
    //background: 'red',
    'overflow-y': 'hidden',
  },

  bgDiv: {
    width: '100%',
    height: '282px',
    position: 'absolute',
    background: 'url(https://i.imgur.com/qstQUNs.png)',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    bottom: '0',
    left: '0',
    //background: 'blue',
  },

  centerDiv: {
    width: '1280px',
    height: '100%',
    margin: '0 auto',
    //background: 'green',
  },

  imageDiv: {
    float: 'left',
    position: 'absolute',
    bottom: '-1',
    width: '40%',
  },

  buttonsDiv: {
    float: 'right',
    width: '518px',
    marginTop: '355px',
    position: 'relative',
    marginRight: '70px',
  },

  socialsTitle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '150%',
    color: '#ffffff',
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    marginTop: '-50px',
  },

  buttons: {
    width: '80%',
    margin: '0 auto',
  },

  rightSectionBtn: {
    marginTop: '10px',
    minWidth: '119px',
    height: '44px',
    background:
      'linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.16))',
    border: 'transparent',
    borderRadius: '580361px',
    transition: 'opacity .5s',
    boxShadow: 'none',
    opacity: '1',
    marginLeft: '16px',

    '&:hover': {
      opacity: '0.7',
      background:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.16))',
      boxShadow: 'none',
    },

    '& p': {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '200%',
      color: '#ffffff',
      textTransform: 'none',
    },

    '&:first-child': {
      marginLeft: '0px',
    },
  },

  rightSectionBtnIconDc: {
    marginRight: '8px',
    marginTop: '4px',
  },

  rightSectionBtnIconTwt: {
    marginRight: '8px',
    marginTop: '4px',
  },

  rightSectionBtnIconIns: {
    marginRight: '8px',
    marginTop: '8px',
  },

  instaUpper: {
    marginTop: '-2px',
  },

  twitterUpper: {
    marginTop: '0px',
  },

  mobileButtons: {
    display: 'none',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    centerDiv: {
      width: '90%',
    },
  },

  //1300px
  ['@media (max-width: 1440px)']: {
    mainDiv: {
      display: 'none',
    },

    mobileButtons: {
      marginTop: '150px',
      display: 'block',
      width: '100%',
      height: '250px',
      background: 'url(https://i.imgur.com/qstQUNs.png)',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },

    socialsTitle: {
      fontFamily: 'Syne',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '32px',
      lineHeight: '150%',
      color: '#ffffff',
      width: '90%',
      margin: '0 auto',
      marginTop: '-50px',
      textAlign: 'center',
      position: 'static',
      paddingTop: '85px',
    },

    buttons: {
      width: '90%',
      margin: '0 auto',
      textAlign: 'center',
    },
  },

  //565px
  ['@media (max-width: 565px)']: {
    socialsTitle: {
      paddingTop: '40px',
    },
  },

  //470px
  ['@media (max-width: 470px)']: {
    mobileButtons: {
      marginTop: '150px',
      height: '170px',
    },

    socialsTitle: {
      paddingTop: '45px',
      fontSize: '23px',
    },

    rightSectionBtn: {
      marginTop: '15px',
      minWidth: '0',
      height: '40px',
      marginLeft: '13px',

      '& p': {
        fontSize: '12px',
        lineHeight: '100%',
      },

      '&:first-child': {
        marginLeft: '0px',
      },
    },
  },

  //420px
  ['@media (max-width: 420px)']: {
    socialsTitle: {
      paddingTop: '48px',
      fontSize: '20px',
    },

    rightSectionBtn: {
      marginTop: '15px',
      minWidth: '0',
      height: '35px',
      marginLeft: '10px',

      '& p': {
        fontSize: '10px',
        lineHeight: '100%',
      },

      '&:first-child': {
        marginLeft: '0px',
      },
    },

    rightSectionBtnIconDc: {
      marginRight: '8px',
      marginTop: '0px',
      width: '12px',
    },

    rightSectionBtnIconTwt: {
      marginRight: '8px',
      marginTop: '0px',
      width: '12px',
    },

    rightSectionBtnIconIns: {
      marginRight: '8px',
      marginTop: '3px',
      width: '12px',
    },

    instaUpper: {
      marginTop: '1px',
    },

    twitterUpper: {
      marginTop: '0px',
    },
  },

  //380px
  ['@media (max-width: 380px)']: {
    mobileButtons: {
      marginTop: '150px',
      height: '120px',
    },

    socialsTitle: {
      paddingTop: '25px',
      fontSize: '16px',
    },

    rightSectionBtn: {
      marginTop: '15px',
      marginLeft: '8px',

      '& p': {
        fontSize: '8px',
        lineHeight: '100%',
      },

      '&:first-child': {
        marginLeft: '0px',
      },
    },

    rightSectionBtnIconDc: {
      marginRight: '8px',
      marginTop: '0px',
      width: '12px',
    },

    rightSectionBtnIconTwt: {
      marginRight: '8px',
      marginTop: '0px',
      width: '12px',
    },

    rightSectionBtnIconIns: {
      marginRight: '8px',
      marginTop: '3px',
      width: '12px',
    },

    instaUpper: {
      marginTop: '1px',
    },

    twitterUpper: {
      marginTop: '0px',
    },
  },
});

export default useStyles;
