import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    width: '1294px',
    margin: '0 auto',
    marginTop: '75px',
  },

  mainTitleTypography: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '150%',
    color: '#ffffff',
    marginBottom: '40px',
  },

  title: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '150%',
    color: '#ffffff',
    paddingTop: '13px',
    paddingLeft: '15px',
  },

  desc: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '140%',
    color: 'rgba(255, 255, 255, 0.82)',
    marginTop: '-15px',
    paddingLeft: '15px',
  },

  rightCornerIcon: {
    width: '30px',
    height: '30px',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    mainDiv: {
      marginLeft: '66px',
      marginRight: '65px',
      marginTop: '75px',
    },
  },

  //1439px
  ['@media (max-width: 1439px)']: {
    mainDiv: {
      width: '90%',
      margin: '0 auto',
      marginTop: '75px',
    },
  },

  //1000px
  ['@media (max-width: 1000px)']: {
    mainTitleTypography: {
      fontSize: '40px',
      marginBottom: '30px',
    },
  },

  //1200px
  ['@media (max-width: 1200px)']: {
    title: {
      fontSize: '27px',
      paddingTop: '18px',
    },

    desc: {
      fontSize: '15px',
      marginTop: '-15px',
      paddingLeft: '15px',
    },
  },

  //900px
  ['@media (max-width: 900px)']: {
    title: {
      fontSize: '20px',
      marginTop: '-15px',
    },

    rightCornerIcon: {
      width: '20px',
      height: '20px',
      marginTop: '-20px',
    },

    desc: {
      fontSize: '13px',
      marginTop: '-15px',
      paddingLeft: '15px',
    },

    mainTitleTypography: {
      fontSize: '30px',
      marginBottom: '20px',
    },
  },

  //750px
  ['@media (max-width: 750px)']: {
    title: {
      fontSize: '18px',
      paddingTop: '2px',
      marginTop: '1px',
    },

    desc: {
      fontSize: '12px',
      marginTop: '-15px',
      paddingLeft: '15px',
    },
  },

  //620px
  ['@media (max-width: 620px)']: {
    title: {
      fontSize: '15px',
      paddingTop: '2px',
      marginTop: '3px',
    },

    mainTitleTypography: {
      fontSize: '27px',
      marginBottom: '20px',
    },
  },

  //510px
  ['@media (max-width: 510px)']: {
    title: {
      fontSize: '12px',
      marginTop: '-15px',
      paddingLeft: '5px',
    },

    rightCornerIcon: {
      width: '13px',
      height: '13px',
      marginTop: '-43px',
    },

    desc: {
      fontSize: '10px',
      marginTop: '-30px',
      paddingLeft: '5px',
    },

    mainTitleTypography: {
      fontSize: '20px',
      marginBottom: '20px',
    },
  },

  //440px
  ['@media (max-width: 440px)']: {
    title: {
      fontSize: '8px',
      marginTop: '-20px',
      paddingLeft: '0px',
    },

    rightCornerIcon: {
      width: '10px',
      height: '10px',
      marginTop: '-57px',
    },

    desc: {
      fontSize: '7px',
      marginTop: '-45px',
      paddingLeft: '0px',
    },

    mainTitleTypography: {
      fontSize: '15px',
      marginBottom: '15px',
    },
  },
});

export default useStyles;
