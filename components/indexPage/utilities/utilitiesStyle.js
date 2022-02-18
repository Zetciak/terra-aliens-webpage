import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    marginTop: '55px',
    width: '1280px',
    minHeight: '536px',
    margin: '48px auto',
  },

  mainTitle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '150%',
    color: '#ffffff',
    textAlign: 'center',
  },

  blockList: {
    marginTop: '80px',
  },

  oneBlock: {
    width: '33%',
    minHeight: '184px',
    display: 'inline-block',
    margin: '0 auto',
    marginBottom: '48px',
    padding: '0 12px',
  },

  oneBlock1: {
    width: '33%',
    minHeight: '184px',
    display: 'block',
    margin: '0 auto',
    marginBottom: '48px',
    padding: '0 12px',
  },

  oneBlock2: {
    width: '33%',
    minHeight: '184px',
    display: 'inline-block',
    margin: '0 auto',
    marginBottom: '48px',
    padding: '0 12px',
    marginLeft: '16%',
    '&:last-child': {
      marginLeft: '0px',
    },
  },

  oneBlockBtn: {
    minWidth: '34%',
    display: 'block',
    margin: '0 auto',
    marginBottom: '24px',
    height: '48px',
    background: 'url(https://i.imgur.com/crWsPpo.png)',
    backgroundSize: '100% 100%',
    border: 'transparent',
    borderRadius: '534543px',
    transition: 'background .5s',
    boxShadow: 'none',

    '&:hover': {
      background: 'url(https://i.imgur.com/eQOHeDU.png)',
      backgroundSize: '100% 100%',
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
  },

  oneBlockDesc: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '200%',
    color: 'rgba(255, 255, 255, 0.75)',
    textAlign: 'center',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    mainDiv: {
      width: '90%',
    },
  },

  //1200px
  ['@media (max-width: 1200px)']: {
    oneBlock: {
      marginBottom: '68px',
    },

    oneBlock1: {
      marginBottom: '68px',
    },

    oneBlock2: {
      marginBottom: '68px',
    },
  },

  //1000px
  ['@media (max-width: 1000px)']: {
    oneBlock: {
      marginBottom: '48px',
    },

    oneBlock1: {
      marginBottom: '48px',
    },

    oneBlock2: {
      marginBottom: '48px',
    },

    oneBlockDesc: {
      fontSize: '12px',
      lineHeight: '200%',
    },
  },

  //800px
  ['@media (max-width: 800px)']: {
    oneBlock: {
      marginBottom: '48px',
    },

    oneBlock1: {
      marginBottom: '48px',
    },

    oneBlock2: {
      marginBottom: '48px',
    },

    oneBlockDesc: {
      fontSize: '11px',
    },

    oneBlockBtn: {
      minWidth: '34%',
      marginBottom: '18px',
      height: '40px',

      '& p': {
        fontSize: '12px',
      },
    },
  },

  //700px
  ['@media (max-width: 700px)']: {
    oneBlock: {
      width: '100%',
      display: 'block',
      margin: '0 auto',
      marginBottom: '18px',
      padding: '0 12px',
    },

    oneBlock1: {
      width: '100%',
      display: 'block',
      margin: '0 auto',
      marginBottom: '18px',
      padding: '0 12px',
    },

    oneBlock2: {
      width: '100%',
      display: 'block',
      marginBottom: '18px',
      padding: '0 12px',
      margin: '0 auto',
    },

    oneBlockDesc: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '200%',
      color: 'rgba(255, 255, 255, 0.75)',
      textAlign: 'center',
    },

    oneBlockBtn: {
      minWidth: '34%',
      display: 'block',
      margin: '0 auto',
      marginBottom: '24px',
      height: '48px',
      background: 'url(https://i.imgur.com/crWsPpo.png)',
      backgroundSize: '100% 100%',
      border: 'transparent',
      borderRadius: '534543px',
      transition: 'background .5s',
      boxShadow: 'none',

      '&:hover': {
        background: 'url(https://i.imgur.com/eQOHeDU.png)',
        backgroundSize: '100% 100%',
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
    },

    blockList: {
      marginTop: '30px',
    },

    mainDiv: {
      marginTop: '50px',
    },
  },

  //500px
  ['@media (max-width: 500px)']: {
    oneBlock: {
      marginBottom: '48px',
    },

    oneBlock1: {
      marginBottom: '48px',
    },

    oneBlock2: {
      marginBottom: '48px',
    },
  },

  //450px
  ['@media (max-width: 450px)']: {
    mainTitle: {
      fontSize: '38px',
    },
  },

  //370px
  ['@media (max-width: 370px)']: {
    mainTitle: {
      fontSize: '35px',
    },
  },
});

export default useStyles;
