import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  mainDiv: {
    marginTop: '100px',
    width: '100%',
  },

  phaseTitle: {
    width: '150%',
  },

  titleDiv: {
    width: '1294px',
    margin: '0 auto',
    marginTop: '75px',
    marginBottom: '30px',
  },

  roadMapDiv: {
    width: '1440px',
    margin: '0 auto',
  },

  titleTypography: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '150%',
    color: '#ffffff',
  },

  hiddenSlide1: {
    display: 'none',
    width: '50px',
    marginRight: '0px',
  },

  hiddenSlide2: {
    display: 'none',
    width: '50px',
    marginRight: '0px',
  },

  hiddenSlide3: {
    display: 'none',
    width: '50px',
    marginRight: '0px',
  },

  hiddenSlide4: {
    display: 'none',
    width: '50px',
    marginRight: '0px',
  },

  hiddenSlide5: {
    display: 'none',
    width: '50px',
    marginRight: '0px',
  },

  oneSection: {
    width: '480px',
    height: '617px',
  },

  actualPhase: {
    position: 'absolute',
    background: 'url(https://i.imgur.com/FcDZWW9.png)',
    backgroundSize: 'cover',
    width: '32px',
    height: '32px',
    top: '484px',
    left: '213px',
  },

  firstSection: {
    marginTop: '93px',
  },

  firstSectionBackground: {
    position: 'absolute',
    background: 'url(https://i.imgur.com/qlBXtuJ.png)',
    backgroundSize: 'cover',
    width: '260px',
    height: '522px',
    top: '82px',
    left: '187px',
    'z-index': '-1',
  },

  firstSectionStripe: {
    position: 'absolute',
    background: 'url(https://i.imgur.com/G0rdRMY.png)',
    backgroundSize: 'cover',
    width: '540px',
    height: '210px',
    top: '395px',
    left: '-70px',
  },

  secondSection: {
    marginTop: '13px',
  },

  secondSectionBackground: {
    position: 'absolute',
    background: 'url(https://i.imgur.com/EmMD4Bg.png)',
    backgroundSize: 'cover',
    width: '260px',
    height: '522px',
    top: '2px',
    left: '137px',
    'z-index': '-1',
  },

  secondSectionStripe: {
    position: 'absolute',
    background: 'url(https://i.imgur.com/Tvuan9b.png)',
    backgroundSize: 'cover',
    width: '540px',
    height: '210px',
    top: '394px',
    left: '-88px',
  },

  thirdSection: {
    marginTop: '43px',
  },

  thirdSectionBackground: {
    position: 'absolute',
    background: 'url(https://i.imgur.com/ihfmOvJ.png)',
    backgroundSize: 'cover',
    width: '260px',
    height: '522px',
    top: '32px',
    left: '137px',
    'z-index': '-1',
    opacity: '0.8',
  },

  thirdSectionStripe: {
    position: 'absolute',
    background: 'url(https://i.imgur.com/4NVqmFM.png)',
    backgroundSize: 'cover',
    width: '540px',
    height: '210px',
    top: '394px',
    left: '-102px',
  },

  descText: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '200%',
    color: '#ffffff',
    opacity: '0.6',
  },

  descTextWidth: {
    width: '397px',
  },

  descTextWidth2: {
    width: '327px',
  },

  bottomDesc: {
    marginTop: '40px',
  },

  listLi: {
    color: 'white',
  },

  floatLeft: {
    float: 'left',
  },

  descTitleSquare: {
    width: '2px',
    height: '14px',
    background: 'white',
    marginTop: '8px',
    marginLeft: '16px',
    marginRight: '16px',
    opacity: '0.6',
  },

  activePhase: {
    opacity: '1.0',
  },

  //<<<<<<<<<<<<<<<<<<<< Responsive scale

  //1500px
  ['@media (max-width: 1500px)']: {
    roadMapDiv: {
      marginLeft: '30px',
    },
  },

  //1440px
  ['@media (max-width: 1440px)']: {
    titleDiv: {
      marginLeft: '66px',
      marginRight: '65px',
      marginTop: '75px',
    },

    roadMapDiv: {
      width: '100%',
    },

    secondSectionStripe: {
      top: '391px',
      left: '-89px',
    },

    thirdSectionStripe: {
      top: '391px',
      left: '-97px',
    },
  },

  //1439px
  ['@media (max-width: 1439px)']: {
    titleDiv: {
      width: '90%',
      margin: '0 auto',
      marginTop: '75px',
    },

    actualPhase: {
      display: 'none',
    },

    firstSectionStripe: {
      display: 'none',
    },

    secondSectionStripe: {
      display: 'none',
    },

    thirdSectionStripe: {
      display: 'none',
    },

    firstSection: {
      marginTop: '30px',
    },

    firstSectionBackground: {
      top: '22px',
    },

    secondSection: {
      marginTop: '30px',
    },

    secondSectionBackground: {
      top: '22px',
    },

    thirdSection: {
      marginTop: '30px',
      marginLeft: '-50px',
    },

    thirdSectionBackground: {
      top: '22px',
      marginLeft: '-50px',
    },

    oneSection: {
      height: '530px',
    },
  },

  //1300px
  ['@media (max-width: 1300px)']: {
    oneSection: {
      marginRight: '50px',
    },
  },

  //1155px
  ['@media (max-width: 1155px)']: {
    titleTypography: {
      fontSize: '38px',
    },

    oneSection: {
      marginRight: '150px',
    },

    hiddenSlide1: {
      display: 'block',
    },
  },

  //900px
  ['@media (max-width: 900px)']: {
    oneSection: {
      marginRight: '250px',
    },

    hiddenSlide2: {
      display: 'block',
    },
  },

  //855px
  ['@media (max-width: 855px)']: {
    titleTypography: {
      fontSize: '32px',
    },
  },

  //690px
  ['@media (max-width: 690px)']: {
    titleTypography: {
      fontSize: '25px',
    },
  },

  //650px
  ['@media (max-width: 650px)']: {
    oneSection: {
      marginRight: '350px',
    },

    hiddenSlide3: {
      display: 'block',
    },
  },

  //600px
  ['@media (max-width: 650px)']: {
    firstSectionBackground: {
      left: '107px',
    },

    secondSectionBackground: {
      left: '107px',
    },

    thirdSectionBackground: {
      left: '107px',
      marginLeft: '0px',
    },

    thirdSection: {
      marginLeft: '0px',
    },

    oneSection: {
      marginRight: '200px',
    },
  },

  //530px
  ['@media (max-width: 530px)']: {
    firstSectionBackground: {
      left: '57px',
    },

    secondSectionBackground: {
      left: '57px',
    },

    thirdSectionBackground: {
      left: '57px',
      marginLeft: '0px',
    },

    descText: {
      fontSize: '13px',
    },

    descTextWidth: {
      width: '327px',
    },

    descTextWidth2: {
      width: '257px',
    },

    oneSection: {
      height: '550px',
      marginRight: '220px',
    },

    hiddenSlide4: {
      display: 'block',
    },
  },

  //450px
  ['@media (max-width: 450px)']: {
    titleTypography: {
      width: '100%',
      textAlign: 'center',
      marginBottom: '20px',
    },
  },

  //440px
  ['@media (max-width: 440px)']: {
    titleTypography: {
      fontSize: '20px',
    },
  },

  //425px
  ['@media (max-width: 425px)']: {
    descTitleSquare: {
      marginLeft: '12px',
      marginRight: '12px',
    },
  },

  //400px
  ['@media (max-width: 400px)']: {
    oneSection: {
      height: '570px',
      marginRight: '200px',
    },

    hiddenSlide5: {
      display: 'block',
    },

    roadMapDiv: {
      marginLeft: '20px',
    },
  },

  //350px
  ['@media (max-width: 350px)']: {
    firstSectionBackground: {
      left: '10px',
    },

    secondSectionBackground: {
      left: '10px',
    },

    thirdSectionBackground: {
      left: '10px',
    },
  },
});

export default useStyles;
