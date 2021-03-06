//Imports
import Image from 'next/image';
import { Typography } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';

// Images
import rightDiscord from '../../../public/images/rightDiscord.svg';
import rightMedium from '../../../public/images/rightMedium.svg';
import rightTwitter from '../../../public/images/rightTwitter.svg';

//CSS
import useStyles from './roadmapStyle';

//Script
function Roadmap() {
	//Timer
	const [timerDays, setTimerDays] = useState();
	const [timerHours, setTimerHours] = useState();
	const [timerMinutes, setTimerMinutes] = useState();
	const [timerSeconds, setTimerSeconds] = useState();

	let interval;

	const startTimer = () => {
		const countDownDate = new Date('April 7, 2022 23:59:59').getTime();

		interval = setInterval(() => {
			const now = new Date().getTime();

			const distance = countDownDate - now;

			const days = Math.floor(distance / (24 * 60 * 60 * 1000));
			const hours = Math.floor(
				(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor(
				(distance % (60 * 60 * 1000)) / (1000 * 60)
			);
			const seconds = Math.floor((distance % (60 * 1000)) / 1000);

			if (distance < 0) {
				// Stop timer
				clearInterval(interval.current);
			} else {
				// Update timer
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		});
	};

	useEffect(() => {
		startTimer();
	});

	//Style
	const classes = useStyles();

	//Variables
	// Phases elements
	const phases = new Array();
	phases[0] = new Array();
	/*
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
	*/

	phases[0][0] = 'Never gonna give you up';
	phases[0][1] = 'Never gonna let you down';
	phases[0][2] = 'Never gonna run around and desert you';
	phases[0][3] = 'Never gonna make you cry';
	phases[0][4] = 'Never gonna let you down';
	phases[0][5] = 'Never gonna give you up';

	phases[1] = new Array();
	phases[1][0] = 'Never gonna give you up';
	phases[1][1] = 'Never gonna let you down';
	phases[1][2] = 'Never gonna run around and desert you';
	phases[1][3] = 'Never gonna make you cry';
	phases[1][4] = 'Never gonna give you up';
	phases[1][5] = 'Never gonna let you down';
	phases[1][6] = 'Never gonna make you cry';
	phases[1][7] = 'Never gonna give you up';
	phases[1][8] = 'Never gonna let you down';
	phases[1][9] = 'Never gonna make you cry';
	phases[1][10] = 'Never gonna give you up';
	phases[1][11] = 'Never gonna let you down';

	phases[2] = new Array();
	phases[2][0] = 'Never gonna give you up';
	phases[2][1] = 'Never gonna let you down';
	phases[2][2] = 'Never gonna run around and desert you';
	phases[2][3] = 'Never gonna make you cry';
	phases[2][4] = 'Never gonna give you up';
	phases[2][5] = 'Never gonna let you down';
	phases[2][6] = 'Never gonna make you cry';
	phases[2][7] = 'Never gonna give you up';
	phases[2][8] = 'Never gonna let you down';

	phases[3] = new Array();
	phases[3][0] = 'Never gonna let you down';
	phases[3][1] = 'Never gonna run around and desert you';
	phases[3][2] = 'Never gonna make you cry';
	phases[3][3] = 'Never gonna give you up';

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
					Road Map - soon!
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
					style={{ 'pointer-events': 'none' }}
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
			<div className={classes.counterDiv} style={{ display: 'none' }}>
				<Typography className={classes.counterTitleTypography}>
					Road map in:
				</Typography>
				<div className={classes.counterBgDiv}>
					<div className={classes.dayDiv}>
						<Typography className={classes.counterDescTypography}>
							{timerDays}
						</Typography>
						<Typography className={classes.counterDescTypography}>
							Days
						</Typography>
					</div>
					<div className={classes.hourDiv}>
						<Typography className={classes.counterDescTypography}>
							{timerHours}
						</Typography>
						<Typography className={classes.counterDescTypography}>
							Hours
						</Typography>
					</div>
					<div className={classes.minuteDiv}>
						<Typography className={classes.counterDescTypography}>
							{timerMinutes}
						</Typography>
						<Typography className={classes.counterDescTypography}>
							Minutes
						</Typography>
					</div>
					<div className={classes.secondDiv}>
						<Typography className={classes.counterDescTypography}>
							{timerSeconds}
						</Typography>
						<Typography className={classes.counterDescTypography}>
							Seconds
						</Typography>
					</div>
				</div>
				<div className={classes.rightElements}>
					<ul>
						<li>
							<a
								href="https://discord.gg/terraaliens"
								target="_blank"
								rel="noreferrer"
							>
								<div className={classes.rightElementsElement}>
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
								<div className={classes.rightElementsElement}>
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
								<div className={classes.rightElementsElement}>
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
			</div>
		</div>
	);
}

export default Roadmap;
