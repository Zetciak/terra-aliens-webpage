//Imports
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import Image from 'next/image';

//Icons
import ArrowIcon from '@material-ui/icons/ArrowForwardIos';

//Images
//import closedMark from '../../../public/images/closedMark.png';
//import openMark from '../../../public/images/openMark.png';

//CSS
import useStyles from './faqStyle';

const StyledAccordion = withStyles({
	root: {
		background: 'url(https://i.imgur.com/0v7YU1P.png)',
		transition: 'all .5s',
		minHeight: '84px',
		borderBottom: '1px solid #A799FD',
		backgroundSize: 'cover',
		opacity: '1',

		'&$expanded': {
			margin: '0px',
			background: 'url(https://i.imgur.com/BBWl5CD.png)',
			backgroundSize: 'cover',
			minHeight: '0px',
			paddingBottom: '10px',
			opacity: '1',

			'&:hover': {
				opacity: '0.95',
			},
		},

		//460px
		['@media (max-width: 460px)']: {
			minHeight: '75px',
		},

		'&:hover': {
			opacity: '0.8',
		},
	},

	expanded: {},
})(Accordion);

//Script
function Faq() {
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const data = [
		{
			id: 'faq11',
			title: 'What is Terra Aliens?',
			desc: 'Terra Aliens are a collection of unique NFTs built on the Terra blockchain with a strong focus on utility and partnerships.',
		},
		{
			id: 'faq22',
			title: 'Mint. When and where?',
			desc: 'The mint will be held on the 2nd of May on Luart. The Terra Aliens project will have 1.5x LUA Power Multiplier for Minters and 2x LUA Power for Marketplace. LUA Power is the reward point system for the Luart platform. LUA Power is used for the gamification of the site and a way for users to receive revenue sharing airdrops, NFT boxes and whitelist access to partnered projects. By receiving LUA Power, Aliens will be able to reap additional benefits for engaging with the project on the launchpad and marketplace, giving increased rewards to LUNAtics who engage with the project. Driving increased value accrual towards incentivizing our community.',
		},
		{
			id: 'faq33',
			title: 'How to contact the team?',
			desc: 'You can always chat with us at our Discord server! \nAlso, you can find us on Twitter ',
		},
		{
			id: 'faq44',
			title: 'How is the rarity of my NFT determined?',
			desc: 'The rarity will be determined by the combination of traits your Alien has. The utility might differ depending on the traits as well.',
		},
		{
			id: 'faq55',
			title: 'Will there be more than one collection?',
			desc: 'Yes! More details on that will be revealed at the right time…',
		},
		{
			id: 'faq66',
			title: 'How can I get WL? Is there any chance to get it?',
			desc: 'Whitelist opportunities will be available for all to take part in. Join our Discord or follow us on Twitter to stay up to date on the various contests and giveaways that we will be having during the build up to our launch.',
		},
		{
			id: 'faq77',
			title: 'What is the Treasury?',
			desc: 'The Treasury will be funded by 100% of our secondary sales and a portion of the mint revenue. The wallet will be actively managed by the Terra Aliens team and the funding will be used to invest in yield assets and NFT projects on Terra in our aim to give back to the entire community. The purpose of the wallet is to ultimately drive higher demand and increase the floor price of Terra Aliens, while also helping to support the overall Terra NFT ecosystem. Individual stages will be revealed soon, along with explanations and percentages. The DAO will be able to vote on proposals to utilize the treasury for the development and future roadmap of Terra Aliens.',
		},
		{
			id: 'faq88',
			title: 'Supply? Price? How much does it cost?',
			desc: 'The supply and price will be disclosed at a closer date to the mint. We at Terra Aliens want to focus on community development and showcasing our roadmap plans without being overshadowed by quantitative figures that can indirectly shape first impressions of the project. We want you to learn about us and the project, just as how we want to show you what we are all about. Rest assured, we have the community firmly in our minds when it comes to pricing and supply structure. Details of the mint supply and price will be disclosed closer to mint (towards the end of April). Whitelist address collections will commence close to mint date to ensure only interested parties submit their wallets, to avoid falsified demand and false impetus on true community engagement within the project.',
		},
	];

	//Style
	const classes = useStyles();

	return (
		<div className={classes.mainDiv} id="faqScroll">
			<div className={classes.mainTitle}>
				<Typography className={classes.mainTitleTypography}>
					FAQ
				</Typography>
			</div>
			{data.map((accordion) => {
				const { id, title, desc } = accordion;
				return (
					<StyledAccordion
						expanded={expanded === id}
						key={id}
						onChange={handleChange(id)}
						square
					>
						<AccordionSummary
							className={classes.panelSummary}
							/*expandIcon={
                expanded ? (
                  <div className={classes.rightCornerIcon}>
                    <Image src={openMark} alt="X" />
                  </div>
                ) : (
                  <div className={classes.rightCornerIcon}>
                    <Image src={closedMark} alt="+" />
                  </div>
                )
              }*/
						>
							<Typography className={classes.title}>
								{title}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{id == 'faq33' ? (
								<Typography className={classes.desc}>
									{desc}
									<a
										href="https://twitter.com/TerraAliensNFT"
										target="_blank"
										rel="noreferrer"
										className={classes.discordHref}
									>
										@TerraAliensNFT
									</a>
								</Typography>
							) : (
								<Typography className={classes.desc}>
									{desc}
								</Typography>
							)}
						</AccordionDetails>
					</StyledAccordion>
				);
			})}
		</div>
	);
}

export default Faq;
