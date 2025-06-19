import React from "react";
import Slider from "react-slick";
import "./TestimonialSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Dr Vivek Sharma",
      stars: 5,
      day0: "82.5 kg",
      dayN: "75.8 kg",
      days: 45,
      imageBefore: require("../Images/before1.jpg"),
      imageAfter: require("../Images/after1.jpg"),
      review: `I lost 6.7 kg in just 45 days. I feel lighter, more active, and healthier. This journey changed my lifestyle for the better.`,
    },
    {
      name: "Divyal Gupta",
      stars: 5,
      day0: "93 kg",
      dayN: "78 kg",
      days: 90,
      imageBefore: require("../Images/before2.jpg"),
      imageAfter: require("../Images/after2.jpg"),
      review: `I lost 15 kg in 3 months. I feel more confident, fit, and happy. It was totally worth it!`,
    },
    {
      name: "Bhagwan Singh",
      stars: 5,
      day0: "103.6 kg",
      dayN: "83.8 kg",
      days: 60,
      imageBefore: require("../Images/before3.jpg"),
      imageAfter: require("../Images/after3.jpg"),
      review: `In just 60 days, I lost my belly fat and feel so much lighter and healthier. Thank you for this amazing change!`,
    },
    {
      name: "Gaurav Thakkar",
      stars: 5,
      day0: "113 kg",
      dayN: "90 kg",
      days: 90,
      imageBefore: require("../Images/before4.jpg"),
      imageAfter: require("../Images/after4.jpg"),
      review: `I lost 23 kg in just 3 months during the lockdown. I never thought this transformation was possible from home, but with the right guidance and plan, I did it! It's a new start for me!`,
    },
    {
      name: "Simran Pandya",
      stars: 5,
      day0: "84 kg",
      dayN: "70 kg",
      days: 90,
      imageBefore: require("../Images/before5.jpg"),
      imageAfter: require("../Images/after5.jpg"),
      review: `In just 3 months, I lost 14 kg and completely transformed how I look and feel! I feel healthier, more energetic, and confident in my own skin again.`,
    },
    {
      name: "Ankit Yadav",
      stars: 5,
      day0: "97 kg",
      dayN: "78 kg",
      days: 150,
      imageBefore: require("../Images/before6.jpg"),
      imageAfter: require("../Images/after6.jpg"),
      review: `I not only lost 19 kg in 5 months but also regained my confidence and stamina. My lifestyle has improved significantly!`,
    },
    {
      name: "Archie Singhal",
      stars: 5,
      day0: "78 kg",
      dayN: "52 kg",
      days: 180,
      imageBefore: require("../Images/before7.jpg"),
      imageAfter: require("../Images/after7.jpg"),
      review: `Dropping 26 kg was something I never imagined! I feel lighter, fitter, and proud of who I've become. A life-changing experience!`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2,
          dots: true
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1,
          dots: true
        } 
      },
    ],
    customPaging: function() {
      return (
        <div className="custom-dot"></div>
      );
    }
  };

  return (
    <div id="testimonials" className="testimonial-section">
      <p className="testimonial-label">TESTIMONIAL</p>
      <h2 className="testimonial-heading">Our Client Say</h2>
      <div className="testimonial-slider-container">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-images">
                <div>
                  <p className="tag">Before</p>
                  <img src={t.imageBefore} alt="Before" />
                  <p className="weight">{t.day0}</p>
                </div>
                <div>
                  <p className="tag">After</p>
                  <img src={t.imageAfter} alt="After" />
                  <p className="weight">{t.dayN}</p>
                </div>
              </div>
              <h4><em>{t.days} Day Transformation Story</em></h4>
              <p className="testimonial-text">{t.review}</p>
              <div className="reviewer-section">
                <img
                  className="reviewer-image"
                  src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbnKFKgVn05bH06XzV6T0aAtdg8Gg82.jpg"
                  alt={t.name}
                />
                <div className="reviewer-details">
                  <div className="reviewer-name">{t.name}</div>
                  <div className="stars">{"★".repeat(t.stars)}</div>
                </div>
                <div className="slick-dots"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
