// SpecialtiesSlider.js
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./SpecialtiesSlider.css";

import {
  MdOutlineMonitorWeight,
  MdOutlineBloodtype,
  MdFavoriteBorder,
  MdSportsGymnastics,
  MdChildCare,
  MdOutlineFaceRetouchingNatural,
  MdOutlineRestaurantMenu,
  MdFitnessCenter,
  MdOutlineHealthAndSafety,
  MdOutlineAccessibilityNew,
  MdOutlineSelfImprovement,
  MdOutlineFemale,
} from "react-icons/md";

const specialties = [
  {
    title: "Weight Management",
    description: "Customized weight loss and weight gain plans tailored to your body type and goals.",
    icon: <MdOutlineMonitorWeight />,
  },
  {
    title: "Diabetes Management",
    description: "Blood sugar friendly meal plans to control and prevent diabetes.",
    icon: <MdOutlineBloodtype />,
  },
  {
    title: "Heart Disease Management",
    description: "Heart-healthy nutrition plans to support cardiovascular wellness.",
    icon: <MdFavoriteBorder />,
  },
  {
    title: "Sports Nutrition",
    description: "Performance-oriented nutrition for athletes and fitness enthusiasts.",
    icon: <MdSportsGymnastics />,
  },
  {
    title: "Children Nutrition",
    description: "Age-appropriate nutrition plans for growing children and teens.",
    icon: <MdChildCare />,
  },
  {
    title: "Skin Health",
    description: "Nutrition plans to promote clear, glowing, and healthy skin.",
    icon: <MdOutlineFaceRetouchingNatural />,
  },
  {
    title: "Digestive Health",
    description: "Meal plans to support gut health and prevent bloating, acidity, or constipation.",
    icon: <MdOutlineRestaurantMenu />,
  },
  {
    title: "Gym Nutrition",
    description: "Tailored nutrition for muscle gain, fat loss, and peak performance in the gym.",
    icon: <MdFitnessCenter />,
  },
  {
    title: "Immunity",
    description: "Diet plans rich in vitamins and antioxidants to boost immunity.",
    icon: <MdOutlineHealthAndSafety />,
  },
  {
    title: "Joint Health",
    description: "Nutritional care to reduce inflammation and strengthen joints.",
    icon: <MdOutlineAccessibilityNew />,
  },
  {
    title: "Migraine & Stress",
    description: "Stress-reducing foods and migraine-friendly meal plans.",
    icon: <MdOutlineSelfImprovement />,
  },
  {
    title: "Women Health",
    description: "Plans for PCOD, PCOS, irregular menstruation, and hormonal balance.",
    icon: <MdOutlineFemale />,
  },
];

const SpecialtiesSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="specialties-slider">
      <div
        id="specialities"
        className="specialties-container"
        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
      >
        <h2 className="heading">Our Specialities</h2>
        <p className="subheading">Comprehensive nutrition solutions for all your health needs</p>

        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
        >
          {specialties.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="specialty-card">
                <div className="icon">{item.icon}</div>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SpecialtiesSlider;
