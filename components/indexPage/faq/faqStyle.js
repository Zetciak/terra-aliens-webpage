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
    paddingRight: '15px',
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
    paddingRight: '15px',
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
      paddingRight: '15px',
    },

    desc: {
      fontSize: '16px',
      marginTop: '-15px',
      paddingLeft: '15px',
      paddingRight: '15px',
    },
  },

  //855px
  ['@media (max-width: 855px)']: {
    mainTitleTypography: {
      fontSize: '32px',
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
      fontSize: '25px',
      paddingTop: '23px',
      paddingLeft: '15px',
      paddingRight: '15px',
    },

    desc: {
      fontSize: '15px',
      marginTop: '-15px',
      paddingLeft: '15px',
      paddingRight: '15px',
    },
  },

  //460px
  ['@media (max-width: 460px)']: {
    title: {
      fontSize: '23px',
      paddingTop: '15px',
      paddingLeft: '15px',
      paddingRight: '15px',
    },

    desc: {
      fontSize: '13px',
      marginTop: '-15px',
      paddingLeft: '15px',
      paddingRight: '15px',
    },
  },

  //450px
  ['@media (max-width: 450px)']: {
    mainTitleTypography: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '20px',
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
      fontSize: '21px',
      paddingTop: '17px',
      paddingLeft: '15px',
      paddingRight: '15px',
    },

    desc: {
      fontSize: '12px',
      marginTop: '-15px',
      paddingLeft: '15px',
      paddingRight: '15px',
    },
  },

  //370px
  ['@media (max-width: 370px)']: {
    title: {
      fontSize: '20px',
      paddingTop: '17px',
      paddingLeft: '10px',
      paddingRight: '10px',
    },

    desc: {
      fontSize: '11px',
      marginTop: '-15px',
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  },
});

export default useStyles;
