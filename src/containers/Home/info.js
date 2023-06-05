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
        <p>
          Business Hours<br />
        </p>
        <div className="schedule-wrapper">
          {Schedule.map((s, index) => (
            <div className="schedule">
              <p key={index} className="day">
                {`${s.day}:`}
              </p>
              <p>
                {s.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Info;