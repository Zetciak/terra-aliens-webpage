//Imports
import { Typography } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper';

//CSS
import useStyles from './roadmapStyleOld';

//Script
function Roadmap() {
	//Style
	const classes = useStyles();

	return (
		<div className={classes.mainDiv} id="roadMapScroll">
			<div className={classes.titleDiv}>
				<Typography className={classes.titleTypography}>
					Road map
				</Typography>
			</div>
			<div className={classes.roadMapDiv}>
				<Swiper
					slidesPerView={3}
					//initialSlide={1}
					spaceBetween={0}
					freeMode={true}
					modules={[FreeMode]}
					className={classes.swiperDiv}
				>
					<SwiperSlide className={classes.oneSection}>
						<div className={classes.firstSection}>
							<div
								className={classes.firstSectionBackground}
							></div>
							<div className={classes.actualPhase}></div>
							<div className={classes.phaseTitle}>
								<Typography
									className={`${classes.descText} ${classes.floatLeft} swiper-no-swiping`}
								>
									PHASE 1
								</Typography>
								<div
									className={`${classes.descTitleSquare} ${classes.floatLeft}`}
								></div>
								<Typography
									className={`${classes.descText} swiper-no-swiping`}
								>
									Gathering
								</Typography>
							</div>
							<Typography
								className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
							>
								Only the Chosen shall ever join our ranks.
								Numerous alliances have already been formed and
								each of them will be announced at the right
								time. You will hear our voice reaching from the
								depths of our Headquarters till the most
								unexplored corners of the Universe. This is
								where we unite.
							</Typography>
							<ul className={classes.bottomDesc}>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										Early Community Building
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										NFT and Roadmap Reveal
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										Giveaways and Partnerships
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										Mint details revealed
									</Typography>
								</li>
							</ul>
						</div>
					</SwiperSlide>
					<SwiperSlide
						className={`${classes.oneSection} ${classes.secondSlideMove}`}
					>
						<div className={classes.secondSection}>
							<div
								className={classes.secondSectionBackground}
							></div>
							<div className={classes.phaseTitle}>
								<Typography
									className={`${classes.descText} ${classes.floatLeft} swiper-no-swiping`}
								>
									PHASE 2
								</Typography>
								<div
									className={`${classes.descTitleSquare} ${classes.floatLeft}`}
								></div>
								<Typography
									className={`${classes.descText} swiper-no-swiping`}
								>
									Identities
								</Typography>
							</div>
							<Typography
								className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
							>
								The time comes to decide who you want to be.
								Choose wisely. Your old self must be left
								behind. What you have done in the past is of no
								importance, our cards are blank from now on. We
								take the chance to fill them with sensations we
								have never experienced before. Patiently we wait
								with our crystal sabres pulsing out xenon light
								into the infinity. We are ready.
							</Typography>
							<ul className={classes.bottomDesc}>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										First AMA
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										Introduction of the holders benefits
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										The Mint goes live
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										Discord game announcement
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										SpaceGear Drop for holders
									</Typography>
								</li>
							</ul>
						</div>
					</SwiperSlide>
					<SwiperSlide
						className={`${classes.oneSection} ${classes.thirdSlideMove}`}
					>
						<div className={classes.thirdSection}>
							<div
								className={classes.thirdSectionBackground}
							></div>
							<div className={classes.phaseTitle}>
								<Typography
									className={`${classes.descText} ${classes.floatLeft} swiper-no-swiping`}
								>
									PHASE 3
								</Typography>
								<div
									className={`${classes.descTitleSquare} ${classes.floatLeft}`}
								></div>
								<Typography
									className={`${classes.descText} swiper-no-swiping`}
								>
									Invasion
								</Typography>
							</div>
							<Typography
								className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
							>
								The decisions have already been made. All of
								them have consequences. Our mission starts now
								and this is the time to prove our loyalty. Each
								of our Identities brings unique experiences. We
								aim to make the most out of them as we all
								embark on our journey, melting into the cosmos.
							</Typography>
							<ul className={classes.bottomDesc}>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										Rare NFT benefits revealed
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										Rarity calculator
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										DAO formation including royalties
										sharing
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										Charity Donation
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										Collabs with other projects that will
										benefit our holders
									</Typography>
								</li>
								<li className={classes.listLi}>
									<Typography
										className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} swiper-no-swiping`}
									>
										Utilities reaching beyond the Virtual
										World
									</Typography>
								</li>
							</ul>
						</div>
					</SwiperSlide>
					<SwiperSlide className={classes.hiddenSlide1}></SwiperSlide>
					<SwiperSlide className={classes.hiddenSlide2}></SwiperSlide>
					<SwiperSlide className={classes.hiddenSlide3}></SwiperSlide>
					<SwiperSlide className={classes.hiddenSlide4}></SwiperSlide>
					<SwiperSlide className={classes.hiddenSlide5}></SwiperSlide>
					<SwiperSlide className={classes.hiddenSlide6}></SwiperSlide>
					<SwiperSlide className={classes.hiddenSlide7}></SwiperSlide>
					<div className={classes.roadMapBgStripe}></div>
				</Swiper>
			</div>
		</div>
	);
}

export default Roadmap;
