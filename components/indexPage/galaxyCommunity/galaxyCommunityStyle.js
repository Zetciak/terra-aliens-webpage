import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  outsideDiv: {
    margin: '0 auto',
    marginTop: '-450px',
    height: '509px',
    width: '100%',
  },

  mainDiv: {
    margin: '0 auto',
    marginTop: '228px',
    height: '282px',
    background: 'url(https://i.imgur.com/qstQUNs.png)',
    width: '100%',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
  },

  centerDiv: {
    width: '1280px',
    height: '509px',
    margin: '48px auto',
  },

  bottomImgDiv: {
    paddingTop: '510px',
    float: 'left',
    marginLeft: '-200px',
  },

  socialsDiv: {
    float: 'right',
    marginTop: '820px',
    marginRight: '100px',
  },

  socialsTitle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '150%',
    color: '#ffffff',
    marginLeft: '-25px',
  },

  rightSectionBtn: {
    marginTop: '10px',
    minWidth: '119px',
    marginLeft: '16px',
    height: '44px',
    background:
      'linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.16))',
    border: 'transparent',
    borderRadius: '580361px',
    transition: 'opacity .5s',
    boxShadow: 'none',
    opacity: '1',

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

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    centerDiv: {
      width: '90%',
    },
  },

  //1420px
  ['@media (max-width: 1420px)']: {
    bottomImgDiv: {
      paddingTop: '497px',
    },
  },

  //1200px
  ['@media (max-width: 1300px)']: {
    outsideDiv: {
      marginTop: '-600px',
    },

    bottomImgDiv: {
      width: '450px',
      paddingTop: '406px',
      marginLeft: '-250px',
    },

    socialsDiv: {
      float: 'right',
      marginTop: '670px',
      marginRight: '50px',
    },

    socialsTitle: {
      fontSize: '26px',
      marginLeft: '10px',
    },

    rightSectionBtn: {
      minWidth: '100px',
      height: '40px',
      marginTop: '3px',
    },
  },

  //1155px
  ['@media (max-width: 1155px)']: {
    outsideDiv: {
      marginTop: '-650px',
    },

    bottomImgDiv: {
      width: '450px',
      paddingTop: '355px',
      marginLeft: '0px',
    },

    socialsDiv: {
      float: 'right',
      marginTop: '630px',
      marginRight: '60px',
    },
  },

  //1080px
  ['@media (max-width: 1080px)']: {
    socialsDiv: {
      float: 'right',
      marginTop: '640px',
      marginRight: '40px',
    },

    socialsTitle: {
      fontSize: '20px',
      marginLeft: '30px',
    },

    rightSectionBtn: {
      minWidth: '80px',
      height: '35px',
      marginTop: '3px',

      '& p': {
        fontSize: '10px',
      },
    },
  },

  //960px
  ['@media (max-width: 960px)']: {
    mainDiv: {
      marginTop: '187px',
      height: '122px',
    },

    bottomImgDiv: {
      width: '250px',
      paddingTop: '359px',
      marginLeft: '20px',
    },

    socialsDiv: {
      float: 'right',
      marginTop: '510px',
      marginRight: '70px',
    },
  },

  //937px
  ['@media (max-width: 937px)']: {
    mainDiv: {
      marginTop: '187px',
      height: '122px',
    },

    bottomImgDiv: {
      width: '250px',
      paddingTop: '354px',
      marginLeft: '20px',
    },

    socialsDiv: {
      float: 'right',
      marginTop: '510px',
      marginRight: '80px',
    },
  },

  //850px
  ['@media (max-width: 850px)']: {
    mainDiv: {
      marginTop: '187px',
    },
  },

  //825px
  ['@media (max-width: 825px)']: {
    outsideDiv: {
      marginTop: '-750px',
    },

    socialsDiv: {
      float: 'right',
      marginTop: '405px',
      marginRight: '35px',
    },

    bottomImgDiv: {
      width: '250px',
      paddingTop: '254px',
      marginLeft: '20px',
    },
  },

  //805px
  ['@media (max-width: 805px)']: {
    bottomImgDiv: {
      paddingTop: '247px',
    },
  },

  //750px
  ['@media (max-width: 750px)']: {
    bottomImgDiv: {
      width: '220px',
      paddingTop: '277px',
      marginLeft: '5px',
    },
  },

  //690px
  ['@media (max-width: 690px)']: {
    outsideDiv: {
      marginTop: '-850px',
    },

    bottomImgDiv: {
      display: 'none',
    },

    socialsDiv: {
      width: '100%',
      textAlign: 'center',
      marginLeft: '0',
      marginRight: '1.5%',
      marginTop: '720px',
    },
  },

  //600px
  ['@media (max-width: 600px)']: {
    outsideDiv: {
      marginTop: '-900px',
    },
  },

  //450px
  ['@media (max-width: 600px)']: {
    outsideDiv: {
      marginTop: '-935px',
    },
  },

  //410px
  ['@media (max-width: 410px)']: {
    outsideDiv: {
      marginTop: '-955px',
    },

    socialsTitle: {
      marginTop: '4px',
      fontSize: '16px',
    },

    rightSectionBtn: {
      minWidth: '0px',
      height: '32px',
      marginTop: '9px',

      '& p': {
        fontSize: '8px',
      },
    },
  },

  //373px
  ['@media (max-width: 373px)']: {
    outsideDiv: {
      marginTop: '-955px',
    },

    socialsTitle: {
      marginTop: '-16px',
      fontSize: '16px',
    },
  },

  //330px
  ['@media (max-width: 373px)']: {
    socialsTitle: {
      marginTop: '-14px',
      fontSize: '15px',
    },
  },
});

export default useStyles;
