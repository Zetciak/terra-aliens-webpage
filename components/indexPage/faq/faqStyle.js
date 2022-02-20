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

  panelSummary: {
    '&.Mui-expanded': {
      minHeight: 0,
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      marginTop: '11px',
    },
  },

  desc: {
    fontFamily: 'Montserrat',
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

  //1155px
  ['@media (max-width: 1155px)']: {
    mainTitleTypography: {
      fontSize: '38px',
    },
  },

  //1000px
  ['@media (max-width: 1000px)']: {
    title: {
      fontSize: '28px',
      paddingTop: '15px',
      paddingLeft: '15px',
    },

    desc: {
      fontSize: '16px',
      marginTop: '-15px',
      paddingLeft: '15px',
    },
  },

  //855px
  ['@media (max-width: 855px)']: {
    mainTitleTypography: {
      fontSize: '32px',
    },
  },

  //750px
  ['@media (max-width: 750px)']: {
    title: {
      fontSize: '25px',
      paddingTop: '18px',
      paddingLeft: '15px',
    },

    desc: {
      fontSize: '14px',
      marginTop: '-15px',
      paddingLeft: '15px',
    },
  },

  //690px
  ['@media (max-width: 690px)']: {
    mainTitleTypography: {
      fontSize: '25px',
    },
  },

  //650px
  ['@media (max-width: 650px)']: {
    title: {
      fontSize: '22px',
      paddingTop: '23px',
      paddingLeft: '15px',
    },

    desc: {
      fontSize: '13px',
      marginTop: '-15px',
      paddingLeft: '15px',
    },
  },

  //580px
  ['@media (max-width: 580px)']: {
    mainDiv: {
      marginTop: '55px',
    },

    title: {
      fontSize: '19px',
      paddingTop: '23px',
      paddingLeft: '15px',
    },

    desc: {
      fontSize: '10px',
      marginTop: '-15px',
      paddingLeft: '15px',
    },
  },

  //520px
  ['@media (max-width: 580px)']: {
    title: {
      fontSize: '16px',
      paddingTop: '28px',
      paddingLeft: '15px',
    },

    desc: {
      fontSize: '10px',
      marginTop: '-15px',
      paddingLeft: '15px',
    },
  },

  //460px
  ['@media (max-width: 460px)']: {
    title: {
      fontSize: '14px',
      paddingTop: '18px',
      paddingLeft: '15px',
    },

    desc: {
      fontSize: '10px',
      marginTop: '-15px',
      paddingLeft: '15px',
    },
  },

  //440px
  ['@media (max-width: 440px)']: {
    mainTitleTypography: {
      fontSize: '20px',
    },
  },

  //400px
  ['@media (max-width: 400px)']: {
    title: {
      fontSize: '12px',
      paddingTop: '19px',
      paddingLeft: '15px',
    },

    desc: {
      fontSize: '10px',
      marginTop: '-15px',
      paddingLeft: '15px',
    },
  },

  //360px
  ['@media (max-width: 360px)']: {
    title: {
      fontSize: '11px',
      paddingTop: '20px',
      paddingLeft: '7px',
    },

    desc: {
      fontSize: '9px',
      marginTop: '-15px',
      paddingLeft: '7px',
    },
  },
});

export default useStyles;
