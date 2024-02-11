import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/meter1.svg";
import bg from "../assets/images/banner-bg.png"
import RadialProgressbar from "../Elements/RadialProgressbar";

function Skills() {
  return (
    <>
      <div id="skills" style={{ backgroundImage: `url(${bg})` }} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4 ">
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-xl py-3">
            "Proficiencies in modern frontend technologies and design principles."
          </p>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6 ">
            <Swiper
              slidesPerView={5}
              spaceBetween={40}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            // modules={[Navigation, Pagination]}
            // className="mySwiper"
            >
              <SwiperSlide className="bg-[#171717] " >
                {" "}
                <RadialProgressbar no={0} />

              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}

                <RadialProgressbar no={1} />
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <RadialProgressbar no={2}/>

              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <RadialProgressbar no={3}/>

              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <RadialProgressbar no={4}/>

              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
