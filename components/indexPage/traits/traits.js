//Imports
import { Typography } from '@material-ui/core';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper';

//Images
import traitsList from '../../../public/images/traitsList.png';
import trait1 from '../../../public/images/traits/trait1.svg';
import trait2 from '../../../public/images/traits/trait2.svg';
import trait3 from '../../../public/images/traits/trait3.svg';
import trait4 from '../../../public/images/traits/trait4.svg';
import trait5 from '../../../public/images/traits/trait5.svg';
import trait6 from '../../../public/images/traits/trait6.svg';

//CSS
import useStyles from './traitsStyle';

//Script
function Traits() {
  //Style
  const classes = useStyles();

  return (
    <div className={classes.mainDiv} id="traitsScroll">
      <div className={classes.topSection}>
        <Typography className={classes.topSectionTitle}>Our Traits</Typography>
        <div className={classes.traitsList}>
          <ul>
            <li>Eyes</li>
            <li>Face</li>
            <li>Hair</li>
            <li>Hat</li>
            <li>Accessory</li>
            <li>Body</li>
          </ul>
        </div>
      </div>
      <div className={classes.bottomSection}>
        <Image src={traitsList} alt="" />
      </div>
      <div className={classes.mobileDiv}>
        <Typography className={classes.mobileTitle}>Our traits</Typography>
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
                src={trait1}
                alt=""
                title=""
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={classes.traitTitle}>
              <Typography className={classes.traitTitleText}>Origin</Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.oneSection}>
            <div className={classes.artDiv}>
              <Image
                src={trait2}
                alt=""
                title=""
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={classes.traitTitle}>
              <Typography className={classes.traitTitleText}>
                Clothes
              </Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.oneSection}>
            <div className={classes.artDiv}>
              <Image
                src={trait3}
                alt=""
                title=""
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={classes.traitTitle}>
              <Typography className={classes.traitTitleText}>
                Ellipse
              </Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.oneSection}>
            <div className={classes.artDiv}>
              <Image
                src={trait4}
                alt=""
                title=""
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={classes.traitTitle}>
              <Typography className={classes.traitTitleText}>Sphere</Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.oneSection}>
            <div className={classes.artDiv}>
              <Image
                src={trait5}
                alt=""
                title=""
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={classes.traitTitle}>
              <Typography className={classes.traitTitleText}>Mouth</Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.oneSection}>
            <div className={classes.artDiv}>
              <Image
                src={trait6}
                alt=""
                title=""
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={classes.traitTitle}>
              <Typography className={classes.traitTitleText}>Eyes</Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide className={classes.lastSection}></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Traits;
