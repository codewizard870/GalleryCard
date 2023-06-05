import "./index.scss";
import Slider from 'react-slick';
import "../../assets/scss/plugins/slick-slider/slick.min.scss";
import "../../assets/scss/plugins/slick-slider/slick-theme.min.scss"

import Photo1 from "../../assets/images/photos/1.png"
import Photo2 from "../../assets/images/photos/2.png"
import Photo3 from "../../assets/images/photos/3.jpg"
import Photo4 from "../../assets/images/photos/4.jpg"
import Photo5 from "../../assets/images/photos/5.jpg"
import Photo6 from "../../assets/images/photos/6.jpg"

import RightArrow from "../../assets/images/right-arrow.png"


function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <svg fill="#FFFFFF" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.255 47.255"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z"></path> </g> </g></svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <svg fill="#FFFFFF" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.255 47.255" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M12.314,47.255c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l21.92-21.92l-21.92-21.92 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35.648,22.92c0.391,0.391,0.391,1.023,0,1.414L13.021,46.962 C12.825,47.157,12.57,47.255,12.314,47.255z"></path> </g> </g></svg>
    </div>
  );
}

const Photos = () => {
  const settings = {
    dots: true,
    // infinite: true,
    // autoplay: true,
    speed: 500,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="photo-wrapper">
      <Slider {...settings}>
        <div>
          <div className="photo first">
            <img src={Photo1} alt="photo1" />
            <a href="https://www.google.com/maps/dir//'50.110182,8.6871885'" target="_blank" rel="noreferrer">
              <button>Get Directions</button>
            </a>
          </div>
        </div>
        <div>
          <div className="photo second">
            <img src={Photo2} alt="photo2" />
          </div>
        </div>
        <div>
          <div className="photo">
            <img src={Photo3} alt="photo3" />
          </div>
        </div>
        <div>
          <div className="photo">
            <img src={Photo4} alt="photo4" />
          </div>
        </div>
        <div>
          <div className="photo">
            <img src={Photo5} alt="photo3" />
          </div>
        </div>
        <div>
          <div className="photo">
            <img src={Photo6} alt="photo4" />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Photos;