import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    margin: '0 auto',
    marginTop: '80px',
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
    background:
      'linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25))',
    border: 'transparent',
    borderRadius: '580361px',
    transition: 'opacity .5s',
    boxShadow: 'none',
    opacity: '1',

    '&:hover': {
      opacity: '0.8',
      background:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25))',
      boxShadow: 'none',
    },

    '& p': {
      fontFamily: 'Syne',
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
    marginTop: '3px',
  },

  rightSectionBtnIconIns: {
    marginRight: '8px',
    marginTop: '8px',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    centerDiv: {
      width: '90%',
    },
  },

  //1150px
  ['@media (max-width: 1150px)']: {
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
  },

  //550px
  ['@media (max-width: 550px)']: {
    mainDiv: {
      marginTop: '-120px',
    },
  },

  //450px
  ['@media (max-width: 450px)']: {
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

  //395px
  ['@media (max-width: 395px)']: {
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
      marginTop: '0px',
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
      marginTop: '3px',
    },
  },

  //340px
  ['@media (max-width: 340px)']: {
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
});

export default useStyles;
