import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UnlimitedClasses.css";
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.jpg";
import image4 from "../../Assets/Image4.jpg";
import image5 from "../../Assets/image5.jpg";
import image6 from "../../Assets/image6.jpg";
import image7 from "../../Assets/image7.jpg";
import image8 from "../../Assets/image8.jpg";

const classes = [
  { title: "Running", instructor: "Sachin Thakur", image: image1 },
  { title: "Dance", instructor: "Rishav Singh", image: image2 },
  { title: "YoGa", instructor: "Aman Panday", image: image3 },
  { title: "Weight Loss", instructor: "Mo Ali", image: image4 },
  { title: "Personal Training", instructor: "Ansh Tiwari", image: image5 },
  { title: "MMA Training", instructor: "Juned Ahmad", image: image6 },
  { title: "Biceps Training", instructor: "SAim", image: image7 },
  { title: "Calesthenics Training", instructor: "Juned Ahmad", image: image8 },
];

const UnlimitedClasses = () => {
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const updateItemsToShow = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 3);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: itemsToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '10px'
  };
  

  const leftToRightClasses = classes.slice(0, 4);
  const rightToLeftClasses = classes.slice(4,8);

  return (
    <section className="classes-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>UNLIMITED CLASSES</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Slider {...settings} className="classes-slider left-to-right">
            {leftToRightClasses.map((classItem, index) => (
              <div className="single-class-item" key={index}>
                <div
                  className="set-bg"
                  style={{ backgroundImage: `url(${classItem.image})` }}
                >
                  <div className="si-text">
                    <h4>{classItem.title}</h4>
                    <span>
                      <i className="fa fa-user"></i> {classItem.instructor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="row">
          <Slider {...settings} className="classes-slider right-to-left">
            {rightToLeftClasses.map((classItem, index) => (
              <div className="single-class-item" key={index}>
                <div
                  className="set-bg"
                  style={{ backgroundImage: `url(${classItem.image})` }}
                >
                  <div className="si-text">
                    <h4>{classItem.title}</h4>
                    <span>
                      <i className="fa fa-user"></i> {classItem.instructor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default UnlimitedClasses;
