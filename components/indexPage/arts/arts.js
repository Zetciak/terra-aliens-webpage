//Imports
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper';

//Images
import artsImg from '../../../public/images/arts.png';
import artImg1 from '../../../public/images/arts/artImg1.png';
import artImg2 from '../../../public/images/arts/artImg2.png';
import artImg3 from '../../../public/images/arts/artImg3.png';
import artImg4 from '../../../public/images/arts/artImg4.png';
import artImg5 from '../../../public/images/arts/artImg5.png';
import artImg6 from '../../../public/images/arts/artImg6.png';

//CSS
import useStyles from './artsStyle';

//Script
function Arts() {
  //Style
  const classes = useStyles();

  return (
    <>
      <div className={classes.mainDiv} id="artsScroll">
        <div className={classes.normalDiv}>
          <Image src={artsImg} alt="" />
        </div>
        <div className={classes.mobileDiv}>
          <Swiper
            slidesPerView={1.8}
            spaceBetween={'40%'}
            freeMode={true}
            modules={[FreeMode]}
            className={classes.swiperDiv}
          >
            <SwiperSlide className={classes.oneSection}>
              <div className={classes.artDiv}>
                <Image
                  src={artImg1}
                  alt=""
                  title=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className={classes.artGradient1}></div>
            </SwiperSlide>
            <SwiperSlide className={classes.oneSection}>
              <div className={classes.artDiv}>
                <Image
                  src={artImg2}
                  alt=""
                  title=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className={classes.artGradient2}></div>
            </SwiperSlide>
            <SwiperSlide className={classes.oneSection}>
              <div className={classes.artDiv}>
                <Image
                  src={artImg3}
                  alt=""
                  title=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className={classes.artGradient3}></div>
            </SwiperSlide>
            <SwiperSlide className={classes.oneSection}>
              <div className={classes.artDiv}>
                <Image
                  src={artImg4}
                  alt=""
                  title=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className={classes.artGradient4}></div>
            </SwiperSlide>
            <SwiperSlide className={classes.oneSection}>
              <div className={classes.artDiv}>
                <Image
                  src={artImg5}
                  alt=""
                  title=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className={classes.artGradient5}></div>
            </SwiperSlide>
            <SwiperSlide className={classes.oneSection}>
              <div className={classes.artDiv}>
                <Image
                  src={artImg6}
                  alt=""
                  title=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className={classes.artGradient6}></div>
            </SwiperSlide>
            <SwiperSlide className={classes.lastSection}></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Arts;
