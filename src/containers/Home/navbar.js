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
            <a href={menu.href}>
              <span>{menu.label}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar;

const Menus = [
  {
    label: "HOME",
    href: "/"
  },
  {
    label: "ABOUT US",
    href: "/#about-us"
  },
  {
    label: "FIND US",
    href: "https://www.google.com/maps/dir//'50.110182,8.6871885'"
  }
]