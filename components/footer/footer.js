//Imports
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Image from 'next/image';

//Images
import logo from '../../public/images/fotLogo.svg';
import rightDiscord from '../../public/images/rightDiscord.svg';
import rightInstagram from '../../public/images/rightInstagram.svg';
import rightTwitter from '../../public/images/rightTwitter.svg';

//CSS
import useStyles from './footerStyle';

//Script
function Footer() {
  //Style
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.logo}>
            <Image src={logo} alt="Logo" />
          </div>
          <div className={classes.centerElements}>
            <Typography className={classes.centerTypography}>
              @TERRAALIENS2022
            </Typography>
          </div>
          <div className={classes.rightElements}>
            <ul>
              <li>
                <a href="https://google.com">
                  <Image
                    src={rightDiscord}
                    alt="Discord"
                    className={classes.rightElementsElement}
                  />
                </a>
              </li>
              <li>
                <a href="https://google.com">
                  <Image
                    src={rightTwitter}
                    alt="Twitter"
                    className={classes.rightElementsElement}
                  />
                </a>
              </li>
              <li>
                <a href="https://google.com">
                  <Image
                    src={rightInstagram}
                    alt="Instagram"
                    className={classes.rightElementsElement}
                  />
                </a>
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.copyRight}>
        <Typography className={classes.centerTypography}>
          @TERRAALIENS2022
        </Typography>
      </div>
    </>
  );
}

export default Footer;
