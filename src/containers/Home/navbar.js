import './index.scss';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo-section">
        <img src="/logo.svg" alt="logo" />
        <span>The Holy Cross Brewing Society</span>
      </div>
      <div className="navbar-menu-section">
        {Menus.map((menu, index) => (
          <div className="menu" key={index}>
            <span>{menu.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar;

const Menus = [
  {
    label: "HOME"
  },
  {
    label: "ABOUT US"
  },
  {
    label: "FIND US"
  }
]