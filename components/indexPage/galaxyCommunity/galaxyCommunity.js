//Imports
import { Typography, Button } from '@material-ui/core';
import Image from 'next/image';

//Images
import bottomImage from '../../../public/images/bottomImage.png';
import discord from '../../../public/images/stripeDiscord.svg';
import twitter from '../../../public/images/stripeTwitter.svg';
import medium from '../../../public/images/stripeMedium.svg';

//CSS
import useStyles from './galaxyCommunityStyle';

//Script
function GalaxyCommunity() {
	//Style
	const classes = useStyles();

	return (
		<>
			<div className={classes.mainDiv}>
				<div className={classes.bgDiv}></div>
				<div className={classes.centerDiv}>
					<div className={classes.imageDiv}>
						<Image src={bottomImage} alt="" />
					</div>
					<div className={classes.buttonsDiv}>
						<Typography className={classes.socialsTitle}>
							Check our galaxy community
						</Typography>
						<div className={classes.buttons}>
							<Button
								variant="contained"
								className={classes.rightSectionBtn}
								href="https://discord.gg/terraaliens"
								target="_blank"
							>
								<div className={classes.rightSectionBtnIconDc}>
									<Image src={discord} alt="" />
								</div>
								<Typography>Discord</Typography>
							</Button>
							<Button
								variant="contained"
								className={classes.rightSectionBtn}
								href="https://twitter.com/TerraAliensNFT"
								target="_blank"
							>
								<div className={classes.rightSectionBtnIconTwt}>
									<Image src={twitter} alt="" />
								</div>
								<Typography className={classes.twitterUpper}>
									Twitter
								</Typography>
							</Button>
							<Button
								variant="contained"
								className={classes.rightSectionBtn}
								href="https://medium.com/@terraaliens"
								target="_blank"
							>
								<div className={classes.rightSectionBtnIconMed}>
									<Image src={medium} alt="" />
								</div>
								<Typography className={classes.mediumUpper}>
									Medium
								</Typography>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.mobileButtons}>
				<Typography className={classes.socialsTitle}>
					Check our galaxy community
				</Typography>
				<div className={classes.buttons}>
					<Button
						variant="contained"
						className={classes.rightSectionBtn}
					>
						<div className={classes.rightSectionBtnIconDc}>
							<Image src={discord} alt="" />
						</div>
						<Typography>Discord</Typography>
					</Button>
					<Button
						variant="contained"
						className={classes.rightSectionBtn}
					>
						<div className={classes.rightSectionBtnIconTwt}>
							<Image src={twitter} alt="" />
						</div>
						<Typography className={classes.twitterUpper}>
							Twitter
						</Typography>
					</Button>
					<Button
						variant="contained"
						className={classes.rightSectionBtn}
					>
						<div className={classes.rightSectionBtnIconMed}>
							<Image src={medium} alt="" />
						</div>
						<Typography className={classes.mediumUpper}>
							Medium
						</Typography>
					</Button>
				</div>
			</div>
		</>
	);
}

export default GalaxyCommunity;
