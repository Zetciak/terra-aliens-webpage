//Imports
import { Typography } from '@material-ui/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper';

//CSS
import useStyles from './roadmapStyle';

//Script
function Roadmap() {
  //Style
  const classes = useStyles();

  return (
    <div className={classes.mainDiv} id="roadMapScroll">
      <div className={classes.titleDiv}>
        <Typography className={classes.titleTypography}>Road map</Typography>
      </div>
      <div className={classes.roadMapDiv}>
        <Swiper
          slidesPerView={2.6}
          //initialSlide={1}
          spaceBetween={0}
          freeMode={true}
          modules={[FreeMode]}
          className={classes.swiperDiv}
        >
          <SwiperSlide className={classes.oneSection}>
            <div className={classes.firstSection}>
              <div className={classes.firstSectionBackground}></div>
              <div className={classes.firstSectionStripe}></div>
              <div className={classes.actualPhase}></div>
              <div className={classes.phaseTitle}>
                <Typography
                  className={`${classes.descText} ${classes.floatLeft} ${classes.activePhase}`}
                >
                  PHASE 1
                </Typography>
                <div
                  className={`${classes.descTitleSquare} ${classes.floatLeft} ${classes.activePhase}`}
                ></div>
                <Typography
                  className={`${classes.descText} ${classes.activePhase}`}
                >
                  Gathering
                </Typography>
              </div>
              <Typography
                className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} ${classes.activePhase}`}
              >
                Only the Chosen shall ever join our ranks. Numerous alliances
                have already been formed and each of them will be announced at
                the right time. You will hear our voice reaching from the depths
                of our Headquarters till the most unexplored corners of the
                Universe. This is where we unite.
              </Typography>
              <ul className={classes.bottomDesc}>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} ${classes.activePhase}`}
                  >
                    Early Community Building
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} ${classes.activePhase}`}
                  >
                    NFT and Roadmap Reveal
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} ${classes.activePhase}`}
                  >
                    Giveaways and Partnerships
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2} ${classes.activePhase}`}
                  >
                    Mint details revealed
                  </Typography>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.oneSection}>
            <div className={classes.secondSection}>
              <div className={classes.secondSectionBackground}></div>
              <div className={classes.secondSectionStripe}></div>
              <div className={classes.phaseTitle}>
                <Typography
                  className={`${classes.descText} ${classes.floatLeft}`}
                >
                  PHASE 2
                </Typography>
                <div
                  className={`${classes.descTitleSquare} ${classes.floatLeft}`}
                ></div>
                <Typography className={`${classes.descText}`}>
                  Identities
                </Typography>
              </div>
              <Typography
                className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
              >
                The time comes to decide who you want to be. Choose wisely. Your
                old self must be left behind. What you have done in the past is
                of no importance, our cards are blank from now on. We take the
                chance to fill them with sensations we have never experienced
                before. Patiently we wait with our crystal sabres pulsing out
                xenon light into the infinity. We are ready.
              </Typography>
              <ul className={classes.bottomDesc}>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
                  >
                    First AMA
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
                  >
                    Introduction of the holders benefits
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
                  >
                    The Mint goes live
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
                  >
                    Discord game announcement
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
                  >
                    SpaceGear Drop for holders
                  </Typography>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.oneSection}>
            <div className={classes.thirdSection}>
              <div className={classes.thirdSectionBackground}></div>
              <div className={classes.thirdSectionStripe}></div>
              <div className={classes.phaseTitle}>
                <Typography
                  className={`${classes.descText} ${classes.floatLeft}`}
                >
                  PHASE 3
                </Typography>
                <div
                  className={`${classes.descTitleSquare} ${classes.floatLeft}`}
                ></div>
                <Typography className={`${classes.descText}`}>
                  Invasion
                </Typography>
              </div>
              <Typography
                className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
              >
                The decisions have already been made. All of them have
                consequences. Our mission starts now and this is the time to
                prove our loyalty. Each of our Identities brings unique
                experiences. We aim to make the most out of them as we all
                embark on our journey, melting into the cosmos.
              </Typography>
              <ul className={classes.bottomDesc}>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
                  >
                    Rare NFT benefits revealed
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
                  >
                    Rarity calculator
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
                  >
                    DAO formation including royalties sharing
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
                  >
                    Charity Donation
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
                  >
                    Collabs with other projects that will benefit our holders
                  </Typography>
                </li>
                <li className={classes.listLi}>
                  <Typography
                    className={`${classes.descText} ${classes.descTextWidth} ${classes.descTextWidth2}`}
                  >
                    Utilities reaching beyond the Virtual World
                  </Typography>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide className={classes.hiddenSlide1}></SwiperSlide>
          <SwiperSlide className={classes.hiddenSlide2}></SwiperSlide>
          <SwiperSlide className={classes.hiddenSlide3}></SwiperSlide>
          <SwiperSlide className={classes.hiddenSlide4}></SwiperSlide>
          <SwiperSlide className={classes.hiddenSlide5}></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Roadmap;
