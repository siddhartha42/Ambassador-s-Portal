import React from "react";
import "./App.css";
import { ReactComponent as FacebookLogo } from "./facebook.svg";

const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <a className="SaarangLogo">
          <img
            className="img-logo"
            src="data:image/jpeg;base64,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"
            alt=""
          ></img>
        </a>
        <div className="container">
          <div className="navbar-container navbar">
            <div className="nav-links">
              <div className="nav-link">
                <a className="link" href="#">
                  Home
                </a>
              </div>
              <div className="nav-link">
                <a className="link" href="#">
                  Task
                </a>
              </div>
              <div className="nav-link">
                <a className="link" href="#">
                  Help
                </a>
              </div>
            </div>
            <div className="login">
              <a className="link" href="#">
                Login
              </a>
            </div>
          </div>
          <div className="reg-container">
            <div className="reg-box">
              <div className="reg-heading">
                <a className="reg-Title">BECOME A SAARANG AMBASSADOR TODAY</a>
                <div className="reg-button-box">
                  <button className="reg-button">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="left-boxes">
        <div className="solid-box" />
        <div className="opaque-box" />
      </div>
      <div className="aboutus-container">
        <p className="aboutus">About Us</p>
        <p className="statement">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est.
        </p>
        <p className="statement">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="announcements-container">
        <div className="announcements-box">
          <a className="announcements-title">Announcements</a>
          <a className="statement">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </a>
        </div>
      </div>
      <div className="why-container">
        <a className="why-title">Why be a Saarang Ambassador?</a>
        <div className="sub-container">
          <div className="detail-container">
            <a className="title-detail-container">Increase your skill set</a>
            <ul className="detail-row">
              <li className="point">
                <a className="link" href="#">
                  Lorem Ipsum
                </a>
              </li>
              <li className="point">
                <a className="link" href="#">
                  Communication
                </a>
              </li>
              <li className="point">
                <a className="link" href="#">
                  Event Branding
                </a>
              </li>
              <li className="point">
                <a className="link" href="#">
                  Leadership
                </a>
              </li>
            </ul>
          </div>
          <div className="detail-container">
            <a className="title-detail-container">Increase your skill set</a>
            <ul className="detail-row">
              <li className="point">
                <a className="link" href="#">
                  Lorem Ipsum
                </a>
              </li>
              <li className="point">
                <a className="link" href="#">
                  Communication
                </a>
              </li>
              <li className="point">
                <a className="link" href="#">
                  Event Branding
                </a>
              </li>
              <li className="point">
                <a className="link" href="#">
                  Leadership
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button className="why-button">
          <a className="why-button-text">Register Now</a>
        </button>
      </div>
      <div className="resp-container">
        <div className="resp-title-box">
          <p className="resp-title">Responsibilities of an ambassador</p>
        </div>
        <div className="resp-card-box">
          <div className="resp-card">
            <div className="card-icon"></div>
            <div className="card-title">PUBLICITY</div>
            <hr></hr>
            <div className="card-desp">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </div>
          </div>
          <div className="resp-card">
            <div className="card-icon"></div>
            <div className="card-title">SOCIAL MEDIA</div>
            <hr></hr>
            <div className="card-desp">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </div>
          </div>
          <div className="resp-card">
            <div className="card-icon"></div>
            <div className="card-title">ORGANIZING</div>
            <hr></hr>
            <div className="card-desp">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </div>
          </div>
        </div>
      </div>

      <div className="begin-container">
        <a className="begin-title">BEGIN YOUR JOURNEY AT SAARANG</a>
        <div className="content-box">
          <a className="content">Explore opportunities</a>
          <hr></hr>
          <a className="content">Build Connections</a>
          <hr></hr>
          <a className="content">Stand out from the crowd</a>
        </div>
        <button className="content-button">
          Become a campus Ambassador Now
        </button>
      </div>
      <link
        rel="stylesheet"
        href="path/to/font-awesome/css/font-awesome.min.css"
      />
      <div className="let-container">
        <div className="info-box">
          <a className="info-title">Let's Talk</a>
          <a className="info-desp">Phone - (406) 555-0120</a>
          <a className="info-desp">Phone - (406) 555-0120 </a>
        </div>
        <div className="icon-container">
          <div className="icon-box">
            <div className="icon">
              <a className="facebook" href="#">
                <FacebookLogo></FacebookLogo>
              </a>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon">
              <a className="facebook" href="#">
                <FacebookLogo></FacebookLogo>
              </a>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon">
              <a className="facebook" href="#">
                <FacebookLogo></FacebookLogo>
              </a>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon">
              <a className="facebook" href="#">
                <FacebookLogo></FacebookLogo>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
