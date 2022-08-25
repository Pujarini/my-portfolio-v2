import React from "react";
import Me from "../../assets/hello.png";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="profile-pic">
          <img src={Me} alt="me" />
        </div>
      </div>
      <div className="right">
        <div className="container">
          <h1>PUJARINI JENA</h1>
          <span>FRONTEND DEVELOPER</span>
        </div>
        <div className="about-text">
          Pujarini Jena is a Software Developer working at an Unicorn Startup.
          She has an experience of 2+ years in Frontend development. She has
          worked on React , JavaScript specifically. In her free time she likes
          to host Twitter spaces related to Developer stuff. Apart from that she
          is also a Technical Blogger.
        </div>
        <div className="roles">
          <span onClick={() => window.open("https://github.com/Pujarini")}>
            <i
              className="fa-brands fa-square-github fa-2x fa-beat"
              href="www.google.com"
            ></i>
          </span>
          <span
            onClick={() =>
              window.open("https://www.linkedin.com/in/pujarini-jena/")
            }
          >
            <i className="fa-brands fa-linkedin fa-2x fa-beat"></i>
          </span>
          <span
            onClick={() => window.open("https://roadsidecoder.hashnode.dev/")}
          >
            <i className="fa-brands fa-hashnode fa-2x fa-beat"></i>
          </span>
          <span
            onClick={() => window.open("https://twitter.com/pujarini_codeit")}
          >
            <i className="fa-brands fa-square-twitter fa-2x fa-beat"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
