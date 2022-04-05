//Imports
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Image from 'next/image';
import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

//Images
import logo from '../../public/images/navLogo.svg';
import rightDiscord from '../../public/images/rightDiscord.svg';
import rightMedium from '../../public/images/rightMedium.svg';
import rightTwitter from '../../public/images/rightTwitter.svg';

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
						<Image
							src={logo}
							alt="Logo"
							title=""
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
						/>
					</div>
					{screenW >= 1100 && (
						<>
							<div className={classes.centerElements}>
								<ul>
									<li onClick={changeNavVisible}>
										<Link to="aboutUsScroll" smooth={true}>
											About us
										</Link>
									</li>
									<li onClick={changeNavVisible}>
										<Link to="artsScroll" smooth={true}>
											Aliens
										</Link>
									</li>
									<li onClick={changeNavVisible}>
										<Link to="traitsScroll" smooth={true}>
											Our Traits
										</Link>
									</li>
									<li onClick={changeNavVisible}>
										<Link to="roadMapScroll" smooth={true}>
											Roadmap
										</Link>
									</li>
									<li onClick={changeNavVisible}>
										<Link to="faqScroll" smooth={true}>
											FAQ
										</Link>
									</li>
								</ul>
							</div>
						</>
					)}
					<div className={classes.rightElements}>
						<ul>
							<li onClick={changeNavVisible}>
								<a
									href="https://discord.gg/terraaliens"
									target="_blank"
									rel="noreferrer"
								>
									<div
										className={classes.rightElementsElement}
									>
										<Image
											src={rightDiscord}
											alt="Discord"
											width="100%"
											height="100%"
										/>
									</div>
								</a>
							</li>
							<li onClick={changeNavVisible}>
								<a
									href="https://twitter.com/TerraAliensNFT"
									target="_blank"
									rel="noreferrer"
								>
									<div
										className={classes.rightElementsElement}
									>
										<Image
											src={rightTwitter}
											alt="Twitter"
											width="100%"
											height="100%"
										/>
									</div>
								</a>
							</li>
							<li onClick={changeNavVisible}>
								<a
									href="https://medium.com/@terraaliens"
									target="_blank"
									rel="noreferrer"
								>
									<div
										className={classes.rightElementsElement}
									>
										<Image
											src={rightMedium}
											alt="Medium"
											width="100%"
											height="100%"
										/>
									</div>
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
