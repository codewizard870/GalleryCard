import "./index.scss";
import bg from "../../assets/images/background.png"
import Cup from "../../assets/images/cup.svg";
import Timer from "../../assets/images/timer.svg";

const Hero = () => {
  console.log(bg)
  return (
    <div className="hero-wrapper">
      <h1 className="hero-title">
        THE HOLY<br />
        <span>CROSS</span> BREWING SOCIETY
      </h1>
      <div className="hero-position">
        <img src={Cup} alt="cup" />
        <span>Cafe in Frankfurt</span>
      </div>
      <div className="hero-timer">
        <img src={Timer} alt="timer" />
        <span>New York Open today until 7:00 PM</span>
      </div>
      <div className="hero-buttons">
        <button className="contact-us">Contact Us</button>
        <a href="https://www.google.com/maps/dir//'50.110182,8.6871885'" target="_blank" rel="noreferrer">
          <button className="directions">
            Get Directions
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero;