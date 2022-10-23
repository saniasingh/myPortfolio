import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import sania from "./sania.jpeg";

import "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Components/Footer";

function App() {
  const form = useRef();
  // const [emailDetails, setEmailDetails] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ga72ve8",
        "template_yltbnjt",
        form.current,
        "KvZZofjKeUEPa2Huz"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent!!");

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="App">
      <div className="herosection px-10 py-5">
        <nav className="d-flex flex-row justify-content-between">
          <span className="brand-name">SANIA'S WORK</span>
          <div className="d-flex nav-name flex-row">
            <span className="mx-4 nav-items">
              <a href="#home">Home</a>
            </span>
            <span className="mx-4 nav-items">
              <a href="#about-me">About Me</a>
            </span>
            <span className="mx-4 nav-items">
              <a href="#projects">Projects</a>
            </span>
            <span className="mx-4 nav-items">
              <a href="#contact-me">Contact Me</a>
            </span>
          </div>
        </nav>
        <div className="herosection-2 row justify-content-center" id="home">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <sapn className="name-Im-text">Sania Singh</sapn>
              </span>
              <span className="Im-text-enthusiastic py-2">
                Enthusiastic Dev 😎
              </span>
              {/* <span className='primary-text'> {" "}
              <h2>
                {" "}
                <typical 
                loop = {infinity}
                steps = {[
                  "Enthusiastic Dev 🎓", 1000,
                  "Full Stack Developer 💻", 1000,
                  "ReactJS expertise 👩‍💻", 1000,
                  "Exclusive Designs 🏅", 1000

                ]} 
                 />
              </h2>

            </span> */}
              <span className="Im-text-subheading">
                Knack 0f building application with front and back end operation.
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a
                  href="https://www.linkedin.com/in/sania-singh-812714224"
                  className="linkedin-icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
                  </svg>
                </a>
                <a href="https://github.com/saniasingh" className="github-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src={sania}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-me-section about-me-inside py-5" id="about-me">
        <div className="d-flex flex-column">
          <span className="about-me-text">About Me</span>
          <span className="about-me-sub">Why Choose Me?</span>

          <div className="row justify-content-center description my-5">
            <div className="d-flex align-items-center col-sm-12 col-lg-6 justify-content-center">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_sjtjaukf.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex col-md-6 py-5 flex-column">
              <sapn className="some-text-abt-me">
                Frontend developer (fresher) also have backend developing
                knowledge. Looking forward to work with outmost efficiency.
                Strong professional with a problem solving attitude.
              </sapn>
              <span className="few-highlights">
                <span className="few-text">Here are my few highlights.</span>
                <span className="few-lists">
                  <ul>
                    <li>Full Stack Web Development</li>
                    <li>Interactive Front end as per the design</li>
                    <li>NoeJS, Express, MongoDB (All backend Technologies)</li>
                    <li>ReactJS expertise</li>
                    <li>DOM Manipulation</li>
                    <li>MySQL</li>
                    <li>JSON</li>
                    <li>Application Programming Interfaces (APIs)</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-section" id="projects">
        <h2 className="project-h2"> My Projects</h2>
        <div className="project-container">
          <div className="project-card">
            <img
              className="project-image"
              src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-shape-candies-collection-png-image_3727417.jpg"
              alt="Project One Image"
            />
            <h3>Candy Crush Game</h3>
            <p className="subtext">
              I made this game using ReactJS. This was a fun project which
              required lots of logical approaches.
            </p>
            <hr></hr>
            <p className="subtext">
              {" "}
              <a
                className="gitlink"
                href="https://github.com/saniasingh/candy-crush-Reactjs-.git"
              >
                Project view here
              </a>
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-image"
              src="https://media.istockphoto.com/photos/tic-tac-toe-game-3d-rendering-picture-id1192094830?k=20&m=1192094830&s=612x612&w=0&h=jDflK0ZWErvhHqPrxGEkxkHalap_XANJ-gmlKw3S9hU="
              alt="Project One Image"
            />
            <h3>Tic-tac-toe Game</h3>
            <p className="subtext">
              I created this game with ReactJS. It was quite intresting to
              create this project work.
            </p>
            <hr></hr>
            <p className="subtext">
              {" "}
              <a
                className="gitlink"
                href="https://github.com/saniasingh/tik-tac-toe-reactjs.git"
              >
                Project view here
              </a>
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-image"
              src="https://thumbs.dreamstime.com/b/to-do-list-to-do-list-written-notepad-pen-cup-coffee-flower-top-wooden-table-102106171.jpg"
              alt="Project One Image"
            />
            <h3>To-do List </h3>
            <p className="subtext">
              I created this project in the beginning of my learning. It was
              quite challenging and intresting at the same time.
            </p>
            <hr></hr>
            <p className="subtext">
              <a
                className="gitlink"
                href="https://github.com/saniasingh/todolistv1.git"
              >
                Project view here
              </a>{" "}
            </p>
          </div>
          <div className="project-card">
            <img
              className="project-image"
              src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
              alt="Project One Image"
            />
            <h3>My Work</h3>
            <p className="subtext">
              I have uploaded more than 20+ such projects on my Github profile.
              Feel free to check out my work.
            </p>
            <hr></hr>
            <p className="subtext">
              <a className="gitlink" href="https://github.com/saniasingh">
                Projects view here
              </a>{" "}
            </p>
          </div>
        </div>
      </div>

      <section className="contact-me" id="contact-me">
        <div className="content">
          <h2>Contact Me</h2>

          <div className="contact-container">
            <div className="contactInfo">
              <div className="box">
                <div className="icon"></div>
                <div className="text">
                  <h3>
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" />
                    </svg>
                  </h3>
                  <p>Salt Lake, Bidhan Nagar, Kolkata 700102, West Bengal</p>
                </div>
              </div>

              <div className="box">
                <div className="icon"></div>
                <div className="text">
                  <h3>
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                    </svg>
                  </h3>
                  <p>
                    <a href="mailto:saniasingh4in@gmail.com" className="email">
                      saniasingh4In@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="box">
                <div className="icon"></div>
                <div className="text">
                  <h3>
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z" />
                    </svg>
                  </h3>
                  <p>
                    <a
                      href="https://wa.me/6203799397?text=Hello%2C%20I%20would%20like%20to%20talk%20about%20a%20project.%20"
                      className="phone"
                    >
                      +91 62037 99397
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="contact-form"
              action="saniasingh4in@gmail.com"
              method="POST"
            >
              <form className="form" onSubmit={sendEmail} ref={form}>
                <h3>Send Messege : </h3>

                <div className="form-detail">
                  <div className="inputBox">
                    <label>
                      <span className="inputInfo">Name : </span>
                      <input type="text" name="to_name" required="required" />
                    </label>
                  </div>

                  <div className="inputBox">
                    <label>
                      <span className="inputInfo">Email :</span>
                      <input
                        type="email"
                        name="from_name"
                        required="required"
                      />
                    </label>
                  </div>

                  <div className="inputBox">
                    <label>
                      <span className="inputInfo">Messege :</span>
                      <textarea name="message" required="required"></textarea>
                    </label>
                  </div>

                  <div className="inputBox">
                    <label>
                      <input type="submit" name="" value="send" />
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}

export default App;
