import "./index.scss"
import Location from "../../assets/images/location.svg";
import Instagram from "../../assets/images/instagram.svg";

const Info = () => {
  return (
    <div className="info-wrapper">
      <div className="info-left-section">
        <div className="location">
          <img src={Location} alt="location" />
          <span>
            Fahrgasse 7, 60311 Frankfurt am Main, Germany
          </span>
        </div>
        <a className="instagram" href="https://www.instagram.com/the_holy_cross_brewing_society/" target="_blank" rel="noreferrer">
          <img src={Instagram} alt="instagram" />
          <span>
            follow us on Instagram
          </span>
        </a>
        <a href="https://goo.gl/maps/Xqgxso8TNCZtX64L6" target="_blank" rel="noreferrer">
          <button className="find-us">
            Find Us!
          </button>
        </a>
      </div>
      <div className="info-right-section">
        <span>
          Business Hours<br />
          <br />
          Mon:  09:00  –   18:00<br />
          Tue:   09:00  –   18:00<br />
          Wed:  09:00  –   18:00<br />
          Thu:   09:00  –   18:00<br />
          Fri:      09:00  –   18:00<br />
          Sat:    10:00 –      18:00<br />
          Sun:   10:00 –      18:00<br />
        </span>
      </div>
    </div>
  )
}

export default Info;