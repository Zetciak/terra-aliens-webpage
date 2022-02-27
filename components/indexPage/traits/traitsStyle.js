import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    marginTop: '70px',
    width: '1294px',
    margin: '0 auto',
    //background: 'yellow',
  },

  topSection: {
    width: '100%',
    minHeight: '72px',
    marginBottom: '14px',
  },

  mobileDiv: {
    display: 'none',
  },

  oneSection: {
    width: '202px',
    height: '256px',
  },

  lastSection: {
    width: '5px',
    height: '256px',
  },

  artDiv: {
    width: '202px',
    height: '202px',
  },

  bottomSection: {
    width: '100%',
    maxHeight: '374px',
    'mix-blend-mode': 'luminosity',
  },

  topSectionTitle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '150%',
    color: '#ffffff',
    float: 'left',
  },

  mobileTitle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '25px',
    lineHeight: '150%',
    color: '#ffffff',
    marginBottom: '30px',
    width: '100%',
    textAlign: 'center',
  },

  traitTitleText: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '150%',
    color: '#ffffff',
    marginBottom: '30px',
    width: '100%',
    textAlign: 'center',
    marginTop: '5px',
  },

  traitTitle: {
    width: '202px',
    height: '54px',
  },

  traitsList: {
    float: 'right',
    '& ul': {
      '& li': {
        display: 'inline-block',
        paddingLeft: '64px',
        paddingTop: '7px',
        fontFamily: 'Syne',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '24px',
        lineHeight: '150%',
        color: '#ffffff',
      },
      '& li:nth-child(1)': {
        paddingLeft: '0px',
      },
    },
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale
  //1440px
  ['@media (max-width: 1440px)']: {
    mainDiv: {
      marginTop: '70px',
      margin: '0 auto',
      marginLeft: '66px',
      marginRight: '65px',
    },
  },

  //1439px
  ['@media (max-width: 1439px)']: {
    mainDiv: {
      width: '90%',
      margin: '0 auto',
      marginTop: '70px',
    },
  },

  //1155px
  ['@media (max-width: 1155px)']: {
    topSectionTitle: {
      paddingTop: '10px',
      fontSize: '38px',
    },

    traitsList: {
      '& ul': {
        '& li': {
          paddingTop: '14px',
          paddingLeft: '64px',
          fontSize: '20px',
        },
        '& li:nth-child(1)': {
          paddingLeft: '0px',
        },
      },
    },
  },

  //970px
  ['@media (max-width: 970px)']: {
    traitsList: {
      '& ul': {
        '& li': {
          paddingLeft: '45px',
        },
        '& li:nth-child(1)': {
          paddingLeft: '0px',
        },
      },
    },
  },

  //855px
  ['@media (max-width: 855px)']: {
    topSectionTitle: {
      paddingTop: '18px',
      fontSize: '32px',
    },

    traitsList: {
      '& ul': {
        '& li': {
          paddingTop: '19px',
          paddingLeft: '30px',
          fontSize: '17px',
        },
        '& li:nth-child(1)': {
          paddingLeft: '0px',
        },
      },
    },

    topSection: {
      marginBottom: '8px',
    },
  },

  //690px
  ['@media (max-width: 690px)']: {
    topSectionTitle: {
      paddingTop: '23px',
      fontSize: '25px',
    },

    traitsList: {
      '& ul': {
        '& li': {
          paddingTop: '19px',
          paddingLeft: '30px',
          fontSize: '12px',
        },
        '& li:nth-child(1)': {
          paddingLeft: '0px',
        },
      },
    },

    topSection: {
      marginBottom: '8px',
    },
  },

  //570px
  ['@media (max-width: 690px)']: {
    topSectionTitle: {
      width: '100%',
      textAlign: 'center',
      float: 'none',
      paddingTop: '23px',
      fontSize: '25px',
      marginBottom: '-20px',
    },

    traitsList: {
      width: '100%',
      textAlign: 'center',
      marginLeft: '-5%',
      float: 'none',
      '& ul': {
        '& li': {
          paddingTop: '19px',
          paddingLeft: '30px',
          fontSize: '12px',
        },
        '& li:nth-child(1)': {
          paddingLeft: '0px',
        },
      },
    },

    topSection: {
      marginBottom: '8px',
    },
  },

  //450px
  ['@media (max-width: 450px)']: {
    topSection: {
      display: 'none',
    },

    bottomSection: {
      display: 'none',
    },

    mobileDiv: {
      display: 'block',
    },
  },

  //440px
  ['@media (max-width: 440px)']: {
    topSectionTitle: {
      fontSize: '20px',
    },

    mobileTitle: {
      fontSize: '20px',
    },

    traitTitleText: {
      fontSize: '16px',
    },
  },
});

export default useStyles;
