import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    width: '1280px',
    height: '439px',
    margin: '48px auto',
  },

  leftSection: {
    marginTop: '60px',
    width: '617px',
    height: '316px',
    float: 'left',
  },

  leftSectionTitle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '150%',
    color: '#ffffff',
  },

  leftSectionDesc: {
    marginTop: '24px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: 'rgba(255, 255, 255, 0.75);',
  },

  leftSectionBtn: {
    marginTop: '24px',
    minWidth: '140px',
    height: '40px',
    background: 'url(https://i.imgur.com/crWsPpo.png)',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    border: 'transparent',
    borderRadius: '534543px',
    transition: 'background .5s',
    boxShadow: 'none',

    '&:hover': {
      background: 'url(https://i.imgur.com/Qz6uRdT.png)',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
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

  rightSection: {
    marginTop: '10px',
    width: '463px',
    height: '494px',
    float: 'right',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    mainDiv: {
      width: '90%',
    },
  },

  //1300px
  ['@media (max-width: 1300px)']: {
    leftSection: {
      width: '90%',
      margin: '0 auto',
      textAlign: 'center',
      float: 'none',
    },

    leftSectionTitle: {
      lineHeight: '100%',
    },

    leftSectionDesc: {
      lineHeight: '120%',
    },

    rightSection: {
      margin: '0 auto',
      marginTop: '-80px',
      float: 'none',
    },
  },

  //860px
  ['@media (max-width: 860px)']: {
    rightSection: {
      display: 'none',
    },
  },

  //450px
  ['@media (max-width: 450px)']: {
    leftSectionTitle: {
      fontSize: '38px',
    },

    leftSectionDesc: {
      fontSize: '13px',
    },
  },

  //370px
  ['@media (max-width: 370px)']: {
    leftSectionTitle: {
      fontSize: '35px',
    },

    leftSectionDesc: {
      fontSize: '13px',
    },
  },
});

export default useStyles;
