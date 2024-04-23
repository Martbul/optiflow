import { Link, NavLink } from "react-router-dom";
import "./Navigations.css";
export default function Navigation() {
  return (
    <>
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="container flex w-container">
          <div className="brand">
            <NavLink
              to="/"
              className="brand-logo w-nav-brand"
              aria-label="home"
            >
              {/* <img
                src="https://assets-global.website-files.com/6427c6c769d01c2f58037956/6432499d11af0d4fe2a122f3_axe-logo.png"
                loading="lazy"
                alt=""
                className="image"
              /> */}
                    <h3>Optiflow</h3>
            </NavLink>
          </div>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <div className="dropdown">
              <div
                className="nav-link w-dropdown-toggle"
                id="w-dropdown-toggle-0"
                aria-controls="w-dropdown-list-0"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="w-icon-dropdown-toggle" aria-hidden="true" />
                <div>
                  <span className="opacity-60">01</span>
                  <br />
                  SERVICES
                </div>
              </div>

              <nav
                className="nav-dropdown w-dropdown-list dl dropdown-content"
                id="w-dropdown-list-0"
                aria-labelledby="w-dropdown-toggle-0"
              >
                <NavLink
                  to="/ai-automation-agency"
                  className="nav-dropdown-item w-dropdown-link"
                  tabIndex={0}
                >
                  AI and Automation
                </NavLink>
                <NavLink
                  to="/rpa-consulting-services"
                  className="nav-dropdown-item w-dropdown-link"
                  tabIndex={0}
                >
                  Robotic Process Automation
                </NavLink>
                <NavLink
                  to="/zapier-consulting"
                  className="nav-dropdown-item w-dropdown-link"
                  tabIndex={0}
                >
                  Zapier Consulting
                </NavLink>
                <NavLink
                  to="/make-consulting"
                  aria-current="page"
                  className="nav-dropdown-item no-border w-dropdown-link w--current"
                  tabIndex={0}
                >
                  Make.com Consulting
                </NavLink>
              </nav>
            </div>

            <div className="dropdown">
              <div
                className="nav-link w-dropdown-toggle"
                id="w-dropdown-toggle-0"
                aria-controls="w-dropdown-list-0"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="w-icon-dropdown-toggle" aria-hidden="true" />
                <div>
                  <span className="opacity-60">02</span>
                  <br />
                  RESULTS
                </div>
              </div>

              <nav
                className="nav-dropdown w-dropdown-list dropdown-content"
                id="w-dropdown-list-1"
                aria-labelledby="w-dropdown-toggle-1"
              >
                <NavLink
                  to="testimonials"
                  className="nav-dropdown-item w-dropdown-link"
                  tabIndex={0}
                >
                  Testimonials
                </NavLink>
                <NavLink
                  to="/case-studies"
                  className="nav-dropdown-item w-dropdown-link"
                  tabIndex={0}
                >
                  Case Studies
                </NavLink>
              </nav>
            </div>

            <NavLink
              to="aboutus"
              className="nav-link w-nav-link"
              style={{ maxWidth: "90%" }}
            >
              <span className="opacity-60">03</span>
              <br />
              ABOUT US
            </NavLink>
            <div
              data-hover="true"
              data-delay={0}
              className="w-dropdown"
              style={{ maxWidth: "90%" }}
            >
              <div
                className="nav-link w-dropdown-toggle"
                id="w-dropdown-toggle-2"
                aria-controls="w-dropdown-list-2"
                aria-haspopup="menu"
                aria-expanded="false"
                role="button"
                tabIndex={0}
              >
                <div className="dropdown">
                  <div
                    className="nav-link w-dropdown-toggle"
                    id="w-dropdown-toggle-0"
                    aria-controls="w-dropdown-list-0"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div
                      className="w-icon-dropdown-toggle"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="opacity-60">04</span>
                      <br />
                      Resources
                    </div>
                  </div>
                  <nav
                    className="nav-dropdown w-dropdown-list dropdown-content"
                    id="w-dropdown-list-1"
                    aria-labelledby="w-dropdown-toggle-1"
                  >
                    <NavLink
                      to="/blog"
                      className="nav-dropdown-item w-dropdown-link"
                      tabIndex={0}
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/podcast"
                      className="nav-dropdown-item w-dropdown-link"
                      tabIndex={0}
                    >
                      Podcast
                    </NavLink>
                  </nav>
                </div>
              </div>
            </div>
          </nav>
          <div
            className="menu-button w-nav-button"
            style={{ WebkitUserSelect: "text" }}
            aria-label="menu"
            role="button"
            tabIndex={0}
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div className="w-icon-nav-menu" />
          </div>
          <NavLink
            to="/free-automation-consultation"
            className="button navlink w-button"
          >
            Book a Call{" "}
          </NavLink>
        </div>
        <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
      </div>
    </>
  );
}
