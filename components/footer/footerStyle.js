import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    position: 'relative',
    width: '1280px',
    height: '102px',
    margin: '0 auto',
    marginTop: '92px',
    paddingTop: '20px',
    background: 'transparent',
    borderTop: '1px solid #a798fd',
    'overflow-y': 'hidden',
  },

  rightElementsElement: {
    width: '32px',
    height: '32px',
  },

  toolBar: {
    width: '100%',
    margin: '0 auto',
  },

  logo: {
    marginTop: '3px',
    marginLeft: '0px',
  },

  centerElements: {
    textAlign: 'center',
    marginLeft: 'auto',
    paddingLeft: '35px',
  },

  leftTypography: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '24px',
    color: 'rgba(255, 255, 255, 0.75)',
    marginLeft: '22px',
  },

  centerTypography: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '24px',
    color: 'rgba(255, 255, 255, 0.75)',
  },

  rightElements: {
    marginLeft: 'auto',
    marginRight: '0px',
    '& ul': {
      '& li': {
        display: 'inline-block',
        paddingLeft: '16px',
        paddingTop: '7px',
        '& a': {
          opacity: '1',
          transition: 'opacity .5s',
          '&:hover': {
            opacity: '0.8',
          },
        },
      },
      '& li:nth-child(1)': {
        paddingLeft: '0px',
      },
    },
  },

  copyRight: {
    display: 'none',
  },

  copyRight2: {
    display: 'none',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    appBar: {
      width: '90%',
    },
  },

  //720px
  ['@media (max-width: 720px)']: {
    centerElements: {
      display: 'none',
    },

    copyRight: {
      display: 'block',
      marginTop: '0px',
      marginBottom: '20px',
      width: '100%',
      textAlign: 'center',
    },
  },

  //550px
  ['@media (max-width: 550px)']: {
    rightElementsElement: {
      width: '48px',
      height: '48px',
    },
  },

  //520px
  ['@media (max-width: 520px)']: {
    copy: {
      display: 'none',
    },

    copyRight2: {
      display: 'block',
      marginTop: '10px',
      marginBottom: '5px',
      width: '100%',
      textAlign: 'center',
    },

    leftTypography: {
      marginLeft: '0px',
    },
  },

  //370px
  ['@media (max-width: 370px)']: {
    rightElementsElement: {
      width: '35px',
      height: '35px',
    },
  },
});

export default useStyles;
