//Imports
import Image from 'next/image';
import { Typography } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

//CSS
import useStyles from './roadmapStyle';

//Script
function Roadmap() {
	//Style
	const classes = useStyles();

	//Variables
	// Phases elements
	const phases = new Array();
	phases[0] = new Array();
	phases[0][0] = 'Early Community Building';
	phases[0][1] = 'NFT and Roadmap Reveal';
	phases[0][2] = 'Giveaways and Partnerships';
	phases[0][3] = 'Mint details revealed';
	phases[0][4] = 'Beta Market reveal for future holders';
	phases[0][5] = 'Differences';

	phases[1] = new Array();
	phases[1][0] = 'Introduction of the holders benefits';
	phases[1][1] = 'The Mint goes live';
	phases[1][2] = 'Discord game announcement';
	phases[1][3] = 'Merch reveal in market';
	phases[1][4] = 'NFT staking';
	phases[1][5] = 'Rarity calculator';
	phases[1][6] = 'DAO Announcement';
	phases[1][7] = 'Hodlers ranks';
	phases[1][8] = 'Sales tracker';
	phases[1][9] = 'Whale tracker';

	phases[2] = new Array();
	phases[2][0] = 'Rare NFT benefits revealed';
	phases[2][1] = 'DAO - formation including royalties sharing';
	phases[2][2] = 'Charity Donation';
	phases[2][3] = 'Collabs with other projects that will benefit our holders';
	phases[2][4] = 'Open market for top hodlers';
	phases[2][5] = 'Additional upgrades for the Aliens';
	phases[2][6] = 'Treasury for the future development';
	phases[2][7] = 'Floor sweeper';
	phases[2][8] = 'Traits floor';
	phases[2][9] = 'DAO - Polishing event';
	phases[2][10] = 'Terra Aliens families reunification';
	phases[2][11] = 'Role select for the Aliens';
	phases[2][12] = 'Build galactic economy';

	phases[3] = new Array();
	phases[3][0] = 'Planet details';
	phases[3][1] = 'Beta acces to Terra Aliens metaverse';
	phases[3][2] = 'DAO - Incoming force reborn';
	phases[3][3] = 'Materialization';
	phases[3][4] = 'Aliens reborn';

	let phase1 = [];
	let phase2 = [];
	let phase3 = [];
	let phase4 = [];

	for (let i = 0; i < phases[0].length; i++) {
		phase1.push(
			<div key={i}>
				<li className={classes.listLi}>
					<Typography
						className={`${classes.phaseDescTypo} swiper-no-swiping`}
					>
						{phases[0][i]}
					</Typography>
				</li>
			</div>
		);
	}

	for (let i = 0; i < phases[1].length; i++) {
		phase2.push(
			<div key={i}>
				<li className={classes.listLi}>
					<Typography
						className={`${classes.phaseDescTypo} swiper-no-swiping`}
					>
						{phases[1][i]}
					</Typography>
				</li>
			</div>
		);
	}

	for (let i = 0; i < phases[2].length; i++) {
		phase3.push(
			<div key={i}>
				<li className={classes.listLi}>
					<Typography
						className={`${classes.phaseDescTypo} swiper-no-swiping`}
					>
						{phases[2][i]}
					</Typography>
				</li>
			</div>
		);
	}

	for (let i = 0; i < phases[3].length; i++) {
		phase4.push(
			<div key={i}>
				<li className={classes.listLi}>
					<Typography
						className={`${classes.phaseDescTypo} swiper-no-swiping`}
					>
						{phases[3][i]}
					</Typography>
				</li>
			</div>
		);
	}

	return (
		<div className={classes.mainDiv} id="roadMapScroll">
			<div className={classes.titleDiv}>
				<Typography className={classes.titleTypography}>
					Road Map
				</Typography>
			</div>
			<div className={classes.desktopRoadMap}>
				<div className={classes.desktopRoadMapStripe}>
					<div className={classes.desktopRoadMapStripeFill}></div>
				</div>
				<div className={classes.desktopRoadMapFirstSection}>
					<div className={classes.desktopRoadMapCircleFill}></div>
					<div className={classes.phaseTitle}>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							PHASE 1
						</Typography>
						<div className={classes.phaseTitleBlock}></div>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							Gathering
						</Typography>
						<div className={classes.phaseTitleBlock}></div>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							Q1
						</Typography>
					</div>
					<ul className={classes.phaseDesc}>{phase1}</ul>
				</div>
				<div className={classes.desktopRoadMapSecondSection}>
					<div className={classes.desktopRoadMapCircle}></div>
					<div className={classes.phaseTitle}>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							PHASE 2
						</Typography>
						<div className={classes.phaseTitleBlock}></div>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							Identities
						</Typography>
						<div className={classes.phaseTitleBlock}></div>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							Q2
						</Typography>
					</div>
					<ul className={classes.phaseDesc}>{phase2}</ul>
				</div>
				<div className={classes.desktopRoadMapThirdSection}>
					<div className={classes.desktopRoadMapCircle}></div>
					<div className={classes.phaseTitle}>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							PHASE 3
						</Typography>
						<div className={classes.phaseTitleBlock}></div>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							Invasion
						</Typography>
						<div className={classes.phaseTitleBlock}></div>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							Q2
						</Typography>
					</div>
					<ul className={classes.phaseDesc}>{phase3}</ul>
				</div>
				<div className={classes.desktopRoadMapFourthSection}>
					<div className={classes.desktopRoadMapCircle}></div>
					<div className={classes.phaseTitle}>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							PHASE 4
						</Typography>
						<div className={classes.phaseTitleBlock}></div>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							Identities
						</Typography>
						<div className={classes.phaseTitleBlock}></div>
						<Typography
							className={`${classes.phaseTitleTypo} swiper-no-swiping`}
						>
							Q3
						</Typography>
					</div>
					<ul className={classes.phaseDesc}>{phase4}</ul>
				</div>
			</div>
			<div className={classes.mobileRoadMap}>
				<Swiper
					breakpoints={{
						500: {
							width: 500,
							slidesPerView: 1,
						},

						1000: {
							width: 1000,
							slidesPerView: 2,
						},

						1420: {
							width: 1420,
							slidesPerView: 3,
						},
					}}
					spaceBetween={0}
					className={classes.mobileSlider}
				>
					<SwiperSlide>
						<div className={classes.mobileRoadMapStripe}>
							<div
								className={classes.mobileRoadMapStripeFill}
							></div>
						</div>
						<div className={classes.mobileRoadMapCircleFill}></div>
						<div className={classes.phaseTitle}>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								PHASE 1
							</Typography>
							<div className={classes.phaseTitleBlock}></div>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								Gathering
							</Typography>
							<div className={classes.phaseTitleBlock}></div>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								Q1
							</Typography>
						</div>
						<ul className={classes.phaseDesc}>{phase1}</ul>
					</SwiperSlide>
					<SwiperSlide>
						<div className={classes.mobileRoadMapStripe}></div>
						<div className={classes.mobileRoadMapCircle}></div>
						<div className={classes.phaseTitle}>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								PHASE 2
							</Typography>
							<div className={classes.phaseTitleBlock}></div>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								Identities
							</Typography>
							<div className={classes.phaseTitleBlock}></div>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								Q2
							</Typography>
						</div>
						<ul className={classes.phaseDesc}>{phase2}</ul>
					</SwiperSlide>
					<SwiperSlide>
						<div className={classes.mobileRoadMapStripe}></div>
						<div className={classes.mobileRoadMapCircle}></div>
						<div className={classes.phaseTitle}>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								PHASE 3
							</Typography>
							<div className={classes.phaseTitleBlock}></div>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								Invasion
							</Typography>
							<div className={classes.phaseTitleBlock}></div>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								Q2
							</Typography>
						</div>
						<ul className={classes.phaseDesc}>{phase3}</ul>
					</SwiperSlide>
					<SwiperSlide>
						<div className={classes.mobileRoadMapStripe}></div>
						<div className={classes.mobileRoadMapCircle}></div>
						<div className={classes.phaseTitle}>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								PHASE 4
							</Typography>
							<div className={classes.phaseTitleBlock}></div>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								Identities
							</Typography>
							<div className={classes.phaseTitleBlock}></div>
							<Typography
								className={`${classes.phaseTitleTypo} swiper-no-swiping`}
							>
								Q3
							</Typography>
						</div>
						<ul className={classes.phaseDesc}>{phase4}</ul>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default Roadmap;
