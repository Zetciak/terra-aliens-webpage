//Imports
import { Typography } from '@material-ui/core';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper';

//Images
import artsImg from '../../../public/images/roadmap.png';
import roadmap1 from '../../../public/images/roadmap1.png';
import roadmap2 from '../../../public/images/roadmap2.png';
import roadmap3 from '../../../public/images/roadmap3.png';

//CSS
import useStyles from './roadmapStyle';

//Script
function Roadmap() {
  //Style
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <div className={classes.titleDiv}>
        <Typography className={classes.titleTypography}>Road map</Typography>
      </div>
      <div className={classes.imageDiv}>
        <Swiper
          slidesPerView={3}
          initialSlide={1}
          spaceBetween={0}
          freeMode={true}
          modules={[FreeMode]}
          className={classes.testdiv}
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide>
            <Image src={roadmap1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={roadmap2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={roadmap3} alt="" />
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Roadmap;
