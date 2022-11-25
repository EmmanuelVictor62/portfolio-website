// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { slideContent } from "../../Utils/constants";

// Import Home Page Styles
import "./home.scss";

// Import React Typewriter component
import { Typewriter } from 'react-simple-typewriter'


export interface SliderProps{
    toggle?:boolean
}

export default function Slider(props:SliderProps) {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        autoplay={{
            delay: 4000,
            disableOnInteraction: true,
        }}
        className="swiper-container"
      >
        {slideContent.map((slide,index) => {
            return(
                <SwiperSlide 
                    key={index + 1}
                    style={{backgroundImage:`url(${slide.backgroudImage})`}}
                >
                    <div className="slide-content__container">
                        <p className="slide-content__heading">
                            {slide.initials}   
                                <span data-toggle={props.toggle}>
                                    <Typewriter 
                                        words={slide.name}
                                        loop={false}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={180}
                                        deleteSpeed={100}
                                        delaySpeed={1000}
                                    />
                                </span>
                        </p>
                        <p className="slide-content__description">
                            {slide.description}
                        </p>
                        <div className="slide-content__button-box">
                            <button className="slide-content__button">
                                <a href="">
                                Start a project
                                </a>  
                            </button>
                            <a href="" className="slide-content__link">
                                royalmanuel62@gmail.com
                            </a>
                        </div>
                        
                    </div>
                    
                </SwiperSlide>
            )
        })}
        </Swiper>
    </>
  );
}
