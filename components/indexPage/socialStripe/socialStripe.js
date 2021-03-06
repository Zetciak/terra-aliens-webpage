//Imports
import { Typography, Button } from '@material-ui/core';
import Image from 'next/image';

//Images
import discord from '../../../public/images/stripeDiscord.svg';
import twitter from '../../../public/images/stripeTwitter.svg';
import medium from '../../../public/images/stripeMedium.svg';

//CSS
import useStyles from './socialStripeStyle';

//Script
function SocialStripe() {
	//Style
	const classes = useStyles();

	return (
		<div className={classes.mainDiv}>
			<div className={classes.centerDiv}>
				<div className={classes.leftSection}>
					<Typography className={classes.leftSectionTitle}>
						Check our galaxy community
					</Typography>
				</div>
				<div className={classes.rightSection}>
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
	);
}

export default SocialStripe;
