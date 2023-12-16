import SectionTitle from "../../Common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";

import useReviewData from "../../../hooks/useReviewData";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const data = useReviewData();
  console.log(data);
  return (
    <div className="container mx-auto ">
      <div className="">
        <SectionTitle
          subHeading={"What Our Clients Say"}
          heading={"Testimonials"}
        />
      </div>
      <div className="-mt-10 border ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {data?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="w-10/12 mx-auto ">
                <div className="">
                  <div className="rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <input
                        key={index}
                        type="radio"
                        name={`rating-${review._id}`}
                        className={`mask mask-star-2 bg-orange-400 ${
                          index < review.rating ? "checked" : ""
                        }`}
                        checked={index === review.rating - 1}
                        readOnly
                      />
                    ))}
                  </div>
                </div>
                <FaQuoteLeft className="text-center mx-auto text-5xl my-10" />
                <p className="">{review.details}</p>
                <h3 className="text-2xl mt-5 text-[#CD9003]">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
