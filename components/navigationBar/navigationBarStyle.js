import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBar: {
    position: 'relative',
    width: '1280px',
    height: '62px',
    margin: '48px auto',
    background: 'transparent',
  },

  toolBar: {
    width: '100%',
    margin: '0 auto',
    background: 'rgba(18, 6, 33, 0.25)',
    backdropFilter: 'blur(50px)',
    borderRadius: '654654px',
  },

  logo: {
    marginTop: '3px',
    marginLeft: '20px',
  },

  centerElements: {
    marginLeft: 'auto',
    '& ul': {
      '& li': {
        fontFamily: 'Syne',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '14px',
        lineHeight: '200%',
        display: 'inline-block',
        paddingLeft: '48px',
        '& a': {
          color: '#FFFFFF',
          transition: 'color .5s',
          '&:hover': {
            color: '#dddddd',
          },
        },
      },
      '& li:nth-child(1)': {
        paddingLeft: '0px',
      },
    },
  },

  rightElements: {
    marginLeft: 'auto',
    marginRight: '20px',
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

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    appBar: {
      width: '90%',
    },
  },

  //500px
  ['@media (max-width: 500px)']: {
    //Responsive navigation button
    logo: {
      width: '120px',
      height: 'auto',
      marginTop: '3px',
      marginLeft: '20px',
    },
  },

  //400px
  ['@media (max-width: 400px)']: {
    rightElements: {
      marginRight: '10px',
    },

    logo: {
      marginLeft: '10px',
    },
  },

  //370px
  ['@media (max-width: 370px)']: {
    rightElements: {
      marginRight: '0px',
      marginLeft: '-15px',
      '& ul': {
        '& li': {
          display: 'inline-block',
          paddingLeft: '10px',
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

    logo: {
      marginLeft: '0px',
    },
  },
});

export default useStyles;
