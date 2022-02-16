//Imports
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

//Images
import logo from '../../asset/images/navLogo.svg';
import rightDiscord from '../../asset/images/rightDiscord.svg';
import rightInstagram from '../../asset/images/rightInstagram.svg';
import rightTwitter from '../../asset/images/rightTwitter.svg';

//Icons
import MenuIcon from '@material-ui/icons/MenuRounded';

//CSS
import useStyles from './navigationBarStyle';

//Script
function NavigationBar() {
  //Style
  const classes = useStyles();

  //Nav responsive
  const [showNav, setNavVisible] = useState(false);
  const [screenW, setScreenW] = useState(window.innerWidth);

  function changeNavVisible() {
    setNavVisible(!showNav);
  }

  useEffect(() => {
    function changeWidth() {
      setScreenW(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <>
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.logo}>
            <Image src={logo} alt="Logo" />
          </div>
          {screenW >= 1000 && (
            <>
              <div className={classes.centerElements}>
                <ul>
                  <li onClick={changeNavVisible}>
                    <Link href="#">About us</Link>
                  </li>
                  <li onClick={changeNavVisible}>
                    <Link href="#">Aliens</Link>
                  </li>
                  <li onClick={changeNavVisible}>
                    <Link href="#">Story</Link>
                  </li>
                  <li onClick={changeNavVisible}>
                    <Link href="#">Wishlist</Link>
                  </li>
                  <li onClick={changeNavVisible}>
                    <Link href="#">Roadmap</Link>
                  </li>
                </ul>
              </div>
            </>
          )}
          <div className={classes.rightElements}>
            <ul>
              <li onClick={changeNavVisible}>
                <a href="https://google.com">
                  <Image
                    src={rightDiscord}
                    alt="Discord"
                    className={classes.rightElementsElement}
                  />
                </a>
              </li>
              <li onClick={changeNavVisible}>
                <a href="https://google.com">
                  <Image
                    src={rightTwitter}
                    alt="Twitter"
                    className={classes.rightElementsElement}
                  />
                </a>
              </li>
              <li onClick={changeNavVisible}>
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
    </>
  );
}

export default NavigationBar;
