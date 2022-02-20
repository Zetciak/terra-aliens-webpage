import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    margin: '0 auto',
    marginTop: '120px',
    height: '155px',
    background: 'url(https://i.imgur.com/hsye1Ls.png)',
    width: '100%',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  },

  centerDiv: {
    width: '1280px',
    margin: '48px auto',
  },

  leftSection: {
    height: '48px',
    marginTop: '62px',
    float: 'left',
  },

  leftSectionTitle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '100%',
    color: '#ffffff',
  },

  rightSection: {
    height: '44px',
    marginTop: '53px',
    float: 'right',
  },

  rightSectionBtn: {
    minWidth: '119px',
    marginLeft: '16px',
    height: '44px',
    background: 'url(https://i.imgur.com/k431WdR.png)',
    border: 'transparent',
    borderRadius: '580361px',
    transition: 'background .5s',
    boxShadow: 'none',

    '&:hover': {
      background: 'url(https://i.imgur.com/dCwxR21.png)',
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
    marginTop: '-1px',
  },

  twitterUpper: {
    marginTop: '0px',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    centerDiv: {
      width: '90%',
    },
  },

  //1300px
  ['@media (max-width: 1300px)']: {
    mainDiv: {
      marginTop: '380px',
      backgroundSize: '100% 120px',
    },

    leftSection: {
      height: '48px',
      marginTop: '45px',
      float: 'left',
    },

    rightSection: {
      height: '44px',
      marginTop: '40px',
      float: 'right',
    },
  },

  //1050px
  ['@media (max-width: 1050px)']: {
    leftSectionTitle: {
      marginTop: '5px',
      fontSize: '25px',
    },
  },

  //920px
  ['@media (max-width: 920px)']: {
    leftSectionTitle: {
      marginTop: '7px',
      fontSize: '20px',
    },

    rightSectionBtn: {
      marginTop: '3px',
      height: '38px',
    },
  },

  //820px
  ['@media (max-width: 820px)']: {
    mainDiv: {
      marginTop: '380px',
      backgroundSize: '100% 100%',
      height: '175px',
    },

    leftSection: {
      width: '100%',
      textAlign: 'center',
      marginTop: '45px',
    },

    rightSection: {
      width: '100%',
      textAlign: 'center',
      marginTop: '-10px',
    },

    instaUpper: {
      marginTop: '-3px',
    },

    twitterUpper: {
      marginTop: '-1px',
    },

    rightSectionBtnIconIns: {
      marginTop: '6px',
    },

    rightSectionBtnIconDc: {
      marginTop: '5px',
    },
  },

  //860px
  ['@media (max-width: 860px)']: {
    mainDiv: {
      marginTop: '-180px',
    },
  },

  //700px
  ['@media (max-width: 700px)']: {
    mainDiv: {
      marginTop: '-165px',
    },
  },

  //570px
  ['@media (max-width: 570px)']: {
    mainDiv: {
      marginTop: '-140px',
    },
  },

  //500px
  ['@media (max-width: 500px)']: {
    mainDiv: {
      marginTop: '-80px',
    },
  },

  //461px
  ['@media (max-width: 461px)']: {
    mainDiv: {
      marginTop: '-140px',
    },

    leftSectionTitle: {
      marginTop: '7px',
      fontSize: '17px',
    },

    rightSectionBtn: {
      minWidth: '90px',

      '& p': {
        fontSize: '11px',
      },
    },
  },

  //410px
  ['@media (max-width: 410px)']: {
    rightSectionBtn: {
      minWidth: '0px',

      '& p': {
        fontSize: '9px',
      },
    },

    rightSectionBtnIconDc: {
      width: '13px',
      height: 'auto',
      marginRight: '5px',
      marginTop: '-1px',
    },

    rightSectionBtnIconTwt: {
      width: '13px',
      height: 'auto',
      marginRight: '5px',
      marginTop: '-1px',
    },

    rightSectionBtnIconIns: {
      width: '13px',
      height: 'auto',
      marginRight: '5px',
      marginTop: '2px',
    },
  },

  //350px
  ['@media (max-width: 350px)']: {
    leftSectionTitle: {
      marginTop: '10px',
    },

    rightSectionBtn: {
      minWidth: '0px',
      marginTop: '3px',
      height: '33px',

      '& p': {
        fontSize: '8px',
      },
    },

    rightSectionBtnIconDc: {
      width: '11px',
      height: 'auto',
      marginRight: '5px',
      marginTop: '-1px',
    },

    rightSectionBtnIconTwt: {
      width: '11px',
      height: 'auto',
      marginRight: '5px',
      marginTop: '-1px',
    },

    rightSectionBtnIconIns: {
      width: '11px',
      height: 'auto',
      marginRight: '5px',
      marginTop: '2px',
    },
  },

  //330px
  ['@media (max-width: 330px)']: {
    rightSectionBtn: {
      minWidth: '0px',
      marginTop: '3px',
      height: '33px',

      '& p': {
        fontSize: '7px',
      },
    },

    rightSectionBtnIconDc: {
      width: '11px',
      height: 'auto',
      marginRight: '5px',
      marginTop: '-1px',
    },

    rightSectionBtnIconTwt: {
      width: '11px',
      height: 'auto',
      marginRight: '5px',
      marginTop: '-1px',
    },

    rightSectionBtnIconIns: {
      width: '11px',
      height: 'auto',
      marginRight: '5px',
      marginTop: '2px',
    },

    instaUpper: {
      marginTop: '1px',
    },
  },
});

export default useStyles;
