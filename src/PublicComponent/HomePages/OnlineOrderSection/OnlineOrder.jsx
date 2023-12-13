import SectionTitle from "../../Common/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './styles.css';
import slider1 from '../../../assets/slide1.jpg';
import slider2 from '../../../assets/slide2.jpg';
import slider3 from '../../../assets/slide3.jpg';
import slider4 from '../../../assets/slide4.jpg';
import slider5 from '../../../assets/slide5.jpg';

const OnlineOrder = () => {
  const paginationStyles = {
    // Customize pagination styles here
    position: 'absolute',
    bottom: 10,
    left: '50%',
    transform: 'translateX(-50%)',
  };


  return (
    <div className="my-20">
        <div className="">
            <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'Order Online'}/>
        </div>
        <div className="container
        mx-auto">
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>
        
      
      </Swiper>
        </div>
    </div>
  )
}

export default OnlineOrder