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
      <div id="skills" style={{ backgroundImage: `url(${bg})` }} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4  ">
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2  flex-wrap ">
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-xl py-3">
            "Proficiencies in modern frontend technologies and design principles."
          </p>

          <Swiper
            slidesPerView={5}
            spaceBetween={40}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            // modules={[Navigation, Pagination]}
            className="mySwiper flex flex-wrap justify-between w-full h-full"
          >
            <div>
            <RadialProgressbar no={0} percentage="80"/>
            <p className="font-bold">HTML</p>
            </div>
            <div>
            <RadialProgressbar no={1} percentage="70" />
            <p className="font-bold">CSS</p>
            </div> <div>
            <RadialProgressbar no={2} percentage="60"/>
            <p className="font-bold">TAILWIND CSS</p>
            </div> <div>
            <RadialProgressbar no={3} percentage="70"/>
            <p className="font-bold">JAVASCRIPT</p>
            </div> <div>
            <RadialProgressbar no={4} percentage="50"/>
            <p className="font-bold">REACT</p>
            </div>


           

          </Swiper>

        </div>
      </div>
    </>
  );
}

export default Skills;
