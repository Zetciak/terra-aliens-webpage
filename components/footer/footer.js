//Imports
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Image from 'next/image';

//Images
import logo from '../../public/images/fotLogo.svg';
import rightDiscord from '../../public/images/rightDiscord.svg';
import rightMedium from '../../public/images/rightMedium.svg';
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
					<div className={classes.copy}>
						<Typography className={classes.leftTypography}>
							@TERRAALIENS2022
						</Typography>
					</div>
					<div className={classes.centerElements}>
						<Typography className={classes.centerTypography}>
							<a
								href="https://drive.google.com/drive/folders/1JOAXDTrx8tJK4CBUs1JoLIVjM9k648qL"
								target="_blank"
								rel="noreferrer"
							>
								Download Terra Aliens Branding
							</a>
						</Typography>
					</div>
					<div className={classes.rightElements}>
						<ul>
							<li>
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
							<li>
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
							<li>
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
			<div className={classes.copyRight}>
				<div className={classes.copyRight2}>
					<Typography className={classes.leftTypography}>
						@TERRAALIENS2022
					</Typography>
				</div>
				<Typography className={classes.centerTypography}>
					<a
						href="https://drive.google.com/drive/folders/1JOAXDTrx8tJK4CBUs1JoLIVjM9k648qL"
						target="_blank"
						rel="noreferrer"
					>
						Download Terra Aliens Branding
					</a>
				</Typography>
			</div>
		</>
	);
}

export default Footer;
